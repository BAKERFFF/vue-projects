<template>
  <div class="home-page">
    <header class="hero-section">
      <div class="hero-content">
        <h1>欢迎来到我的个人网站</h1>
        <p>一个新手程序员的学习与成长空间</p>
        <div class="cta-buttons">
          <router-link to="/about" class="btn btn-primary">了解更多</router-link>
          <router-link to="/news" class="btn btn-secondary">查看新闻</router-link>
        </div>
      </div>
    </header>
    
    <section class="feature-section">
      <h2>网站特色</h2>
      <div class="features">
        <div class="feature-card">
          <h3>学习记录</h3>
          <p>记录我的编程学习历程和心得</p>
        </div>
        <div class="feature-card">
          <h3>项目展示</h3>
          <p>展示我开发的各种小项目</p>
        </div>
        <div class="feature-card">
          <h3>技术分享</h3>
          <p>分享我学习到的技术知识</p>
        </div>
      </div>
    </section>
    
    <section class="recent-updates">
      <h2>最新动态</h2>
      <div class="update-card">
        <h3>网站上线啦！</h3>
        <p>我的个人网站正式上线，欢迎大家访问！</p>
        <span class="date">2026-03-21</span>
      </div>
    </section>
  </div>
</template>

<script setup>
// 简单的首页组件
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
  color: #333;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: white;
  color: #667eea;
}

.btn-primary:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.feature-section {
  padding: 60px 20px;
  text-align: center;
}

.feature-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
}

.features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.feature-card {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #667eea;
}

.recent-updates {
  padding: 40px 20px;
  background-color: #f0f0f0;
  text-align: center;
}

.recent-updates h2 {
  font-size: 1.8rem;
  margin-bottom: 24px;
  color: #333;
}

.update-card {
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.update-card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #667eea;
}

.update-card p {
  margin-bottom: 12px;
  line-height: 1.5;
}

.date {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .features {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-card {
    width: 90%;
  }
}
</style>