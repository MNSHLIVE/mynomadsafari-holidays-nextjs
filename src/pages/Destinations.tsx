import { useState, useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import DestinationCard from "@/components/destination-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import BackButton from "@/components/back-button";

// Sample data for destinations
const indianDestinations = [
  {
    state: "Rajasthan",
    imageSrc: "/Destination/Domestic/main/Rajasthan-main.jpg",
    description: "Experience the royal heritage and vibrant culture of Rajasthan.",
    bestTime: "October to March"
  },
  {
    state: "Kerala",
    imageSrc: "/Destination/Domestic/main/Kerala-main.jpg",
    description: "Discover the serene backwaters and rich cultural heritage.",
    bestTime: "October to March"
  },
  {
    state: "Goa",
    imageSrc: "/Destination/Domestic/main/Goa-main.jpg",
    description: "Experience the perfect blend of beaches, Portuguese heritage, and vibrant nightlife.",
    bestTime: "November to February"
  },
  {
    state: "Himachal Pradesh",
    imageSrc: "/Destination/Domestic/main/Himachal-Main.jpg",
    description: "Explore the snow-capped mountains and scenic valleys.",
    bestTime: "March to June"
  },
  {
    state: "Leh-Ladakh",
    imageSrc: "/Destination/Domestic/main/Ladhak-main.jpg",
    description: "Journey through the high-altitude desert and ancient monasteries.",
    bestTime: "June to September"
  },
  {
    state: "Uttarakhand",
    imageSrc: "/Destination/Domestic/main/Uttrakhand-main.jpg",
    description: "Discover the spiritual essence and natural beauty.",
    bestTime: "March to June"
  },
  {
    state: "Andaman & Nicobar",
    imageSrc: "/Destination/Domestic/main/Andaman-main.jpg",
    description: "Experience pristine beaches and coral reefs.",
    bestTime: "October to May"
  }
];

const internationalDestinations = [
  {
    country: "Thailand",
    imageSrc: "/Destination/International/Main/Thailand-main.jpg",
    description: "Experience the perfect blend of culture and tropical beauty.",
    bestTime: "November to February"
  },
  {
    country: "Dubai",
    imageSrc: "/Destination/International/Main/Dubai-main.jpg",
    description: "Discover modern luxury and traditional Arabian culture.",
    bestTime: "November to March"
  },
  {
    country: "Bali",
    imageSrc: "/Destination/International/Main/Bali-main.jpg",
    description: "Immerse yourself in rich culture and stunning beaches.",
    bestTime: "April to October"
  },
  {
    country: "Singapore",
    imageSrc: "/Destination/International/Main/Singapore-main.jpg",
    description: "Experience modern technology and diverse cultures.",
    bestTime: "February to April"
  },
  {
    country: "Vietnam",
    imageSrc: "/Destination/International/Main/Vietnam-main.jpg",
    description: "Explore rich history and stunning landscapes.",
    bestTime: "December to April"
  },
  {
    country: "Maldives",
    imageSrc: "/Destination/International/Main/Maldives-main.jpg",
    description: "Experience luxury and pristine beaches.",
    bestTime: "November to April"
  }
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIndianDestinations, setFilteredIndianDestinations] = useState(indianDestinations);
  const [filteredInternationalDestinations, setFilteredInternationalDestinations] = useState(internationalDestinations);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    
    setFilteredIndianDestinations(
      indianDestinations.filter(dest => 
        dest.state.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query)
      )
    );

    setFilteredInternationalDestinations(
      internationalDestinations.filter(dest => 
        dest.country.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  return (
    <div className="container py-8">
      <BackButton />
      <SectionHeading
        title="Explore Destinations"
        subtitle="Discover amazing places around the world"
      />
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search destinations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Tabs defaultValue="domestic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="domestic">Domestic</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
        </TabsList>

        <TabsContent value="domestic" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredIndianDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.state}
                imageSrc={destination.imageSrc}
                description={destination.description}
                bestTime={destination.bestTime}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="international" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredInternationalDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.country}
                imageSrc={destination.imageSrc}
                description={destination.description}
                bestTime={destination.bestTime}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 