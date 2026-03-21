<template>
  <div class="about-page">
    <header class="about-header">
      <h1>关于我的网站</h1>
    </header>
    
    <section class="about-content">
      <div class="about-card">
        <h2>网站简介</h2>
        <p>这是一个由新手程序员创建的个人网站，旨在记录学习历程、展示项目成果并分享技术心得。</p>
        <p>作为一名刚入门的程序员，我希望通过这个网站来：</p>
        <ul>
          <li>记录我的学习过程和成长经历</li>
          <li>展示我开发的各种小项目</li>
          <li>分享我学习到的技术知识</li>
          <li>与其他开发者交流和学习</li>
        </ul>
      </div>
      
      <div class="about-card">
        <h2>技术栈</h2>
        <div class="tech-stack">
          <div class="tech-item">Vue 3</div>
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">HTML/CSS</div>
          <div class="tech-item">Vue Router</div>
        </div>
      </div>
      
      <div class="about-card">
        <h2>未来计划</h2>
        <p>在未来，我希望能够：</p>
        <ul>
          <li>学习更多前端框架和库</li>
          <li>开发更多实用的小工具</li>
          <li>分享更多技术文章和教程</li>
          <li>与更多开发者建立联系</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
// 关于页面组件
</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
}

.about-header {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.about-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.about-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #f5576c;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
}

.about-card p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.about-card ul {
  list-style-type: none;
  padding: 0;
}

.about-card ul li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.about-card ul li::before {
  content: "•";
  color: #f5576c;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.tech-item {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2rem;
  }
  
  .about-card {
    padding: 20px;
  }
}
</style>