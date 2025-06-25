/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-20 14:02:40
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-20 15:29:12
 * @FilePath: /one-monorepo/packages/utils/vite.config.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { defineConfig } from "vite";
import { resolve } from "node:path";
// path.resolve () 方法用于将一系列路径段解析为绝对路径。它通过处理从右到左的路径序列来工作，在每个路径之前添加，直到创建绝对路径。
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  resolve: {
    alias: [
      // @jiulu/types
      {
        find: /\@jiulu\/types/,
        replacement: `${pathResolve("../../../packages/types")}/`,
      },
      {
        find: /\@jiulu\/build/,
        replacement: `${pathResolve("../../../packages/build")}/`,
      },
    ],
  },
});
