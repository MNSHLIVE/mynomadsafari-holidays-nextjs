import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import CTASection from "@/components/cta-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Church, Landmark } from "lucide-react";
import DestinationQueryForm from "@/components/destination-query-form";
import { Badge } from "@/components/ui/badge";
import BackButton from "@/components/back-button";
import ClientOnly from "@/components/client-only";

const religiousTours = [
  {
    id: 1,
    title: "Char Dham Yatra",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/CharDham/CharDham-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/CharDham/CharDham-Main.jpg",
    duration: "12 Days",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    bestTime: "May - June, Sept - Oct",
    dayOne: "Arrival in Haridwar",
    description: "Embark on the sacred Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath",
    packageType: "Premier" as const,
    price: "45000"
  },
  {
    id: 2,
    title: "South India Temple Tour",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/SouthIndia/SouthIndia-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/SouthIndia/SouthIndia-Main.jpg",
    duration: "10 Days",
    location: "Chennai, Tirupati, Madurai, Rameshwaram",
    bestTime: "October - March",
    dayOne: "Arrival in Chennai",
    description: "Explore the magnificent temples of South India, known for their Dravidian architecture and cultural heritage",
    packageType: "Luxury" as const,
    price: "35000"
  },
  {
    id: 3,
    title: "Vaishno Devi Yatra",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/VaishnoDevi/VaishnoDevi-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/VaishnoDevi/VaishnoDevi-Main.jpg",
    duration: "5 Days",
    location: "Katra, Vaishno Devi Temple",
    bestTime: "March - June, Sept - Oct",
    dayOne: "Arrival in Jammu",
    description: "Embark on a sacred journey to the holy shrine of Vaishno Devi, located in the Trikuta Mountains",
    packageType: "Premier" as const,
    price: "25000"
  },
  {
    id: 4,
    title: "Badrinath Kedarnath Yatra",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/BadrinathKedarnath/BK-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/BadrinathKedarnath/BK-Main.jpg",
    duration: "8 Days",
    location: "Haridwar, Kedarnath, Badrinath",
    bestTime: "May - June, Sept - Oct",
    dayOne: "Arrival in Haridwar",
    description: "Visit the sacred shrines of Badrinath and Kedarnath, two of the most revered Char Dham destinations",
    packageType: "Premier" as const,
    price: "30000"
  },
  {
    id: 5,
    title: "12 Jyotirlinga Darshan",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/Jyotirlinga/Jyotirlinga-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/Jyotirlinga/Jyotirlinga-Main.jpg",
    duration: "15 Days",
    location: "Various locations across India",
    bestTime: "October - March",
    dayOne: "Start in Mumbai",
    description: "Visit the significant Jyotirlinga temples on this spiritual journey across Maharashtra and Madhya Pradesh",
    packageType: "Luxury" as const,
    price: "40000"
  },
  {
    id: 6,
    title: "Ashtavinayak Yatra",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/Ashtavinayak/Ashtavinayak-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/Ashtavinayak/Ashtavinayak-Main.jpg",
    duration: "7 Days",
    location: "Eight Ganesh temples in Maharashtra",
    bestTime: "October - March",
    dayOne: "Start from Mumbai/Pune",
    description: "Visit the eight sacred temples of Lord Ganesha in Maharashtra",
    packageType: "Premier" as const,
    price: "20000"
  },
  {
    id: 7,
    title: "Dwarka Shirdi Tour",
    imageSrc: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/DwarkaShirdi/Dwarkashirdi-Main.jpg",
    image: "/Destination/Domestic/Tours/Religious-Pilgrimage/Hindu/DwarkaShirdi/Dwarkashirdi-Main.jpg",
    duration: "6 Days",
    location: "Dwarka, Shirdi",
    bestTime: "October - March",
    dayOne: "Arrival in Dwarka",
    description: "Pilgrimage covering the major temples of Dwarka and Shirdi Sai Baba temple",
    packageType: "Premier" as const,
    price: "30000"
  }
];

const ReligiousTours = () => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <BackButton />
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground mb-3">
          Spiritual Journeys
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Religious Tours
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Embark on a journey of spiritual discovery with our curated religious and pilgrimage tours
        </p>
      </div>

      <ClientOnly>
      <section className="mb-16">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Landmark className="mr-2 h-5 w-5 text-primary" />
                  Sacred Pilgrimages Across India
                </h2>
                <p className="text-lg mb-4">
                  India is home to some of the world's most revered religious sites. Our carefully curated tours 
                  combine spiritual experiences with comfortable travel arrangements.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  <Badge className="justify-start" variant="outline">Hindu Temples</Badge>
                  <Badge className="justify-start" variant="outline">Buddhist Sites</Badge>
                  <Badge className="justify-start" variant="outline">Sikh Gurdwaras</Badge>
                  <Badge className="justify-start" variant="outline">Sacred Rivers</Badge>
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <DestinationQueryForm
                  destinationName="Religious Tours"
                  buttonText="Plan Your Pilgrimage"
                  buttonVariant="default"
                  className="px-6"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Tabs defaultValue="hindu" className="w-full mb-10">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="hindu">Hindu Pilgrimages</TabsTrigger>
            <TabsTrigger value="buddhist">Buddhist Circuits</TabsTrigger>
            <TabsTrigger value="sikh">Sikh Pilgrimages</TabsTrigger>
            <TabsTrigger value="all">All Religious Tours</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="hindu" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {religiousTours.map((tour, index) => (
              <TourCard
                  key={index}
                  title={tour.title}
                imageSrc={tour.imageSrc}
                  duration={tour.duration}
                location={tour.location}
                bestTime={tour.bestTime}
                description={tour.description}
                  packageType={tour.packageType}
                  price={tour.price}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="buddhist" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Add Buddhist tours here */}
          </div>
        </TabsContent>

        <TabsContent value="sikh" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Add Sikh tours here */}
          </div>
        </TabsContent>
      </Tabs>
      </ClientOnly>

      <div className="max-w-3xl mx-auto bg-card rounded-xl p-6 border my-10">
        <SectionHeading
          title="Benefits of Religious Tours"
          subtitle="Why choose our guided spiritual journeys"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Expert Spiritual Guides</h4>
              <p className="text-sm text-muted-foreground">Knowledgeable guides who understand the cultural and religious significance</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Priority Darshan</h4>
              <p className="text-sm text-muted-foreground">Skip long queues with our special arrangements at major temples</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Comfortable Accommodations</h4>
              <p className="text-sm text-muted-foreground">Stay in comfortable hotels near the pilgrimage sites</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Assistance with Rituals</h4>
              <p className="text-sm text-muted-foreground">Help with performing the appropriate rituals at each sacred site</p>
            </div>
          </div>
        </div>
      </div>

      <section className="my-16">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 shadow-sm border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Religious Tours</h2>
              <p className="text-lg mb-4">
                Looking for a personalized pilgrimage experience? We can create a custom itinerary based on your spiritual preferences, 
                time constraints, and specific temples or sites you wish to visit.
              </p>
              <p className="text-muted-foreground">
                Our team of experts will help you plan every detail of your sacred journey, from transportation and accommodation 
                to special pujas and ritual arrangements at the temples.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <DestinationQueryForm
                destinationName="Custom Religious Tour"
                buttonText="Request Custom Tour"
                buttonVariant="default"
                className="px-6"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Plan Your Spiritual Journey?"
        description="Let us help you plan your perfect religious tour."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ReligiousTours;
