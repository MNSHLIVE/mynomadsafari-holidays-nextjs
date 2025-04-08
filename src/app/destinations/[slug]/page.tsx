'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';
import { destinations } from '@/components/home/home-data';
import BackButton from '@/components/back-button';
import DestinationQueryForm from '@/components/destination-query-form';

interface Props {
  params: {
    slug: string;
  };
}

export default function DestinationDetail({ params }: Props) {
  const { slug } = params;

  // Combine all destinations
  const allDestinations = [
    ...destinations.domestic || [],
    ...destinations.international || []
  ];

  // Find the destination by matching the slug with the title
  const destination = allDestinations.find(d => {
    // Create a properly formatted slug from the destination title
    const destinationSlug = d.title?.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    return destinationSlug === slug;
  });

  if (!destination) {
    return notFound();
  }

  // Fallback image if destination.imageSrc is undefined
  const imageSrc = destination.imageSrc || '/placeholder-destination.jpg';
  
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src={imageSrc}
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
                    <p className="text-muted-foreground mt-2">
                      {Array.isArray(day.description) 
                        ? day.description.join('. ') 
                        : day.description}
                    </p>
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

          {/* Places to See Section */}
          {destination.placesToSee && destination.placesToSee.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Places to Visit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.placesToSee.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Food Recommendations Section */}
          {destination.foodRecommendations && destination.foodRecommendations.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Local Cuisine</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.foodRecommendations.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Travel Tips Section */}
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
            
            {destination.budgets && (
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
            )}

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