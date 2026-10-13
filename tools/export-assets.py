#!/usr/bin/env python3
"""Reproduce the native leaf resources from the original SWF, never flatten sprites.

Usage:
  python3 tools/export-assets.py --ffdec /path/to/ffdec.jar
  python3 tools/export-assets.py --ffdec /path/to/ffdec.jar --xml /path/to/original.xml

Requires Java 17+, javac and Pillow. JPEXS 26.3.0 is the verified version.
Sprite/button placement, filters and animation remain in the source timeline;
this exporter supplies only shape/static-text leaves and exact morph paths.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]

TEXT_RENDERER = r'''
import java.io.*;
import javax.imageio.ImageIO;
import com.jpexs.decompiler.flash.*;
import com.jpexs.decompiler.flash.tags.base.*;
import com.jpexs.decompiler.flash.types.*;
import com.jpexs.decompiler.flash.exporters.commonshape.Matrix;
import com.jpexs.helpers.SerializableImage;
public class LeafText {
 public static void main(String[] args) throws Exception {
  SWF swf = new SWF(new FileInputStream(args[0]), false);
  File out = new File(args[1]); out.mkdirs();
  for (CharacterTag ch : swf.getCharacters(false).values()) {
   if (!(ch instanceof StaticTextTag) || ch.getCharacterId()==0) continue;
   StaticTextTag text=(StaticTextTag)ch; RECT r=text.getRect();
   SerializableImage image=new SerializableImage(
     Math.max(1,(int)Math.ceil(r.getWidth()/10.0)),
     Math.max(1,(int)Math.ceil(r.getHeight()/10.0)),SerializableImage.TYPE_INT_ARGB);
   image.fillTransparent();
   Matrix m=new Matrix(2,2,0,0,-r.Xmin*2,-r.Ymin*2);
   TextTag.staticTextToImage(swf,text.textRecords,text.getTextNum(),image,
     text.textMatrix,m,new CXFORMWITHALPHA(),0,0,0);
   ImageIO.write(image.getBufferedImage(),"png",new File(out,text.getCharacterId()+".png"));
  }
 }
}
'''


def run(cmd: list[str], log: Path) -> None:
    with log.open("w", encoding="utf-8") as stream:
        subprocess.run(cmd, stdout=stream, stderr=subprocess.STDOUT, check=True)


def cid(tag: ET.Element) -> int:
    for key in ("shapeId", "characterID", "characterId", "soundId", "spriteId", "buttonId", "fontID"):
        if key in tag.attrib:
            return int(tag.get(key, "0"))
    return 0


def rect(tag: ET.Element, name: str) -> dict[str, float]:
    r = tag.find(name)
    if r is None:
        raise ValueError(f"Missing {name} on character {cid(tag)}")
    return {key: int(r.get(key, "0")) / 20 for key in ("Xmin", "Xmax", "Ymin", "Ymax")}


def image_entry(path: Path, target: Path, bounds: dict[str, float]) -> dict:
    shutil.copyfile(path, target)
    with Image.open(target) as image:
        image.verify()
    with Image.open(target) as image:
        width, height = image.size
    return {
        "url": "/assets/" + target.relative_to(ROOT / "public/assets").as_posix(),
        "x": bounds["Xmin"], "y": bounds["Ymin"],
        "width": width / 2, "height": height / 2, "scale": 2,
    }


def build_morph_module(directory: Path, morph_tags: dict[int, ET.Element], target: Path) -> dict:
    helper = (directory / "canvas.js").read_text(encoding="utf-8")
    # Only mathematical/path/color helpers are needed. Drop exported HTML demo
    # timers, drag UI, filters and dynamic symbol lookup (which uses window).
    math_helpers = helper[helper.index("function concatMatrix"):helper.index("var placeRaw")]
    path_helpers = helper[helper.index("function drawMorphPath"):helper.index("function drawPath")]
    functions: list[str] = []
    entries: dict[str, dict] = {}
    for character_id, tag in sorted(morph_tags.items()):
        html = (directory / f"{character_id}.html").read_text(encoding="utf-8")
        start = html.index(f"function morphshape{character_id}(")
        end = html.index("var originalWidth=", start)
        functions.append(html[start:end].strip())
        a, b = rect(tag, "startBounds"), rect(tag, "endBounds")
        x, y = min(a["Xmin"], b["Xmin"]), min(a["Ymin"], b["Ymin"])
        entries[str(character_id)] = {
            "url": "/assets/morphs/morphs.js", "x": x, "y": y,
            "width": max(a["Xmax"], b["Xmax"]) - x,
            "height": max(a["Ymax"], b["Ymax"]) - y,
        }
    bounds = {key: {k: v for k, v in val.items() if k != "url"} for key, val in entries.items()}
    # cxform.applyToImage is unused by these leaves but needs a closure binding.
    prelude = "// Generated from original morph control points by JPEXS 26.3.0.\n"
    prelude += "const createCanvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};\n"
    prelude += "const tocolor=c=>`rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;\n"
    registry = ",".join(f"{i}:morphshape{i}" for i in sorted(morph_tags))
    api = f"""
export const morphBounds={json.dumps(bounds, ensure_ascii=False)};
export const rawMorphs={{{registry}}};
const identity=new cxform(0,0,0,0,255,255,255,255);
/** Paint an exact ratio (0..65535), in an image whose origin is the union bounds. */
export function drawMorph(ctx,id,ratio,scale=2,color=identity){{
 const bounds=morphBounds[id];
 if(!bounds)throw new Error(`Unknown morph ${{id}}`);
 if(!ctx._matrix)enhanceContext(ctx);
 ctx.save();
 ctx.setTransform(scale/20,0,0,scale/20,-bounds.x*scale,-bounds.y*scale);
 rawMorphs[id](ctx,color,0,Math.max(0,Math.min(65535,Math.round(ratio))),0);
 ctx.restore();
}}
/** Rasterize at any exact authored or dynamically supplied ratio; no cross-fade. */
export function createMorphCanvas(id,ratio,scale=2,color=identity){{
 const bounds=morphBounds[id];
 if(!bounds)throw new Error(`Unknown morph ${{id}}`);
 const canvas=createCanvas(Math.max(1,Math.ceil(bounds.width*scale)),Math.max(1,Math.ceil(bounds.height*scale)));
 drawMorph(canvas.getContext('2d'),id,ratio,scale,color);
 return canvas;
}}
"""
    target.write_text(prelude + math_helpers + path_helpers + "\n".join(functions) + api, encoding="utf-8")
    return entries


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--ffdec", type=Path, required=True)
    parser.add_argument("--swf", type=Path, default=ROOT / "temple-guardian.swf")
    parser.add_argument("--xml", type=Path)
    args = parser.parse_args()
    assets = ROOT / "public/assets"
    for directory in ("images", "sounds", "morphs"):
        (assets / directory).mkdir(parents=True, exist_ok=True)
    (ROOT / "docs").mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="temple-assets-") as work_name:
        work = Path(work_name)
        java = ["java", "-Djava.awt.headless=true", f"-Duser.home={work / 'java-home'}", "-jar", str(args.ffdec)]
        xml_path = args.xml or work / "original.xml"
        if not args.xml:
            run(java + ["-swf2xml", str(args.swf), str(xml_path)], work / "xml.log")
        root = ET.parse(xml_path).getroot()
        all_tags = list(root.iter("item"))
        shapes = {cid(t): t for t in all_tags if t.get("type", "").startswith("DefineShape") and cid(t) > 0}
        texts = {cid(t): t for t in all_tags if t.get("type") in ("DefineTextTag", "DefineText2Tag") and cid(t) > 0}
        morphs = {cid(t): t for t in all_tags if t.get("type", "").startswith("DefineMorph") and cid(t) > 0}
        sounds = {cid(t): t for t in all_tags if t.get("type") == "DefineSoundTag" and cid(t) > 0}
        symbols: dict[int, list[str]] = {}
        for tag in all_tags:
            if tag.get("type") == "ExportAssetsTag":
                for n, name in zip(tag.findall("tags/item"), tag.findall("names/item")):
                    symbols.setdefault(int(n.text or "0"), []).append(name.text or "")
        run(java + ["-zoom", "2", "-ignorebackground", "-format", "shape:png,morphshape:png_start_end,sound:mp3_wav", "-export", "shape,morphshape,sound", str(work / "leaves"), str(args.swf)], work / "leaves.log")
        run(java + ["-format", "morphshape:canvas", "-export", "morphshape", str(work / "morphs"), str(args.swf)], work / "morphs.log")
        (work / "LeafText.java").write_text(TEXT_RENDERER, encoding="utf-8")
        run(["javac", "-cp", str(args.ffdec), str(work / "LeafText.java")], work / "javac.log")
        run(["java", "-Djava.awt.headless=true", f"-Duser.home={work / 'java-home'}", "-cp", f"{work}:{args.ffdec}", "LeafText", str(args.swf), str(work / "texts")], work / "texts.log")
        previous = json.loads((assets / "manifest.json").read_text()) if (assets / "manifest.json").exists() else {}
        manifest: dict = {"images": {}, "sounds": {}, "soundIds": {}, "symbols": {str(k): v for k, v in symbols.items()}}
        if "font" in previous:
            manifest["font"] = previous["font"]
        for character_id, tag in sorted(shapes.items()):
            source = work / "leaves/shapes" / f"{character_id}.png"
            if not source.exists():
                source = next((work / "leaves/shapes").glob(f"{character_id}_*.png"), source)
            manifest["images"][str(character_id)] = image_entry(source, assets / "images" / f"{character_id}.png", rect(tag, "shapeBounds"))
        for character_id, tag in sorted(texts.items()):
            manifest["images"][str(character_id)] = image_entry(work / "texts" / f"{character_id}.png", assets / "images" / f"{character_id}.png", rect(tag, "textBounds"))
        for character_id, tag in sorted(morphs.items()):
            source = work / "leaves/morphshapes" / f"{character_id}.start.png"
            bounds = rect(tag, "startBounds")
            manifest["images"][str(character_id)] = image_entry(source, assets / "images" / f"{character_id}.png", bounds)
            image_entry(work / "leaves/morphshapes" / f"{character_id}.end.png", assets / "images" / f"{character_id}.end.png", rect(tag, "endBounds"))
        manifest["morphs"] = build_morph_module(work / "morphs", morphs, assets / "morphs/morphs.js")
        for character_id in sorted(sounds):
            files = [p for p in (work / "leaves/sounds").iterdir() if re.match(rf"^{character_id}(?:_|\.)", p.name)]
            if len(files) != 1:
                raise ValueError(f"Sound {character_id} has {len(files)} exported files")
            target = assets / "sounds" / f"{character_id}{files[0].suffix}"
            shutil.copyfile(files[0], target)
            url = "/assets/sounds/" + target.name
            manifest["soundIds"][str(character_id)] = url
            for symbol in symbols.get(character_id, []):
                manifest["sounds"][symbol] = url
        (assets / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        # Duplicate ID 0 is deliberately excluded only after inventorying it.
        zero_tags = Counter(t.get("type") for t in all_tags if t.get("type", "").startswith("Define") and any(key in t.attrib for key in ("characterID", "characterId", "shapeId", "spriteId", "buttonId", "soundId", "fontID")) and cid(t) == 0)
        placements = [t for t in all_tags if t.get("type", "").startswith("PlaceObject") and t.get("placeFlagHasCharacter") == "true"]
        zero_placements = sum(int(t.get("characterId", "0")) == 0 for t in placements)
        bitmaps = {cid(t) for t in all_tags if t.get("type", "").startswith("DefineBits")}
        bitmap_refs = {int(t.get("bitmapId")) for t in all_tags if "bitmapId" in t.attrib}
        missing_bitmaps = sorted(bitmap_refs - bitmaps - {65535})
        if missing_bitmaps:
            raise ValueError(f"Missing bitmap references: {missing_bitmaps}")
        report = {
            "source": args.swf.name,
            "sourceSha256": hashlib.sha256(args.swf.read_bytes()).hexdigest(),
            "exporter": "JPEXS Free Flash Decompiler 26.3.0",
            "frameRate": float(root.get("frameRate", "28")),
            "shapes": len(shapes), "staticTexts": len(texts), "morphs": len(morphs),
            "images": len(manifest["images"]), "sounds": len(sounds),
            "namedSounds": len(manifest["sounds"]), "spriteFlattening": False,
            "morphRendering": "Exact original control-point, color, gradient and stroke interpolation, ratio/65535",
            "imageCoordinates": "Logical pixels relative to original character origin; 20 SWF twips = 1 pixel. PNG dimensions are actual pixels / 2.",
            "zeroIdDefinitions": dict(zero_tags), "zeroIdPlacements": zero_placements,
            "missingBitmapReferences": missing_bitmaps,
            "bitmap65535": "Original transparent sentinel; not an omitted resource",
            "font": previous.get("font"),
        }
        (ROOT / "docs/assets-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(json.dumps({key: report[key] for key in ("shapes", "staticTexts", "morphs", "images", "sounds", "namedSounds", "zeroIdPlacements")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
