<!--
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-17 15:44:02
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-20 11:33:13
 * @FilePath: /one-monorepo/apps/user-center/src/views/login/WeixinLoginCallback.vue
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
-->
<template>
  <div>
    <div class="h-screen flex justify-center p-8">
      <div class="w-full flex flex-col">
        <LoginTitle />
      </div>
    </div>
    <LoginWave />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import LoginTitle from "./components/LoginTitle.vue"
import LoginWave from "./components/LoginWave.vue"
import { useUserStore } from "@/store/modules/user"
import { showFailToast, showSuccessToast } from "vant"
import { ResultEnum } from "@/enums/httpEnum"
import { PageEnum } from "@/enums/pageEnum"
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const useDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return {
    wechat: /micromessenger/.test(userAgent),
  }
}

const device = useDevice()

const checkCode = async () => {
  if (!route.query.code || route.query.code === "") {
    router.replace("/login/weixin")
  }

  userStore
    .WeixinLogin({
      code: route.query.code as string,
    })
    .then((res) => {
      const { code, message: msg } = res
      console.log("weixin callback result:", code, msg)

      if (code === ResultEnum.SUCCESS) {
        showSuccessToast("登录成功")

        const redirect = decodeURIComponent((route.query?.redirect || "/") as string)
        showSuccessToast("登录成功，即将进入系统")
        if (route.name === PageEnum.BASE_LOGIN_NAME) {
          router.replace("/")
        } else {
          redirect.indexOf("http") >= 0 ? (location.href = redirect) : router.replace(redirect)
        }
      } else {
        showFailToast(msg || "登录失败");
      }
    }).catch(() => {
      showFailToast("登录失败")
      router.replace("/login/weixin" + "?redirect=" + route.query.redirect)
    })
}

onBeforeMount(() => {
  if (!device.wechat) {
    router.replace("/login")
  }
})

onMounted(() => {
  checkCode()
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
