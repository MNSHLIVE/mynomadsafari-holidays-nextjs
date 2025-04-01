'use client';

import { useState } from "react";
import Link from "next/link";
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

export interface TourCardProps {
  imageSrc: string;
  title: string;
  location?: string;
  duration?: string;
  price?: string;
  bestTime?: string;
  packageType?: "Budgeted" | "Luxury" | "Premier";
  link?: string;
  className?: string;
  description?: string;
  itinerary?: Array<{day: number, title: string, description: string}>;
}

const TourCard = ({
  imageSrc = "",
  title = "",
  location = "",
  duration = "",
  price = "",
  bestTime,
  packageType = "Budgeted",
  link = "#",
  className,
  description,
  itinerary,
}: TourCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <p className="text-red-600">Error loading tour card: {error}</p>
      </div>
    );
  }

  const packageColors = {
    Budgeted: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Luxury: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    Premier: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  };

  const getItineraryPreview = () => {
    try {
      if (!itinerary || !Array.isArray(itinerary) || itinerary.length === 0) return null;
      return itinerary[0];
    } catch (e) {
      setError("Failed to load itinerary preview");
      return null;
    }
  };

  const itineraryPreview = getItineraryPreview();

  const formatPrice = (priceString: string) => {
    try {
      if (!priceString) return "Price on request";
      if (priceString.includes('₹')) return priceString;
      const priceNumber = typeof priceString === 'string' ? Number(priceString) : NaN;
      if (!isNaN(priceNumber)) {
        return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0,
        }).format(priceNumber);
      }
      return priceString;
    } catch (e) {
      return "Price on request";
    }
  };

  return (
    <ClientOnly>
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
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "h-full w-full object-cover transition-all duration-500 group-hover:scale-105",
              isLoaded ? "block" : "invisible"
            )}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError("Failed to load image")}
            loading="lazy"
          />
          {packageType && (
            <div className="absolute top-3 left-3">
              <span className={cn(
                "text-xs font-medium px-2 py-1 rounded-full",
                packageColors[packageType as keyof typeof packageColors]
              )}>
                {packageType}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
            {location && (
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-primary" />
                <span className="truncate">{location}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1 text-primary" />
                <span>{duration}</span>
              </div>
            )}
            {bestTime && (
              <div className="flex items-center col-span-2">
                <Calendar className="w-3 h-3 mr-1 text-primary" />
                <span>Best time: {bestTime}</span>
              </div>
            )}
          </div>

          {description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
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
                <span className="font-semibold">{formatPrice(price)}</span>
              </div>
              <span className="text-xs text-muted-foreground">per person</span>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href={link}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default TourCard;
