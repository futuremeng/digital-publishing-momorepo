/*
 * @Author: be_loving@163.com 
 * @Date: 2024-12-09 15:56:38
 * @LastEditors: be_loving@163.com 
 * @LastEditTime: 2024-12-20 17:22:12
 * @FilePath: /one-monorepo/packages/one-vite-app-micro-basic/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './router-guards'
import routeModuleList from './modules'
import { ErrorPageRoute, LoginRoute, RootRoute } from '@/router/base'
import { useRouteStoreWidthOut } from '@/store/modules/route'

// 菜单

// 普通路由
export const constantRouter: RouteRecordRaw[] = [LoginRoute, RootRoute, ErrorPageRoute]

const routeStore = useRouteStoreWidthOut()

routeStore.setMenus(routeModuleList)
routeStore.setRouters(constantRouter.concat(routeModuleList))

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRouter.concat(...routeModuleList),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
