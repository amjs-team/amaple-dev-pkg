#!/usr/bin/env bash
if [ ! -d "node_modules" ]; then
	echo "  \033[1;36m正在初始化环境，请稍后...\033[0m"
	aa=`curl https://unpkg.com/amaple|sed "s/.*@\([0-9\.]\)/\1/"`
	curl -o src/amaple.js "https://unpkg.com/amaple@${aa}/dist/amaple.${aa}.js"
	npm install
	echo "  \033[1;36m完成初始化\033[0m"
fi
echo "  \033[1;36m正在启动本地服务器...\033[0m"
gulp server