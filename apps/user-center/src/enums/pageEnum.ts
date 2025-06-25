/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-17 15:53:04
 * @FilePath: /one-monorepo/apps/user-center/src/enums/pageEnum.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
/* eslint-disable ts/no-duplicate-enum-values */
export enum PageEnum {
  // 登录
  BASE_LOGIN = '/login',
  BASE_LOGIN_NAME = 'Login',

  WEIXIN_LOGIN = '/login/weixin',
  WEIXIN_LOGIN_NAME = 'WeixinLogin',

  WEIXIN_LOGIN_CALLBACK = '/login/weixin/callback',
  WEIXIN_LOGIN_CALLBACK_NAME = 'WeixinLoginCallback',
  
  // 首页
  BASE_HOME = '/dashboard',
  BASE_HOME_REDIRECT = '/dashboard',
  // 错误
  ERROR_PAGE_NAME = 'ErrorPage',
}
