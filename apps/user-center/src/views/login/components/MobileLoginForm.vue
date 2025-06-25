<template>
  <van-form v-if="getShow" ref="formRef" class="flex flex-col items-center" @submit="handleSubmit">
    <van-field
      v-model="formData.mobilephone"
      class="enter-y mb-4 items-center !rounded-md"
      name="password"
      placeholder="手机号码"
      :rules="getFormRules.mobilephone"
    >
      <template #left-icon>
        <i class="i-ic:twotone-smartphone mr-2 text-lg" />
      </template>
    </van-field>

    <van-field
      v-model="formData.smscode"
      class="enter-y mb-5 items-center !rounded-md"
      center
      clearable
      placeholder="请输入短信验证码"
      :rules="getFormRules.smscode"
    >
      <template #left-icon>
        <i class="i-material-symbols:edit-square-outline-rounded mr-2 text-lg" />
      </template>
      <template #button>
        <van-button size="small" type="primary" @click="handleGetSmscode"> 发送验证码 </van-button>
      </template>
    </van-field>

    <div class="enter-y mb-5 w-full flex justify-between px-5px">
      <div class="flex items-center"></div>
      <div class="flex items-center">
        <a @click="setLoginState(LoginStateEnum.LOGIN)">用密码登录</a>
      </div>
    </div>

    <van-button
      class="enter-y !mb-4 !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      登 录
    </van-button>
    <van-button
      v-if="device.wechat"
      class="enter-y !mb-4 !rounded-md"
      type="success"
      plain
      block
      @click="handleWechatLogin"
    >
      微 信
    </van-button>
    <van-button
      class="enter-y !rounded-md"
      plain
      type="primary"
      block
      @click="setLoginState(LoginStateEnum.REGISTER)"
    >
      注 册
    </van-button>
  </van-form>
</template>

<script setup lang="ts">
import { showFailToast, showLoadingToast, showSuccessToast } from "vant";
import type { FormInstance } from "vant";
import { LoginStateEnum, useFormRules, useLoginState } from "./useLogin";
import { useUserStore } from "@/store/modules/user";
import { ResultEnum } from "@/enums/httpEnum";
import { PageEnum } from "@/enums/pageEnum";
import { onMounted } from "vue";
import { getSmscode } from "@/api/system/user";

const { setLoginState, getLoginState } = useLoginState();
const { getFormRules } = useFormRules();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const useDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return {
    wechat: /micromessenger/.test(userAgent),
  };
};

const device = useDevice();

const formRef = ref<FormInstance>();
const loading = ref(false);
const formData = reactive({
  mobilephone: "",
  smscode: "",
});

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE_LOGIN);

// 校验手机号是否合法
const validateMobilephone = (mobilephone: string): boolean => {
  const mobileRegex = /^1[3-9]\d{9}$/; // 示例：中国大陆手机号格式
  if (!mobileRegex.test(mobilephone)) {
    showFailToast("请输入有效的手机号");
    return false;
  }
  return true;
};
const handleGetSmscode = async () => {
  const { mobilephone } = formData; // 假设 formData 是 ref 或 reactive 对象
  if (!validateMobilephone(mobilephone)) {
    return;
  }
  validateMobilephone(mobilephone);
  const { code, message: msg } = await getSmscode(formData);
  if (code === 200) {
    showSuccessToast("验证码发送成功");
  } else {
    showFailToast(msg);
  }
};

function handleSubmit() {
  formRef.value
    ?.validate()
    .then(async () => {
      try {
        loading.value = true;
        showLoadingToast("登录中...");
        const { code, message: msg } = await userStore.MobileLogin({
          mobilephone: formData.mobilephone,
          smscode: formData.smscode,
        });
        if (code === ResultEnum.SUCCESS) {
          const toPath = decodeURIComponent((route.query?.redirect || "/") as string);
          showSuccessToast("登录成功，即将进入系统");
          if (route.name === PageEnum.BASE_LOGIN_NAME) {
            router.replace("/");
          } else {
            router.replace(toPath);
          }
        } else {
          showFailToast(msg || "登录失败");
        }
      } finally {
        loading.value = false;
      }
    })
    .catch(() => {
      console.error("验证失败");
    });
}

function handleWechatLogin() {
  router.push("/login/weixin");
}

onMounted(() => {});
</script>

<style scoped lang="less"></style>
