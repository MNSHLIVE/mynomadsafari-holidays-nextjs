"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin } from 'lucide-react';

interface Activity {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodations: string;
  meals: string[];
}

interface Destination {
  title: string;
  imageSrc: string;
  location: string;
  description: string;
  days: Activity[];
  includes: string[];
  excludes: string[];
  price?: string;
  duration?: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const Itinerary = ({ days, includes, excludes }: { days: Activity[], includes: string[], excludes: string[] }) => {
  return (
    <div className="space-y-6">
      {/* Itinerary Days */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Detailed Itinerary</h3>
        {days.map((day) => (
          <div key={day.day} className="space-y-2">
            <h4 className="font-medium">Day {day.day}: {day.title}</h4>
            <p className="text-sm text-muted-foreground">{day.description}</p>
            <div className="pl-4">
              <h5 className="text-sm font-medium">Activities:</h5>
              <ul className="list-disc pl-4 text-sm text-muted-foreground">
                {day.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              <p className="text-sm mt-2">
                <span className="font-medium">Accommodation:</span> {day.accommodations}
              </p>
              <p className="text-sm">
                <span className="font-medium">Meals:</span> {day.meals.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Includes</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground">
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Excludes</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground">
            {excludes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={destination.imageSrc}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {destination.location}
          {destination.duration && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Calendar className="h-4 w-4 mr-1" />
              {destination.duration}
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
        {destination.price && (
          <p className="text-lg font-semibold mb-4">
            Starting from {destination.price}
          </p>
        )}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{destination.title} - Tour Details</DialogTitle>
            </DialogHeader>
            <Itinerary
              days={destination.days}
              includes={destination.includes}
              excludes={destination.excludes}
            />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
