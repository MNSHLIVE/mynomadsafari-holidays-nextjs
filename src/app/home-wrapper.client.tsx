'use client';

import dynamic from 'next/dynamic';

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

const HomeWrapper = dynamic(() => import('@/components/home/home-wrapper'), {
  loading: LoadingComponent
});

export default HomeWrapper; 