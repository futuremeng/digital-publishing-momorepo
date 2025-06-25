import { defineStore } from 'pinia'
import { createStorage } from '@jiulu/utils/src/storage'
import { store } from '../index'
import { ACCESS_TOKEN, CURRENT_USER } from '../mutation-types'
// import { ResultEnum } from '@jiulu/enums'
// import { doLogout, getProfile, login } from '@jiulu/api'
// import { formatDate } from '@jiulu/utils'
// import { PageEnum } from '@jiulu/enums'
// import router from '@/router'

const Storage = createStorage({ storage: localStorage })

interface UserInfo {
  userId: string | number
  username: string
  realname: string
  nickname: string
  avatar: string
  cover: string
  gender: number
  phone: string
  sign?: string
  industry?: number
}

interface IUserState {
  userInfo: UserInfo | null
  token?: string
  lastUpdateTime: number
}

interface LoginParams {
  username: string
  password: string
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): IUserState => ({
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || Storage.get(CURRENT_USER, '') || {}
    },
    getToken(): string {
      return this.token || Storage.get(ACCESS_TOKEN, '')
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime
    },
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || ''
      Storage.set(ACCESS_TOKEN, token)
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
      Storage.set(CURRENT_USER, info)
    },

    // async Login(params: LoginParams) {
    //   try {
    //     const response = await login(params)
    //     const { data, code } = response
    //     if (code === ResultEnum.SUCCESS) {
    //       // save token
    //       this.setToken(data.token)
    //     }
    //     return Promise.resolve(response)
    //   }
    //   catch (error) {
    //     return Promise.reject(error)
    //   }
    // },

    // async GetUserInfo() {
    //   return new Promise((resolve, reject) => {
    //     getProfile()
    //       .then((res: any) => {
    //         this.setUserInfo(res)
    //         resolve(res)
    //       })
    //       .catch((error:any) => {
    //         reject(error)
    //       })
    //   })
    // },

    // async Logout() {
    //   if (this.getToken) {
    //     try {
    //       await doLogout()
    //     }
    //     catch {
    //       console.error('注销Token失败')
    //     }
    //   }
    //   this.setToken(undefined)
    //   this.setUserInfo(null)
    //   Storage.remove(ACCESS_TOKEN)
    //   Storage.remove(CURRENT_USER)
    //   // router.push(PageEnum.BASE_LOGIN)
    //   location.reload()
    // },
  },
})

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store)
}
