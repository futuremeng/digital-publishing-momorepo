/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 22:00:07
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:10:25
 * @FilePath: /one-monorepo/packages/utils/src/storage.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage<T>(key: string): T | null {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}