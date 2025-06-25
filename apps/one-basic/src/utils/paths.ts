/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 15:09:44
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-20 09:56:06
 * @FilePath: /one-monorepo/apps/one-basic/src/utils/paths.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export const appPaths: Record<string, string> = {
  "user-center": "http://local.jiulu.ltd/center",
  "book-search": "http://local.jiulu.ltd/search",
  "digital-books": "/books",
  'dictation': "http://local.jiulu.ltd/dictation",
};

// 如果部署在不同子域名
export const appDomains: Record<string, string> = {
  "book-search": "http://book-search.domain.com",
  "user-center": "http://user-center.domain.com",
  "digital-books": "http://digital-books.domain.com",
  "special-scenes": "http://special-scenes.domain.com",
};

// 根据环境变量选择使用路径还是域名
export const getAppUrl = (appName: string): string => {
  const useDomains = import.meta.env.VITE_USE_DOMAINS === "true";
  const base = useDomains ? appDomains[appName] : appPaths[appName];
  return base || "/";
};
