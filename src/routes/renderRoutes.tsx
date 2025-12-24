import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import type { RemoteRoute } from "./routesConfig";
import { componentMap } from "./componentMap";

import LayoutBasic from "../layout/basic/LayoutBasic";
import LayoutBlank from "../layout/blank/LayoutBlank";
import LayoutPassport from "../layout/passport/LayoutPassport";
import PageNotFound from "@/components/error/PageNotFound";

// import DetectAuthGuard from '../core/guards/DetectAuthGuard';

// const checkPermission = (permission?: string) => {
//   if (!permission) return true;
//   const userPermissions = JSON.parse(
//     localStorage.getItem("permissions") || "[]"
//   );
//   return userPermissions.includes(permission);
// };

// renderRoutes.tsx 核心逻辑修改
// const renderRouteTree = (routes: RemoteRoute[]): React.ReactNode => {
//   return routes.map((route) => {
//     const { path, layout, children, component } = route;

//     const Component = component ? componentMap[component] : null;
//     let pageElement: React.ReactNode;
//     if (component) {
//       if (Component) {
//         pageElement = React.createElement(Component);
//       } else {
//         // 如果 component 字符串存在但在 map 里找不到，显示 NotFound
//         console.warn(`路由组件 [${component}] 未在 componentMap 中注册`);
//         pageElement = <PageNotFound name={component} />;
//       }
//     } else {
//       // 如果没有 component 字段，通常是父级目录，渲染 Outlet
//       pageElement = <Outlet />;
//     }

//     let element: React.ReactNode = component
//       ? React.createElement(componentMap[component])
//       : <Outlet />;

//     if (layout) {
//       const Layout = {
//         basic: LayoutBasic,
//         blank: LayoutBlank,
//         passport: LayoutPassport,
//       }[layout] || React.Fragment;

//       element = <Layout>{element}</Layout>;
//     }

//     return (
//       <Route key={path} path={path} element={element}>
//         {children && renderRouteTree(children)}
//       </Route>
//     );
//   });
// };
const renderRouteTree = (routes: RemoteRoute[]): React.ReactNode => {
  return routes.map((route) => {
    const { path, layout, component, children } = route;

    // --- 调试开始 ---
    if (component && !componentMap[component]) {
      console.error(`错误：路由 "${path}" 指定了组件 "${component}"，但在 componentMap 中未定义！`);
    }
    // --- 调试结束 ---

    let pageElement: React.ReactNode;
    const Component = component ? componentMap[component] : null;

    if (component) {
      // 这里的判断可以防止向 React 传递 undefined
      pageElement = Component
        ? React.createElement(Component)
        : <div className="p-4 text-red-500">组件 [{component}] 丢失</div>;
    } else {
      pageElement = <Outlet />;
    }

    let finalElement = pageElement;

    if (layout) {
      const Layout = {
        basic: LayoutBasic,
        blank: LayoutBlank,
        passport: LayoutPassport,
      }[layout];

      // 如果 Layout 也是 undefined，这里会报错
      if (!Layout) {
        console.error(`错误：路由 "${path}" 指定了布局 "${layout}"，但该布局组件为 undefined。检查 import 语句！`);
        finalElement = pageElement; // 降级处理
      } else {
        finalElement = <Layout>{pageElement}</Layout>;
      }
    }

    return (
      <Route key={path} path={path} element={finalElement}>
        {children && renderRouteTree(children)}
      </Route>
    );
  });
};

export const renderRemoteRoutes = (routes: RemoteRoute[]): React.ReactNode => {
  return <Routes>{renderRouteTree(routes)}</Routes>;
};
