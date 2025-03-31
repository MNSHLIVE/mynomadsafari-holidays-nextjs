import React from "react";
import SectionHeading from "@/components/section-heading";
import DestinationQueryForm from "@/components/destination-query-form";

const CharDhamYatra = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Haridwar",
      description: [
        "Warm welcome upon arrival at Haridwar",
        "Check-in to hotel and freshen up",
        "Evening visit to Har Ki Pauri for the divine Ganga Aarti ceremony",
        "Dinner and overnight stay in Haridwar"
      ]
    },
    {
      day: 2,
      title: "Haridwar to Yamunotri (220 km / 7-8 hours)",
      description: [
        "Early morning departure for Janki Chatti via Dehradun and Mussoorie",
        "Trek from Janki Chatti to Yamunotri Temple (6 km, horses/palanquins available)",
        "Visit Yamunotri Temple, Surya Kund, and Divya Shila",
        "Return trek to Janki Chatti",
        "Drive to Barkot for overnight stay"
      ]
    },
    {
      day: 3,
      title: "Barkot to Gangotri (210 km / 7-8 hours)",
      description: [
        "Early morning drive to Gangotri through beautiful Himalayan landscapes",
        "En route visit Harsil Valley and enjoy its scenic beauty",
        "Arrive at Gangotri and visit the sacred Gangotri Temple",
        "Perform puja and attend evening aarti",
        "Overnight stay in Gangotri"
      ]
    },
    {
      day: 4,
      title: "Gangotri to Kedarnath (235 km / 8-9 hours)",
      description: [
        "Morning drive to Sonprayag via Uttarkashi",
        "Trek from Sonprayag to Kedarnath (16 km, helicopter service available)",
        "Evening darshan at Kedarnath Temple",
        "Overnight stay in Kedarnath"
      ]
    },
    {
      day: 5,
      title: "Kedarnath Temple Visit and Return to Guptkashi",
      description: [
        "Early morning temple darshan and puja",
        "Trek back to Sonprayag",
        "Drive to Guptkashi",
        "Evening rest and overnight stay in Guptkashi"
      ]
    },
    {
      day: 6,
      title: "Guptkashi to Badrinath (215 km / 7-8 hours)",
      description: [
        "Drive to Badrinath via Joshimath",
        "En route visit Narsingh Temple in Joshimath",
        "Evening aarti at Badrinath Temple",
        "Overnight stay in Badrinath"
      ]
    },
    {
      day: 7,
      title: "Badrinath Temple Visit and Local Sightseeing",
      description: [
        "Early morning darshan and puja at Badrinath Temple",
        "Visit Mana Village (Last Indian Village)",
        "Visit Vyas Gufa and Ganesh Gufa",
        "Evening free for shopping and leisure",
        "Overnight stay in Badrinath"
      ]
    },
    {
      day: 8,
      title: "Badrinath to Rudraprayag (160 km / 6-7 hours)",
      description: [
        "Morning departure for Rudraprayag",
        "En route visit Karnaprayag and Nandaprayag",
        "Evening visit to Rudranath Temple",
        "Overnight stay in Rudraprayag"
      ]
    },
    {
      day: 9,
      title: "Rudraprayag to Haridwar (165 km / 6-7 hours)",
      description: [
        "Morning departure for Haridwar",
        "En route visit Devprayag - confluence of Alaknanda and Bhagirathi",
        "Evening free for shopping in Haridwar",
        "Overnight stay in Haridwar"
      ]
    },
    {
      day: 10,
      title: "Departure from Haridwar",
      description: [
        "Morning visit to local temples if time permits",
        "Transfer to railway station/airport for onward journey",
        "Tour concludes with blessed memories of Char Dham Yatra"
      ]
    }
  ];

  const highlights = [
    "Complete darshan of all four dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath",
    "Experienced guides throughout the journey",
    "Comfortable accommodation at all locations",
    "All transfers in comfortable vehicles",
    "All necessary permits and arrangements",
    "Special assistance for senior citizens",
    "Medical facilities available throughout the journey"
  ];

  const inclusions = [
    "9 nights accommodation in hotels/guesthouses",
    "All meals (breakfast, lunch, and dinner)",
    "All transfers in AC vehicle (except where not allowed)",
    "Experienced tour guide",
    "All necessary permits",
    "Horse/Pony/Palki charges for treks (optional)",
    "All applicable taxes"
  ];

  const exclusions = [
    "Helicopter services (can be arranged at additional cost)",
    "Personal expenses",
    "Camera fees",
    "Tips and gratuities",
    "Any item not mentioned in inclusions"
  ];

  const importantNotes = [
    "Tour operates from May to October (weather permitting)",
    "Kedarnath trek is challenging - helicopter service recommended for elderly",
    "Carry warm clothes and rain protection",
    "Acclimatization is important - follow guide's instructions",
    "Booking should be done at least 30 days in advance",
    "Children below 12 years and adults above 70 years should consult doctor before booking"
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Char Dham Yatra"
            subtitle="A Divine Journey to the Four Abodes"
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
                destinationName="Char Dham Yatra"
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

export default CharDhamYatra; 