/// <reference types="vite/client" />

// 声明 .vue 文件
// 这告诉 TypeScript：.vue 文件是一种组件，可以被导入使用
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}