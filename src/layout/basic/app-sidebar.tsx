"use client"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
// import { NavDocuments } from "@/app/(examples)/dashboard/components/nav-documents"
import { NavMain } from "@/layout/basic/nav-main"
// import { NavSecondary } from "@/layout/basic/nav-secondary"
// import { NavUser } from "@/layout/basic/nav-user"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Lifecycle",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Analytics",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Projects",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Team",
            url: "#",
            icon: <span>ss</span>,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: <span>ss</span>,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: <span>ss</span>,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: <span>ss</span>,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Get Help",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            title: "Search",
            url: "#",
            icon: <span>ss</span>,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            name: "Reports",
            url: "#",
            icon: <span>ss</span>,
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: <span>ss</span>,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                {/* <IconInnerShadowTop className="!size-5" /> */}
                                <span className="text-base font-semibold">Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavDocuments items={data.documents} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            <SidebarFooter>
                {/* <NavUser user={data.user} /> */}
            </SidebarFooter>
        </Sidebar>
    )
}