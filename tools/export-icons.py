#!/usr/bin/env python3
"""Decorative mobile UI thumbnails; gameplay sprites keep their full timelines."""
from pathlib import Path
import argparse,json,subprocess,tempfile,shutil
ROOT=Path(__file__).resolve().parent.parent
p=argparse.ArgumentParser();p.add_argument('--ffdec',type=Path,required=True);a=p.parse_args()
data=json.loads((ROOT/'public/game-data.json').read_text());manifest_path=ROOT/'public/assets/manifest.json';m=json.loads(manifest_path.read_text())
ids=[data['symbols']['Mf_SeSi'+str(i)]for i in [1,2,5,3,4,6,101,201,202,102]]
with tempfile.TemporaryDirectory(prefix='temple-icons-')as temp:
 work=Path(temp)
 subprocess.run(['java','-Djava.awt.headless=true',f'-Duser.home={work/"java-home"}','-jar',str(a.ffdec),'-selectid',','.join(map(str,ids)),'-zoom','2','-export','sprite',str(work/'icons'),str(ROOT/'temple-guardian.swf')],check=True,stdout=subprocess.DEVNULL)
 out=ROOT/'public/assets/icons';out.mkdir(exist_ok=True);m['icons']={}
 for f in (work/'icons').glob('DefineSprite_*/1.png'):
  ident=f.parent.name.split('_')[1];shutil.copyfile(f,out/f'{ident}.png');m['icons'][ident]=f'/assets/icons/{ident}.png'
manifest_path.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print(f'{len(m["icons"])} authored mobile icons')
