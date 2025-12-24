import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/basic/app-sidebar";
import { SiteHeader } from "@/layout/basic/site-header"
import { Outlet } from "react-router-dom"

export default function LayoutBasic({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {/* 这里的 AppSidebar 会自动根据你的 routesConfig 渲染菜单 */}
            <AppSidebar />

            <SidebarInset className="flex flex-col h-screen overflow-hidden">
                <SiteHeader />


                {/* 内容区使用 overflow-auto 确保只有中间滚动，侧边栏固定 */}
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    {children || <Outlet />}
                </main>
            </SidebarInset>

        </SidebarProvider>
    );
}