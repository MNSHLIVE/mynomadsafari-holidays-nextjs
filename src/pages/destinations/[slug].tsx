'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';
import { destinations } from '@/components/home/home-data';
import BackButton from '@/components/back-button';
import DestinationQueryForm from '@/components/destination-query-form';

export default function DestinationDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Combine all destinations
  const allDestinations = [
    ...destinations.domestic,
    ...destinations.international
  ];

  // Find the destination by matching the slug with the title
  const destination = allDestinations.find(d => 
    d.title?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === slug
  );

  // Show loading state while the page is loading
  if (router.isFallback || !slug) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-[400px] bg-gray-200 rounded-xl mb-8"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The destination you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button onClick={() => router.push('/destinations')}>
            View All Destinations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src={destination.image || destination.imageSrc}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{destination.title}</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {destination.state && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>{destination.state}</span>
              </div>
            )}
            {destination.bestTime && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span>Best time: {destination.bestTime}</span>
              </div>
            )}
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-muted-foreground">{destination.description}</p>
          </div>

          {/* Itinerary Section */}
          {destination.itinerary && destination.itinerary.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Detailed Itinerary</h2>
              <div className="space-y-6">
                {destination.itinerary.map((day, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <h3 className="font-semibold text-lg">Day {day.day}: {day.title}</h3>
                    <p className="text-muted-foreground mt-2">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights Section */}
          {destination.highlights && destination.highlights.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Trip Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {destination.places && destination.places.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Places to Visit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.places.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {destination.food && destination.food.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Local Cuisine</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.food.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {destination.tips && destination.tips.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
              <div className="grid grid-cols-1 gap-4">
                {destination.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-xl shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Package Types</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Budgeted</span>
                  <span className="font-medium">{destination.budgets.budgeted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Luxury</span>
                  <span className="font-medium">{destination.budgets.luxury}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Premier</span>
                  <span className="font-medium">{destination.budgets.premier}</span>
                </div>
              </div>
            </div>

            <DestinationQueryForm
              destinationName={destination.title}
              buttonText="Enquire Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 