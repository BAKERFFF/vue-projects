import { defineStore } from 'pinia'

// 用户状态管理
export const useUserStore = defineStore('user', {
  // 状态：存储用户数据
  state: () => ({
    isLoggedIn: false,  // 是否登录
    username: '',       // 用户名
    token: ''           // 登录令牌
  }),

  // 计算属性：基于state的派生数据
  getters: {
    // 获取用户登录状态
    getLoginStatus: (state) => state.isLoggedIn,
    // 获取用户名
    getUsername: (state) => state.username
  },

  // 动作：修改状态的方法
  actions: {
    // 登录
    login(username: string, password: string) {
      // 这里模拟登录验证
      // 实际项目中应该调用API
      if (username && password) {
        this.isLoggedIn = true
        this.username = username
        this.token = 'mock-token-' + Date.now()
        // 保存到本地存储，刷新页面后保持登录状态
        localStorage.setItem('user', JSON.stringify({
          isLoggedIn: true,
          username: username,
          token: this.token
        }))
        return true
      }
      return false
    },

    // 登出
    logout() {
      this.isLoggedIn = false
      this.username = ''
      this.token = ''
      // 清除本地存储
      localStorage.removeItem('user')
    },

    // 初始化：从本地存储加载用户状态
    initUser() {
      const userStr = localStorage.getItem('user')
      if (userStr) {
        try {
          const user = JSON.parse(userStr)
          this.isLoggedIn = user.isLoggedIn
          this.username = user.username
          this.token = user.token
        } catch (e) {
          console.error('Failed to parse user data:', e)
          this.logout()
        }
      }
    }
  }
})