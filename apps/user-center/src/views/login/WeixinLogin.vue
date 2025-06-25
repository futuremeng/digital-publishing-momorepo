<!--
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-17 15:43:55
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-24 12:25:11
 * @FilePath: /one-monorepo/apps/user-center/src/views/login/WeixinLogin.vue
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
-->
<template>
  <div>
    <div class="h-screen flex justify-center p-8">
      <div class="w-full flex flex-col">
        <LoginTitle />
        <van-button
          class="enter-y !mb-4 !rounded-md"
          type="success"
          block
          @click="handleWechatLogin"
        >
          微 信
        </van-button>
        <van-button
          class="enter-y !mb-4 !rounded-md"
          plain
          type="primary"
          block
          @click="handleLogin"
        >
          返 回
        </van-button>
      </div>
    </div>
    <LoginWave />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import LoginTitle from "./components/LoginTitle.vue"
import LoginWave from "./components/LoginWave.vue"

import { onBeforeMount } from "vue"
const router = useRouter()
const route = useRoute()
const { VITE_AUTH_OFFICIALACCOUNT_APPID } = import.meta.env

const redirectUri = encodeURIComponent(
  location.origin +
    location.pathname +
    "/callback" +
    (route.query.redirect ? "?redirect=" + encodeURIComponent(route.query.redirect as string) : ""),
)

const useDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return {
    wechat: /micromessenger/.test(userAgent),
  }
}

const device = useDevice()

const getCode = () => {
  console.log(redirectUri)
  // snsapi_base snsapi_userinfo
  location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${VITE_AUTH_OFFICIALACCOUNT_APPID}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
}

const handleLogin = () => {
  router.push("/login" + (route.query.redirect ? "?redirect=" + route.query.redirect : ""))
}
const handleWechatLogin = () => {
  getCode()
}

onBeforeMount(() => {
  if (!device.wechat) {
    router.replace("/login")
  }
})
</script>

<style scoped lang="less">
:deep(.van-field__left-icon) {
  display: flex;
}
:deep(.van-field__right-icon) {
  display: flex;
}
</style>
