<!--
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-19 16:30:50
 * @FilePath: /one-monorepo/apps/user-center/src/views/my/AccountSetting.vue
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
-->
<template>
  <div>
    <NavBar />
    <van-field
      v-model="username"
      label="用户名"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
    />
    <van-field
      v-model="afterPhone"
      label="手机号"
      readonly
      is-link
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
    />
    <van-field
      label="修改登录密码"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      to="/changePassword"
    />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const { username, mobilephone } = userStore.getUserInfo

function phoneDesensitize(phone: string) {
  const reg = /(\d{3})\d{4}(\d{4})/
  return phone.replace(reg, '$1****$2')
}

const afterPhone = computed(() => phoneDesensitize(mobilephone))
</script>

<style scoped lang="less">
  :deep(.van-field__control) {
  color: var(--van-text-color-2);
}
</style>
