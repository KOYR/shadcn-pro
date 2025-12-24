"use client"

import { FileQuestion, ArrowLeft, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface PageNotFoundProps {
  name?: string
  title?: string
  description?: string
}

export default function PageNotFound({ 
  name, 
  title = "页面找不到了", 
  description = "抱歉，我们找不到您要访问的页面。它可能已被移动、删除或尚未开发。" 
}: PageNotFoundProps) {
  const navigate = useNavigate()

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-background px-4 antialiased">
      {/* 装饰性的背景发光效果 */}
      <div className="absolute -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="flex flex-col items-center text-center">
        {/* 图标区域 */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-muted/50 ring-1 ring-border">
          <FileQuestion className="h-12 w-12 text-muted-foreground animate-pulse" />
        </div>

        {/* 文字区域 */}
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          404
        </h1>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          {name ? `组件 [${name}] 缺失` : title}
        </h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          {description}
        </p>

        {/* 按钮区域 */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            回到首页
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            返回上一页
          </Button>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="mt-16 flex items-center gap-2 text-sm text-muted-foreground/60">
        <div className="h-px w-8 bg-border" />
        <span>HertzBeat Monitoring System</span>
        <div className="h-px w-8 bg-border" />
      </div>
    </div>
  )
}