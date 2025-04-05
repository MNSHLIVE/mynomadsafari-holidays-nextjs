'use client';

import React from "react";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import { tours } from "@/components/home/home-data";

export default function ToursPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Tours"
          subtitle="Explore our curated collection of travel experiences"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 