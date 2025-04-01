import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Hotel, Car, Calendar, Users, IndianRupee } from "lucide-react";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import DestinationQueryForm from "@/components/destination-query-form";
import ClientOnly from "./client-only";

// Constants for rate calculations
const HOTEL_RATES = {
  "3-star": {
    single: 2500,
    double: 3500,
    triple: 4500,
  },
  "4-star": {
    single: 4500,
    double: 6000,
    triple: 7500,
  },
  "5-star": {
    single: 8000,
    double: 10000,
    triple: 12000,
  },
} as const;

const TRANSPORT_RATES = {
  sedan: 16, // Average of 15-17 per km
  suv: 18, // Average of 17-19 per km
  tempo: 24, // Average of 23-25 per km
} as const;

const VEHICLE_CAPACITY = {
  sedan: 4,
  suv: 6,
  tempo: 16
} as const;

const INTERNATIONAL_BASE_COSTS = {
  "3-star": 45000,
  "4-star": 75000,
  "5-star": 120000,
} as const;

const DRIVER_ALLOWANCE = 500;
const TOLL_PARKING_ESTIMATE = 300;

// Types
type HotelType = keyof typeof HOTEL_RATES;
type RoomType = keyof typeof HOTEL_RATES["3-star"];
type TransportType = keyof typeof TRANSPORT_RATES;
type CalculatorType = "domestic" | "international";
type PackageType = "Budgeted" | "Luxury" | "Premier";

interface TourCalculatorProps {
  className?: string;
  onSubmit?: (formData: any) => void;
}

const TourCalculator = ({ className, onSubmit }: TourCalculatorProps) => {
  // State
  const [calculatorType, setCalculatorType] = useState<CalculatorType>("domestic");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [hotelType, setHotelType] = useState<HotelType>("3-star");
  const [roomType, setRoomType] = useState<RoomType>("double");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [transportType, setTransportType] = useState<TransportType>("sedan");
  const [distance, setDistance] = useState(750);
  const [packageType, setPackageType] = useState<PackageType>("Budgeted");
  const [travelDate, setTravelDate] = useState<Date | undefined>(undefined);

  // Costs
  const [hotelCost, setHotelCost] = useState(0);
  const [transportCost, setTransportCost] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Destinations data
  const domesticDestinations = [
    "Delhi", "Agra", "Jaipur", "Goa", "Mumbai", "Kerala", "Rajasthan",
    "Shimla", "Manali", "Ladakh", "Darjeeling", "Andaman", "Varanasi"
  ];

  const internationalDestinations = [
    "Dubai", "Singapore", "Bali", "Thailand", "Malaysia", "Maldives",
    "Europe", "USA", "Australia", "Japan", "South Africa", "Egypt"
  ];

  // Add state for showing query form
  const [showQueryForm, setShowQueryForm] = useState(false);

  // Helper functions
  const calculateDistance = (days: number) => Math.max(days * 250, 250);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Effects
  useEffect(() => {
    // Update rooms based on number of adults
    if (adults > 4) {
      setRooms(Math.max(2, Math.ceil(adults / 3)));
    } else if (rooms > 1 && adults <= 2) {
      setRooms(1);
    }
  }, [adults]);

  useEffect(() => {
    // Update distance for domestic tours
    if (calculatorType === "domestic") {
      setDistance(calculateDistance(days));
    }
  }, [days, calculatorType]);

  useEffect(() => {
    const totalTravelers = adults + children;
    
    // Auto-select appropriate vehicle based on number of travelers
    if (totalTravelers > 6 && totalTravelers <= 16) {
      setTransportType('tempo');
    } else if (totalTravelers > 4 && totalTravelers <= 6) {
      setTransportType('suv');
    } else if (totalTravelers <= 4) {
      setTransportType('sedan');
    }
  }, [adults, children]);

  useEffect(() => {
    try {
      if (calculatorType === "domestic") {
        // Calculate domestic costs
        const perNightCost = HOTEL_RATES[hotelType][roomType] * rooms;
        const totalHotelCost = perNightCost * days;
        const transportRate = TRANSPORT_RATES[transportType];
        const totalTransportCost = distance * transportRate;
        
        // Note: We're not adding driver allowance and toll/parking to the total
        // as they will be mentioned as extra costs
        
        setHotelCost(totalHotelCost);
        setTransportCost(totalTransportCost);
        setTotalCost(totalHotelCost + totalTransportCost);
      } else {
        // Calculate international costs
        const baseCost = INTERNATIONAL_BASE_COSTS[hotelType];
        const adultsCost = baseCost * adults;
        const childrenCost = baseCost * 0.7 * children;
        let roomUpgrade = 0;

        if (roomType === "double") roomUpgrade = 0.15 * baseCost * adults;
        if (roomType === "triple") roomUpgrade = 0.25 * baseCost * adults;

        const totalBaseCost = adultsCost + childrenCost;
        
        setHotelCost(totalBaseCost * 0.6);
        setTransportCost(totalBaseCost * 0.3);
        setAdditionalCost(totalBaseCost * 0.1 + roomUpgrade);
        setTotalCost(totalBaseCost + roomUpgrade);
      }

      // Update package type based on hotel type
      setPackageType(
        hotelType === "5-star" ? "Premier" :
        hotelType === "4-star" ? "Luxury" : "Budgeted"
      );
    } catch (error) {
      console.error('Error calculating costs:', error);
      toast.error('Error calculating costs. Please try again.');
    }
  }, [
    days, hotelType, roomType, rooms, transportType,
    distance, adults, children, calculatorType
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!destination) {
      toast.error("Please select a destination");
      return;
    }

    if (!travelDate) {
      toast.error("Please select a travel date");
      return;
    }

    // Show the query form
    setShowQueryForm(true);
  };

  return (
    <section id="package-calculator" className="scroll-mt-16">
      <div className={className}>
        <Card className="w-full shadow-lg border-primary/10">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl flex items-center gap-2">
              <IndianRupee className="h-6 w-6" />
              Tour Package Calculator
            </CardTitle>
            <CardDescription>
              Plan your perfect trip with our easy-to-use package calculator
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ClientOnly>
              <Tabs 
                defaultValue="domestic" 
                value={calculatorType} 
                onValueChange={(value) => setCalculatorType(value as CalculatorType)}
              >
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="domestic">Domestic Tour</TabsTrigger>
                  <TabsTrigger value="international">International Tour</TabsTrigger>
                </TabsList>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Destination */}
                      <div>
                        <Label htmlFor="destination" className="flex items-center gap-1 mb-1.5">
                          <MapPin className="h-4 w-4 text-primary" />
                          Destination
                        </Label>
                        <Select
                          value={destination}
                          onValueChange={setDestination}
                        >
                          <SelectTrigger id="destination">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {(calculatorType === "domestic" ? domesticDestinations : internationalDestinations)
                              .map((dest) => (
                                <SelectItem key={dest} value={dest}>
                                  {dest}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Duration */}
                      <div>
                        <Label htmlFor="days" className="flex items-center gap-1 mb-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          Duration (Days)
                        </Label>
                        <Input
                          id="days"
                          type="number"
                          min={1}
                          max={30}
                          value={days}
                          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                      </div>

                      {/* Travel Date */}
                      <div>
                        <Label htmlFor="travelDate" className="flex items-center gap-1 mb-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          Travel Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                              id="travelDate"
                            >
                              {travelDate ? format(travelDate, "PPP") : "Select a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={travelDate}
                              onSelect={setTravelDate}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Travelers */}
                      <div>
                        <Label className="flex items-center gap-1 mb-1.5">
                          <Users className="h-4 w-4 text-primary" />
                          Travelers
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="adults" className="text-xs">Adults</Label>
                            <Input
                              id="adults"
                              type="number"
                              min={1}
                              max={20}
                              value={adults}
                              onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="children" className="text-xs">Children (4-12 yrs)</Label>
                            <Input
                              id="children"
                              type="number"
                              min={0}
                              max={10}
                              value={children}
                              onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Distance (Domestic only) */}
                      {calculatorType === "domestic" && (
                        <div>
                          <Label htmlFor="distance" className="flex items-center gap-1 mb-1.5">
                            <Car className="h-4 w-4 text-primary" />
                            Estimated Distance (km)
                          </Label>
                          <Input
                            id="distance"
                            type="number"
                            value={distance}
                            readOnly
                            className="bg-muted"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Based on {days} days (250km per day)
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Hotel Type */}
                      <div>
                        <Label htmlFor="hotelType" className="flex items-center gap-1 mb-1.5">
                          <Hotel className="h-4 w-4 text-primary" />
                          Hotel Type
                        </Label>
                        <Select
                          value={hotelType}
                          onValueChange={(value) => setHotelType(value as HotelType)}
                        >
                          <SelectTrigger id="hotelType">
                            <SelectValue placeholder="Select hotel type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-star">3-Star Hotel</SelectItem>
                            <SelectItem value="4-star">4-Star Hotel</SelectItem>
                            <SelectItem value="5-star">5-Star Hotel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Room Type */}
                      <div>
                        <Label htmlFor="roomType" className="flex items-center gap-1 mb-1.5">
                          Room Type
                        </Label>
                        <Select
                          value={roomType}
                          onValueChange={(value) => setRoomType(value as RoomType)}
                        >
                          <SelectTrigger id="roomType">
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single Room</SelectItem>
                            <SelectItem value="double">Double Room</SelectItem>
                            <SelectItem value="triple">Triple Room</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Number of Rooms */}
                      <div>
                        <Label htmlFor="rooms" className="flex items-center gap-1 mb-1.5">
                          Number of Rooms
                        </Label>
                        <Input
                          id="rooms"
                          type="number"
                          min={1}
                          max={10}
                          value={rooms}
                          onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                        {adults > 4 && (
                          <p className="text-xs text-amber-600 mt-1">
                            2+ rooms recommended for {adults} adults
                          </p>
                        )}
                      </div>

                      {/* Transport Type (Domestic only) */}
                      {calculatorType === "domestic" && (
                        <div>
                          <Label htmlFor="transportType" className="flex items-center gap-1 mb-1.5">
                            <Car className="h-4 w-4 text-primary" />
                            Transport Type
                          </Label>
                          <Select
                            value={transportType}
                            onValueChange={(value) => setTransportType(value as keyof typeof TRANSPORT_RATES)}
                          >
                            <SelectTrigger id="transportType">
                              <SelectValue placeholder="Select transport type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sedan">Sedan Car (up to 4 people)</SelectItem>
                              <SelectItem value="suv">SUV (up to 6 people)</SelectItem>
                              <SelectItem value="tempo">Tempo Traveller (up to 16 people)</SelectItem>
                            </SelectContent>
                          </Select>
                          {/* Add vehicle capacity warning if needed */}
                          {adults + children > VEHICLE_CAPACITY[transportType] && (
                            <p className="text-xs text-destructive mt-1">
                              Selected vehicle cannot accommodate {adults + children} travelers. Please choose a larger vehicle.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cost Summary */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-3 text-lg">Estimated Package Cost</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Hotel Cost:</span>
                          <span className="font-medium">{formatCurrency(hotelCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transportation Cost:</span>
                          <span className="font-medium">{formatCurrency(transportCost)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2 border-t">
                          <span>Base Package Cost:</span>
                          <span className="text-primary">{formatCurrency(totalCost)}</span>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">
                          Package Type: <span className="font-bold">{packageType}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          This is a base estimate. Final price may vary based on availability and season.
                        </p>
                        <div className="mt-3 text-xs space-y-1">
                          {calculatorType === "domestic" ? (
                            <>
                              <p className="text-amber-600 font-medium">Additional charges (not included):</p>
                              <p>• Toll taxes and parking charges</p>
                              <p>• Driver allowance (₹500 per day)</p>
                              <p>• Meals and entrance fees</p>
                              <p>• Any other personal expenses</p>
                            </>
                          ) : (
                            <>
                              <p>• All flights and transfers included</p>
                              <p>• Local sightseeing with guide</p>
                              <p>• All taxes and visa assistance</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {showQueryForm ? (
                    <div className="mt-6">
                      <DestinationQueryForm 
                        destinationName={`${destination} ${calculatorType === "domestic" ? "Tour" : "Package"}`}
                        buttonText="Submit Booking Request"
                        buttonVariant="default"
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="mt-6">
                      <Button 
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                      >
                        Book Your Tour
                      </Button>
                    </div>
                  )}
                </div>
              </Tabs>
            </ClientOnly>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TourCalculator; 