/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-23 13:12:09
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 13:22:00
 * @FilePath: /one-monorepo/packages/api/src/http/types/request.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export interface BaseRequestModel<T = any> {
  q?: string;
  page?: number;
  pageSize?: number;
  data?: T;
}