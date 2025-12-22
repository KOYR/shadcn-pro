import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import viteLogo from '/vite.svg'
import './App.css'

// 1. 创建一个子组件，专门负责显示内容和切换主题
function DashboardContent() {
  const [count, setCount] = useState(0)
  // 此时 DashboardContent 在 ThemeProvider 内部，所以 useTheme 正常工作
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen w-full transition-colors duration-300 dark:bg-slate-950 bg-slate-50 text-slate-900 dark:text-slate-50 flex flex-col items-center justify-center">
      
      {/* 切换按钮 */}
      <button 
        className="mb-8 px-4 py-2 border rounded-lg bg-primary hover:opacity-80 transition-all"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        当前模式: {theme === "dark" ? "🌙 深色" : "☀️ 浅色"} (点击切换)
      </button>

      <h1 className="text-3xl font-bold mt-4">vite + Shadcn</h1>
      
      <div className="card mt-4 p-6 border rounded-xl shadow-sm bg-white dark:bg-slate-900">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

// 2. App 组件只负责“包裹”环境
function App() {
  return (
    // ThemeProvider 必须包裹所有需要用到主题的组件
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DashboardContent />
    </ThemeProvider>
  )
}

export default App