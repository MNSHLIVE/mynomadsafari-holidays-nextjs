import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import DestinationQueryForm from "@/components/destination-query-form";

interface DestinationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    name: string;
    subtitle: string;
    itinerary: Array<{
      day: number;
      title: string;
      description: string[];
    }>;
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
    importantNotes: string[];
  };
}

const DestinationDetailModal = ({
  isOpen,
  onClose,
  destination,
}: DestinationDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {destination.name}
            <span className="block text-lg font-normal text-muted-foreground mt-1">
              {destination.subtitle}
            </span>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-8">
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

            {/* Highlights Section */}
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

            {/* Query Form */}
            <div>
              <h2 className="text-xl font-bold mb-4">Book This Tour</h2>
              <DestinationQueryForm
                destinationName={destination.name}
                buttonText="Send Booking Request"
                buttonVariant="default"
                className="w-full"
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailModal; 