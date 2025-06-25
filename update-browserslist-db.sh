#!/bin/bash
###
 # @Author: FutureMeng futuremeng@gmail.com
 # @Date: 2025-06-06 10:55:26
 # @LastEditors: FutureMeng futuremeng@gmail.com
 # @LastEditTime: 2025-06-06 11:10:21
 # @FilePath: /one-monorepo/update-browserslist-db.sh
 # @Description: 每三到五个月执行一次 bash update-browserslist-db.sh  更新浏览器数据库
 # Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
### 
for dir in ./apps/*; do
  if [ -d "$dir" ]; then
    echo "Updating browserslist in $dir"
    (cd "$dir" && npx update-browserslist-db@latest)  # 使用子shell运行 cd 和 npx
  fi
done

for dir in ./special-scenes/*; do
  if [ -d "$dir" ]; then
    echo "Updating browserslist in $dir"
    (cd "$dir" && npx update-browserslist-db@latest)  # 使用子shell运行 cd 和 npx
  fi
done