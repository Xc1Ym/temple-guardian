#!/usr/bin/env python3
"""Package deployable static files and reviewable source without local caches."""
from pathlib import Path
import hashlib,json,zipfile
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'release'
OUT.mkdir(exist_ok=True)
assert (ROOT/'dist/index.html').exists(),'Run npm run build first'
def archive(name,files,prefix):
 target=OUT/name
 with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
  for p in sorted(files):
   info=zipfile.ZipInfo(str(Path(prefix)/p.relative_to(ROOT if prefix=='temple-guardian-web' else ROOT/'dist')),date_time=(2026,10,12,0,0,0))
   info.compress_type=zipfile.ZIP_DEFLATED
   info.external_attr=(0o755 if p.name.endswith('.sh') or p.name=='start.command' else 0o644)<<16
   z.writestr(info,p.read_bytes())
 with zipfile.ZipFile(target) as z:assert z.testzip() is None
 return {'file':name,'bytes':target.stat().st_size,'sha256':hashlib.sha256(target.read_bytes()).hexdigest()}
skip={'node_modules','.tools','dist','release','.git','__pycache__','.pytest_cache'}
source=[p for p in ROOT.rglob('*') if p.is_file() and not any(v in skip for v in p.relative_to(ROOT).parts) and p.name not in {'.DS_Store','.env'} and not p.name.endswith(('.pyc','.log'))]
static=[p for p in (ROOT/'dist').rglob('*') if p.is_file()]
assert not any(p.suffix in {'.swf','.otf','.exe'} for p in static),'Development-only artifact in production'
report=[archive('temple-guardian-web-static.zip',static,''),archive('temple-guardian-web-source.zip',source,'temple-guardian-web')]
(OUT/'checksums.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False,indent=2))
