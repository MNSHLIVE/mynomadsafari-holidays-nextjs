import React, { useState } from 'react';
import DestinationModal from '@/components/destination-modal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SectionHeading from "@/components/section-heading";
import DestinationQueryForm from "@/components/destination-query-form";

const destination = {
  title: "Thailand",
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Bangkok",
      description: "Arrive at Suvarnabhumi Airport, transfer to hotel, evening at Asiatique."
    },
    {
      day: "Day 2",
      title: "Bangkok City Tour",
      description: "Visit Grand Palace, Wat Phra Kaew, Wat Arun, and evening dinner cruise."
    },
    {
      day: "Day 3",
      title: "Ayutthaya Day Trip",
      description: "Visit historical park, temples, and return to Bangkok."
    },
    {
      day: "Day 4",
      title: "Pattaya",
      description: "Transfer to Pattaya, visit Sanctuary of Truth, evening show."
    },
    {
      day: "Day 5",
      title: "Coral Island",
      description: "Full day island tour with water activities, evening at Walking Street."
    },
    {
      day: "Day 6",
      title: "Departure",
      description: "Morning at leisure, transfer to airport for departure."
    }
  ],
  highlights: [
    "Visit Grand Palace and Wat Phra Kaew",
    "Explore Ayutthaya Historical Park",
    "Pattaya Beach experience",
    "Coral Island water activities",
    "Evening dinner cruise",
    "Traditional Thai massage",
    "Visit floating markets",
    "Thai cultural show"
  ],
  inclusions: [
    "5 nights accommodation in 4-star hotels",
    "Daily breakfast",
    "All transfers and sightseeing",
    "Entrance fees to attractions",
    "English speaking guide",
    "Thailand visa assistance"
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
    "Thailand visa required for some nationalities",
    "Light clothing suitable for tropical climate",
    "Respect local customs and traditions",
    "Keep hydrated during temple visits"
  ]
};

export default function ThailandPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/destinations/thailand-overview.jpg"
          alt="Thailand Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thailand</h1>
            <p className="text-xl md:text-2xl">Land of Smiles</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Discover Thailand</h2>
            <p className="text-gray-600 mb-6">
              Experience the perfect blend of ancient temples, pristine beaches, and vibrant city life in Thailand. 
              From the bustling streets of Bangkok to the serene beaches of Pattaya, this journey offers a complete 
              Thai experience.
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
              src="/destinations/thailand-overview.jpg"
              alt="Thailand Experience"
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