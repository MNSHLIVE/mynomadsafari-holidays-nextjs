'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Calendar, IndianRupee, Users, UtensilsCrossed, ShoppingBag, Landmark, Hotel, Utensils, Car, HeartPulse } from 'lucide-react';
import { tours } from '@/components/home/home-data';
import BackButton from '@/components/back-button';
import DestinationQueryForm from '@/components/destination-query-form';

export default function TourDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the tour by matching the slug with the title
  const tour = tours.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The tour you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button onClick={() => router.push('/tours')}>
            View All Tours
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
              src={tour.imageSrc}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {tour.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>{tour.location}</span>
              </div>
            )}
            {tour.duration && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span>{tour.duration}</span>
              </div>
            )}
            {tour.bestTime && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span>{tour.bestTime}</span>
              </div>
            )}
            {tour.groupSize && (
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                <span>{tour.groupSize}</span>
              </div>
            )}
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-muted-foreground">{tour.description}</p>
          </div>

          {tour.activities && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.itinerary && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Detailed Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h3 className="font-semibold mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.localCuisine && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
                Local Cuisine to Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.localCuisine.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.shoppingGuide && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                Shopping Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.shoppingGuide.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.culturalExperiences && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-primary" />
                Cultural Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.culturalExperiences.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.included && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.included.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.durationOptions && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tour Duration Options</h2>
              <div className="grid grid-cols-1 gap-4">
                {tour.durationOptions.map((option, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{option.title}</h3>
                        <p className="text-muted-foreground text-sm">{option.days}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end">
                          <IndianRupee className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{option.price.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">per person</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">{option.suitableFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {option.cities.map((city, cityIndex) => (
                        <span 
                          key={cityIndex}
                          className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      <Hotel className="w-4 h-4 inline-block mr-1" />
                      {option.accommodation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour.internationalGuestPerks && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Special Arrangements for International Guests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-primary" />
                    Premium Accommodations
                  </h3>
                  <ul className="space-y-1">
                    {tour.internationalGuestPerks.accommodation.map((perk, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-primary" />
                    Dining Excellence
                  </h3>
                  <ul className="space-y-1">
                    {tour.internationalGuestPerks.dining.map((perk, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Premium Transport
                  </h3>
                  <ul className="space-y-1">
                    {tour.internationalGuestPerks.transport.map((perk, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-primary" />
                    24/7 Support
                  </h3>
                  <ul className="space-y-1">
                    {tour.internationalGuestPerks.support.map((perk, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-xl shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-sm text-muted-foreground">Starting from</span>
                <div className="flex items-center">
                  <IndianRupee className="w-5 h-5 mr-1 text-primary" />
                  <span className="text-2xl font-bold">
                    {typeof tour.price === 'number' 
                      ? tour.price.toLocaleString('en-IN')
                      : tour.price}
                  </span>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">per person</span>
            </div>

            <DestinationQueryForm
              destinationName={tour.title}
              buttonText="Book Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 