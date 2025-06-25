/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-19 11:13:33
 * @FilePath: /one-monorepo/apps/user-center/src/utils/http/axios/checkStatus.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { showFailToast } from "vant";

export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      showFailToast(msg);
      break;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      showFailToast("用户认证失败（令牌、用户名、密码错误）!");
      break;
    case 403:
      showFailToast("用户缺少权限，访问是被禁止的。!");
      break;
    // 404 优先返回msg，请求不存在
    case 404:
      showFailToast(msg ?? "网络请求地址错误或未找到该资源!");
      break;
    case 405:
      showFailToast("网络请求错误，请求方法未允许!");
      break;
    case 408:
      showFailToast("网络请求超时");
      break;
    case 500:
      showFailToast("服务器错误,请联系管理员!");
      break;
    case 501:
      showFailToast("网络未实现");
      break;
    case 502:
      showFailToast("网络错误");
      break;
    case 503:
      showFailToast("服务不可用，服务器暂时过载或维护!");
      break;
    case 504:
      showFailToast("网络超时");
      break;
    case 505:
      showFailToast("http版本不支持该请求!");
      break;
    default:
      showFailToast(msg);
  }
}
