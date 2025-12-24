// src/routes/routesConfig.ts
import {
  LayoutDashboard,
  Activity,
  Settings,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export interface RemoteRoute {
  path: string;
  title: string;
  icon?: any; // 这里存 Lucide 图标组件
  layout?: "basic" | "blank" | "passport";
  component?: string;
  children?: RemoteRoute[];
}

export const routes: RemoteRoute[] = [
  {
    path: "/",
    layout: "basic",
    title: "根路由",
    children: [
      {
        path: "dashboard",
        component: "Dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
      },
      {
        path: "lifecycle",
        component: "Lifecycle",
        title: "Lifecycle",
        icon: ShieldCheck,
      },
      {
        path: "analytics",
        component: "Analytics",
        title: "Analytics",
        icon: BarChart3,
      },
      {
        path: "monitors",
        component: "MonitorList",
        title: "Monitors",
        icon: Activity,
        children: [
          {
            path: "monitors/mysql",
            title: "MySQL",
            component: "MySQLPage",
            icon: Activity,
          },
          {
            path: "monitors/redis",
            title: "Redis",
            component: "RedisPage",
            icon: Activity,
          },
        ],
      },
      {
        path: "settings",
        component: "Settings",
        title: "Settings",
        icon: Settings,
      },
    ],
  },
  {
    path: '*',
    layout: 'basic', 
    component: 'PageNotFound',
    title: '404'
  }
];
