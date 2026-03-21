<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">我的网站</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" exact-active-class="active">首页</router-link>
        <router-link to="/about" class="nav-link" exact-active-class="active">关于</router-link>
        <router-link to="/news" class="nav-link" exact-active-class="active">新闻</router-link>
        <template v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link" exact-active-class="active">登录</router-link>
        </template>
        <template v-else>
          <span class="user-info">欢迎，{{ username }}</span>
          <button class="logout-button" @click="handleLogout">登出</button>
        </template>
      </div>
    </nav>
    
    <!-- 路由出口 -->
    <main class="main-content">
      <router-view></router-view>
    </main>
    
    <!-- 页脚 -->
    <footer class="footer">
      <p>&copy; 2026 我的个人网站. 保留所有权利.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user'

const userStore = useUserStore()
const router = useRouter()

// 计算属性：获取登录状态
const isLoggedIn = computed(() => userStore.getLoginStatus)

// 计算属性：获取用户名
const username = computed(() => userStore.getUsername)

// 登出方法
const handleLogout = () => {
  userStore.logout()
  // 登出后跳转到登录页
  router.push('/login')
}

// 初始化用户状态
onMounted(() => {
  userStore.initUser()
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #ffffff;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f0f0f0;
  color: #667eea;
}

.nav-link.active {
  background-color: #667eea;
  color: white;
}

.user-info {
  color: #667eea;
  font-weight: 500;
}

.logout-button {
  background-color: #f5576c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-button:hover {
  background-color: #e0465b;
  transform: translateY(-2px);
}

.main-content {
  flex: 1;
  padding: 0;
}

.footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  color: #666;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
}
</style>