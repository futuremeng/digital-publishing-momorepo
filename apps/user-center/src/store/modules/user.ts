import { defineStore } from "pinia";
import { createStorage } from "@/utils/Storage";
import { store } from "@/store";
import { ACCESS_TOKEN, CURRENT_USER, CURRENT_WEIXIN } from "@/store/mutation-types";
import { ResultEnum } from "@/enums/httpEnum";
import { doLogout, getProfile, login, mobileLogin, weixinLogin } from "@/api/system/user";
import { PageEnum } from "@/enums/pageEnum";
import router from "@/router";

const Storage = createStorage({ storage: localStorage });

interface UserInfo {
  id: number;
  name: string;
  avatar: string;
  username:string;
  mobilephone:string;
  sign?:string;
  gender:number;
  industry?:number;
  cover:string;
}

interface WeixinInfo {
  id: number;
  nickname: string;
  headimgurl: string;
}

interface IUserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
  weixinInfo: Nullable<WeixinInfo>;
  lastUpdateTime: number;
}

interface LoginParams {
  username: string;
  password: string;
}

interface MobileLoginParams {
  mobilephone: string;
  smscode: string;
}

interface WeixinLoginParams {
  code: string;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): IUserState => ({
    userInfo: null,
    weixinInfo: null,
    token: undefined,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || Storage.get(CURRENT_USER, "") || {};
    },
    getWeixinInfo(): WeixinInfo {
      return this.weixinInfo || Storage.get(CURRENT_WEIXIN, "") || {};
    },
    getToken(): string {
      return this.token || Storage.get(ACCESS_TOKEN, "");
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || "";
      Storage.set(ACCESS_TOKEN, token);
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      Storage.set(CURRENT_USER, info);
    },

    setWeixinInfo(info: WeixinInfo | null) {
      this.weixinInfo = info;
      this.lastUpdateTime = new Date().getTime();
      Storage.set(CURRENT_WEIXIN, info);
    },

    async Login(params: LoginParams) {
      try {
        const response = await login(params);
        const { data, code } = response;
        if (code === ResultEnum.SUCCESS) {
          // save token
          this.setToken(data.token);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async MobileLogin(params: MobileLoginParams) {
      try {
        const response = await mobileLogin(params);
        const { data, code } = response;
        if (code === ResultEnum.SUCCESS) {
          // save token
          this.setToken(data.token);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async WeixinLogin(params: WeixinLoginParams) {
      try {
        const response = await weixinLogin(params);
        const { data, code } = response;
        if (code === ResultEnum.SUCCESS) {
          // save token
          this.setToken(data.token);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async GetProfile() {
      return new Promise((resolve, reject) => {
        getProfile()
          .then((res) => {
            console.log('getProfile',res);
            if (res.data.user) {
              this.setUserInfo(res.data.user);
            } else {
              this.setWeixinInfo(res.data.weixin);
            }
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async Logout() {
      if (this.getToken) {
        try {
          await doLogout();
        } catch {
          console.error("注销Token失败");
        }
      }
      this.setToken(undefined);
      this.setUserInfo(null);
      this.setWeixinInfo(null);
      Storage.remove(ACCESS_TOKEN);
      Storage.remove(CURRENT_USER);
      router.push(PageEnum.BASE_LOGIN);
      location.reload();
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
