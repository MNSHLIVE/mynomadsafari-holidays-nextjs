'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error handler:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        {error.message || 'An unexpected error occurred. Our team has been notified.'}
      </p>
      <div className="space-x-4">
        <Button
          onClick={() => {
            reset();
          }}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => {
            window.location.href = '/';
          }}
          variant="outline"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
} 