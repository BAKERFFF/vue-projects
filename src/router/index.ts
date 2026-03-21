import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Pages/HomePage.vue'
import AboutPage from '../components/Pages/AboutPage.vue'
import NewsPage from '../components/Pages/NewsPage.vue'
import LoginPage from '../components/Pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  //history可以支持HTML5的history模式，createWebHistory()函数会根据当前环境自动选择合适的历史记录模式，还可以前进和后退功能
  routes
})

export default router