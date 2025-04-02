import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import type { VariantProps } from 'class-variance-authority';

type ButtonSize = VariantProps<typeof buttonVariants>['size'];
type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

interface Destination {
  title: string;
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
  imageSrc: string;
  description: string;
  placesToSee?: string[];
  foodRecommendations?: string[];
  tips?: string[];
  majorTours?: string[];
}

interface DestinationModalProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
}

export function DestinationModal({ destination, isOpen, onClose }: DestinationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{destination.title}</DialogTitle>
        </DialogHeader>
        
        <Button 
          onClick={onClose}
          className="absolute right-4 top-4"
          type="button"
          variant="ghost"
          size="icon"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="grid gap-6">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <img
              src={destination.imageSrc}
              alt={destination.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-muted-foreground">{destination.description}</p>
          </div>

          {destination.placesToSee && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Places to See</h3>
              <ul className="grid gap-2">
                {destination.placesToSee.map((place, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.foodRecommendations && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Must-Try Foods</h3>
              <ul className="grid gap-2">
                {destination.foodRecommendations.map((food, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.tips && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Travel Tips</h3>
              <ul className="grid gap-2">
                {destination.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.majorTours && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Popular Tours</h3>
              <ul className="grid gap-2">
                {destination.majorTours.map((tour, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tour}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 