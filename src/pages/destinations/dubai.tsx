import React, { useState } from 'react';
import { DestinationModal } from '@/components/DestinationModal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SectionHeading from "@/components/section-heading";
import DestinationQueryForm from "@/components/destination-query-form";

const destination = {
  title: "Dubai",
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Dubai",
      description: "Arrive at Dubai International Airport, transfer to hotel, evening at Dubai Mall."
    },
    {
      day: "Day 2",
      title: "City Tour",
      description: "Visit Burj Khalifa, Dubai Mall, Dubai Fountain, and evening desert safari."
    },
    {
      day: "Day 3",
      title: "Palm Jumeirah",
      description: "Visit Atlantis Aquaventure, Palm Jumeirah, and evening at Dubai Marina."
    },
    {
      day: "Day 4",
      title: "Old Dubai",
      description: "Visit Dubai Museum, Gold Souk, Spice Souk, and evening dhow cruise."
    },
    {
      day: "Day 5",
      title: "Miracle Garden & Global Village",
      description: "Visit Miracle Garden, Global Village, and evening at Dubai Frame."
    },
    {
      day: "Day 6",
      title: "Departure",
      description: "Morning at leisure, transfer to airport for departure."
    }
  ],
  highlights: [
    "Visit Burj Khalifa",
    "Desert Safari experience",
    "Dubai Mall & Fountain show",
    "Palm Jumeirah attractions",
    "Traditional souks",
    "Dhow cruise dinner",
    "Miracle Garden visit",
    "Global Village exploration"
  ],
  inclusions: [
    "5 nights accommodation in 4-star hotels",
    "Daily breakfast",
    "All transfers and sightseeing",
    "Entrance fees to attractions",
    "English speaking guide",
    "Dubai visa assistance"
  ],
  exclusions: [
    "International flights",
    "Personal expenses",
    "Optional activities",
    "Travel insurance",
    "Tips and gratuities"
  ],
  importantNotes: [
    "Valid passport required",
    "Dubai visa required for some nationalities",
    "Modest clothing recommended",
    "Respect local customs",
    "Stay hydrated in desert climate"
  ]
};

export default function DubaiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/destinations/dubai-overview.jpg"
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dubai</h1>
            <p className="text-xl md:text-2xl">City of Gold</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Discover Dubai</h2>
            <p className="text-gray-600 mb-6">
              Experience the perfect blend of modern luxury and traditional charm in Dubai. 
              From the world's tallest building to traditional souks, this city offers an 
              unforgettable journey through its diverse attractions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-gray-600">6 Days / 5 Nights</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">4★</span>
                </div>
                <div>
                  <h3 className="font-semibold">Accommodation</h3>
                  <p className="text-gray-600">4-Star Hotels</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">8+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Attractions</h3>
                  <p className="text-gray-600">8+ Major Sites</p>
                </div>
              </div>
            </div>
            <Button 
              className="mt-8"
              onClick={() => setIsModalOpen(true)}
            >
              View Detailed Itinerary
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/destinations/dubai-overview.jpg"
              alt="Dubai Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Brief Highlights */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tour Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destination.highlights.slice(0, 6).map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold">{highlight}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => setIsModalOpen(true)}
            >
              See All Highlights
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <DestinationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={destination}
      />
    </div>
  );
} 