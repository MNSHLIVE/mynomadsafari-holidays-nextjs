'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface Tour {
  id: number | string;
  title: string;
  imageSrc: string;
  description: string;
  location: string;
  duration: string;
  price: string;
  bestTime: string;
  packageType: "Budgeted" | "Luxury" | "Premier";
  groupSize?: string;
  country?: string;
  region?: string;
  activities?: string[];
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    imageSrc?: string;
  }>;
  highlights?: string[];
  highlight?: string;
  includes?: string[];
  excludes?: string[];
  included?: string[];
  localCuisine?: string[];
  shoppingGuide?: string[];
  culturalExperiences?: string[];
}

interface TourCardProps {
  tour: Tour;
  className?: string;
}

const TourCard = ({ tour, className }: TourCardProps) => {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300", className)}>
      <div className="relative h-64">
        <Image
          src={tour.imageSrc}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-sm text-white/80 mb-2">{tour.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Duration:</span> {tour.duration}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Price:</span> {tour.price}
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{tour.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="relative h-64">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p>{tour.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tour Details</h4>
                      <ul className="space-y-2">
                        <li><span className="font-medium">Location:</span> {tour.location}</li>
                        <li><span className="font-medium">Duration:</span> {tour.duration}</li>
                        <li><span className="font-medium">Price:</span> {tour.price}</li>
                        <li><span className="font-medium">Best Time:</span> {tour.bestTime}</li>
                        <li><span className="font-medium">Package Type:</span> {tour.packageType}</li>
                        {tour.groupSize && (
                          <li><span className="font-medium">Group Size:</span> {tour.groupSize}</li>
                        )}
                      </ul>
                    </div>
                    {tour.highlights && (
                      <div>
                        <h4 className="font-semibold mb-2">Highlights</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {tour.itinerary && (
                    <div>
                      <h4 className="font-semibold mb-2">Itinerary</h4>
                      <div className="space-y-4">
                        {tour.itinerary.map((day, index) => (
                          <div key={index}>
                            <h5 className="font-medium">Day {day.day}: {day.title}</h5>
                            <p className="text-sm text-muted-foreground">{day.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {tour.includes && (
                    <div>
                      <h4 className="font-semibold mb-2">Included</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {tour.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TourCard; 