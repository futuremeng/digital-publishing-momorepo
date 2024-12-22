<!--
 * @Author: be_loving@163.com 
 * @Date: 2024-12-20 13:02:42
 * @LastEditors: be_loving@163.com 
 * @LastEditTime: 2024-12-20 17:35:00
 * @FilePath: /one-monorepo/apps/one-vike-app-main/renderer/RemoteCompenent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { defineAsyncComponent, h } from "vue";
import {
  __federation_method_getRemote,
  __federation_method_unwrapDefault,
  // @ts-ignore
} from "virtual:__federation__";

const props = defineProps<{
  dsl: Record<string, any>;
}>();

const loadComponent = () => {
  try {
    const asyncComponent = defineAsyncComponent({
      loader: async () => {
        const module = await __federation_method_getRemote(
          `${props.dsl.package}`,
          `./${props.dsl.component}`,
        );
        return __federation_method_unwrapDefault(module);
      },
      loadingComponent: () => h("div", "loading..."),
      delay: 200,
      errorComponent: () => h("div", "Error loading component"),
      timeout: 3000,
    });
    return h(asyncComponent);
  } catch (error) {
    //Unable to catch errors with try/catch
    console.log(error);
  }
};
</script>

<template>
  <component :is="loadComponent"></component>
</template>
