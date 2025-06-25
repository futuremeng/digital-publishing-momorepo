/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:36:17
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-20 14:41:38
 * @FilePath: /one-monorepo/packages/store/src/index.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPersist)

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }

export * from './modules/user'