'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';
import { destinations } from '@/data/destinations';
import BackButton from '@/components/back-button';
import DestinationQueryForm from '@/components/destination-query-form';

export default function DestinationDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the destination by matching the slug with the title
  const destination = destinations.find(d => 
    d.title?.toLowerCase().replace(/\s+/g, '-') === slug
  );

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
    <div className="container mx-auto px-4 pt-24 pb-16">
      <BackButton />
      
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={destination.imageSrc}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            {destination.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About {destination.title}</h2>
          <p className="text-muted-foreground mb-6">{destination.description}</p>

          {/* Best Time to Visit */}
          {destination.bestTime && (
            <div className="bg-muted/30 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-muted-foreground">{destination.bestTime}</p>
            </div>
          )}

          {/* Places to See */}
          {destination.placesToSee && destination.placesToSee.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Places to See</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.placesToSee.map((place, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Food Recommendations */}
          {destination.foodRecommendations && destination.foodRecommendations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Food Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.foodRecommendations.map((food, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{food}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {destination.tips && destination.tips.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Plan Your Trip</h3>
            <DestinationQueryForm 
              destinationName={destination.title} 
              buttonText="Enquire Now"
            />
          </div>

          {/* Major Tours */}
          {destination.majorTours && destination.majorTours.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Major Tours</h3>
              <div className="space-y-4">
                {destination.majorTours.map((tour, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-medium mb-2">{tour}</h4>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 