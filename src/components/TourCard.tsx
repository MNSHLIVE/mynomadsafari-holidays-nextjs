import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, MapPin, Calendar, IndianRupee, Users } from 'lucide-react';
import DestinationQueryForm from './destination-query-form';

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  basePrice: number;
  price?: number;
  location?: string;
  bestTime?: string;
  groupSize?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    imageSrc?: string;
  }>;
}

interface TourCardProps {
  tour: Tour;
  className?: string;
}

export function TourCard({ tour, className }: TourCardProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Log the image path when component mounts
    console.log('Attempting to load image:', tour.image);
  }, [tour.image]);

  const handleImageError = () => {
    console.error('Image failed to load:', tour.image);
    // Log the full URL that was attempted
    console.error('Full URL attempted:', window.location.origin + tour.image);
    setImageError(true);
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg bg-white ${className}`}>
      <div className="relative h-48">
        {!imageError ? (
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center flex-col p-4">
            <span className="text-gray-500 text-sm text-center">Image not available</span>
            <span className="text-gray-400 text-xs mt-2 text-center break-all">{tour.image}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">{tour.duration}</span>
          <span className="text-primary font-bold">₹{tour.basePrice.toLocaleString()}</span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{tour.title} - Tour Details</DialogTitle>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {tour.location && (
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                )}
                {tour.duration && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                )}
                {tour.bestTime && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tour.bestTime}</span>
                  </div>
                )}
                {tour.groupSize && (
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tour.groupSize}</span>
                  </div>
                )}
              </div>
            </DialogHeader>
            <ScrollArea className="h-[60vh] pr-4">
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Detailed Day-by-Day Itinerary</h3>
                    <div className="space-y-4">
                      {tour.itinerary.map((day, index) => (
                        <div key={index} className="space-y-2">
                          <h3 className="text-lg font-semibold">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-8">
                <DestinationQueryForm
                  destinationName={tour.title}
                  buttonText="Book This Tour"
                  className="w-full"
                />
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 