<!--
 * @Author: be_loving@163.com 
 * @Date: 2024-12-09 16:52:20
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-23 14:34:58
 * @FilePath: /one-monorepo/apps/special-scenes/dictionary/src/views/search/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="h-screen flex flex-col items-center justify-center p-0px">
    <div class="wel-box w-full flex flex-col items-center justify-between">
      <Logo class="!h-30 !w-30" />
      <div class="text-darkBlue dark:text-garyWhite mb-4 mt-12 text-center text-2xl font-black">
        {{ title }}
      </div>
      <van-search
        class="w-full"
        v-model="q"
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="handleSearch"
      />
      <div class="mb-6 mt-4 w-full p-10px">
        <n-card :title="item.title" hoverable size="small" v-for="(item, index) in wordentries" :key="index" class="mb-10px">
          {{ item.description }}
          <template #footer>
            <div class="float-right">《{{ item.book?.title }}》</div>
          </template>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDesignSettingStore } from "@/store/modules/designSetting";
import { useGlobSetting } from "@/hooks/setting";
import Logo from "@/components/Logo.vue";
import { getWordentryList } from "@jiulu/api/src/user/wordentry/wordentry";
import { Wordentry } from "@jiulu/types";

defineOptions({
  name: "DashboardPage",
});

const designStore = useDesignSettingStore();
const globSetting = useGlobSetting();

const { title } = globSetting;

const q = ref("");

const getSwipeText = computed(() => {
  return [
    {
      title: "💡 最新技术栈",
      details: "基于Vue3、Vant4、Vite、TypeScript、UnoCSS等最新技术栈开发",
    },
    {
      title: "✨ 零配置 ESlint",
      details: "使用 Git Hook 进行 Lint Commit，规范化提交",
    },
    {
      title: "🌠 使用最新的 <script setup> 语法",
      details: "Vue 3.4+ 最新语法",
    },
    {
      title: "⚡️ 轻量快速的热重载",
      details: "无论应用程序大小如何，都始终极快的模块热重载（HMR）",
    },
    {
      title: "🔩 主题配置",
      details: "具备主题配置及黑暗主题适配，且持久化保存",
    },
    {
      title: "🛠️ 丰富的 Vite 插件",
      details: "集成大部分 Vite 插件，无需繁琐配置，开箱即用",
    },
    {
      title: "📊 内置 useEcharts hooks",
      details: "满足大部分图表展示，只需要写你的 Options",
    },
    {
      title: "🥳 完善的登录系统、路由、Axios配置",
      details: "所有基础设施已搭建完毕，你可以直接开发你的业务需求",
    },
  ];
});

const wordentries = ref<Wordentry[]>([]);

const handleSearch = async () => {
  console.log("handleSearch");
  const { code, data } = await getWordentryList({ q: q.value, withBook: true });
  console.log(code, data);

  wordentries.value = data.wordentries.data;
};
</script>

<style scoped lang="less"></style>
