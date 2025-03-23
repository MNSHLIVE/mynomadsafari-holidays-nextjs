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
import { Link } from "react-router-dom";

// Sample data for destinations
const indianDestinations = [
  {
    state: "Rajasthan",
    image: "/Destination/Domestic/main/Rajasthan-main.jpg",
    description: "Experience the royal heritage and vibrant culture of Rajasthan, from the majestic forts to the colorful festivals.",
    bestTime: "October to March",
    places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    food: ["Dal Bati Churma", "Laal Maas", "Ghevar", "Kachori"],
    tips: ["Visit during winter months", "Book heritage hotels in advance", "Try local handicrafts", "Experience desert safari"],
    majorTours: ["Golden Triangle Tour", "Rajasthan Heritage Tour", "Desert Safari Tour"],
    budgets: {
      budgeted: "₹15,000 - ₹25,000",
      luxury: "₹30,000 - ₹50,000",
      premier: "₹60,000+"
    }
  },
  {
    state: "Kerala",
    image: "/Destination/Domestic/main/Kerala-main.jpg",
    description: "Discover the serene backwaters, lush tea plantations, and rich cultural heritage of God's Own Country.",
    bestTime: "October to March",
    places: ["Munnar", "Alleppey", "Kochi", "Thekkady"],
    food: ["Appam with Stew", "Kerala Parotta", "Fish Curry", "Puttu"],
    tips: ["Book houseboat in advance", "Try Ayurvedic treatments", "Visit during monsoon for lush greenery", "Experience Kathakali"],
    majorTours: ["Backwater Cruise", "Tea Plantation Tour", "Cultural Heritage Tour"],
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
    description: "Experience the perfect blend of culture, cuisine, and tropical beauty in the Land of Smiles.",
    bestTime: "November to February",
    places: ["Bangkok", "Phuket", "Chiang Mai", "Krabi"],
    food: ["Pad Thai", "Tom Yum", "Green Curry", "Mango Sticky Rice"],
    tips: ["Visit during cool season", "Try street food", "Book temples early", "Respect local customs"],
    majorTours: ["Bangkok City Tour", "Island Hopping", "Cultural Experience"],
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

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredIndianDestinations = indianDestinations.filter(dest => 
    dest.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInternationalDestinations = internationalDestinations.filter(dest => 
    dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground mb-3">
            Explore
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Beautiful Destinations
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            From the vibrant streets of India to exotic international locations
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="india" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="india">India</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>
          </div>

          {/* India Tab */}
          <TabsContent value="india" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredIndianDestinations.map((dest, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl card-hover bg-card shadow-sm border border-border/50">
                  <img 
                    src={dest.image} 
                    alt={dest.state} 
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{dest.state}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{dest.description}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium">Best time to visit:</span> {dest.bestTime}
                    </p>
                    <div className="flex justify-between items-center">
                      <DestinationQueryForm 
                        destinationName={dest.state} 
                        buttonText="Enquire Now"
                      />
                      <Link to={`/destinations/${dest.state.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary hover:bg-primary/5"
                      >
                          View Details
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <SectionHeading
                title="Explore Indian Destinations"
                subtitle="Detailed information about our popular Indian destinations"
                align="left"
              />

              <Accordion type="single" collapsible className="w-full">
                {filteredIndianDestinations.map((dest, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    id={`accordion-${index}`}
                    className="border border-border/50 rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-xl px-4 hover:bg-muted/30">
                      {dest.state}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 p-4">
                        <div className="md:col-span-1">
                          <img 
                            src={dest.image} 
                            alt={dest.state} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="mt-4 flex justify-center">
                            <DestinationQueryForm 
                              destinationName={dest.state} 
                              buttonText="Plan Your Trip" 
                              buttonVariant="default"
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <p className="text-muted-foreground">{dest.description}</p>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                            <p>{dest.bestTime}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Places of Interest</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {dest.places.map((place, idx) => (
                                <li key={idx}>{place}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Local Food to Try</h4>
                            <div className="flex flex-wrap gap-2">
                              {dest.food.map((item, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Exploration Tips</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {dest.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 px-4">
                        <h4 className="font-semibold text-lg">Major Tours</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {dest.majorTours.map((tour, idx) => (
                            <div key={idx} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                              <h5 className="font-medium mb-2">{tour}</h5>
                              <Button variant="link" className="p-0 h-auto text-primary">
                                View Details
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 px-4 pb-4">
                        <h4 className="font-semibold text-lg mb-4">Budget Tiers</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 border border-border rounded-lg bg-blue-50/50 dark:bg-blue-900/10">
                            <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Budgeted</h5>
                            <p className="text-lg font-semibold">{dest.budgets.budgeted}</p>
                            <p className="text-sm text-muted-foreground">Economy options</p>
                          </div>
                          <div className="p-4 border border-border rounded-lg bg-purple-50/50 dark:bg-purple-900/10">
                            <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Luxury</h5>
                            <p className="text-lg font-semibold">{dest.budgets.luxury}</p>
                            <p className="text-sm text-muted-foreground">High-end experiences</p>
                          </div>
                          <div className="p-4 border border-border rounded-lg bg-green-50/50 dark:bg-green-900/10">
                            <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Premier</h5>
                            <p className="text-lg font-semibold">{dest.budgets.premier}</p>
                            <p className="text-sm text-muted-foreground">Exclusive experiences</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* International Tab */}
          <TabsContent value="international" className="mt-0">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">International Destinations</h2>
              <Button
                variant="outline"
                onClick={() => setActiveTab("all")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Destinations
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredInternationalDestinations.map((dest, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl card-hover bg-card shadow-sm border border-border/50">
                  <img 
                    src={dest.image} 
                    alt={dest.country} 
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{dest.country}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{dest.description}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium">Best time to visit:</span> {dest.bestTime}
                    </p>
                    <div className="flex justify-between items-center">
                      <DestinationQueryForm 
                        destinationName={dest.country} 
                        buttonText="Enquire Now"
                      />
                      <Link to={`/destinations/${dest.country.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary hover:bg-primary/5"
                      >
                          View Details
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <SectionHeading
                title="Explore International Destinations"
                subtitle="Detailed information about our popular international destinations"
                align="left"
              />

              <Accordion type="single" collapsible className="w-full">
                {filteredInternationalDestinations.map((dest, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-int-${index}`}
                    id={`accordion-int-${index}`}
                    className="border border-border/50 rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-xl px-4 hover:bg-muted/30">
                      {dest.country}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 p-4">
                        <div className="md:col-span-1">
                          <img 
                            src={dest.image} 
                            alt={dest.country} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="mt-4 flex justify-center">
                            <DestinationQueryForm 
                              destinationName={dest.country} 
                              buttonText="Plan Your Trip" 
                              buttonVariant="default"
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <p className="text-muted-foreground">{dest.description}</p>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                            <p>{dest.bestTime}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Places of Interest</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {dest.places.map((place, idx) => (
                                <li key={idx}>{place}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Local Food to Try</h4>
                            <div className="flex flex-wrap gap-2">
                              {dest.food.map((item, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Exploration Tips</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {dest.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 px-4">
                        <h4 className="font-semibold text-lg">Major Tours</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {dest.majorTours.map((tour, idx) => (
                            <div key={idx} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                              <h5 className="font-medium mb-2">{tour}</h5>
                              <Button variant="link" className="p-0 h-auto text-primary">
                                View Details
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 px-4 pb-4">
                        <h4 className="font-semibold text-lg mb-4">Budget Tiers</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 border border-border rounded-lg bg-blue-50/50 dark:bg-blue-900/10">
                            <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Budgeted</h5>
                            <p className="text-lg font-semibold">{dest.budgets.budgeted}</p>
                            <p className="text-sm text-muted-foreground">Economy options</p>
                          </div>
                          <div className="p-4 border border-border rounded-lg bg-purple-50/50 dark:bg-purple-900/10">
                            <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Luxury</h5>
                            <p className="text-lg font-semibold">{dest.budgets.luxury}</p>
                            <p className="text-sm text-muted-foreground">High-end experiences</p>
                          </div>
                          <div className="p-4 border border-border rounded-lg bg-green-50/50 dark:bg-green-900/10">
                            <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Premier</h5>
                            <p className="text-lg font-semibold">{dest.budgets.premier}</p>
                            <p className="text-sm text-muted-foreground">Exclusive experiences</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Destinations;
