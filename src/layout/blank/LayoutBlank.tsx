import React from 'react';
import type { ReactNode } from 'react';

interface LayoutBlankProps {
  children: ReactNode;
}

export default function LayoutBlank({ children }: LayoutBlankProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
