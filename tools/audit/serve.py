"""Expose only development probe and installed local Ruffle files."""
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
from pathlib import Path
import mimetypes
ROOT=Path(__file__).resolve().parents[2]
HTML='''<!doctype html><meta charset="utf-8"><title>原版字节码逻辑核对</title>
<style>body{background:#201b12;color:#efdaa0;font:14px sans-serif}#player{width:650px;height:500px}pre{white-space:pre-wrap;max-height:300px;overflow:auto}</style>
<h1>原版字节码逻辑核对</h1><p id="status">正在运行原版脚本数值探针…</p><div id="player"></div><pre id="results"></pre>
<script>window.probeProgress=value=>{document.getElementById('status').textContent='原版探针进度：'+value};window.probeReport=text=>{document.getElementById('results').textContent=text;document.getElementById('status').textContent='原版探针已完成'};window.RufflePlayer={config:{fontSources:['/font.swf'],allowScriptAccess:true,openUrlMode:'deny',autoplay:'on',unmuteOverlay:'hidden',logLevel:'error'}};</script>
<script src="/ruffle/ruffle.js"></script><script>const player=window.RufflePlayer.newest().createPlayer();document.getElementById('player').appendChild(player);player.style.width='650px';player.style.height='500px';player.ruffle().load('/probe.swf');</script>'''
class Handler(BaseHTTPRequestHandler):
 def do_GET(self):
  url=self.path.split('?')[0]
  if url=='/':data=HTML.encode();mime='text/html; charset=utf-8'
  else:
   if url=='/probe.swf':p=ROOT/'.tools/audit/probe.swf'
   elif url=='/font.swf':p=ROOT/'public/assets/fonts/Songti-reference.swf'
   elif url.startswith('/ruffle/') and '..' not in Path(url).parts:p=ROOT/'.tools/ruffle'/url[len('/ruffle/'):]
   else:self.send_error(404);return
   if not p.is_file():self.send_error(404);return
   data=p.read_bytes();mime='application/wasm' if p.suffix=='.wasm' else mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
  self.send_response(200);self.send_header('Content-Type',mime);self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data)
 def log_message(self,*args):pass
print('Bytecode probe: http://127.0.0.1:5176/',flush=True)
ThreadingHTTPServer(('127.0.0.1',5176),Handler).serve_forever()
