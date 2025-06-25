/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 21:59:49
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 16:12:42
 * @FilePath: /one-monorepo/packages/utils/src/paths.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
// 获取 URL 的协议、主机名和端口号
const appOrigin = window.location.origin;

export const appPaths: Record<string, string> = {
  "user-center": appOrigin + "/center",
  "book-search": appOrigin + "/search",
  "digital-books": appOrigin + "/books",
  dictation: appOrigin + "/dictation",
  dictionary: appOrigin + "/dictionary",
};

const appDomain = import.meta.env.VITE_DOMAIN;

export const appDomains: Record<string, string> = {
  "user-center": "https://center." + appDomain,
  "book-search": "https://search." + appDomain,
  "digital-books": "https://books." + appDomain,
  dictation: "https://dictation." + appDomain,
  dictionary: "https://dictionary." + appDomain,
};

export const getAppUrl = (appName: string): string => {
  const useDomains = import.meta.env.VITE_USE_DOMAINS === "true";
  const base = useDomains ? appDomains[appName] : appPaths[appName];
  return base || "/";
};
