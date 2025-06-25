/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 21:59:54
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:03:53
 * @FilePath: /one-monorepo/packages/utils/src/navigation.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { getAppUrl } from './paths';
export function navigateToApp(appName, path = '', query = {}) {
    const baseUrl = getAppUrl(appName);
    const queryString = new URLSearchParams(query).toString();
    const targetUrl = `${baseUrl}${path}${queryString ? `?${queryString}` : ''}`;
    window.location.href = targetUrl;
}
