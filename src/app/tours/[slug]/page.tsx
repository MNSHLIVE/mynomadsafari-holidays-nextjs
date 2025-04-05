'use client';

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { tours } from "@/components/home/home-data";
import SectionHeading from "@/components/section-heading";
import { Clock, MapPin, Calendar, IndianRupee } from "lucide-react";

interface TourPageProps {
  params: {
    slug: string;
  };
}

export default function TourPage({ params }: TourPageProps) {
  const tour = tours.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={tour.imageSrc}
            alt={tour.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHeading
              title={tour.title}
              subtitle={tour.description || ""}
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span>Best time: {tour.bestTime}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="w-5 h-5 mr-2 text-primary" />
                <span>{tour.price}</span>
              </div>
            </div>

            {tour.itinerary && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-2 border-primary pl-4">
                      <h3 className="text-lg font-medium">Day {day.day}: {day.title}</h3>
                      <p className="text-muted-foreground mt-2">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tour.activities && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Activities</h2>
                <ul className="list-disc list-inside space-y-2">
                  {tour.activities.map((activity, index) => (
                    <li key={index} className="text-muted-foreground">{activity}</li>
                  ))}
                </ul>
              </div>
            )}

            {tour.included && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                <ul className="list-disc list-inside space-y-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Tour Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Package Type</h3>
                  <p className="text-muted-foreground">{tour.packageType}</p>
                </div>
                {tour.groupSize && (
                  <div>
                    <h3 className="font-medium">Group Size</h3>
                    <p className="text-muted-foreground">{tour.groupSize}</p>
                  </div>
                )}
                {tour.country && (
                  <div>
                    <h3 className="font-medium">Country</h3>
                    <p className="text-muted-foreground">{tour.country}</p>
                  </div>
                )}
                {tour.region && (
                  <div>
                    <h3 className="font-medium">Region</h3>
                    <p className="text-muted-foreground">{tour.region}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 