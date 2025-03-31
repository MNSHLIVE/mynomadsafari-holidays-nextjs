import React, { useState } from 'react';
import { DestinationModal } from '@/components/DestinationModal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SectionHeading from "@/components/section-heading";
import DestinationQueryForm from "@/components/destination-query-form";

const destination = {
  title: "Singapore",
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Singapore",
      description: "Arrive at Changi Airport, transfer to hotel, evening at Marina Bay Sands."
    },
    {
      day: "Day 2",
      title: "City Tour & Gardens by the Bay",
      description: "Visit Merlion Park, Marina Bay Sands, Gardens by the Bay, and Cloud Forest."
    },
    {
      day: "Day 3",
      title: "Sentosa Island",
      description: "Universal Studios Singapore, S.E.A. Aquarium, and evening light show."
    },
    {
      day: "Day 4",
      title: "Singapore Zoo & Night Safari",
      description: "Morning at Singapore Zoo, evening Night Safari experience."
    },
    {
      day: "Day 5",
      title: "Orchard Road & Departure",
      description: "Shopping at Orchard Road, afternoon departure."
    }
  ],
  highlights: [
    "Visit iconic Marina Bay Sands",
    "Explore Gardens by the Bay",
    "Experience Universal Studios",
    "Night Safari adventure",
    "Visit Merlion Park",
    "Shopping at Orchard Road",
    "S.E.A. Aquarium experience",
    "Cloud Forest exploration"
  ],
  inclusions: [
    "4 nights accommodation in 4-star hotel",
    "Daily breakfast",
    "All transfers and sightseeing",
    "Entrance fees to attractions",
    "English speaking guide",
    "Singapore visa assistance"
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
    "Singapore visa required for some nationalities",
    "Comfortable walking shoes recommended",
    "Light clothing suitable for tropical climate",
    "Camera for capturing memories"
  ]
};

export default function SingaporePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/destinations/singapore-overview.jpg"
          alt="Singapore Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Singapore</h1>
            <p className="text-xl md:text-2xl">The Lion City Experience</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Discover Singapore</h2>
            <p className="text-gray-600 mb-6">
              Experience the perfect blend of modern luxury and cultural heritage in Singapore. 
              From stunning architecture to world-class attractions, this city-state offers an 
              unforgettable journey through its diverse neighborhoods and iconic landmarks.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-gray-600">5 Days / 4 Nights</p>
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
              src="/destinations/singapore-overview.jpg"
              alt="Singapore Experience"
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