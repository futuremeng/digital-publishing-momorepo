import { Book } from "./book";

/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-23 13:53:15
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 14:30:51
 * @FilePath: /one-monorepo/packages/types/src/models/wordentry.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export interface Wordentry {
  id?: number;
  title: string;
  description: string;
  book?:Book;
  created_at: string;
  updated_at: string;
}