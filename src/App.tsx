import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeProvider, useTheme } from "@/core/context/theme-provider"

function DashboardContent() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen w-full transition-colors duration-300 dark:bg-slate-950 bg-slate-50 text-slate-900 dark:text-slate-50 flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline" onClick={() => {
          console.log('222')
        }}>Button</Button>

      </div>

      <Button variant="outline">Button</Button>
      {/* 切换按钮 */}
      <button
        className="mb-8 px-4 py-2 border rounded-lg bg-primary hover:opacity-80 transition-all"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        当前模式: {theme === "dark" ? "🌙 深色" : "☀️ 浅色"} (点击切换)
      </button>

    </div >
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