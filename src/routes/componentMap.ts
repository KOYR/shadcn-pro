// componentMap.ts
import { lazy } from "react";

export const componentMap: Record<string, React.LazyExoticComponent<any>> = {
  Dashboard: lazy(() => import("../features/dashboard/Dashboard")),
  //   Bulletin: lazy(() => import("./features/bulletin/Bulletin")),
  //   StatusPublic: lazy(() => import("./features/status-public/StatusPublic")),
  //   UserLogin: lazy(() => import("./features/passport/login/UserLogin")),
  //   UserLock: lazy(() => import("./features/passport/lock/UserLock")),
  //   ExceptionModule: lazy(() => import("./features/exception/ExceptionModule")),
  //   MonitorModule: lazy(() => import("./features/monitor/MonitorModule")),
};

// TODO自动化引入
// import { lazy } from "react";
// const modules = import.meta.glob('../features/**/page.tsx');
// export const componentMap: Record<string, React.LazyExoticComponent<any>> =
//   Object.fromEntries(
//     Object.entries(modules).map(([path, loader]) => {
//       // ../features/dashboard/page.tsx → dashboard
//       const name = path
//         .replace('../features/', '')
//         .replace('/page.tsx', '')
//         .replace(/\//g, '-'); // 多级目录支持

//       return [name, lazy(loader as any)];
//     })
//   );
