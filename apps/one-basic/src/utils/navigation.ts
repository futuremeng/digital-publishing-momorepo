/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 15:22:21
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 15:22:29
 * @FilePath: /one-monorepo/packages/one-basic/src/utils/navigation.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { getAppUrl } from './paths';

// 跳转到另一个子应用
export function navigateToApp(appName: string, path: string = '', query: Record<string, string> = {}) {
  const baseUrl = getAppUrl(appName);
  const queryString = new URLSearchParams(query).toString();
  const targetUrl = `${baseUrl}${path}${queryString ? `?${queryString}` : ''}`;
  window.location.href = targetUrl; // 直接跳转
}