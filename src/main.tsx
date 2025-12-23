import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App from './routes/App';

// 1. 必须首先引入全局样式，确保 shadcn 和 Tailwind 生态生效
import './styles/globals.css'

// 2. 如果有国际化需求，在这里初始化 i18n 配置
// import './lib/i18n' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 所有的全局 Provider 都已经被封装在 App 组件内 */}
    {/* <App /> */}
    <App />
  </React.StrictMode>,
)