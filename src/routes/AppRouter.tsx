import { Suspense } from 'react';
import { renderRemoteRoutes } from './renderRoutes';
import { routes } from './routesConfig';


export default function AppRouter() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      {renderRemoteRoutes(routes)}
    </Suspense>
  );
}
