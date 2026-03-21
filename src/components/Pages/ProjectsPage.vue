<template>
  <div class="projects-page">
    <header class="projects-header">
      <h1>我的项目</h1>
      <p>这里展示我开发的各种项目</p>
    </header>

    <section class="projects-grid">
      <!-- 项目1：Vue个人网站 -->
      <div class="project-card">
        <div class="project-icon">
          <span class="icon">🚀</span>
        </div>
        <h2>Vue个人网站</h2>
        <p>使用Vue 3 + TypeScript + Pinia开发的个人网站，包含首页、关于、新闻、登录等功能模块。</p>
        <div class="project-tags">
          <span class="tag">Vue 3</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Pinia</span>
        </div>
        <a 
          href="https://github.com/BAKERFFF/vue-projects" 
          target="_blank" 
          class="project-link"
        >
          查看项目 →
        </a>
      </div>

      <!-- 项目2：待办事项应用 -->
      <div class="project-card">
        <div class="project-icon">
          <span class="icon">✅</span>
        </div>
        <h2>待办事项应用</h2>
        <p>一个简单的待办事项管理应用，支持添加、删除、标记完成等功能。</p>
        <div class="project-tags">
          <span class="tag">Vue 3</span>
          <span class="tag">JavaScript</span>
        </div>
        <a href="#" class="project-link">查看项目 →</a>
      </div>

      <!-- 项目3：天气查询应用 -->
      <div class="project-card">
        <div class="project-icon">
          <span class="icon">🌤️</span>
        </div>
        <h2>天气查询应用</h2>
        <p>调用第三方API查询实时天气信息，支持多个城市切换。</p>
        <div class="project-tags">
          <span class="tag">Vue 3</span>
          <span class="tag">API</span>
          <span class="tag">Axios</span>
        </div>
        <a href="#" class="project-link">查看项目 →</a>
      </div>

      <!-- 项目4：计算器应用 -->
      <div class="project-card">
        <div class="project-icon">
          <span class="icon">🧮</span>
        </div>
        <h2>计算器应用</h2>
        <p>一个功能完善的计算器，支持基本运算和科学计算。</p>
        <div class="project-tags">
          <span class="tag">Vue 3</span>
          <span class="tag">CSS</span>
        </div>
        <router-link to="/calculator" class="project-link">查看项目 →</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 项目展示页面
</script>

<style scoped>
.projects-page {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
}

.projects-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
}

.projects-header h1 {
  font-size: 2.5rem;
  margin: 0 0 12px 0;
}

.projects-header p {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  text-align: center;
}

.project-card h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #667eea;
}

.project-card p {
  margin-bottom: 16px;
  line-height: 1.6;
  color: #555;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-link {
  display: inline-block;
  background-color: #667eea;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: #5a6fd8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .projects-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 20px;
  }
}
</style>