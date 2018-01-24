@echo off
set curdir=%~dp0
cd %curdir%
if not exist "node_modules" (
	::download amaple.js to src
	echo init environment...
	call node scripts/download_file.js
	call npm install
	echo init finish.
)
echo starting local web server...
call node node_modules/gulp/bin/gulp.js server
pause