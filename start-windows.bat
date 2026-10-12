@echo off
chcp 65001 >nul
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo 未检测到 Node.js，正在直接打开 index.html...
  start "" "%~dp0index.html"
  exit /b 0
)

set "OPEN_BROWSER=1"
node server.mjs
