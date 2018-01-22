@echo off
if not exist "node_modules" (
	::download amaple.js to src
	echo init environment...
	call npm install
	echo init finish.
)
echo starting local web server...
call node node_modules/gulp/bin/gulp.js server
pause