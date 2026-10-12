#!/bin/sh
cd -- "$(dirname "$0")"

if command -v node >/dev/null 2>&1; then
  OPEN_BROWSER=1 node server.mjs
else
  echo "未检测到 Node.js，正在直接打开 index.html..."
  open ./index.html
fi
