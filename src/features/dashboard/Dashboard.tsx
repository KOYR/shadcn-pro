import React from 'react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
    return (
        <div className="p-6 space-y-6">
            <Button onClick={() => console.log('点击了按钮')}>Button</Button>
        </div>
    );
}
