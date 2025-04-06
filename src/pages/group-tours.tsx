import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import CTASection from "@/components/cta-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Plane, Check, ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BackButton from "@/components/back-button";
import { useRouter } from "next/router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DestinationQueryForm from "@/components/destination-query-form";

const domesticGroupTours = [
  {
    id: 301,
    title: "Himalayan Adventure Group",
    imageSrc: "/Destination/Domestic/Tours/Group-Tours/Domestic Group Tours/Himalayan-Adventure-Group/Himalayan-Adventure.jpg",
    location: "Himachal & Uttarakhand",
    duration: "8 Days",
    price: "35000",
    bestTime: "March - June, Sept - Nov",
    packageType: "Budgeted",
    groupSize: "15-20 people",
    departureDate: "15th May 2024",
    description: "Join our exciting group tour to the Himalayas and experience the beauty of the mountains with like-minded travelers.",
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Group meetup in Delhi and transfer to Shimla by AC coach. Evening welcome dinner and briefing." },
      { day: 2, title: "Shimla Sightseeing", description: "Explore Mall Road, Ridge, Christ Church, Jakhu Temple, and Viceregal Lodge. Evening free for shopping." },
      { day: 3, title: "Shimla to Manali", description: "Scenic drive to Manali via Kullu Valley. Visit Hanogi Mata Temple and Kullu shawl factories en route." },
      { day: 4, title: "Manali Local Tour", description: "Visit Hadimba Temple, Vashisht Hot Springs, Mall Road, and Tibetan Monastery. Evening cultural program." },
      { day: 5, title: "Rohtang Pass Excursion", description: "Full day excursion to snow-covered Rohtang Pass. Enjoy snow activities and stunning views (subject to weather)." },
      { day: 6, title: "Manali to Dharamshala", description: "Travel to Dharamshala, home of Dalai Lama. Evening visit to St. John's Church and local market." },
      { day: 7, title: "McLeod Ganj Tour", description: "Visit Dalai Lama Temple, Bhagsu Waterfall, local Tibetan market, and HPCA Cricket Stadium." },
      { day: 8, title: "Return to Delhi", description: "Morning departure to Delhi. Tour ends with memories to cherish forever." }
    ]
  },
  {
    id: 302,
    title: "Kerala Group Experience",
    imageSrc: "/Destination/Domestic/Tours/Group-Tours/Domestic Group Tours/Kerala-Group/Kerala-Group.jpg",
    location: "Kerala",
    duration: "6 Days",
    price: "28000",
    bestTime: "October - March",
    packageType: "Budgeted",
    groupSize: "15-20 people",
    departureDate: "10th November 2024",
    description: "Explore the backwaters, beaches, and tea plantations of Kerala with our specially designed group tour.",
    itinerary: [
      { day: 1, title: "Arrive in Kochi", description: "Group assembly at Kochi, traditional welcome, hotel check-in, and evening welcome dinner with cultural show." },
      { day: 2, title: "Kochi City Tour", description: "Visit Fort Kochi, Chinese Fishing Nets, Jewish Synagogue, Mattancherry Palace, and evening Kathakali performance." },
      { day: 3, title: "Kochi to Munnar", description: "Travel to Munnar through scenic routes, visit tea museum, Eravikulam National Park, and photo stop at waterfalls." },
      { day: 4, title: "Munnar to Thekkady", description: "Visit tea plantations, spice gardens, and evening wildlife safari at Periyar Tiger Reserve." },
      { day: 5, title: "Thekkady to Alleppey", description: "Check-in to luxury houseboat, backwater cruise, village visits, and overnight stay with traditional Kerala dinner." },
      { day: 6, title: "Departure from Kochi", description: "Morning yoga by the backwaters, return to Kochi, farewell lunch, and departure." }
    ]
  }
];

const internationalGroupTours = [
  {
    id: 401,
    title: "Thailand Group Package",
    imageSrc: "/Destination/Domestic/Tours/Group-Tours/International Group Tours/Thailand-Group-Package.jpg",
    location: "Bangkok, Pattaya, Phuket",
    duration: "7 Days",
    price: "75000",
    bestTime: "November - March",
    packageType: "Budgeted",
    groupSize: "20-25 people",
    departureDate: "20th December 2024",
    description: "Join our Thailand group tour and experience the perfect blend of culture, beaches, and nightlife with fellow travelers.",
    itinerary: [
      { day: 1, title: "Arrive in Bangkok", description: "Group assembly at Bangkok Airport, traditional Thai welcome, transfer to hotel, orientation walk, and welcome dinner with cultural show." },
      { day: 2, title: "Bangkok City Tour", description: "Visit Grand Palace complex, Emerald Buddha Temple, Wat Arun (Temple of Dawn), enjoy Chao Phraya river cruise with lunch, and evening Siam Niramit show." },
      { day: 3, title: "Bangkok to Pattaya", description: "Transfer to Pattaya, visit Nong Nooch Village & Gardens, evening Alcazar Show, followed by dinner at a rooftop restaurant." },
      { day: 4, title: "Coral Island Tour", description: "Speedboat to Coral Island, enjoy water sports (parasailing, banana boat), snorkeling at coral reefs, beachside lunch, and evening walking street tour." },
      { day: 5, title: "Pattaya to Phuket", description: "Morning flight to Phuket, afternoon city tour including Big Buddha, Chalong Temple, and free time at Patong Beach with optional spa treatments." },
      { day: 6, title: "Phi Phi Island Tour", description: "Full-day speedboat tour to Phi Phi Islands, Maya Bay, monkey beach, snorkeling at coral reefs, lunch at Phi Phi Don, and sunset dinner cruise." },
      { day: 7, title: "Departure", description: "Morning free for shopping at local markets, farewell lunch, and transfer to Phuket airport for departure." }
    ]
  },
  {
    id: 402,
    title: "Dubai Group Adventure",
    imageSrc: "/Destination/Domestic/Tours/Group-Tours/International Group Tours/Dubai-Group-Adventure.jpg",
    location: "Dubai & Abu Dhabi",
    duration: "6 Days",
    price: "85000",
    bestTime: "October - April",
    packageType: "Budgeted",
    groupSize: "20-25 people",
    departureDate: "15th February 2025",
    description: "Experience the glamour of Dubai and Abu Dhabi with our specially designed group tour package.",
    itinerary: [
      { day: 1, title: "Arrive in Dubai", description: "Group assembly at Dubai Airport, meet & greet, transfer to hotel, evening Dubai Marina walk and welcome dinner at a floating restaurant." },
      { day: 2, title: "Dubai City Tour", description: "Visit Burj Khalifa (124th floor), Dubai Mall, Dubai Aquarium, Old Dubai walking tour (Gold & Spice Souks), traditional Abra ride, and fountain show." },
      { day: 3, title: "Desert Safari", description: "Morning at leisure, afternoon desert safari with dune bashing, camel riding, sandboarding, henna painting, and BBQ dinner with belly dance show." },
      { day: 4, title: "Abu Dhabi Day Trip", description: "Full-day Abu Dhabi tour - Sheikh Zayed Grand Mosque, Presidential Palace, Heritage Village, Ferrari World (optional), and Corniche beach visit." },
      { day: 5, title: "Dubai Modern Attractions", description: "Visit Miracle Garden, Global Village, Frame Dubai, afternoon tea at Burj Al Arab (optional), and Dhow cruise dinner with entertainment." },
      { day: 6, title: "Departure", description: "Morning free for last-minute shopping at Dubai Mall or Mall of Emirates, farewell lunch, and transfer to Dubai airport." }
    ]
  }
];

const GroupTours = () => {
  const [activeTab, setActiveTab] = useState("domestic");
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    window.history.back();
  };

  const handleViewDetails = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <BackButton />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground mb-3">
          Travel Together
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Group Tours
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Join our scheduled group departures and enjoy the benefits of traveling with like-minded explorers
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 shadow-sm border border-primary/20 mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Group Tours?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Cost-Effective Travel</h4>
                  <p className="text-sm text-muted-foreground">Save money with our specially negotiated group rates</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Make New Friends</h4>
                  <p className="text-sm text-muted-foreground">Meet like-minded travelers and create lasting memories</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Enhanced Safety</h4>
                  <p className="text-sm text-muted-foreground">Travel safely in a group with our experienced guides</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Guaranteed Departures</h4>
                  <p className="text-sm text-muted-foreground">Fixed departure dates that you can plan around</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-center items-center">
            <Button size="lg" className="rounded-full px-6 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              View All Departures
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="domestic" className="w-full mb-10" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="domestic">Domestic Group Tours</TabsTrigger>
            <TabsTrigger value="international">International Group Tours</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="domestic" className="mt-0">
          <SectionHeading
            title="Domestic Group Tours"
            subtitle="Explore India with our guided group packages"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {domesticGroupTours.map((tour) => (
              <div key={tour.id} className="group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm border border-border/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {tour.packageType}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                  
                  <div className="grid grid-cols-1 gap-2 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-primary" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-primary" />
                      <span>Departure: {tour.departureDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-primary" />
                      <span>Group Size: {tour.groupSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>
                  
                  <Badge variant="outline" className="w-fit mb-3">
                    {tour.duration}
                  </Badge>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-semibold">{parseInt(tour.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleViewDetails(tour)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="international" className="mt-0">
          <SectionHeading
            title="International Group Tours"
            subtitle="Explore the world with our guided group packages"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {internationalGroupTours.map((tour) => (
              <div key={tour.id} className="group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm border border-border/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {tour.packageType}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-blue-500 text-white">
                      <Plane className="w-3 h-3 mr-1" />
                      Flight Included
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                  
                  <div className="grid grid-cols-1 gap-2 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-primary" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-primary" />
                      <span>Departure: {tour.departureDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-primary" />
                      <span>Group Size: {tour.groupSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>
                  
                  <Badge variant="outline" className="w-fit mb-3">
                    {tour.duration}
                  </Badge>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-semibold">{parseInt(tour.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleViewDetails(tour)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/30 rounded-xl p-6 mt-10">
        <h3 className="text-xl font-semibold mb-4">What's Included in {activeTab === "domestic" ? "Domestic" : "International"} Group Tours</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Accommodation</h4>
              <p className="text-sm text-muted-foreground">Comfortable hotels with breakfast</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Transportation</h4>
              <p className="text-sm text-muted-foreground">Air-conditioned vehicles for transfers</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Guided Tours</h4>
              <p className="text-sm text-muted-foreground">Professional guides at all destinations</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">{activeTab === "international" ? "Return Flights" : "Some Meals"}</h4>
              <p className="text-sm text-muted-foreground">{activeTab === "international" ? "International flights from major cities" : "Selected meals as per itinerary"}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">{activeTab === "international" ? "Visa Assistance" : "Monument Entries"}</h4>
              <p className="text-sm text-muted-foreground">{activeTab === "international" ? "Help with visa application process" : "Entry tickets to all monuments and attractions"}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Tour Manager</h4>
              <p className="text-sm text-muted-foreground">Dedicated tour manager throughout the journey</p>
            </div>
          </div>
        </div>
      </div>

      <CTASection 
        title="Join Our Next Group Departure"
        description="Limited seats available for our upcoming group tours. Book now to secure your spot!"
        buttonText="Book Now"
        buttonLink="/contact"
      />

      {/* Tour Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          {selectedTour && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedTour.title}</DialogTitle>
                <DialogDescription>
                  {selectedTour.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tour Details */}
                <div className="space-y-6">
                  {/* Tour Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={selectedTour.imageSrc}
                      alt={selectedTour.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Tour Info */}
                  <div className="grid gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Tour Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          <span>{selectedTour.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          <span>Departure: {selectedTour.departureDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          <span>Group Size: {selectedTour.groupSize}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>{selectedTour.duration}</span>
                        </div>
                      </div>
                    </div>

                    {selectedTour.highlights && selectedTour.highlights.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Tour Highlights</h4>
                        <div className="grid gap-2">
                          {selectedTour.highlights.map((highlight: string, index: number) => (
                            <div key={index} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedTour.inclusions && selectedTour.inclusions.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">What's Included</h4>
                        <div className="grid gap-2">
                          {selectedTour.inclusions.map((inclusion: string, index: number) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Book {selectedTour.title}</h3>
                  <DestinationQueryForm 
                    destinationName={selectedTour.title}
                    buttonText="Send Inquiry"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GroupTours;
