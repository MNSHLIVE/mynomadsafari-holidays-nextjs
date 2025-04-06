'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="mb-6 group"
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
      Back
    </Button>
  );
} 