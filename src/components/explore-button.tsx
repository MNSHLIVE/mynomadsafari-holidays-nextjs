'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ExploreButton = () => {
  return (
    <Button asChild className="group">
      <Link href="/destinations">
        <span>Explore</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
};

export default ExploreButton; 