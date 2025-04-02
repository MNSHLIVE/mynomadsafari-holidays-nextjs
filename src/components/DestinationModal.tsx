import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Destination {
  title: string;
  description?: string;
  imageSrc?: string;
  itinerary?: Array<{
    day: string;
    title: string;
    description: string;
  }>;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  importantNotes?: string[];
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

const DestinationModal: React.FC<DestinationModalProps> = ({ destination, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{destination.title}</DialogTitle>
        </DialogHeader>
        
        <Button 
          onClick={onClose}
          className="absolute right-4 top-4"
          variant="ghost"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="grid gap-6">
          {destination.imageSrc && (
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src={destination.imageSrc}
                alt={destination.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {destination.description && (
            <div>
              <p className="text-muted-foreground">{destination.description}</p>
            </div>
          )}

          {destination.itinerary && destination.itinerary.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Itinerary</h3>
              <div className="space-y-4">
                {destination.itinerary.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">{item.day}: {item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {destination.highlights && destination.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Highlights</h3>
              <ul className="grid gap-2">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.inclusions && destination.inclusions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Inclusions</h3>
              <ul className="grid gap-2">
                {destination.inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {inclusion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.exclusions && destination.exclusions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Exclusions</h3>
              <ul className="grid gap-2">
                {destination.exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {exclusion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.importantNotes && destination.importantNotes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Important Notes</h3>
              <ul className="grid gap-2">
                {destination.importantNotes.map((note, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.placesToSee && destination.placesToSee.length > 0 && (
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

          {destination.foodRecommendations && destination.foodRecommendations.length > 0 && (
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

          {destination.tips && destination.tips.length > 0 && (
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

          {destination.majorTours && destination.majorTours.length > 0 && (
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
};

export default DestinationModal; 