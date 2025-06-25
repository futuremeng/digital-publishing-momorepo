/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-19 14:26:41
 * @FilePath: /one-monorepo/apps/user-center/src/router/base.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import type { RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";

const Layout = () => import("@/layout/index.vue");
const EmptyLayout = () => import("@/layout/EmptyLayout.vue");

// 404 on a page
export const ErrorPageRoute: RouteRecordRaw = {
  path: "/:path(.*)*",
  name: PageEnum.ERROR_PAGE_NAME,
  component: Layout,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: "ErrorPageSon",
      component: () => import("@/views/exception/404.vue"),
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
      },
    },
  ],
};

export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  component: EmptyLayout,
  children: [
    {
      path: "",
      name: "Login",
      component: () => import("@/views/login/Login.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "weixin",
      children: [
        {
          path: "",
          name: "WeixinLogin",
          component: () => import("@/views/login/WeixinLogin.vue"),
          meta: {
            title: "微信登录",
          },
        },
        {
          path: "callback",
          name: "WeixinLoginCallback",
          component: () => import("@/views/login/WeixinLoginCallback.vue"),
          meta: {
            title: "微信登录回调",
          },
        },
      ],
    },
  ],
};
