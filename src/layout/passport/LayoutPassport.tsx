import React from 'react';
import type { ReactNode } from 'react';

interface LayoutPassportProps {
  children: ReactNode;
}

export default function LayoutPassport({ children }: LayoutPassportProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-600 to-purple-600">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
