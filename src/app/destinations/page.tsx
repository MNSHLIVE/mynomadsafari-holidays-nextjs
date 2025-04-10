'use client';

import React from 'react';
import DestinationCard from '@/components/destination-card';


export default function DestinationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Destinations</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our handpicked destinations and find your perfect getaway. Each destination offers unique experiences and carefully curated itineraries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleDestinations.map((destination, index) => (
            <DestinationCard key={index} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
} 
