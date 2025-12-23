import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom"

export default function LayoutBasic({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {/* 这里的 AppSidebar 会自动根据你的 routesConfig 渲染菜单 */}
            <AppSidebar />

            <SidebarInset className="flex flex-col h-screen overflow-hidden">
                <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-background">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex-1 font-medium">HertzBeat 监控系统</div>
                    {/* 这里可以放全屏切换、用户中心等 */}
                </header>

                {/* 内容区使用 overflow-auto 确保只有中间滚动，侧边栏固定 */}
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    {children || <Outlet />}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}