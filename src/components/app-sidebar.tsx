import * as LucideIcons from "lucide-react";
import { routes } from "../routes/routesConfig";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
    const menuItems = routes[0].children?.filter(r => r.title) || [];

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarMenu>
                    {menuItems.map((route) => {
                        const Icon = LucideIcons[route.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle;

                        return (
                            <SidebarMenuItem key={route.path}>
                                <SidebarMenuButton asChild tooltip={route.title}>
                                    <Link to={`/${route.path}`}>
                                        <Icon className="h-4 w-4" />
                                        <span>{route.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}