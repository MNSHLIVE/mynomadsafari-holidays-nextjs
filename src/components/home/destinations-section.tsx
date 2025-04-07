'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import DestinationCard from '@/components/destination-card';

interface Destination {
  imageSrc: string;
  title: string;
  description: string;
  bestTime: string;
  location: string;
}

interface DestinationsSectionProps {
  title: string;
  subtitle: string;
  tag?: string;
  destinations: Destination[];
  viewAllLink: string;
  viewAllText: string;
  bgColor?: string;
}

const DestinationsSection = ({
  title,
  subtitle,
  tag,
  destinations,
  viewAllLink,
  viewAllText,
  bgColor = 'bg-background'
}: DestinationsSectionProps) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          align="center"
          tag={tag}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              destination={{
                ...destination,
                days: [],
                includes: [],
                excludes: []
              }}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href={viewAllLink}>{viewAllText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
