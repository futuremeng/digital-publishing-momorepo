<!--
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 11:30:49
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-14 11:23:13
 * @FilePath: /one-monorepo/apps/digital-books/src/views/login/Login.vue
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
-->
<template>
  <div>
    <div class="h-screen flex justify-center p-8">
      <div class="w-full flex flex-col">
        <LoginTitle />
        <LoginForm />
        <ForgetPasswordForm />
        <RegisterForm />
        <n-button @click="goToBook('12')">naive-ui</n-button>
      </div>
    </div>
    <LoginWave />
  </div>
</template>

<script setup lang="ts">
import LoginTitle from './components/LoginTitle.vue'
import LoginForm from './components/LoginForm.vue'
import ForgetPasswordForm from './components/ForgetPasswordForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import LoginWave from './components/LoginWave.vue'
import { navigateToApp } from '@jiulu/utils';
function goToBook(bookId: string) {
  navigateToApp('digital-books', `/book/${bookId}`);
}
</script>

<style scoped lang="less">
:deep(.van-field__left-icon) {
  display: flex;
}
:deep(.van-field__right-icon) {
  display: flex;
}
</style>
