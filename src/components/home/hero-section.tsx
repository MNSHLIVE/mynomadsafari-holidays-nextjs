'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "Discover Your Next Adventure",
  subtitle = "Explore breathtaking destinations and create unforgettable memories with our expertly crafted travel packages.",
  ctaText = "Explore Tours",
  ctaLink = "/tours"
}: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button asChild size="lg" className="group">
          <Link href={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection; 