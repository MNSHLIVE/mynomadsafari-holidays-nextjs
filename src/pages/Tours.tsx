'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Layout from "@/components/layout";
import SectionHeading from "@/components/section-heading";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import type { SelectProps } from "@radix-ui/react-select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Filter,
  Check,
  X,
  MapPin,
  Clock,
  Calendar,
  IndianRupee,
  Plane,
  CreditCard,
  Hotel,
  Bus,
  UtensilsCrossed
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/components/back-button";
import ClientOnly from "@/components/client-only";

// Dynamic imports with proper typing
const TourCard = dynamic(() => import("@/components/tour-card"), { ssr: false });
const Select = dynamic<SelectProps>(() => import("@/components/ui/select").then(mod => mod.Select), { ssr: false });
const SelectContent = dynamic<any>(() => import("@/components/ui/select").then(mod => mod.SelectContent), { ssr: false });
const SelectItem = dynamic<any>(() => import("@/components/ui/select").then(mod => mod.SelectItem), { ssr: false });
const SelectTrigger = dynamic<any>(() => import("@/components/ui/select").then(mod => mod.SelectTrigger), { ssr: false });
const SelectValue = dynamic<any>(() => import("@/components/ui/select").then(mod => mod.SelectValue), { ssr: false });
const Tabs = dynamic<any>(() => import("@/components/ui/tabs").then(mod => mod.Tabs), { ssr: false });
const TabsContent = dynamic<any>(() => import("@/components/ui/tabs").then(mod => mod.TabsContent), { ssr: false });
const TabsList = dynamic<any>(() => import("@/components/ui/tabs").then(mod => mod.TabsList), { ssr: false });
const TabsTrigger = dynamic<any>(() => import("@/components/ui/tabs").then(mod => mod.TabsTrigger), { ssr: false });

const tours = [
  // Featured Door-to-Door Packages
  {
    id: 101,
    title: "Dubai Family Delight",
    imageSrc: "/Destination/International/Tours/Dubai/Dubai-Family-Delight.jpg",
    location: "Dubai, UAE",
    duration: "7 Days",
    price: 159999,
    bestTime: "October - April",
    packageType: "Luxury",
    country: "UAE",
    region: "Middle East",
    description: "Experience the magic of Dubai with this exclusive family package. From doorstep pickup to airport transfers, everything is taken care of for a hassle-free vacation.",
    activities: ["Desert Safari", "Burj Khalifa Visit", "Dubai Mall Shopping", "Dhow Cruise Dinner"],
    included: ["Home Pickup & Drop", "5-Star Accommodation", "All Meals", "Private Tours", "Visa Processing", "Travel Insurance"],
    groupSize: "Family Package (4 persons)",
    highlight: "Door-to-Door Service",
    itinerary: [
      { day: 1, title: "Arrive in Dubai", description: "Welcome to Dubai! Our representative will greet you at the airport and transfer you to your luxury hotel. Rest of the day at leisure." },
      { day: 2, title: "Dubai City Tour", description: "Explore the highlights of Dubai including the Dubai Museum, Gold Souk, and enjoy a traditional abra ride across Dubai Creek." },
      { day: 3, title: "Burj Khalifa & Dubai Mall", description: "Visit the world's tallest building, Burj Khalifa. Enjoy shopping at Dubai Mall and watch the spectacular Dubai Fountain show." },
      { day: 4, title: "Desert Safari", description: "Experience an exciting desert safari with dune bashing, camel riding, and a BBQ dinner with entertainment under the stars." },
      { day: 5, title: "Waterpark Adventure", description: "Enjoy a full day at Aquaventure Waterpark with thrilling slides and attractions for the whole family." },
      { day: 6, title: "Abu Dhabi Day Trip", description: "Visit Sheikh Zayed Grand Mosque, Ferrari World, and other attractions in Abu Dhabi." },
      { day: 7, title: "Departure", description: "After breakfast, check out and transfer to the airport for your return flight." }
    ]
  },
  {
    id: 102,
    title: "Singapore Complete Experience",
    imageSrc: "/Destination/International/Tours/Singapore/Singapore-Complete-Experience.jpg",
    location: "Singapore",
    duration: "6 Days",
    price: 145999,
    bestTime: "Year Round",
    packageType: "Luxury",
    country: "Singapore",
    region: "Southeast Asia",
    description: "Discover the beauty of Singapore with our complete package that takes care of every detail from your doorstep to Singapore and back.",
    activities: ["Gardens by the Bay", "Universal Studios", "Sentosa Island", "Singapore Flyer"],
    included: ["Home Pickup & Drop", "4-Star Accommodation", "Breakfast & Dinner", "Skip-the-line Attraction Tickets", "Visa Processing", "Travel Insurance"],
    groupSize: "Up to 6 people",
    highlight: "Door-to-Door Service",
    itinerary: [
      { day: 1, title: "Arrive in Singapore", description: "Arrive at Changi Airport and transfer to your hotel. Evening at leisure to explore the nearby area." },
      { day: 2, title: "City Tour", description: "Explore Singapore's highlights including Merlion Park, Gardens by the Bay, and Marina Bay Sands." },
      { day: 3, title: "Universal Studios", description: "Full day at Universal Studios Singapore with access to all attractions and shows." },
      { day: 4, title: "Sentosa Island", description: "Enjoy the beaches and attractions of Sentosa Island, including the S.E.A. Aquarium and cable car ride." },
      { day: 5, title: "Shopping & Cultural Tour", description: "Visit Chinatown, Little India, and enjoy shopping at Orchard Road." },
      { day: 6, title: "Departure", description: "Check out and transfer to Changi Airport for your return flight." }
    ]
  },
  {
    id: 103,
    title: "Enchanting Bali Getaway",
    imageSrc: "/Destination/International/Tours/Bali/Bali-Getaway.jpg",
    location: "Bali, Indonesia",
    duration: "8 Days",
    price: 135999,
    bestTime: "April - October",
    packageType: "Luxury",
    country: "Indonesia",
    region: "Southeast Asia",
    description: "A carefully crafted door-to-door Bali experience with personal assistance throughout the journey. Perfect for couples and honeymooners.",
    activities: ["Rice Terrace Trekking", "Temple Visits", "Sunset Dinner", "Spa Treatments", "Ubud Art Tour"],
    included: ["Home Pickup & Drop", "Villa Accommodation", "Daily Breakfast & Dinner", "Private Tours", "Visa On Arrival Assistance", "Travel Insurance"],
    groupSize: "Couple Package",
    highlight: "Door-to-Door Service"
  },
  {
    id: 104,
    title: "Thailand Family Adventure",
    imageSrc: "/Destination/International/Tours/Thailand/Thailand-Family-Adventure.jpg",
    location: "Bangkok, Phuket, Krabi",
    duration: "9 Days",
    price: 179999,
    bestTime: "November - March",
    packageType: "Luxury",
    country: "Thailand",
    region: "Southeast Asia",
    description: "Experience the best of Thailand with our comprehensive door-to-door package perfect for families seeking adventure and relaxation.",
    activities: ["Elephant Sanctuary Visit", "Island Hopping", "Thai Cooking Class", "Water Sports"],
    included: ["Home Pickup & Drop", "4-Star Resorts", "All Meals", "Private Guides", "Domestic Flights", "Travel Insurance"],
    groupSize: "Family Package (4 persons)",
    highlight: "Door-to-Door Service"
  },
  
  // Domestic Tours - Per day per person rate: ₹5,333
  {
    id: 5,
    title: "Goa Beach Getaway",
    imageSrc: "/Destination/Domestic/Tours/Goa/Goa-Beach-Getaway.jpg",
    location: "North and South Goa",
    duration: "4 Days",
    price: 21332,
    bestTime: "November - February",
    packageType: "Budgeted",
    country: "India",
    region: "West India",
    description: "Enjoy the pristine beaches, vibrant nightlife, and Portuguese heritage of India's favorite coastal destination.",
    activities: ["Beach Activities", "Water Sports", "Night Markets", "Heritage Tours"],
    included: ["Hotel Accommodation", "Breakfast", "Airport Transfers", "Sightseeing"],
    groupSize: "Flexible",
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive in Goa, relax at Baga Beach, nightlife at Tito's." },
      { day: 2, title: "Old Goa Exploration", description: "Explore Old Goa (Basilica of Bom Jesus), Dudhsagar Falls." },
      { day: 3, title: "South Goa", description: "South Goa (Palolem Beach), water sports." },
      { day: 4, title: "Departure", description: "Shopping at Anjuna Flea Market, depart." }
    ],
    highlights: ["Beaches", "Nightlife", "Portuguese Heritage"]
  },
  {
    id: 6,
    title: "Kerala Backwaters Luxury",
    imageSrc: "/Destination/Domestic/Tours/Kerala/Kerala-Backwaters-Luxury.jpg",
    location: "Kochi, Munnar, Alleppey",
    duration: "6 Days",
    price: 31998,
    bestTime: "September - March",
    packageType: "Luxury",
    country: "India",
    region: "South India",
    description: "Experience the serene backwaters of Kerala in luxury houseboats, explore tea plantations, and enjoy Ayurvedic treatments.",
    activities: ["Houseboat Stay", "Tea Plantation Visit", "Ayurvedic Spa", "Wildlife Safari"],
    included: ["Luxury Accommodation", "All Meals", "Private Guides", "All Transportation"],
    groupSize: "Private Tour",
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive in Kochi, Fort Kochi tour." },
      { day: 2, title: "Munnar Hills", description: "Munnar tea plantations, Eravikulam National Park." },
      { day: 3, title: "Thekkady Wildlife", description: "Thekkady (Periyar Wildlife Sanctuary)." },
      { day: 4, title: "Alleppey Backwaters", description: "Alleppey backwaters houseboat stay." },
      { day: 5, title: "Kovalam Beach", description: "Kovalam Beach relaxation." },
      { day: 6, title: "Departure", description: "Depart from Trivandrum." }
    ],
    highlights: ["Backwaters", "Hills", "Wildlife"]
  },
  {
    id: 7,
    title: "Premier Himachal Adventure",
    imageSrc: "/Destination/Domestic/Tours/Himachal/Himachal-Adventure.jpg",
    location: "Shimla, Kullu, Manali, Dharamshala",
    duration: "7 Days",
    price: 37331,
    bestTime: "October - March",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "A luxury journey through the beautiful landscapes of Himachal Pradesh with premium accommodations and exclusive experiences.",
    activities: ["Snow Activities", "Paragliding", "Temple Visits", "Trekking"],
    included: ["Luxury Accommodations", "All Meals", "Private Guides", "Premium Transportation"],
    groupSize: "Private Tour",
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Arrive in Shimla, Mall Road." },
      { day: 2, title: "Kufri Exploration", description: "Kufri sightseeing, snow activities." },
      { day: 3, title: "Journey to Manali", description: "Manali via Kullu Valley." },
      { day: 4, title: "Rohtang Adventure", description: "Rohtang Pass adventure." },
      { day: 5, title: "Solang Valley", description: "Solang Valley, paragliding." },
      { day: 6, title: "McLeod Ganj", description: "Dharamshala (McLeod Ganj)." },
      { day: 7, title: "Departure", description: "Depart from Dharamshala." }
    ],
    highlights: ["Snow", "Adventure", "Monasteries"]
  },
  
  // International Tours - Per day per person rate: ₹10,555
  {
    id: 1,
    title: "Dubai Discovery",
    imageSrc: "/Destination/International/Tours/Dubai/Dubai-Discovery.jpg",
    location: "Dubai, UAE",
    duration: "7 Days",
    price: "73885",
    bestTime: "October - April",
    packageType: "Luxury",
    country: "UAE",
    region: "Middle East",
    description: "Experience the glamour of Dubai with this exclusive package. Visit the iconic Burj Khalifa, enjoy desert safaris, and shop at the Dubai Mall.",
    itinerary: [
      {
        day: 1,
        title: "Arrival and City Tour",
        description: "Arrive in Dubai and check into your hotel. Evening city tour to see the illuminated skyline."
      },
      {
        day: 2,
        title: "Burj Khalifa and Dubai Mall",
        description: "Visit the tallest building in the world and enjoy shopping at the Dubai Mall. Evening fountain show."
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Experience an exciting desert safari with dune bashing, camel riding, and a BBQ dinner with entertainment under the stars."
      },
      {
        day: 4,
        title: "Abu Dhabi Day Trip",
        description: "Visit the Sheikh Zayed Grand Mosque, Ferrari World, and other attractions in Abu Dhabi."
      },
      {
        day: 5,
        title: "Dubai Miracle Garden",
        description: "Visit the world's largest natural flower garden and enjoy the evening at Dubai Marina."
      },
      {
        day: 6,
        title: "Palm Jumeirah and Atlantis",
        description: "Explore the Palm Jumeirah and visit the iconic Atlantis Hotel. Evening at leisure."
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, check out and transfer to the airport for your return flight."
      }
    ]
  },
  {
    id: 2,
    title: "Singapore Explorer",
    imageSrc: "/Destination/International/Tours/Singapore/Singapore-Explorer.jpg",
    location: "Singapore",
    duration: "6 Days",
    price: "63330",
    bestTime: "Year Round",
    packageType: "Luxury",
    country: "Singapore",
    region: "Southeast Asia",
    description: "Discover the island city-state of Singapore with its futuristic architecture, lush gardens, and diverse culture.",
    itinerary: [
      {
        day: 1,
        title: "Arrival and Marina Bay Sands",
        description: "Arrive in Singapore and check into your hotel. Evening visit to Marina Bay Sands and the spectacular light show."
      },
      {
        day: 2,
        title: "Sentosa Island",
        description: "Full day at Sentosa Island including Universal Studios, S.E.A. Aquarium, and Adventure Cove Waterpark."
      },
      {
        day: 3,
        title: "Gardens by the Bay and Singapore Flyer",
        description: "Visit the futuristic gardens and take a ride on the giant observation wheel for panoramic views."
      },
      {
        day: 4,
        title: "Cultural Heritage Tour",
        description: "Explore Chinatown, Little India, and Kampong Glam to experience Singapore's multicultural heritage."
      },
      {
        day: 5,
        title: "Singapore Zoo and Night Safari",
        description: "Day visit to the award-winning Singapore Zoo followed by the famous Night Safari experience."
      },
      {
        day: 6,
        title: "Departure",
        description: "Last-minute shopping at Orchard Road and departure."
      }
    ]
  },
  {
    id: 3,
    title: "Bali Bliss",
    imageSrc: "/Destination/International/Tours/Bali/Bali-Bliss.jpg",
    location: "Bali, Indonesia",
    duration: "8 Days",
    price: "84440",
    bestTime: "April - October",
    packageType: "Luxury",
    country: "Indonesia",
    region: "Southeast Asia",
    description: "Experience the paradise island of Bali with its stunning beaches, rice terraces, and spiritual retreats."
  },
  {
    id: 4,
    title: "Thailand Adventure",
    imageSrc: "/Destination/International/Tours/Thailand/Thailand-Adventure.jpg",
    location: "Bangkok, Phuket, Krabi",
    duration: "9 Days",
    price: "94995",
    bestTime: "November - March",
    packageType: "Luxury",
    country: "Thailand",
    region: "Southeast Asia",
    description: "Experience the best of Thailand from the bustling capital to idyllic beaches and stunning limestone cliffs."
  },
  
  // More tours can be added here
];

const regions = [
  "North India", 
  "South India", 
  "West India", 
  "Southeast Asia", 
  "Middle East"
];

const activities = [
  "Beach Activities",
  "Cultural Shows",
  "Desert Safari",
  "Heritage Walks",
  "Houseboat Stay",
  "Island Hopping",
  "Monument Visits",
  "Spa Treatments",
  "Temple Visits",
  "Water Sports"
];

// Client-side select wrapper
interface SelectWrapperProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
}

const SelectWrapper = ({ value, onValueChange, placeholder, options }: SelectWrapperProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filters, setFilters] = useState(false);
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [tourDetailsOpen, setTourDetailsOpen] = useState(false);
  const [currentTourDetail, setCurrentTourDetail] = useState<any>(null);
  const [selectedPackageType, setSelectedPackageType] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterTours = (tours: any[]) => {
    return tours.filter((tour) => {
      const matchesSearch = 
        searchTerm === "" || 
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tour.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = 
        selectedRegions.length === 0 || 
        selectedRegions.includes(tour.region);
      
      const matchesActivities = 
        selectedActivities.length === 0 || 
        tour.activities.some((activity: string) => selectedActivities.includes(activity));
      
      const matchesDuration = () => {
        if (selectedDuration === "") return true;
        const days = parseInt(tour.duration);
        switch (selectedDuration) {
          case "short":
            return days <= 5;
          case "medium":
            return days > 5 && days <= 9;
          case "long":
            return days > 9;
          default:
            return true;
        }
      };
      
      const matchesPrice = 
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      
      return matchesSearch && matchesRegion && matchesActivities && matchesDuration() && matchesPrice;
    });
  };

  const handleViewTourDetails = (tourId: number) => {
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      setCurrentTourDetail(tour);
      setTourDetailsOpen(true);
    }
  };

  const doorToDoorPackages = tours.filter(tour => tour.highlight === "Door-to-Door Service");
  
  const indianTours = filterTours(tours.filter(tour => tour.country === "India" && !tour.highlight));
  const internationalTours = filterTours(tours.filter(tour => tour.country !== "India" && !tour.highlight));

  const clearFilters = () => {
    setSelectedRegions([]);
    setSelectedActivities([]);
    setSelectedDuration("");
    setSelectedPriceRange("");
    setPriceRange([0, 100000]);
    setSearchTerm("");
    setSelectedPackageType("");
  };

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region) 
        : [...prev, region]
    );
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity) 
        : [...prev, activity]
    );
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <BackButton />
      <section className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground mb-3">
          Explore Our Tours
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Curated Tour Packages
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover our handpicked tours for your next adventure
        </p>
        
        <div className="relative max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search tours by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/tours/religious">
            <Button variant="outline" className="rounded-full">
              Religious Tours
            </Button>
          </Link>
          <Link href="/tours/group">
            <Button variant="outline" className="rounded-full">
              Group Tours
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 shadow-sm border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">End-to-End Travel Solution</h2>
              <p className="text-lg mb-4">
                Experience hassle-free travel with our door-to-door service. We pick you up from your home, 
                take care of everything during your journey, and drop you back safely.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <Badge className="px-3 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/30 flex items-center">
                  <Plane className="mr-1 h-3 w-3" /> Return Flights
                </Badge>
                <Badge className="px-3 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/30 flex items-center">
                  <CreditCard className="mr-1 h-3 w-3" /> Visa Processing
                </Badge>
                <Badge className="px-3 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/30 flex items-center">
                  <Hotel className="mr-1 h-3 w-3" /> Premium Accommodations
                </Badge>
                <Badge className="px-3 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/30 flex items-center">
                  <Bus className="mr-1 h-3 w-3" /> Private Transfers
                </Badge>
                <Badge className="px-3 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/30 flex items-center">
                  <UtensilsCrossed className="mr-1 h-3 w-3" /> Daily Meals
                </Badge>
              </div>
              <p className="text-muted-foreground">
                <strong>Note:</strong> All door-to-door packages include return flights, visa processing, 
                premium accommodations, private transfers, sightseeing, and most meals.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <Button size="lg" className="rounded-full px-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <SectionHeading
          title="Featured Door-to-Door Packages"
          subtitle="Premium packages with home pickup and drop service"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {doorToDoorPackages.map((tour) => (
            <TourCard
              key={tour.id}
              imageSrc={tour.imageSrc}
              title={tour.title}
              location={tour.location}
              duration={tour.duration}
              price={`₹${tour.price}`}
              bestTime={tour.bestTime}
              packageType={tour.packageType as "Budgeted" | "Luxury" | "Premier"}
              link="#"
              className="relative"
              itinerary={tour.itinerary}
              description={tour.description}
            />
          ))}
        </div>

        <div className="bg-muted/30 rounded-xl p-6 mt-10">
          <h3 className="text-xl font-semibold mb-4">What's Included in Door-to-Door Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Home Pickup & Drop</h4>
                <p className="text-sm text-muted-foreground">Comfortable transportation from your doorstep</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Return Flights</h4>
                <p className="text-sm text-muted-foreground">Economy class flights from your nearest airport</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Premium Accommodations</h4>
                <p className="text-sm text-muted-foreground">4 & 5-star hotels with breakfast included</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Visa Processing</h4>
                <p className="text-sm text-muted-foreground">Complete assistance with visa applications</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Travel Insurance</h4>
                <p className="text-sm text-muted-foreground">Comprehensive coverage for peace of mind</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Private Transfers</h4>
                <p className="text-sm text-muted-foreground">Between airports, hotels, and attractions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Sightseeing Tours</h4>
                <p className="text-sm text-muted-foreground">Guided tours at all destinations</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Daily Meals</h4>
                <p className="text-sm text-muted-foreground">Breakfast and dinner included</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Dedicated support throughout your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden w-full mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between"
              onClick={() => setFilters(!filters)}
            >
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter Tours
              </span>
              {(selectedRegions.length > 0 || selectedActivities.length > 0 || selectedDuration !== "" || priceRange[0] > 0 || priceRange[1] < 100000) && (
                <Badge variant="secondary" className="ml-2">
                  Active Filters
                </Badge>
              )}
            </Button>
          </div>

          <div className={cn(
            "lg:w-1/4 space-y-6",
            { "hidden": !filters, "block": filters, "lg:block": true }
          )}>
            <div className="bg-card rounded-lg border border-border/50 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="h-8 text-xs"
                >
                  Clear All
                </Button>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Price Range</h4>
                <ClientOnly>
                  <Select defaultValue={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1000">Under $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                      <SelectItem value="3000+">Over $3,000</SelectItem>
                    </SelectContent>
                  </Select>
                </ClientOnly>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Duration</h4>
                <ClientOnly>
                  <div className="relative w-full">
                    <Select
                      defaultValue={selectedDuration}
                      onValueChange={setSelectedDuration}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 Days</SelectItem>
                        <SelectItem value="4-7">4-7 Days</SelectItem>
                        <SelectItem value="8-14">8-14 Days</SelectItem>
                        <SelectItem value="15+">15+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </ClientOnly>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Regions</h4>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <label key={region} className="flex items-center space-x-2 cursor-pointer">
                      <div 
                        className={cn(
                          "w-4 h-4 border rounded flex items-center justify-center",
                          selectedRegions.includes(region) 
                            ? "bg-primary border-primary" 
                            : "border-muted-foreground"
                        )}
                        onClick={() => toggleRegion(region)}
                      >
                        {selectedRegions.includes(region) && (
                          <Check className="h-3 w-3 text-primary-foreground" />
                        )}
                      </div>
                      <span className="text-sm">{region}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {activities.map((activity) => (
                    <Badge 
                      key={activity}
                      variant={selectedActivities.includes(activity) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleActivity(activity)}
                    >
                      {activity}
                      {selectedActivities.includes(activity) && (
                        <X className="ml-1 h-3 w-3" onClick={(e) => {
                          e.stopPropagation();
                          toggleActivity(activity);
                        }} />
                      )}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Package Type</h4>
                <ClientOnly>
                  <Select defaultValue={selectedPackageType} onValueChange={setSelectedPackageType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="door-to-door">Door-to-Door</SelectItem>
                      <SelectItem value="group">Group</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="religious">Religious</SelectItem>
                    </SelectContent>
                  </Select>
                </ClientOnly>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <ClientOnly>
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All Tours</TabsTrigger>
                    <TabsTrigger value="india">India</TabsTrigger>
                    <TabsTrigger value="international">International</TabsTrigger>
                  </TabsList>
                  
                  <div className="hidden md:flex items-center gap-2">
                    <Select defaultValue="recommended">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="duration-short">Duration: Shortest</SelectItem>
                        <SelectItem value="duration-long">Duration: Longest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filterTours([...tours]).length > 0 ? (
                      filterTours([...tours]).map((tour) => (
                        <TourCard
                          key={tour.id}
                          imageSrc={tour.imageSrc}
                          title={tour.title}
                          location={tour.location}
                          duration={tour.duration}
                          price={`Starting from ₹${tour.price.toLocaleString()}`}
                          bestTime={tour.bestTime}
                          packageType={tour.packageType as "Budgeted" | "Luxury" | "Premier"}
                          link="#"
                          className="relative"
                          itinerary={tour.itinerary}
                          description={tour.description}
                        />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-muted-foreground">No tours found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="india" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {indianTours.length > 0 ? (
                      indianTours.map((tour) => (
                        <TourCard
                          key={tour.id}
                          imageSrc={tour.imageSrc}
                          title={tour.title}
                          location={tour.location}
                          duration={tour.duration}
                          price={`Starting from ₹${tour.price.toLocaleString()}`}
                          bestTime={tour.bestTime}
                          packageType={tour.packageType as "Budgeted" | "Luxury" | "Premier"}
                          link="#"
                          className="relative"
                          itinerary={tour.itinerary}
                          description={tour.description}
                        />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-muted-foreground">No Indian tours found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="international" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {internationalTours.length > 0 ? (
                      internationalTours.map((tour) => (
                        <TourCard
                          key={tour.id}
                          imageSrc={tour.imageSrc}
                          title={tour.title}
                          location={tour.location}
                          duration={tour.duration}
                          price={`Starting from ₹${tour.price.toLocaleString()}`}
                          bestTime={tour.bestTime}
                          packageType={tour.packageType as "Budgeted" | "Luxury" | "Premier"}
                          link="#"
                          className="relative"
                          itinerary={tour.itinerary}
                          description={tour.description}
                        />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-muted-foreground">No international tours found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </ClientOnly>
          </div>
        </div>
      </section>

      <CTASection 
        title="Create Your Custom Tour"
        description="Don't see what you're looking for? Let our experts design a personalized tour for you."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Tours;
