#!/usr/bin/env python3
"""Development-only original SWF player with explicit embedded Chinese font.

Prepare .tools/ruffle from the official @ruffle-rs/ruffle@0.7.1 npm tarball.
No reference player, original SWF or font SWF is included in the Docker image.
"""
from pathlib import Path
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
import argparse,mimetypes
ROOT=Path(__file__).resolve().parent.parent
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--port',type=int,default=5174);a=p.parse_args()
HTML='''<!doctype html><meta charset="utf-8"><title>原版中文字体对照</title>
<style>body{background:#221b13;color:#e9d3a6;font:16px sans-serif;text-align:center}#player{width:650px;height:500px;margin:auto}button{padding:10px}</style>
<h1>神殿守护者 · 原版对照</h1><p>原文件不变；额外加载内嵌“宋体”字形。仅用于开发验证。</p><div id="player"></div>
<script>window.RufflePlayer={config:{fontSources:['/assets/fonts/Songti-reference.swf'],defaultFonts:{serif:['宋体'],sans:['宋体'],typewriter:['宋体']},openUrlMode:'deny',allowScriptAccess:false,autoplay:'off',logLevel:'warn'}};</script>
<script src="/ruffle/ruffle.js"></script><script>const player=window.RufflePlayer.newest().createPlayer();document.getElementById('player').appendChild(player);player.style.width='650px';player.style.height='500px';player.ruffle().load('/movie.swf');</script>'''
class Handler(BaseHTTPRequestHandler):
 def do_GET(self):
  url=self.path.split('?')[0]
  if url=='/':data=HTML.encode();mime='text/html; charset=utf-8'
  else:
   if url=='/movie.swf':file=ROOT/'temple-guardian.swf'
   elif url.startswith('/ruffle/'):file=ROOT/'.tools/ruffle'/url[len('/ruffle/'):]
   elif url=='/assets/fonts/Songti-reference.swf':file=ROOT/'public/assets/fonts/Songti-reference.swf'
   else:self.send_error(404);return
   if not file.is_file() or '..' in Path(url).parts:self.send_error(404);return
   data=file.read_bytes();mime='application/wasm' if file.suffix=='.wasm' else mimetypes.guess_type(file.name)[0] or 'application/octet-stream'
  self.send_response(200);self.send_header('Content-Type',mime);self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data)
 def log_message(self,*args):pass
if not (ROOT/'.tools/ruffle/ruffle.js').is_file():raise SystemExit('先安装开发期播放器：npm pack @ruffle-rs/ruffle@0.7.1，然后将包中的文件解压至 .tools/ruffle。')
print(f'Original font-fixed reference: http://127.0.0.1:{a.port}/',flush=True)
ThreadingHTTPServer(('127.0.0.1',a.port),Handler).serve_forever()
