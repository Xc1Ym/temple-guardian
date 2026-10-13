#!/bin/zsh
set -e
cd "${0:A:h}"
if ! command -v node >/dev/null || ! command -v npm >/dev/null; then
  print '请先安装 Node.js 24，再重新打开。'
  read -k 1
  exit 1
fi
if [[ ! -d node_modules ]]; then npm ci; fi
npm run dev -- --open
