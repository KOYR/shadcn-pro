// routesConfig.ts
import { lazy } from 'react';

export interface RemoteRoute {
    path: string;
    layout?: 'basic' | 'blank' | 'passport';
    guard?: boolean;
    redirect?: string;
    children?: RemoteRoute[];
    component?: string;
    permission?: string;
    title?: string;
}

export const routes: RemoteRoute[] = [
    {
        path: '/',
        layout: 'basic',
        guard: true,
        children: [
            { path: '', redirect: 'dashboard' },
            { path: 'dashboard', component: 'Dashboard', title: 'Dashboard' },
            // { path: 'bulletin', component: 'Bulletin', title: 'Bulletin' },
            // { path: 'exception/*', component: 'ExceptionModule' },
            // { path: 'monitors/*', component: 'MonitorModule', title: 'Monitor' }
        ]
    },
    // {
    //     path: '/status',
    //     layout: 'blank',
    //     children: [{ path: '', component: 'StatusPublic', title: 'Status' }]
    // },
    // {
    //     path: '/passport',
    //     layout: 'passport',
    //     children: [
    //         { path: 'login', component: 'UserLogin', title: 'Login' },
    //         { path: 'lock', component: 'UserLock', title: 'Lock' }
    //     ]
    // },
    // { path: '*', redirect: '/exception/404' }
];
