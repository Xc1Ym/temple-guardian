#!/usr/bin/env python3
"""Build the bundled Chinese WOFF2 and a development-only Ruffle fontSources SWF.

Reproduction:
  python3 -m pip install fonttools brotli
  python3 tools/build-font-reference.py --ffdec /path/to/ffdec.jar

The input is the official Noto Sans CJK SC Regular OTF, retained in
public/assets/fonts/source together with its original license. The native game
uses only WOFF2. Songti-reference.swf is a font-only SWF, never the game runtime.
Use fontSources: ['/assets/fonts/Songti-reference.swf'] in the reference player.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
import tempfile
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT_SOURCE = "https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf"
LICENSE_SOURCE = "https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/LICENSE"
UI_TEXT = """
神殿守护者 原生网页版 中文 字体加载失败 重试 正在加载 设置 音乐 音效 开关
开始新游戏 回合制 限时制 耐久制 追击 本机排行榜 备份 检验 中文字体
开始游戏 继续游戏 暂停 返回 主菜单 退出 确认 取消 建造 升级 出售 属性 研究
经典模式 生存模式 限时模式 初章 终章 胜利 失败 关卡 波次 成绩 排行榜 本机
地图 编辑器 保存 读取 删除 预览 校验 入口 出口 地面 草地 道路 水域 建筑 障碍
导入 导出 JSON 文件 无效 数据 校验失败 保留 已保存 本地存储不可用 保存失败
存档 槽位 清空 重置 自定义 地图 地图一 地图二 地图三 地图四 地图五
手机 横屏 竖屏 点击 设施 点击格子 确认建造 拖动 缩放 双击 升级出售
敌人 名称 生命 血量 速度 护甲 抗性 攻击 范围 频率 冰冻 火焰 陷阱 神电
剧情 故事 说明 帮助 作者 署名 关于 音量 方向 选择 快捷键 耐久 奖励 神殿
离线 本站 网络 慢速 加载中 资源 正在恢复 按钮 按下 难度 普通 简单 困难
第关剩余金钱分数时间生命秒分钟初章已解锁终章已解锁最终胜利重新开始战斗
0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
，。！？；：、（）【】《》“”‘’…—·×÷±≤≥←↑→↓✓✕％＋－＝￥℃
"""

JAVA_SOURCE = r'''
import java.io.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.awt.Font;
import java.util.ArrayList;
import com.jpexs.decompiler.flash.*;
import com.jpexs.decompiler.flash.tags.*;
import com.jpexs.decompiler.flash.types.*;
public class BuildFontReference {
 public static void main(String[] args) throws Exception {
  Font source=Font.createFont(Font.TRUETYPE_FONT,new File(args[0]));
  String characters=Files.readString(Path.of(args[1]),StandardCharsets.UTF_8);
  SWF swf=new SWF(); swf.version=8; swf.frameRate=28; swf.frameCount=1;
  swf.displayRect=new RECT(0,20,0,20); swf.compression=SWFCompression.ZLIB;
  DefineFont3Tag font=new DefineFont3Tag(swf);
  font.fontID=1; font.fontName="宋体"; font.languageCode=new LANGCODE(4);
  font.fontFlagsHasLayout=true; font.fontFlagsWideCodes=true; font.fontFlagsWideOffsets=true;
  font.fontBoundsTable=new ArrayList<>(); font.fontAdvanceTable=new ArrayList<>();
  font.fontKerningTable=new ArrayList<>();
  int count=0;
  for(int i=0;i<characters.length();i++){
   char c=characters.charAt(i);
   if(source.canDisplay(c)){
    if(!font.addCharacter(c,source))throw new IOException("Failed glyph U+"+Integer.toHexString(c));
    count++;
   }else throw new IOException("Font cannot display U+"+Integer.toHexString(c));
  }
  font.setAdvanceValues(source);
  font.fontAscent=Integer.parseInt(args[3]);
  font.fontDescent=Integer.parseInt(args[4]);
  font.fontLeading=0;
  swf.addTag(font);
  DefineFontNameTag name=new DefineFontNameTag(swf); name.fontId=1;
  name.fontName="宋体"; name.fontCopyright="Noto Sans CJK SC, SIL Open Font License 1.1";
  swf.addTag(name); swf.addTag(new ShowFrameTag(swf)); swf.hasEndTag=true;
  swf.saveTo(new FileOutputStream(args[2]));
  SWF check=new SWF(new FileInputStream(args[2]),false);
  if(check.getFont(1).getCharacterCount()!=count)throw new IOException("Font reference glyph count mismatch");
  System.out.println("DefineFont3 宋体: "+count+" embedded glyphs");
 }
}
'''


def run(cmd: list[str], log: Path) -> None:
    with log.open("w", encoding="utf-8") as stream:
        result = subprocess.run(cmd, stdout=stream, stderr=subprocess.STDOUT)
    if result.returncode:
        raise RuntimeError(log.read_text(encoding="utf-8")[-10000:])


def read_tree(path: Path) -> str:
    if path.is_file():
        return path.read_text(encoding="utf-8")
    if not path.exists():
        return ""
    return "\n".join(p.read_text(encoding="utf-8") for p in sorted(path.rglob("*")) if p.is_file() and p.suffix in (".as", ".txt", ".ts", ".tsx", ".json", ".html", ".css", ".mjs"))


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--ffdec", required=True, type=Path)
    parser.add_argument("--source-font", type=Path)
    parser.add_argument("--license", type=Path)
    parser.add_argument("--scripts", type=Path)
    parser.add_argument("--texts", type=Path)
    parser.add_argument("--extra-text", action="append", type=Path, default=[])
    args = parser.parse_args()
    if args.scripts is None and (ROOT / 'reference/scripts').exists():
        args.scripts = ROOT / 'reference/scripts'
    if args.texts is None and (ROOT / 'reference/texts').exists():
        args.texts = ROOT / 'reference/texts'
    assets = ROOT / "public/assets"
    fonts = assets / "fonts"
    sources = fonts / "source"
    sources.mkdir(parents=True, exist_ok=True)
    source = sources / "NotoSansCJKsc-Regular.otf"
    license_path = fonts / "OFL.txt"
    if args.source_font:
        source.write_bytes(args.source_font.read_bytes())
    elif not source.exists():
        urllib.request.urlretrieve(FONT_SOURCE, source)
    if args.license:
        license_path.write_bytes(args.license.read_bytes())
    elif not license_path.exists():
        urllib.request.urlretrieve(LICENSE_SOURCE, license_path)
    with tempfile.TemporaryDirectory(prefix="temple-font-") as work_name:
        work = Path(work_name)
        if not args.scripts or not args.texts:
            java = ["java", "-Djava.awt.headless=true", f"-Duser.home={work / 'java-home'}", "-jar", str(args.ffdec)]
            run(java + ["-config", "autoDeobfuscate=true", "-export", "script,text", str(work / "original"), str(ROOT / "temple-guardian.swf")], work / "export.log")
        original = read_tree(args.scripts or work / "original/scripts") + read_tree(args.texts or work / "original/texts")
        app = read_tree(ROOT / "src") + read_tree(ROOT / "index.html") + "".join(read_tree(p) for p in args.extra_text)
        original_chars = {c for c in original if c.isprintable()}
        desired = original_chars | {c for c in (UI_TEXT + app) if c.isprintable()} | {chr(i) for i in range(32, 127)}
        font = TTFont(source)
        cmap = font.getBestCmap()
        # Source code whitespace/BOM is not a visible game character.
        desired -= {"\ufeff", "\u200b"}
        missing_original = sorted(c for c in original_chars if ord(c) not in cmap and c not in {"\ufeff", "\u200b"})
        if missing_original:
            raise ValueError("Original visible characters absent from Noto: " + repr(missing_original))
        characters = "".join(sorted(c for c in desired if ord(c) in cmap and ord(c) <= 65535))
        missing_ui = sorted(c for c in desired if ord(c) not in cmap)
        (fonts / "characters.txt").write_text(characters, encoding="utf-8")
        upem = font["head"].unitsPerEm
        ascent = round(font["hhea"].ascent * 20480 / upem)
        descent = round(abs(font["hhea"].descent) * 20480 / upem)
        options = subset.Options()
        options.flavor = "woff2"
        options.layout_features = ["*"]
        subsetter = subset.Subsetter(options=options)
        subsetter.populate(text=characters)
        subsetter.subset(font)
        font.flavor = "woff2"
        target = fonts / "temple-cjk.woff2"
        font.save(target)
        with TTFont(target) as check:
            missing_subset = sorted(c for c in characters if ord(c) not in check.getBestCmap())
            if missing_subset:
                raise ValueError("Subset character coverage mismatch")
        (work / "BuildFontReference.java").write_text(JAVA_SOURCE, encoding="utf-8")
        run(["javac", "-encoding", "UTF-8", "-cp", str(args.ffdec), str(work / "BuildFontReference.java")], work / "javac.log")
        run(["java", "-Djava.awt.headless=true", f"-Duser.home={work / 'java-home'}", "-cp", f"{work}:{args.ffdec}", "BuildFontReference", str(source), str(fonts / "characters.txt"), str(fonts / "Songti-reference.swf"), str(ascent), str(descent)], work / "font.log")
        info = {
            "url": "/assets/fonts/temple-cjk.woff2", "family": "Noto Sans CJK SC",
            "subsetSha256": hashlib.sha256(target.read_bytes()).hexdigest(),
            "characters": characters, "characterCount": len(characters),
            "originalChineseCharacters": len({c for c in original_chars if "\u4e00" <= c <= "\u9fff"}),
            "originalMissingCharacters": missing_original, "subsetMissingCharacters": missing_subset,
            "unavailableOptionalUiSymbols": missing_ui,
            "sourceUrl": FONT_SOURCE, "sourceSha256": hashlib.sha256(source.read_bytes()).hexdigest(),
            "licenseUrl": "/assets/fonts/OFL.txt", "referenceUrl": "/assets/fonts/Songti-reference.swf",
            "referenceFontName": "宋体", "referenceFontTag": "DefineFont3",
        }
        manifest_path = assets / "manifest.json"
        manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {"images": {}, "sounds": {}}
        manifest["font"] = info
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        report_path = ROOT / "docs/assets-report.json"
        report = json.loads(report_path.read_text()) if report_path.exists() else {}
        report["font"] = info
        report_path.parent.mkdir(exist_ok=True)
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(json.dumps({"woff2Bytes": target.stat().st_size, "referenceBytes": (fonts / "Songti-reference.swf").stat().st_size, "characters": len(characters), "originalChineseCharacters": info["originalChineseCharacters"], "missingOriginal": missing_original, "unavailableOptionalUiSymbols": missing_ui}, ensure_ascii=False))


if __name__ == "__main__":
    main()
