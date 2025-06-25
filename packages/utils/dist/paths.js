/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 21:59:49
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:03:19
 * @FilePath: /one-monorepo/packages/utils/src/paths.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export const appPaths = {
    'book-search': '/book-search',
    'user-center': '/user-center',
    'digital-books': '/digital-books',
    'special-scenes': '/special-scenes',
};
export const appDomains = {
    'book-search': 'http://book-search.domain.com',
    'user-center': 'http://user-center.domain.com',
    'digital-books': 'http://digital-books.domain.com',
    'special-scenes': 'http://special-scenes.domain.com',
};
export const getAppUrl = (appName) => {
    const useDomains = import.meta.env.VITE_USE_DOMAINS === 'true';
    const base = useDomains ? appDomains[appName] : appPaths[appName];
    return base || '/';
};
