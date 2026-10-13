#!/usr/bin/env python3
"""Local verification server: delay or fail the bundled font without editing it."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
import argparse,json,time
ROOT=Path(__file__).resolve().parent.parent
p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=5175);p.add_argument('--font-fail',action='store_true');p.add_argument('--font-delay',type=float,default=0);a=p.parse_args()
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  if self.path.startswith('/assets/manifest.json') and a.font_fail:
   m=json.loads((ROOT/'dist/assets/manifest.json').read_text());m['font']['url']='/qa-missing-font.woff2';b=json.dumps(m).encode();self.send_response(200);self.send_header('Content-Type','application/json; charset=utf-8');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b);return
  if self.path.startswith('/qa-missing-font'):self.send_error(404);return
  if self.path.endswith('.woff2') and a.font_delay:time.sleep(a.font_delay)
  super().do_GET()
 def log_message(self,*args):pass
print(f'Local QA: http://127.0.0.1:{a.port}',flush=True)
ThreadingHTTPServer(('127.0.0.1',a.port),partial(Handler,directory=str(ROOT/'dist'))).serve_forever()
