#!/usr/bin/env python3
"""Export authored vector collision outlines at every used morph ratio."""
import argparse,json,os,subprocess,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--ffdec',default=os.environ.get('FFDEC_JAR',str(ROOT/'.tools/ffdec/ffdec.jar')))
a=p.parse_args()
data=json.loads((ROOT/'public/game-data.json').read_text())
ratios={int(k):{0} for k,d in data['defs'].items() if d['kind']=='morph'}
for definition in [data['root'],*data['defs'].values()]:
 depths={}
 for frame in definition.get('frames',[]):
  for op in frame['ops']:
   if op.get('remove'):depths.pop(op['depth'],None);continue
   if 'id' in op:depths[op['depth']]=op['id']
   character=depths.get(op['depth'])
   if character in ratios:ratios[character].add(op.get('ratio',0))
jar=Path(a.ffdec).resolve();cp=f'{jar}:{jar.parent}/lib/*'
with tempfile.TemporaryDirectory(prefix='temple-hit-') as directory:
 work=Path(directory);ratiofile=work/'ratios.txt';outfile=work/'outlines.json'
 ratiofile.write_text('\n'.join(' '.join(map(str,[k,*sorted(v)]))for k,v in sorted(ratios.items())))
 subprocess.run(['javac','-cp',cp,'-d',directory,str(ROOT/'tools/LeafHit.java')],check=True)
 subprocess.run(['java','-Djava.awt.headless=true',f'-Duser.home={work}/home','-cp',f'{directory}:{cp}','LeafHit',str(ROOT/'temple-guardian.swf'),str(ratiofile),str(outfile)],check=True)
 data['hitShapes']=json.loads(outfile.read_text())
(ROOT/'public/game-data.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
print(f"Vector hit outlines: {len(data['hitShapes'])} leaves, {sum(len(v) for v in data['hitShapes'].values())} authored ratio records")
