"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, IndianRupee, Users } from "lucide-react";
import { Tour } from "@/components/home/home-data";
import DestinationQueryForm from "./destination-query-form";

interface TourItineraryModalProps {
  tour: Tour;
  isOpen: boolean;
  onClose: () => void;
  selectedDuration?: string;
}

const TourItineraryModal = ({ tour, isOpen, onClose, selectedDuration }: TourItineraryModalProps) => {
  if (!tour.itinerary || !Array.isArray(tour.itinerary)) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {tour.title}
          </DialogTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{tour.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{tour.bestTime}</span>
            </div>
            <div className="flex items-center">
              <IndianRupee className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-semibold">{tour.price}</span>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-200px)] pr-4">
          <div className="space-y-6">
            {/* Detailed Itinerary */}
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

            {/* Book Now Form */}
            <div className="mt-8">
              <DestinationQueryForm
                destinationName={tour.title}
                buttonText="Book This Tour"
                className="w-full"
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TourItineraryModal; 