<!--
 * @Author: be_loving@163.com 
 * @Date: 2024-12-20 10:46:17
 * @LastEditors: be_loving@163.com 
 * @LastEditTime: 2024-12-20 17:42:57
 * @FilePath: /one-monorepo/packages/one-vite-app-micro-basic/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="card">
    <n-button type="primary" @click="count++">count is {{ count }}</n-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
