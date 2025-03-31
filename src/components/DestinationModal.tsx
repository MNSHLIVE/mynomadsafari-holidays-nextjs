import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
}

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination;
}

export function DestinationModal({ isOpen, onClose, destination }: DestinationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{destination.title} Tour Details</DialogTitle>
        </DialogHeader>
        
        {/* Itinerary Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Detailed Itinerary</h3>
          <div className="space-y-4">
            {destination.itinerary.map((day, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary">{day.day}</h4>
                <h5 className="font-medium mt-1">{day.title}</h5>
                <p className="text-gray-600 mt-1">{day.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {destination.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Inclusions</h3>
            <ul className="space-y-2">
              {destination.inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
            <ul className="space-y-2">
              {destination.exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {destination.importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">ℹ</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
} 