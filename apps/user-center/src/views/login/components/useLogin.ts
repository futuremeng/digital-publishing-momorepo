/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 10:26:42
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-19 09:39:59
 * @FilePath: /one-monorepo/apps/user-center/src/views/login/components/useLogin.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import type { FieldRule } from "vant";

export enum LoginStateEnum {
  LOGIN,
  MOBILE_LOGIN,
  REGISTER,
  RESET_PASSWORD,
}

const currentState = ref(LoginStateEnum.LOGIN);

export function useLoginState() {
  function setLoginState(state: LoginStateEnum) {
    currentState.value = state;
  }

  const getLoginState = computed(() => currentState.value);

  function handleBackLogin() {
    setLoginState(LoginStateEnum.LOGIN);
  }

  return { setLoginState, getLoginState, handleBackLogin };
}

export function useFormRules(formData?: Recordable) {
  const getUsernameFormRule = computed(() => createRule("请输入用户名"));
  const getPasswordFormRule = computed(() => createRule("请输入密码"));
  const getSmscodeFormRule = computed(() => createRule("请输入短信验证码"));
  const getMobileFormRule = computed(() => createRule("请输入手机号码"));

  const validatePolicy = async (value: any, _: FieldRule) => {
    return !value ? Promise.resolve("勾选后才能注册") : Promise.resolve(true);
  };

  const validateConfirmPassword = (password: string) => {
    return async (value: string) => {
      if (!value) {
        return Promise.resolve("请输入确认密码");
      }
      if (value !== password) {
        return Promise.resolve("两次输入密码不一致");
      }
      return Promise.resolve(true);
    };
  };

  const getFormRules = computed((): { [k: string]: FieldRule[] } => {
    const usernameFormRule = unref(getUsernameFormRule);
    const passwordFormRule = unref(getPasswordFormRule);

    const mobileFormRule = unref(getMobileFormRule);
    const smscodeFormRule = unref(getSmscodeFormRule);

    const mobileloginRule = {
      mobilephone: mobileFormRule,
      smscode: smscodeFormRule,
    };
    switch (unref(currentState)) {
      // register form rules
      case LoginStateEnum.REGISTER:
        return {
          username: usernameFormRule,
          password: passwordFormRule,
          confirmPassword: [
            { validator: validateConfirmPassword(formData?.password), trigger: "onChange" },
          ],
          policy: [{ validator: validatePolicy, trigger: "onBlur" }],
          ...mobileloginRule,
        };

      // reset password form rules
      case LoginStateEnum.RESET_PASSWORD:
        return {
          username: usernameFormRule,
          ...mobileloginRule,
        };

      case LoginStateEnum.MOBILE_LOGIN:
        return {
          ...mobileloginRule
        }

      // login form rules
      default:
        return {
          username: usernameFormRule,
          password: passwordFormRule,
        };
    }
  });
  return { getFormRules };
}

function createRule(message: string): FieldRule[] {
  return [
    {
      required: true,
      message,
      trigger: "onBlur",
    },
  ];
}
