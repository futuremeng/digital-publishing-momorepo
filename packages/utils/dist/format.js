/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 22:00:00
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:04:03
 * @FilePath: /one-monorepo/packages/utils/src/format.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export function formatDate(date) {
    return date.toISOString().split('T')[0]; // 示例：2025-06-05
}
