import React from "react";
import SectionHeading from "@/components/section-heading";
import DestinationQueryForm from "@/components/destination-query-form";

const Kerala = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Kochi - Transfer to Munnar",
      description: [
        "Welcome upon arrival at Kochi International Airport",
        "Scenic drive to Munnar (4-5 hours) through spice plantations and tea gardens",
        "En route visit Cheeyappara and Valara waterfalls",
        "Check-in to resort in Munnar and evening at leisure",
        "Overnight stay in Munnar"
      ]
    },
    {
      day: 2,
      title: "Munnar Sightseeing",
      description: [
        "Visit Mattupetty Dam and enjoy boating",
        "Explore Echo Point and Photo Point",
        "Visit Tea Museum and learn about tea processing",
        "Evening shopping for tea, spices, and local handicrafts",
        "Overnight stay in Munnar"
      ]
    },
    {
      day: 3,
      title: "Munnar to Thekkady",
      description: [
        "Morning drive to Thekkady (4 hours)",
        "Check-in to resort and freshen up",
        "Afternoon Periyar Lake boat ride to spot wildlife",
        "Evening Kathakali show or Kalaripayattu martial arts performance",
        "Overnight stay in Thekkady"
      ]
    },
    {
      day: 4,
      title: "Thekkady to Alleppey",
      description: [
        "Morning spice plantation tour",
        "Drive to Alleppey (4 hours)",
        "Check-in to traditional Kerala houseboat",
        "Cruise through the scenic backwaters",
        "Enjoy fresh Kerala cuisine on board",
        "Overnight stay in houseboat"
      ]
    },
    {
      day: 5,
      title: "Alleppey to Kovalam",
      description: [
        "Morning cruise and breakfast on houseboat",
        "Drive to Kovalam (4-5 hours)",
        "Evening relax at Kovalam beach",
        "Sunset view from lighthouse beach",
        "Overnight stay in Kovalam"
      ]
    },
    {
      day: 6,
      title: "Departure from Trivandrum",
      description: [
        "Morning beach leisure time",
        "Visit Padmanabhaswamy Temple (if time permits)",
        "Transfer to Trivandrum International Airport",
        "Tour concludes with sweet memories of Kerala"
      ]
    }
  ];

  const highlights = [
    "Stay in luxury resorts and traditional houseboat",
    "Visit tea plantations and spice gardens",
    "Scenic hill station of Munnar",
    "Wildlife spotting at Periyar",
    "Overnight stay in Kerala houseboat",
    "Beautiful Kovalam beach",
    "Traditional Kerala cuisine"
  ];

  const inclusions = [
    "5 nights accommodation (3 in hotels, 1 in houseboat, 1 in beach resort)",
    "All meals (breakfast, lunch, and dinner)",
    "All transfers in AC vehicle",
    "Professional English-speaking guide",
    "Boat rides in Periyar and backwaters",
    "All sightseeing as per itinerary",
    "All applicable taxes"
  ];

  const exclusions = [
    "Airfare",
    "Personal expenses",
    "Camera fees at monuments",
    "Tips and gratuities",
    "Any activities not mentioned in inclusions",
    "Travel insurance"
  ];

  const importantNotes = [
    "Best time to visit: October to March",
    "Houseboat check-in at 12:00 PM and check-out at 9:00 AM next day",
    "Customize itinerary available on request",
    "Booking recommended 15 days in advance during peak season",
    "Carry light cotton clothes and insect repellent",
    "Special honeymoon decorations available on request"
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kerala Tour Package"
            subtitle="God's Own Country - 5 Nights 6 Days"
            align="center"
          />
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Detailed Day-by-Day Itinerary</h2>
            <div className="space-y-8">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">
                    Day {day.day}: {day.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {day.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Highlights Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Inclusions</h2>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Exclusions</h2>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-destructive">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Important Notes</h2>
              <div className="bg-muted p-6 rounded-lg">
                <ul className="space-y-2">
                  {importantNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">ℹ</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Query Form */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Book This Tour</h2>
              <DestinationQueryForm 
                destinationName="Kerala Tour"
                buttonText="Send Booking Request"
                buttonVariant="default"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kerala; 