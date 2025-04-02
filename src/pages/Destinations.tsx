import { useState, useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import DestinationCard from "@/components/destination-card";
import DestinationQueryForm from "@/components/destination-query-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BackButton from "@/components/back-button";

// Sample data for destinations
const indianDestinations = [
  {
    state: "Rajasthan",
    image: "/Destination/Domestic/main/Rajasthan-main.jpg",
    description: "Experience the royal heritage and vibrant culture of Rajasthan.",
    bestTime: "October to March",
    places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    food: ["Dal Bati Churma", "Laal Maas", "Ghevar"],
    tips: ["Visit during winter months", "Book heritage hotels in advance"],
    majorTours: ["Golden Triangle Tour", "Rajasthan Heritage Tour"],
    budgets: {
      budgeted: "₹15,000 - ₹25,000",
      luxury: "₹30,000 - ₹50,000",
      premier: "₹60,000+"
    }
  },
  {
    state: "Kerala",
    image: "/Destination/Domestic/main/Kerala-main.jpg",
    description: "Discover the serene backwaters and rich cultural heritage.",
    bestTime: "October to March",
    places: ["Munnar", "Alleppey", "Kochi"],
    food: ["Appam with Stew", "Kerala Parotta", "Fish Curry"],
    tips: ["Book houseboat in advance", "Try Ayurvedic treatments"],
    majorTours: ["Backwater Cruise", "Tea Plantation Tour"],
    budgets: {
      budgeted: "₹12,000 - ₹20,000",
      luxury: "₹25,000 - ₹40,000",
      premier: "₹45,000+"
    }
  },
  {
    state: "Goa",
    image: "/Destination/Domestic/main/Goa-main.jpg",
    description: "Experience the perfect blend of beaches, Portuguese heritage, and vibrant nightlife in India's party capital.",
    bestTime: "November to February",
    places: ["Calangute Beach", "Old Quarter", "Dudhsagar Falls", "Fort Aguada"],
    food: ["Fish Curry", "Bebinca", "Pao Bhaji", "Feni"],
    tips: ["Visit during peak season", "Try water sports", "Explore Portuguese architecture", "Experience nightlife"],
    majorTours: ["Beach Hopping Tour", "Heritage Walk", "Adventure Tour"],
    budgets: {
      budgeted: "₹10,000 - ₹18,000",
      luxury: "₹20,000 - ₹35,000",
      premier: "₹40,000+"
    }
  },
  {
    state: "Himachal Pradesh",
    image: "/Destination/Domestic/main/Himachal-Main.jpg",
    description: "Explore the snow-capped mountains, scenic valleys, and adventure sports in the heart of the Himalayas.",
    bestTime: "March to June",
    places: ["Manali", "Shimla", "Dharamshala", "Spiti Valley"],
    food: ["Thukpa", "Momos", "Siddu", "Tudkiya Bhath"],
    tips: ["Carry warm clothes", "Book in advance during peak season", "Try adventure sports", "Visit during snowfall"],
    majorTours: ["Himalayan Adventure", "Spiti Valley Tour", "Cultural Heritage Tour"],
    budgets: {
      budgeted: "₹12,000 - ₹20,000",
      luxury: "₹25,000 - ₹40,000",
      premier: "₹45,000+"
    }
  },
  {
    state: "Leh-Ladakh",
    image: "/Destination/Domestic/main/Ladhak-main.jpg",
    description: "Journey through the high-altitude desert, ancient monasteries, and stunning landscapes of the Land of High Passes.",
    bestTime: "June to September",
    places: ["Pangong Lake", "Nubra Valley", "Thiksey Monastery", "Khardung La"],
    food: ["Thukpa", "Momos", "Butter Tea", "Skyu"],
    tips: ["Acclimatize properly", "Carry warm clothes", "Book permits in advance", "Stay hydrated"],
    majorTours: ["Ladakh Adventure", "Monastery Tour", "Photography Tour"],
    budgets: {
      budgeted: "₹15,000 - ₹25,000",
      luxury: "₹30,000 - ₹50,000",
      premier: "₹55,000+"
    }
  },
  {
    state: "Uttarakhand",
    image: "/Destination/Domestic/main/Uttrakhand-main.jpg",
    description: "Discover the spiritual essence, trekking trails, and natural beauty of the Devbhoomi.",
    bestTime: "March to June",
    places: ["Rishikesh", "Nainital", "Mussoorie", "Valley of Flowers"],
    food: ["Kumaoni Thali", "Bhang Ki Chutney", "Aloo Ke Gutke", "Kafuli"],
    tips: ["Visit during summer", "Try adventure sports", "Experience spirituality", "Carry warm clothes"],
    majorTours: ["Char Dham Yatra", "Adventure Trek", "Wildlife Safari"],
    budgets: {
      budgeted: "₹10,000 - ₹18,000",
      luxury: "₹20,000 - ₹35,000",
      premier: "₹40,000+"
    }
  },
  {
    state: "Andaman & Nicobar",
    image: "/Destination/Domestic/main/Andaman-main.jpg",
    description: "Experience pristine beaches, coral reefs, and water sports in India's tropical paradise.",
    bestTime: "October to May",
    places: ["Havelock Island", "Neil Island", "Port Blair", "Baratang Island"],
    food: ["Seafood Platters", "Coconut Water", "Local Fish Curry", "Tropical Fruits"],
    tips: ["Book water activities in advance", "Carry sunscreen", "Try scuba diving", "Visit during dry season"],
    majorTours: ["Island Hopping", "Water Sports Adventure", "Cultural Tour"],
    budgets: {
      budgeted: "₹15,000 - ₹25,000",
      luxury: "₹30,000 - ₹50,000",
      premier: "₹55,000+"
    }
  }
];

const internationalDestinations = [
  {
    country: "Thailand",
    image: "/Destination/International/Main/Thailand-main.jpg",
    description: "Experience the perfect blend of culture and tropical beauty.",
    bestTime: "November to February",
    places: ["Bangkok", "Phuket", "Chiang Mai"],
    food: ["Pad Thai", "Tom Yum", "Green Curry"],
    tips: ["Visit during cool season", "Try street food"],
    majorTours: ["Bangkok City Tour", "Island Hopping"],
    budgets: {
      budgeted: "₹25,000 - ₹40,000",
      luxury: "₹45,000 - ₹70,000",
      premier: "₹75,000+"
    }
  },
  {
    country: "Dubai",
    image: "/Destination/International/Main/Dubai-main.jpg",
    description: "Discover the perfect fusion of modern luxury and traditional Arabian culture in the desert metropolis.",
    bestTime: "November to March",
    places: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
    food: ["Shawarma", "Hummus", "Arabic Coffee", "Dates"],
    tips: ["Visit during winter", "Book desert safari", "Try local cuisine", "Respect dress code"],
    majorTours: ["City Explorer", "Desert Adventure", "Shopping Tour"],
    budgets: {
      budgeted: "₹35,000 - ₹50,000",
      luxury: "₹55,000 - ₹80,000",
      premier: "₹85,000+"
    }
  },
  {
    country: "Bali",
    image: "/Destination/International/Main/Bali-main.jpg",
    description: "Immerse yourself in the island's rich culture, stunning beaches, and spiritual atmosphere.",
    bestTime: "April to October",
    places: ["Ubud", "Seminyak", "Uluwatu", "Nusa Dua"],
    food: ["Nasi Goreng", "Babi Guling", "Sate", "Gado-Gado"],
    tips: ["Visit during dry season", "Try local spa", "Book temples early", "Respect local customs"],
    majorTours: ["Cultural Tour", "Beach Hopping", "Adventure Tour"],
    budgets: {
      budgeted: "₹30,000 - ₹45,000",
      luxury: "₹50,000 - ₹75,000",
      premier: "₹80,000+"
    }
  },
  {
    country: "Singapore",
    image: "/Destination/International/Main/Singapore-main.jpg",
    description: "Experience the perfect blend of modern technology and diverse cultures in the Lion City.",
    bestTime: "February to April",
    places: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay", "Universal Studios"],
    food: ["Hainanese Chicken Rice", "Laksa", "Chili Crab", "Ice Kacang"],
    tips: ["Visit during dry season", "Book attractions early", "Try local food", "Use public transport"],
    majorTours: ["City Explorer", "Theme Park Tour", "Food Tour"],
    budgets: {
      budgeted: "₹40,000 - ₹60,000",
      luxury: "₹65,000 - ₹90,000",
      premier: "₹95,000+"
    }
  },
  {
    country: "Vietnam",
    image: "/Destination/International/Main/Vietnam-main.jpg",
    description: "Explore the rich history, stunning landscapes, and delicious cuisine of this Southeast Asian gem.",
    bestTime: "December to April",
    places: ["Hanoi", "Ho Chi Minh City", "Halong Bay", "Hoi An"],
    food: ["Pho", "Banh Mi", "Spring Rolls", "Vietnamese Coffee"],
    tips: ["Visit during dry season", "Try street food", "Book tours early", "Learn basic phrases"],
    majorTours: ["City Explorer", "Halong Bay Cruise", "Cultural Tour"],
    budgets: {
      budgeted: "₹25,000 - ₹40,000",
      luxury: "₹45,000 - ₹70,000",
      premier: "₹75,000+"
    }
  },
  {
    country: "Maldives",
    image: "/Destination/International/Main/Maldives-main.jpg",
    description: "Experience luxury, pristine beaches, and world-class diving in this tropical paradise.",
    bestTime: "November to April",
    places: ["Male", "Maafushi", "Hulhumale", "Private Islands"],
    food: ["Mas Huni", "Garudhiya", "Bis Keemiya", "Maldivian Curry"],
    tips: ["Visit during dry season", "Book water villas early", "Try water sports", "Respect local customs"],
    majorTours: ["Island Hopping", "Water Sports", "Luxury Resort Stay"],
    budgets: {
      budgeted: "₹45,000 - ₹65,000",
      luxury: "₹70,000 - ₹100,000",
      premier: "₹110,000+"
    }
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
        dest.description.toLowerCase().includes(query) ||
        dest.places.some(place => place.toLowerCase().includes(query))
      )
    );

    setFilteredInternationalDestinations(
      internationalDestinations.filter(dest => 
        dest.country.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.places.some(place => place.toLowerCase().includes(query))
      )
    );
  }, [searchQuery]);

  return (
    <div className="container py-8">
      <BackButton />
      <SectionHeading
        title="Explore Destinations"
        description="Discover amazing places around the world"
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
                image={destination.image}
                description={destination.description}
                bestTime={destination.bestTime}
                places={destination.places}
                food={destination.food}
                tips={destination.tips}
                majorTours={destination.majorTours}
                budgets={destination.budgets}
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
                image={destination.image}
                description={destination.description}
                bestTime={destination.bestTime}
                places={destination.places}
                food={destination.food}
                tips={destination.tips}
                majorTours={destination.majorTours}
                budgets={destination.budgets}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
