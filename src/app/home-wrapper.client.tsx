'use client';

import dynamic from 'next/dynamic';

// Loading component for better UX
function LoadingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">Loading amazing experiences...</p>
      </div>
    </div>
  );
}

// Dynamic import without ssr: false
const HomeWrapper = dynamic(() => import('@/components/home/home-wrapper'), {
  loading: LoadingComponent
});

export default HomeWrapper; 