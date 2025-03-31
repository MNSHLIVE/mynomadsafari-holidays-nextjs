import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  itinerary: Array<{
    day: number;
    title: string;
    description: string[];
  }>;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
}

const DestinationModal = ({
  isOpen,
  onClose,
  title,
  itinerary,
  highlights,
  inclusions,
  exclusions,
  importantNotes,
}: DestinationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-8">
            {/* Itinerary Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Detailed Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((day) => (
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

            {/* Highlights Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Tour Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Inclusions</h2>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
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
                  {exclusions.map((item, index) => (
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
                  {importantNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">ℹ</span>
                      {note}
                    </li>
                  ))}
                </ul>
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
};

export default DestinationModal; 