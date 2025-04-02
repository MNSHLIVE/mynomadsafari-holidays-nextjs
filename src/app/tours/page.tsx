'use client';

import { PackageCalculator } from '@/components/PackageCalculator';
import { TourCard } from '@/components/TourCard';

const domesticTours = [
  {
    id: 1,
    title: "Rajasthan Royal Tour",
    description: "Experience the royal heritage of Rajasthan",
    image: "/Destination/Domestic/Tours/rajasthan-tour.jpg",
    duration: "7 Days",
    basePrice: 35000,
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    description: "Explore the serene backwaters of Kerala",
    image: "/Destination/Domestic/Tours/kerala-tour.jpg",
    duration: "6 Days",
    basePrice: 30000,
  },
  {
    id: 3,
    title: "Goa Beach Holiday",
    description: "Enjoy the beaches and nightlife of Goa",
    image: "/Destination/Domestic/Tours/goa-tour.jpg",
    duration: "5 Days",
    basePrice: 25000,
  }
];

const internationalTours = [
  {
    id: 1,
    title: "Dubai Adventure",
    description: "Discover the wonders of Dubai",
    image: "/Destination/International/Tours/dubai-tour.jpg",
    duration: "5 Days",
    basePrice: 75000,
  },
  {
    id: 2,
    title: "Thailand Explorer",
    description: "Experience the best of Thailand",
    image: "/Destination/International/Tours/thailand-tour.jpg",
    duration: "6 Days",
    basePrice: 65000,
  },
  {
    id: 3,
    title: "Singapore Family Fun",
    description: "Explore the best of Singapore",
    image: "/Destination/International/Tours/singapore-tour.jpg",
    duration: "5 Days",
    basePrice: 80000,
  }
];

export default function Tours() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Our Tours</h1>
      
      {/* Domestic Tours */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Domestic Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domesticTours.map((tour) => (
            <div key={tour.id} className="space-y-4">
              <TourCard tour={tour} />
              <PackageCalculator basePrice={tour.basePrice} title={tour.title} />
            </div>
          ))}
        </div>
      </section>

      {/* International Tours */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">International Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalTours.map((tour) => (
            <div key={tour.id} className="space-y-4">
              <TourCard tour={tour} />
              <PackageCalculator basePrice={tour.basePrice} title={tour.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 