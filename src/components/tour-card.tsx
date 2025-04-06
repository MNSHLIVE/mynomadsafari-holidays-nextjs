'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, IndianRupee, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DestinationQueryForm from "./destination-query-form";
import ClientOnly from "./client-only";
import { Tour } from "@/components/home/home-data";
import TourItineraryModal from "./tour-itinerary-modal";

interface TourCardProps {
  tour?: Tour;
  className?: string;
}

const defaultTour: Tour = {
  id: "default-tour",
  title: "Tour Package",
  imageSrc: "/placeholder.jpg",
  location: "Location TBD",
  duration: "Duration TBD",
  price: "Price TBD",
  bestTime: "Best time TBD",
  packageType: "Budgeted",
  description: "Tour description coming soon",
};

const TourCard = ({ tour = defaultTour, className }: TourCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItineraryModalOpen, setIsItineraryModalOpen] = useState(false);

  // Use the tour data or fallback to default
  const safeTour = tour || defaultTour;

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <p className="text-red-600">Error loading tour card: {error}</p>
      </div>
    );
  }

  const getItineraryPreview = () => {
    try {
      if (!safeTour.itinerary || !Array.isArray(safeTour.itinerary) || safeTour.itinerary.length === 0) return null;
      return safeTour.itinerary[0];
    } catch (e) {
      setError("Failed to load itinerary preview");
      return null;
    }
  };

  const itineraryPreview = getItineraryPreview();

  const formatPrice = (price: number | string) => {
    if (typeof price === 'number') {
      return price.toLocaleString('en-IN');
    }
    return price;
  };

  const tourUrl = `/tours/${safeTour.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      <div 
        className={cn(
          "group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm border border-border/50",
          className
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-gray-200",
            isLoaded ? "hidden" : "block"
          )} />
          <Image
            src={safeTour.imageSrc}
            alt={safeTour.title}
            fill
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              isLoaded ? "block" : "invisible"
            )}
            onLoadingComplete={() => setIsLoaded(true)}
            onError={() => setError("Failed to load image")}
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <span className={cn(
              "px-2 py-1 text-xs rounded-full",
              safeTour.packageType === "Budgeted" && "bg-blue-100 text-blue-700",
              safeTour.packageType === "Luxury" && "bg-purple-100 text-purple-700",
              safeTour.packageType === "Premier" && "bg-amber-100 text-amber-700"
            )}>
              {safeTour.packageType}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{safeTour.title}</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
            {safeTour.location && (
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-primary" />
                <span className="truncate">{safeTour.location}</span>
              </div>
            )}
            {safeTour.duration && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1 text-primary" />
                <span>{safeTour.duration}</span>
              </div>
            )}
            {safeTour.bestTime && (
              <div className="flex items-center col-span-2">
                <Calendar className="w-3 h-3 mr-1 text-primary" />
                <span>Best time: {safeTour.bestTime}</span>
              </div>
            )}
          </div>

          {safeTour.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{safeTour.description}</p>
          )}

          {itineraryPreview && (
            <div className="mb-3">
              <h4 className="text-sm font-medium mb-1 flex items-center">
                <FileText className="w-3 h-3 mr-1 text-primary" />
                Day 1: {itineraryPreview.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {itineraryPreview.description}
              </p>
            </div>
          )}

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <IndianRupee className="w-4 h-4 mr-1 text-primary" />
                <span className="font-semibold">{formatPrice(safeTour.price)}</span>
              </div>
              <span className="text-xs text-muted-foreground">per person</span>
            </div>

            <div className="flex gap-2">
              {safeTour.itinerary && safeTour.itinerary.length > 0 && (
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setIsItineraryModalOpen(true)}
                >
                  View Itinerary
                </Button>
              )}
              <Button 
                className="flex-1"
                onClick={() => setIsModalOpen(true)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{safeTour.title}</DialogTitle>
            <DialogDescription>
              {safeTour.description}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tour Details */}
            <div className="space-y-6">
              {/* Tour Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={safeTour.imageSrc}
                  alt={safeTour.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tour Info */}
              <div className="grid gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tour Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>{safeTour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{safeTour.duration}</span>
                    </div>
                    {safeTour.bestTime && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span>Best time to visit: {safeTour.bestTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {safeTour.highlights && safeTour.highlights.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Tour Highlights</h4>
                    <div className="grid gap-2">
                      {safeTour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Book {safeTour.title}</h3>
              <DestinationQueryForm 
                destinationName={safeTour.title}
                buttonText="Send Inquiry"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Itinerary Modal */}
      {safeTour.itinerary && safeTour.itinerary.length > 0 && (
        <TourItineraryModal
          tour={safeTour}
          isOpen={isItineraryModalOpen}
          onClose={() => setIsItineraryModalOpen(false)}
        />
      )}
    </>
  );
};

export default TourCard;
