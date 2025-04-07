'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TourCard from '@/components/tour-card';
import SectionHeading from '@/components/section-heading';

interface Tour {
  id: string;
  title: string;
  imageSrc: string;
  location: string;
  duration: string;
  price: string;
  bestTime: string;
  packageType: "Budgeted";
  description: string;
}

interface FeaturedToursProps {
  tours: Tour[];
}

const FeaturedTours = ({ tours }: FeaturedToursProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Tours"
          subtitle="Discover our most popular travel experiences"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tours.map((tour) => (
            <div key={tour.id} className="h-full">
              <TourCard tour={tour} className="h-full" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/tours">View All Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours; 