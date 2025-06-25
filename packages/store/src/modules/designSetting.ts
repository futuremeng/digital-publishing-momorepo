/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:36:17
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-20 14:35:05
 * @FilePath: /one-monorepo/packages/store/src/modules/designSetting.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { store } from '../index'
import designSetting from '../settings/designSetting'
import type { DesignSettingState } from '../settings/designSetting'

const { darkMode, appTheme, appThemeList, isPageAnimate, pageAnimateType } = designSetting

export const useDesignSettingStore = defineStore({
  id: 'app-design-setting',
  state: (): DesignSettingState => ({
    darkMode,
    appTheme,
    appThemeList,
    isPageAnimate,
    pageAnimateType,
  }),
  getters: {
    getDarkMode(): 'light' | 'dark' {
      return this.darkMode
    },
    getAppTheme(): string {
      return this.appTheme
    },
    getAppThemeList(): string[] {
      return this.appThemeList
    },
    getIsPageAnimate(): boolean {
      return this.isPageAnimate
    },
    getPageAnimateType(): string {
      return this.pageAnimateType
    },
  },
  actions: {
    setDarkMode(mode: 'light' | 'dark'): void {
      this.darkMode = mode
    },
    setPageAnimateType(type: string): void {
      this.pageAnimateType = type
    },
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'DESIGN-SETTING',
        storage: localStorage,
      },
    ],
  },
})

// Need to be used outside the setup
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store)
}
