"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: React.ReactNode // 修改为 ReactNode 以兼容 React.createElement
        items?: {              // 增加子项定义
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => {
                    const hasChildren = item.items && item.items.length > 0

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                {hasChildren ? (
                                    <>
                                        {/* 有二级菜单的情况 */}
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <Link to={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </>
                                ) : (
                                    /* 只有一级菜单的情况 */
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <Link to={item.url}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}