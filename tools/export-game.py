#!/usr/bin/env python3
"""Extract display timelines and source provenance; no Flash runtime is shipped."""
import argparse, hashlib, json, os, re, shutil, subprocess
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
p = argparse.ArgumentParser()
p.add_argument('--xml', default=str(ROOT/'.tools/extracted/game.xml'))
p.add_argument('--scripts', default=str(ROOT/'.tools/extracted/scripts'))
p.add_argument('--texts', default=str(ROOT/'.tools/extracted/texts'))
args = p.parse_args()
xml = Path(args.xml)
if not xml.exists():
    jar = os.environ.get('FFDEC_JAR', str(ROOT / '.tools/ffdec/ffdec.jar'))
    xml.parent.mkdir(parents=True, exist_ok=True)
    java=['java','-Djava.awt.headless=true',f'-Duser.home={ROOT/".tools/java-home"}','-jar',jar]
    subprocess.run(java+['-swf2xml', str(ROOT/'temple-guardian.swf'), str(xml)], check=True)
    subprocess.run(java+['-config', 'autoDeobfuscate=true', '-export', 'script,text', str(Path(args.scripts).parent), str(ROOT/'temple-guardian.swf')], check=True)
r = ET.parse(xml).getroot()
out = ROOT/'reference'
out.mkdir(exist_ok=True)
for kind, src in [('scripts',args.scripts), ('texts',args.texts)]:
    shutil.copytree(src, out/kind, dirs_exist_ok=True)
files = sorted((out/'scripts').rglob('*.as'))
script_ids = {str(f.relative_to(out/'scripts')): i for i,f in enumerate(files)}
sources = [{'path':str(f.relative_to(out/'scripts')), 'sha256':hashlib.sha256(f.read_bytes()).hexdigest(), 'code':f.read_text()} for f in files]
(out/'sources.json').write_text(json.dumps(sources,ensure_ascii=False),encoding='utf8')
sprite_paths={}
for folder in (out/'scripts').iterdir():
    match=re.fullmatch(r'DefineSprite_(\d+)(?:_.*)?',folder.name)
    if folder.is_dir() and match:
        cid=int(match[1])
        if cid in sprite_paths:raise ValueError(f'Duplicate sprite script directory: {cid}')
        sprite_paths[cid]=folder.name

def yes(el,k): return el is not None and el.get(k)=='true'
def num(el,k,d=0): return float(el.get(k,d)) if el is not None else d
def rect(el):
    if el is None:return [0,0,0,0]
    return [num(el,'Xmin')/20,num(el,'Ymin')/20,(num(el,'Xmax')-num(el,'Xmin'))/20,(num(el,'Ymax')-num(el,'Ymin'))/20]
def matrix(el):return [num(el,'scaleX',1),num(el,'rotateSkew0'),num(el,'rotateSkew1'),num(el,'scaleY',1),num(el,'translateX')/20,num(el,'translateY')/20]
def color(el):
    if el is None:return None
    return [num(el,c+'MultTerm',256)/256 for c in ['red','green','blue','alpha']] + [num(el,c+'AddTerm') for c in ['red','green','blue','alpha']]
def scripts(path):
    return [script_ids[str(f.relative_to(out/'scripts'))] for f in sorted((out/'scripts'/path).glob('DoAction*.as'),key=lambda f:1 if f.stem=='DoAction' else int(f.stem.split('_')[-1]))]
def events(path):
    result={}
    for f in sorted((out/'scripts'/path).glob('*.as')):
        match=re.search(r'on\((.*?)\)', f.name)
        if match:
            for ev in match[1].split(', '):result.setdefault(ev,[]).append(script_ids[str(f.relative_to(out/'scripts'))])
    return result
defs={}; symbols={}; sounds={}; duplicates=[]
def placement(t):
    # SWF timeline depths are biased by 16384 relative to AS2 attachMovie depths.
    d={'depth':int(t.get('depth','0'))-16384, 'move':yes(t,'placeFlagMove')}
    for flag,attr,key in [('placeFlagHasCharacter','characterId','id'),('placeFlagHasName','name','name'),('placeFlagHasRatio','ratio','ratio'),('placeFlagHasClipDepth','clipDepth','clipDepth')]:
        if yes(t,flag): d[key]=t.get(attr,'') if key=='name' else int(t.get(attr,'0'))-(16384 if key=='clipDepth' else 0)
    if t.find('matrix') is not None:d['matrix']=matrix(t.find('matrix'))
    if t.find('colorTransform') is not None:d['color']=color(t.find('colorTransform'))
    if t.find('surfaceFilterList') is not None:
        d['filters']=[{**f.attrib, 'color':next((f.find(k).attrib for k in ['dropShadowColor','glowColor','color'] if f.find(k) is not None),{})} for f in t.find('surfaceFilterList')]
    return d
def timeline(tags,path):
    frames=[];frame={'ops':[],'scripts':[],'sounds':[]};labels={};n=1
    for t in tags:
        ty=t.get('type','')
        if ty.startswith('Define'):
            define(t)
        elif ty=='ExportAssetsTag':
            for entry in t.find('tags') or []:
                pass
            ids=[int(v.text) for v in t.find('tags')] if t.find('tags') is not None else []
            names=[v.text for v in t.find('names')] if t.find('names') is not None else []
            symbols.update(dict(zip(names,ids)))
        elif ty in ['PlaceObject2Tag','PlaceObject3Tag']:
            op=placement(t)
            ev=events(str(Path(path)/f'frame_{n}'/f'{ty[:-3]}_{t.get("characterId","-1")}_{t.get("depth")}'))
            if ev:op['events']=ev
            frame['ops'].append(op)
        elif ty in ['RemoveObjectTag','RemoveObject2Tag']:frame['ops'].append({'depth':int(t.get('depth'))-16384, 'remove':True})
        elif ty=='FrameLabelTag':labels[t.get('name')]=n
        elif ty=='StartSoundTag':frame['sounds'].append({'id':int(t.get('soundId')), 'info':t.find('soundInfo').attrib})
        elif ty=='ShowFrameTag':
            frame['scripts']=scripts(str(Path(path)/f'frame_{n}'))
            frames.append(frame);frame={'ops':[],'scripts':[],'sounds':[]};n+=1
    return {'frames':frames, 'labels':labels}
def define(t):
    ty=t.get('type',''); cid=next((int(t.get(k)) for k in ['spriteId','shapeId','buttonId','characterID','characterId','soundId','fontID','fontId'] if t.get(k) is not None),None)
    if cid is None:return
    if cid==0:duplicates.append(ty);return
    if ty=='DefineSpriteTag':
        path=sprite_paths.get(cid,f'DefineSprite_{cid}')
        defs[str(cid)]={'kind':'clip',**timeline(t.find('subTags'),path)}
    elif ty=='DefineButton2Tag':
        states={k:[] for k in ['up','over','down','hit']}
        for b in t.find('characters'):
            d={'id':int(b.get('characterId')),'depth':int(b.get('placeDepth'))-16384,'matrix':matrix(b.find('placeMatrix')),'color':color(b.find('colorTransform'))}
            for k in states:
                if yes(b,'buttonState'+('HitTest' if k=='hit' else k.title())):states[k].append(d)
        defs[str(cid)]={'kind':'button','states':states,'events':events(f'DefineButton2_{cid}')}
    elif ty=='DefineEditTextTag':
        c=t.find('textColor');rgb=int(num(c,'red'))*65536+int(num(c,'green'))*256+int(num(c,'blue'))
        defs[str(cid)]={'kind':'edit','bounds':rect(t.find('bounds')),'size':int(t.get('fontHeight','240'))/20,'color':rgb,'align':int(t.get('align','0')),'variable':t.get('variableName',''),'html':yes(t,'html'),'multiline':yes(t,'multiline'),'wrap':yes(t,'wordWrap'),'readOnly':yes(t,'readOnly'),'maxLength':int(t.get('maxLength','0')),'text':t.get('initialText',''),'leading':num(t,'leading')/20}
    elif ty.startswith('DefineSound'):
        sounds[str(cid)]={**t.attrib};sounds[str(cid)].pop('soundData',None)
    elif 'Font' not in ty:
        bounds=next((t.find(k) for k in ['shapeBounds','startBounds','textBounds','bounds'] if t.find(k) is not None),None)
        defs[str(cid)]={'kind':'morph' if 'Morph' in ty else 'image','bounds':rect(bounds)}
rootTimeline=timeline(r.find('tags'),'')
data={'width':650,'height':500,'fps':28,'root':rootTimeline,'defs':defs,'symbols':symbols,'soundDefinitions':sounds,'source':{'sha256':hashlib.sha256((ROOT/'temple-guardian.swf').read_bytes()).hexdigest(),'scriptCount':len(sources),'duplicateZeroTags':duplicates}}
data['upgradeSpeeds']={}
for cid,path in sprite_paths.items():
    definition=defs.get(str(cid),{})
    levels={}
    for label,frame in definition.get('labels',{}).items():
        if not re.fullmatch(r'a\d+',label):continue
        code='\n'.join(sources[i]['code'] for i in definition['frames'][frame-1]['scripts'])
        if not re.search(r'(?:this|_parent)\.Level\s*=',code):continue
        match=re.search(r'(?:this|_parent)\.JianSuDu\s*=\s*(\d+(?:\.\d+)?)\s*;',code)
        if match:levels[label[1:]]=float(match[1])
    if levels:data['upgradeSpeeds'][str(cid)]=levels
data['sections']={key:re.sub(r'\n{2,}','\n',(out/'texts'/f'{cid}.txt').read_text().replace('--- RECORDSEPARATOR ---','')).strip() for key,cid in [('story',145),('instructions',147),('about',150)]}
(ROOT/'public').mkdir(exist_ok=True)
(ROOT/'public/game-data.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')),encoding='utf8')
(ROOT/'docs').mkdir(exist_ok=True)
(ROOT/'docs/script-map.json').write_text(json.dumps([{k:v for k,v in s.items() if k!='code'} for s in sources],ensure_ascii=False,indent=2),encoding='utf8')
print(f'{len(defs)} definitions, {len(sources)} scripts, {len(symbols)} exported symbols')
