/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-19 17:25:02
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 13:06:19
 * @FilePath: /one-monorepo/packages/api/src/system/user.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 13:06:15
 * @FilePath: /one-monorepo/packages/api/src/system/user.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { http } from "../http/axios";
import { BasicResponseModel } from "../http/types/response";


/**
 * @description: 用户登录
 */
export function login(params: {username: string, password: string}) {
  return http.request<BasicResponseModel>(
    {
      url: "/login",
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    },
  );
}

/**
 * @description: 用户获取短信验证码
 */
export function getSmscode(params: { mobilephone: string }) {
  return http.request<BasicResponseModel>(
    {
      url: "/auth/mobilephone/sendcode",
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    },
  );
}

/**
 * @description: 用户短信验证码登录
 */
export function mobileLogin(params: { mobilephone: string; smscode: string }) {
  return http.request<BasicResponseModel>(
    {
      url: "/auth/mobilephone/login",
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    },
  );
}

/**
 * @description: 用户短信验证码登录
 */
export function weixinLogin(params: { code: string }) {
  return http.request<BasicResponseModel>(
    {
      url: "/auth/weixin/officialaccount/login",
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    },
  );
}

/**
 * @description: 获取用户信息
 */
export function getProfile() {
  return http.request(
    {
      url: "/auth/profile",
      method: "get",
    },
    {
      isTransformResponse: false,
    },
  );
}

/**
 * @description: 用户登出
 */
export function doLogout() {
  return http.request({
    url: "/logout",
    method: "POST",
  });
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    },
  );
}
