import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  basePrice: number;
  price?: number; // Optional for backward compatibility
  highlights?: string[]; // Optional for backward compatibility
}

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Log the image path when component mounts
    console.log('Attempting to load image:', tour.image);
  }, [tour.image]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', tour.image);
    // Log the full URL that was attempted
    console.error('Full URL attempted:', window.location.origin + tour.image);
    setImageError(true);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-48">
        {!imageError ? (
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
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
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{tour.duration}</span>
          <span className="text-primary font-bold">₹{tour.basePrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
} 