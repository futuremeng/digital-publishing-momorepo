/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-23 13:04:27
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 14:23:51
 * @FilePath: /one-monorepo/packages/api/src/user/wordentry/wordentry.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { http } from "../../http/axios";
import { BaseRequestModel } from "../../http/types/request";
import { BasicResponseModel } from "../../http/types/response";

/**
 * @description: 获取词条信息
 */
export function getWordentryList(
  params: BaseRequestModel & { withBook?: boolean; withMediainfos?: boolean }
) {
  return http.request<BasicResponseModel>(
    {
      url: "/user/wordentries",
      method: "get",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
