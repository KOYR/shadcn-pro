import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import type { RemoteRoute } from "./routesConfig";
import { componentMap } from "./componentMap";

import LayoutBasic from "../layout/basic/LayoutBasic";
import LayoutBlank from "../layout/blank/LayoutBlank";
import LayoutPassport from "../layout/passport/LayoutPassport";

// import DetectAuthGuard from '../core/guards/DetectAuthGuard';

// const checkPermission = (permission?: string) => {
//   if (!permission) return true;
//   const userPermissions = JSON.parse(
//     localStorage.getItem("permissions") || "[]"
//   );
//   return userPermissions.includes(permission);
// };

// renderRoutes.tsx 核心逻辑修改
const renderRouteTree = (routes: RemoteRoute[]): React.ReactNode => {
  return routes.map((route) => {
    const { path, layout, children, component } = route;

    let element: React.ReactNode = component
      ? React.createElement(componentMap[component])
      : <Outlet />;

    if (layout) {
      const Layout = {
        basic: LayoutBasic,
        blank: LayoutBlank,
        passport: LayoutPassport,
      }[layout] || React.Fragment;

      element = <Layout>{element}</Layout>;
    }

    return (
      <Route key={path} path={path} element={element}>
        {children && renderRouteTree(children)}
      </Route>
    );
  });
};

export const renderRemoteRoutes = (routes: RemoteRoute[]): React.ReactNode => {
  return <Routes>{renderRouteTree(routes)}</Routes>;
};
