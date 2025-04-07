'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading component
function LoadingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
        <p className="text-muted-foreground">Please wait while we prepare your experience.</p>
      </div>
    </div>
  );
}

// Import HomeWrapper dynamically with no SSR
const HomeWrapper = dynamic(() => import('./home-wrapper'), {
  ssr: false,
  loading: LoadingComponent
});

export default function HomeClientWrapper() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <HomeWrapper />
    </Suspense>
  );
} 