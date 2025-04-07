'use client';

import React from 'react';
import DestinationCard from '@/components/destination-card';

const sampleDestinations = [
  {
    title: 'Singapore',
    imageSrc: '/destinations/singapore.jpg',
    location: 'Singapore',
    description: 'Experience the perfect blend of modern architecture, diverse culture, and amazing cuisine in this vibrant city-state.',
    duration: '4 Days / 3 Nights',
    price: '$999',
    days: [
      {
        day: 1,
        title: 'Arrive in Singapore',
        description: 'Welcome to Singapore! Upon arrival, transfer to your hotel and enjoy an evening visit to Gardens by the Bay.',
        activities: [
          'Airport transfer to hotel',
          'Check-in at hotel',
          'Evening visit to Gardens by the Bay',
          'Supertree Grove light show'
        ],
        accommodations: '4-star hotel in Marina Bay area',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'City Tour & Cultural Discovery',
        description: 'Explore Singapore\'s diverse cultural heritage and modern attractions.',
        activities: [
          'Visit Merlion Park',
          'Explore Chinatown',
          'Shopping at Orchard Road',
          'Evening at Marina Bay Sands'
        ],
        accommodations: '4-star hotel in Marina Bay area',
        meals: ['Breakfast', 'Lunch']
      },
      {
        day: 3,
        title: 'Theme Parks & Entertainment',
        description: 'Enjoy a full day of fun and entertainment at Sentosa Island.',
        activities: [
          'Universal Studios Singapore',
          'S.E.A. Aquarium',
          'Cable car ride',
          'Wings of Time show'
        ],
        accommodations: '4-star hotel in Marina Bay area',
        meals: ['Breakfast', 'Dinner']
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Last-minute shopping and departure.',
        activities: [
          'Morning at leisure',
          'Optional visit to Singapore Zoo',
          'Transfer to airport'
        ],
        accommodations: 'None',
        meals: ['Breakfast']
      }
    ],
    includes: [
      'Hotel accommodation',
      'Daily breakfast',
      'Selected meals as per itinerary',
      'All transfers and transportation',
      'English-speaking guide',
      'Entrance fees to attractions',
      'Gardens by the Bay admission',
      'Universal Studios Singapore ticket'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional tours',
      'Visa fees (if applicable)',
      'Tips and gratuities'
    ]
  },
  // Add more destinations here...
];

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