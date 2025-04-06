'use client';

import { useSearchParams } from 'next/navigation';
import { destinations } from '@/components/home/home-data';
import DestinationCard from '@/components/destination-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function DestinationsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const allDestinations = [
    ...destinations.domestic,
    ...destinations.international
  ];

  const filterDestinations = (category: string | null) => {
    switch (category) {
      case 'beaches':
        return allDestinations.filter(d => d.type === 'beach');
      case 'mountains':
        return allDestinations.filter(d => d.type === 'mountain');
      case 'pilgrimage':
        return allDestinations.filter(d => d.type === 'pilgrimage');
      case 'heritage':
        return allDestinations.filter(d => d.type === 'heritage');
      case 'international':
        return destinations.international;
      case 'adventure':
        return allDestinations.filter(d => d.type === 'adventure');
      default:
        return allDestinations;
    }
  };

  const filteredDestinations = filterDestinations(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Explore Destinations</h1>
      <p className="text-muted-foreground mb-8">
        Discover amazing places and plan your perfect trip
      </p>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Destinations</TabsTrigger>
          <TabsTrigger value="domestic">Domestic</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                imageSrc={destination.image}
                title={destination.title}
                description={destination.description}
                bestTime={destination.bestTime}
                isPopular={destination.isPopular}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="domestic">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.domestic.map((destination, index) => (
              <DestinationCard
                key={index}
                imageSrc={destination.image}
                title={destination.title}
                description={destination.description}
                bestTime={destination.bestTime}
                isPopular={destination.isPopular}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="international">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.international.map((destination, index) => (
              <DestinationCard
                key={index}
                imageSrc={destination.image}
                title={destination.title}
                description={destination.description}
                bestTime={destination.bestTime}
                isPopular={destination.isPopular}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 