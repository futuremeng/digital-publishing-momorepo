/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 13:07:48
 * @FilePath: /one-monorepo/packages/api/src/http/axios/helper.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { isObject, isString } from '@jiulu/utils'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'

export function joinTimestamp<T extends boolean>(
  join: boolean,
  restful: T
): T extends true ? string : object

export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? '' : {}
  }
  const now = new Date().getTime()
  if (restful) {
    return `?_t=${now}`
  }
  return { _t: now }
}

/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: any) {
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return
  }

  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT)
    }
    if (isString(key)) {
      const value = params[key]
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value
        }
        catch (error) {
          throw new Error(error as any)
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key])
    }
  }
}
