import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Destination } from "@/types/destination";

interface DestinationModalProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
}

export default function DestinationModal({ destination, isOpen, onClose }: DestinationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {destination.title}
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            {destination.state || destination.country}
          </p>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-8">
            {/* Description */}
            <div>
              <p className="text-muted-foreground">{destination.description}</p>
            </div>

            {/* Itinerary Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Detailed Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {destination.itinerary.map((day) => (
                  <div key={day.day} className="bg-card rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {day.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Time */}
            <div>
              <h2 className="text-xl font-bold mb-4">Best Time to Visit</h2>
              <p>{destination.bestTime}</p>
            </div>

            {/* Places */}
            <div>
              <h2 className="text-xl font-bold mb-4">Places to Visit</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.places.map((place, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {place}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold mb-4">Tour Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Food */}
            <div>
              <h2 className="text-xl font-bold mb-4">Local Cuisine</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.food.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-xl font-bold mb-4">Travel Tips</h2>
              <ul className="space-y-2">
                {destination.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">ℹ</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Tours */}
            <div>
              <h2 className="text-xl font-bold mb-4">Popular Tours</h2>
              <ul className="space-y-2">
                {destination.majorTours.map((tour, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    {tour}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Inclusions</h2>
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
                <h2 className="text-xl font-bold mb-4">Exclusions</h2>
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
            <div>
              <h2 className="text-xl font-bold mb-4">Important Notes</h2>
              <div className="bg-muted p-4 rounded-lg">
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

            {/* Budgets */}
            <div>
              <h2 className="text-xl font-bold mb-4">Tour Packages</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Budget</h3>
                  <p>{destination.budgets.budgeted}</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Luxury</h3>
                  <p>{destination.budgets.luxury}</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Premier</h3>
                  <p>{destination.budgets.premier}</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-center pt-4">
              <Button size="lg" className="w-full md:w-auto">
                Book This Tour
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 