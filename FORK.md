<!--
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 11:34:32
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-25 09:23:12
 * @FilePath: /digital-publishing-monorepo/FORK.md
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
-->
1. 查看是否添加了更新源
   ```
   git remote -v
   ```
2. 添加更新源
   ```
   git remote add upstream https://github.com/futuremeng/digital-publishing-momorepo.git
   ```
3. 从源更新
   ```
   git fetch upstream
   ```
4. 合并源的分支
   ```
   git merge upstream/main
   ```