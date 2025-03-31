import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import DestinationModal from "@/components/destination-modal";
import { Button } from "@/components/ui/button";
import DestinationQueryForm from "@/components/destination-query-form";
import Image from "next/image";

const Bali = () => {
  const [showDetails, setShowDetails] = useState(false);

  const destination = {
    title: "Bali Tour Package - Island of the Gods",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Seminyak",
        description: [
          "Welcome at Ngurah Rai International Airport",
          "Transfer to hotel in Seminyak",
          "Evening walk on Seminyak Beach",
          "Welcome dinner at beachfront restaurant",
          "Overnight stay in Seminyak"
        ]
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: [
          "Visit sacred Monkey Forest Sanctuary",
          "Explore Ubud Traditional Art Market",
          "Visit Tegalalang Rice Terraces",
          "Traditional Balinese dance performance",
          "Overnight stay in Ubud"
        ]
      },
      {
        day: 3,
        title: "Temple and Volcano Tour",
        description: [
          "Sunrise visit to Mount Batur",
          "Visit Tirta Empul Temple (Water Temple)",
          "Explore Besakih Temple (Mother Temple)",
          "Coffee plantation visit",
          "Overnight stay in Ubud"
        ]
      },
      {
        day: 4,
        title: "Nusa Dua Water Activities",
        description: [
          "Transfer to Nusa Dua",
          "Water sports activities (parasailing, jet ski, banana boat)",
          "Visit Uluwatu Temple for sunset",
          "Kecak Fire Dance performance",
          "Overnight stay in Nusa Dua"
        ]
      },
      {
        day: 5,
        title: "Island Exploration",
        description: [
          "Full day tour to Nusa Penida",
          "Visit Kelingking Beach",
          "Snorkeling at Crystal Bay",
          "Visit Angel's Billabong",
          "Return to Nusa Dua for overnight stay"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: [
          "Morning spa treatment",
          "Last-minute shopping at Kuta",
          "Transfer to airport",
          "Departure with wonderful memories of Bali"
        ]
      }
    ],
    highlights: [
      "Stay in luxury beach resorts",
      "Traditional Balinese cultural experiences",
      "Visit to iconic temples",
      "Adventure water sports",
      "Island hopping to Nusa Penida",
      "Spectacular sunrise and sunset views",
      "Traditional spa treatment"
    ],
    inclusions: [
      "5 nights accommodation in 4/5 star hotels",
      "Daily breakfast and selected meals",
      "All transfers in private AC vehicle",
      "English-speaking guide",
      "All temple entrance fees",
      "Water sports activities package",
      "Nusa Penida island tour",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ],
    importantNotes: [
      "Best time to visit: April to October",
      "Dress code for temples: Shoulders and knees must be covered",
      "Carry sunscreen, hat, and comfortable walking shoes",
      "Water activities subject to weather conditions",
      "Customization available for honeymoon packages",
      "Early booking recommended during peak season"
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bali Tour Package"
            subtitle="Island of the Gods - 5 Nights 6 Days"
            align="center"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Image and Quick Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/destinations/bali-overview.jpg"
                  alt="Bali Overview"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Quick Overview</h2>
                <ul className="space-y-3">
                  <li>• Duration: 5 Nights 6 Days</li>
                  <li>• Best Time: April to October</li>
                  <li>• Destinations: Seminyak, Ubud, Nusa Dua</li>
                  <li>• Activities: Cultural tours, Water sports, Temple visits</li>
                  <li>• Accommodation: 4/5 Star Hotels</li>
                </ul>
                <Button 
                  size="lg" 
                  onClick={() => setShowDetails(true)}
                  className="mt-6"
                >
                  View Detailed Itinerary
                </Button>
              </div>
            </div>

            {/* Brief Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.slice(0, 6).map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {highlight}
                  </div>
                ))}
              </div>
              {destination.highlights.length > 6 && (
                <Button
                  variant="outline"
                  onClick={() => setShowDetails(true)}
                  className="mt-4"
                >
                  See More Highlights
                </Button>
              )}
            </div>

            {/* Query Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Book This Tour</h2>
              <DestinationQueryForm 
                destinationName="Bali Tour"
                buttonText="Send Booking Request"
                buttonVariant="default"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Day-by-Day Itinerary</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Day 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 1: Arrival in Bali</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Welcome arrival at Ngurah Rai International Airport</li>
                <li>• Transfer to your hotel in Seminyak/Kuta</li>
                <li>• Evening welcome dinner at a beachfront restaurant</li>
                <li>• Free time to explore the local area</li>
                <li>• Overnight stay in Seminyak/Kuta</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 2: Ubud Cultural Tour</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Visit to Sacred Monkey Forest Sanctuary</li>
                <li>• Explore traditional art galleries and craft markets</li>
                <li>• Visit to Ubud Royal Palace</li>
                <li>• Traditional Balinese dance performance</li>
                <li>• Overnight stay in Ubud</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 3: Temple and Rice Terraces</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Morning visit to Tegalalang Rice Terraces</li>
                <li>• Visit to Tirta Empul Temple (Water Temple)</li>
                <li>• Traditional Balinese lunch at a local restaurant</li>
                <li>• Afternoon at Tanah Lot Temple</li>
                <li>• Sunset photography session</li>
                <li>• Overnight stay in Ubud</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 4: Adventure and Nature</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• White water rafting on Ayung River</li>
                <li>• Visit to a coffee plantation</li>
                <li>• Afternoon at Tegenungan Waterfall</li>
                <li>• Traditional spa treatment</li>
                <li>• Overnight stay in Ubud</li>
              </ul>
            </div>

            {/* Day 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 5: Beach and Water Activities</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Transfer to Nusa Dua</li>
                <li>• Water sports activities (parasailing, jet ski)</li>
                <li>• Visit to Uluwatu Temple</li>
                <li>• Kecak Fire Dance performance</li>
                <li>• Seafood dinner at Jimbaran Bay</li>
                <li>• Overnight stay in Nusa Dua</li>
              </ul>
            </div>

            {/* Day 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary">Day 6: Departure</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Free morning for shopping or relaxation</li>
                <li>• Last-minute souvenir shopping</li>
                <li>• Transfer to Ngurah Rai International Airport</li>
                <li>• Departure with wonderful memories</li>
              </ul>
            </div>
          </div>

          {/* Package Details */}
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Package Inclusions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  5 nights accommodation in 4-star hotels
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Daily breakfast and selected meals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  All transfers in private AC vehicle
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  English-speaking guide
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  All temple entrance fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Water sports activities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Traditional spa treatment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  All applicable taxes
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Package Exclusions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  International airfare
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Personal expenses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Optional activities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Travel insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Tips and gratuities
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notes */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">ℹ</span>
                  Best time to visit: April to October (dry season)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">ℹ</span>
                  Dress modestly when visiting temples (shoulders and knees covered)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">ℹ</span>
                  Carry sunscreen, hat, and mosquito repellent
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">ℹ</span>
                  Water activities subject to weather conditions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">ℹ</span>
                  Customization of itinerary possible on request
                </li>
              </ul>
            </div>
          </div>

          {/* Enquiry Button */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button size="lg" className="bg-primary text-white px-8 py-3">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      <DestinationModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title={destination.title}
        itinerary={destination.itinerary}
        highlights={destination.highlights}
        inclusions={destination.inclusions}
        exclusions={destination.exclusions}
        importantNotes={destination.importantNotes}
      />
    </main>
  );
};

export default Bali; 