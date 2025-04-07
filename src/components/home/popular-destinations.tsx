'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import Image from 'next/image';

interface Destination {
  imageSrc: string;
  title: string;
  description: string;
  bestTime: string;
}

interface PopularDestinationsProps {
  destinations: Destination[];
}

const PopularDestinations = ({ destinations }: PopularDestinationsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Popular Destinations"
          subtitle="Explore our handpicked destinations for your next adventure"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={destination.imageSrc}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-sm text-white/80 mb-2">{destination.description}</p>
                <p className="text-sm">
                  <span className="font-semibold">Best Time:</span> {destination.bestTime}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 