<template>
  <div class="news-page">
    <header class="news-header">
      <h1>最新动态</h1>
      <p>了解我的学习和项目进展</p>
    </header>
    
    <section class="news-list">
      <div class="news-card" v-for="news in newsItems" :key="news.id">
        <div class="news-date">{{ news.date }}</div>
        <h2>{{ news.title }}</h2>
        <p>{{ news.content }}</p>
        <div class="news-tag">{{ news.tag }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang = "ts">
// 新闻页面组件
import { ref } from 'vue';

const newsItems = ref([
  {
    id: 1,
    title: '网站正式上线',
    content: '经过一段时间的学习和开发，我的个人网站终于正式上线了！这是我第一个完整的前端项目，虽然还有很多需要改进的地方，但我会继续努力学习和完善。',
    date: '2026-03-21',
    tag: '网站更新'
  },
  {
    id: 2,
    title: '学习Vue 3组合式API',
    content: '最近在学习Vue 3的组合式API，这种新的编写方式让代码组织更加清晰，逻辑复用更加方便。我正在尝试将这些知识应用到实际项目中。',
    date: '2026-03-15',
    tag: '学习笔记'
  },
  {
    id: 3,
    title: '完成第一个小项目',
    content: '我完成了我的第一个前端小项目 - 一个简单的待办事项应用。通过这个项目，我学习了Vue的基本概念和组件化开发。',
    date: '2026-03-10',
    tag: '项目完成'
  },
  {
    id: 4,
    title: '开始学习CSS动画',
    content: '最近开始学习CSS动画，尝试为网站添加一些生动的交互效果。动画可以让网站更加吸引人，提升用户体验。',
    date: '2026-03-05',
    tag: '学习笔记'
  }
]);
</script>

<style scoped>
.news-page {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
}

.news-header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
}

.news-header h1 {
  font-size: 2.5rem;
  margin: 0 0 12px 0;
}

.news-header p {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.news-card {
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.news-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
}

.news-card h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #4facfe;
}

.news-card p {
  margin-bottom: 16px;
  line-height: 1.6;
  color: #555;
}

.news-tag {
  display: inline-block;
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .news-header h1 {
    font-size: 2rem;
  }
  
  .news-card {
    padding: 20px;
  }
  
  .news-card h2 {
    font-size: 1.2rem;
  }
}
</style>