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
import { Tour } from "@/data/tours";
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

  // Find the selected duration option if available
  const selectedOption = tour.durationOptions?.find(
    option => option.days === selectedDuration
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {selectedOption?.title || tour.title}
          </DialogTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{tour.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{selectedOption?.days || tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">{tour.bestTime}</span>
            </div>
            <div className="flex items-center">
              <IndianRupee className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-semibold">
                {selectedOption ? selectedOption.price.toLocaleString('en-IN') : 
                  typeof tour.price === 'number' ? tour.price.toLocaleString('en-IN') : tour.price}
              </span>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-200px)] pr-4">
          <div className="space-y-6">
            {/* Cities Covered */}
            {selectedOption?.cities && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Cities Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedOption.cities.map((city, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
                    {day.image && (
                      <img
                        src={day.image}
                        alt={`Day ${day.day} - ${day.title}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            {tour.included && (
              <div>
                <h3 className="font-semibold mb-2">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* International Guest Perks */}
            {tour.internationalGuestPerks && (
              <div>
                <h3 className="font-semibold mb-2">Special Arrangements for International Guests</h3>
                <div className="grid md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                  {Object.entries(tour.internationalGuestPerks).map(([category, perks]) => (
                    <div key={category}>
                      <h4 className="font-medium mb-2 capitalize">{category}</h4>
                      <ul className="space-y-1">
                        {perks.map((perk, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

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