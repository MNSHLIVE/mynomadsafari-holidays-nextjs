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
  tour: Tour;
  className?: string;
}

const TourCard = ({ tour, className }: TourCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle undefined tour data
  if (!tour) {
    return null;
  }

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <p className="text-red-600">Error loading tour card: {error}</p>
      </div>
    );
  }

  const getItineraryPreview = () => {
    try {
      if (!tour.itinerary || !Array.isArray(tour.itinerary) || tour.itinerary.length === 0) return null;
      return tour.itinerary[0];
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

  const tourUrl = `/tours/${tour.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
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
          src={tour.imageSrc}
          alt={tour.title}
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
            tour.packageType === "Budgeted" && "bg-blue-100 text-blue-700",
            tour.packageType === "Luxury" && "bg-purple-100 text-purple-700",
            tour.packageType === "Premier" && "bg-amber-100 text-amber-700"
          )}>
            {tour.packageType}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{tour.title}</h3>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
          {tour.location && (
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-primary" />
              <span className="truncate">{tour.location}</span>
            </div>
          )}
          {tour.duration && (
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1 text-primary" />
              <span>{tour.duration}</span>
            </div>
          )}
          {tour.bestTime && (
            <div className="flex items-center col-span-2">
              <Calendar className="w-3 h-3 mr-1 text-primary" />
              <span>Best time: {tour.bestTime}</span>
            </div>
          )}
        </div>

        {tour.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>
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
              <span className="font-semibold">{formatPrice(tour.price)}</span>
            </div>
            <span className="text-xs text-muted-foreground">per person</span>
          </div>

          <div className="flex gap-2">
            {tour.itinerary && tour.itinerary.length > 0 && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsModalOpen(true)}
              >
                View Itinerary
              </Button>
            )}
            <Button asChild className="flex-1">
              <Link href={tourUrl}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {tour.itinerary && tour.itinerary.length > 0 && (
        <TourItineraryModal
          tour={tour}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TourCard;
