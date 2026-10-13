#!/usr/bin/env python3
"""Validate all runtime URLs, original glyph coverage and executable equivalence."""
from pathlib import Path
import hashlib,json,struct
ROOT=Path(__file__).resolve().parent.parent
m=json.loads((ROOT/'public/assets/manifest.json').read_text())
d=json.loads((ROOT/'public/game-data.json').read_text())
swf=(ROOT/'temple-guardian.swf').read_bytes();exe=(ROOT/'temple-guardian.exe').read_bytes()
for filename,expected in json.loads((ROOT/'docs/original-files.json').read_text()).items():
 content=(ROOT/filename).read_bytes()
 assert len(content)==expected['bytes'] and hashlib.sha256(content).hexdigest()==expected['sha256'],'Original file changed: '+filename
assert swf in exe,'EXE embedded movie differs from SWF'
assert hashlib.sha256(swf).hexdigest()==d['source']['sha256'],'Original source changed'
assert d['source']['scriptCount']==368
assert len(d['symbols'])==115
assert set(d['hitShapes'])==set(m['images']),'Missing original vector hit outlines'
for leaf,ratios in d['hitShapes'].items():
 for ratio,shape in ratios.items():
  assert shape['winding'] in [0,1]
  if 'raw' in shape:
   for group in shape['raw']:
    for edge in group:assert len(edge) in [6,8] and edge[0] in [-1,0,1] and all(isinstance(v,(int,float)) for v in edge),leaf
  else:assert 'path' in shape,leaf
sources=json.loads((ROOT/'reference/sources.json').read_text())
referenced=set()
def collect(value):
 if isinstance(value,dict):
  referenced.update(value.get('scripts',[]))
  for ids in value.get('events',{}).values():referenced.update(ids)
  for item in value.values():collect(item)
 elif isinstance(value,list):
  for item in value:collect(item)
collect(d)
for index,source in enumerate(sources):
 assert hashlib.sha256((ROOT/'reference/scripts'/source['path']).read_bytes()).hexdigest()==source['sha256'],source['path']
 assert index in referenced or source['path'].startswith('DefineButton2_0/'),'Unmapped source script: '+source['path']
assert len(referenced)==367
for category in ['images','morphs']:
 for ident,a in m[category].items():
  p=ROOT/'public'/a['url'].lstrip('/');assert p.is_file(),p
  if category=='images':
   b=p.read_bytes();assert b[:8]==b'\x89PNG\r\n\x1a\n';w,h=struct.unpack_from('>II',b,16);assert abs(w-a['width']*2)<1 and abs(h-a['height']*2)<1,ident
for url in set(m['sounds'].values())|set(m['soundIds'].values())|{m['font']['url']}:
 assert (ROOT/'public'/url.lstrip('/')).is_file(),url
for url in m.get('icons',{}).values():assert (ROOT/'public'/url.lstrip('/')).is_file(),url
chars=set((ROOT/'public/assets/fonts/characters.txt').read_text())
required=set()
for folder in [ROOT/'reference/scripts',ROOT/'reference/texts',ROOT/'src']:
 for p in folder.rglob('*'):
  if p.is_file() and p.suffix in ['.as','.txt','.ts','.js']:
   required.update(c for c in p.read_text() if 0x3400<=ord(c)<=0x9fff)
missing=required-chars;assert not missing,'Missing Chinese glyphs: '+''.join(sorted(missing))
assert not m['font']['originalMissingCharacters']
print(json.dumps({'source_sha256':d['source']['sha256'],'exe_embedded_same':True,'scripts':368,'mapped_active_scripts':len(referenced),'images':len(m['images']),'morphs':len(m['morphs']),'vector_hit_leaves':len(d['hitShapes']),'vector_hit_ratios':sum(len(r) for r in d['hitShapes'].values()),'audio':len(m['soundIds']),'required_chinese':len(required),'missing_chinese':0},ensure_ascii=False,indent=2))
