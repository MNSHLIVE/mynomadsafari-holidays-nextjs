'use client';

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
import DestinationQueryForm from "./destination-query-form";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

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
};

const TRANSPORT_RATES = {
  sedan: 16,
  suv: 20,
};

const INTERNATIONAL_BASE_COSTS = {
  "3-star": 45000,
  "4-star": 75000,
  "5-star": 120000,
};

const DRIVER_ALLOWANCE = 500;
const TOLL_PARKING_ESTIMATE = 300;

const calculateDistance = (days: number) => {
  return days * 250;
};

interface PackageCalculatorProps {
  className?: string;
}

const PackageCalculator = ({ className }: PackageCalculatorProps) => {
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [calculatorType, setCalculatorType] = useState<"domestic" | "international">("domestic");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [hotelType, setHotelType] = useState<"3-star" | "4-star" | "5-star">("3-star");
  const [roomType, setRoomType] = useState<"single" | "double" | "triple">("double");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [transportType, setTransportType] = useState<"sedan" | "suv">("sedan");
  const [distance, setDistance] = useState(750);
  const [packageType, setPackageType] = useState<"Budgeted" | "Luxury" | "Premier">("Budgeted");
  const [travelDate, setTravelDate] = useState<Date | undefined>(undefined);

  const [hotelCost, setHotelCost] = useState(0);
  const [transportCost, setTransportCost] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const domesticDestinations = [
    "Delhi",
    "Agra",
    "Jaipur",
    "Goa",
    "Mumbai",
    "Kerala",
    "Rajasthan",
    "Shimla",
    "Manali",
    "Ladakh",
    "Darjeeling",
    "Andaman",
  ];

  const internationalDestinations = [
    "Dubai",
    "Singapore",
    "Bali",
    "Thailand",
    "Malaysia",
    "Europe",
    "USA",
    "Australia",
    "Japan",
    "South Africa",
    "Egypt",
    "Maldives",
  ];

  useEffect(() => {
    if (adults > 4) {
      setRooms(Math.max(2, Math.ceil(adults / 3)));
    } else if (rooms > 1 && adults <= 2) {
      setRooms(1);
    }
  }, [adults, rooms]);

  useEffect(() => {
    if (calculatorType === "domestic") {
      const calculatedDistance = calculateDistance(days);
      setDistance(calculatedDistance);
    }
  }, [days, calculatorType]);

  useEffect(() => {
    if (calculatorType === "domestic") {
      const perNightCost = HOTEL_RATES[hotelType][roomType] * rooms;
      const totalHotelCost = perNightCost * days;
      setHotelCost(totalHotelCost);

      const transportRate = TRANSPORT_RATES[transportType];
      const totalTransportCost = distance * transportRate;
      setTransportCost(totalTransportCost);

      const driverAllowance = DRIVER_ALLOWANCE * days;
      const tollParking = TOLL_PARKING_ESTIMATE * days;
      setAdditionalCost(driverAllowance + tollParking);

      const total = totalHotelCost + totalTransportCost + driverAllowance + tollParking;
      setTotalCost(total);
    } else {
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
      const total = totalBaseCost + roomUpgrade;
      setTotalCost(total);
    }

    if (hotelType === "5-star") {
      setPackageType("Premier");
    } else if (hotelType === "4-star") {
      setPackageType("Luxury");
    } else {
      setPackageType("Budgeted");
    }
  }, [days, hotelType, roomType, rooms, transportType, distance, adults, children, calculatorType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) {
      toast.error("Please select a destination");
      return;
    }

    if (!travelDate) {
      toast.error("Please select a travel date");
      return;
    }

    setShowQueryForm(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleNumberChange = (value: string, setter: (val: number) => void, min: number, max: number) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setter(min);
    } else {
      setter(Math.min(Math.max(num, min), max));
    }
  };

  const numberInputClass = `w-full 
    [appearance:textfield] 
    [&::-webkit-outer-spin-button]:appearance-auto 
    [&::-webkit-inner-spin-button]:appearance-auto 
    [&::-webkit-outer-spin-button]:h-6 
    [&::-webkit-inner-spin-button]:h-6 
    [&::-webkit-outer-spin-button]:w-6 
    [&::-webkit-inner-spin-button]:w-6 
    [&::-webkit-outer-spin-button]:m-0 
    [&::-webkit-inner-spin-button]:m-0 
    [&::-webkit-outer-spin-button]:border-0 
    [&::-webkit-inner-spin-button]:border-0 
    [&::-webkit-outer-spin-button]:bg-transparent 
    [&::-webkit-inner-spin-button]:bg-transparent 
    [&::-webkit-outer-spin-button]:cursor-pointer 
    [&::-webkit-inner-spin-button]:cursor-pointer 
    [&::-webkit-outer-spin-button]:opacity-100 
    [&::-webkit-inner-spin-button]:opacity-100
    [-moz-appearance:textfield]
  `;

  return (
    <div id="package-calculator" className={cn("pt-16 md:pt-20 h-screen md:max-h-[90vh] overflow-hidden", className)}>
      <Card className="w-full h-full shadow-lg border-primary/10">
        <CardHeader className="bg-primary/5 sticky top-0 z-10">
          <CardTitle className="text-2xl flex items-center gap-2">
            <IndianRupee className="h-6 w-6" />
            Tour Package Calculator
          </CardTitle>
          <CardDescription>
            Plan your perfect trip with our easy-to-use package calculator
          </CardDescription>
        </CardHeader>
        <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(90vh-8rem)]">
          <CardContent className="pt-6 px-4 md:px-6">
            <Tabs defaultValue="domestic" value={calculatorType} onValueChange={(value) => setCalculatorType(value as "domestic" | "international")}>
              <TabsList className="grid grid-cols-2 mb-6 sticky top-0 bg-background z-10">
                <TabsTrigger value="domestic">Domestic Tour</TabsTrigger>
                <TabsTrigger value="international">International Tour</TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
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
                          {(calculatorType === "domestic" ? domesticDestinations : internationalDestinations).map((dest) => (
                            <SelectItem key={dest} value={dest}>
                              {dest}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

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
                        onChange={(e) => handleNumberChange(e.target.value, setDays, 1, 30)}
                        className={numberInputClass}
                      />
                    </div>

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

                    <div>
                      <Label htmlFor="adults" className="flex items-center gap-1 mb-1.5">
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
                            onChange={(e) => handleNumberChange(e.target.value, setAdults, 1, 20)}
                            className={numberInputClass}
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
                            onChange={(e) => handleNumberChange(e.target.value, setChildren, 0, 10)}
                            className={numberInputClass}
                          />
                        </div>
                      </div>
                    </div>

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
                        <p className="text-xs text-muted-foreground mt-1">Based on {days} days (250km per day)</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hotelType" className="flex items-center gap-1 mb-1.5">
                        <Hotel className="h-4 w-4 text-primary" />
                        Hotel Type
                      </Label>
                      <Select
                        value={hotelType}
                        onValueChange={(value) => setHotelType(value as "3-star" | "4-star" | "5-star")}
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

                    <div>
                      <Label htmlFor="roomType" className="flex items-center gap-1 mb-1.5">
                        Room Type
                      </Label>
                      <Select
                        value={roomType}
                        onValueChange={(value) => setRoomType(value as "single" | "double" | "triple")}
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
                        onChange={(e) => handleNumberChange(e.target.value, setRooms, 1, 10)}
                        className={numberInputClass}
                      />
                      {adults > 4 && (
                        <p className="text-xs text-amber-600 mt-1">
                          2+ rooms recommended for {adults} adults
                        </p>
                      )}
                    </div>

                    {calculatorType === "domestic" && (
                      <div>
                        <Label htmlFor="transportType" className="flex items-center gap-1 mb-1.5">
                          <Car className="h-4 w-4 text-primary" />
                          Transport Type
                        </Label>
                        <Select
                          value={transportType}
                          onValueChange={(value) => setTransportType(value as "sedan" | "suv")}
                        >
                          <SelectTrigger id="transportType">
                            <SelectValue placeholder="Select transport type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedan">Sedan Car</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>

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
                      <div className="flex justify-between">
                        <span>Additional Costs:</span>
                        <span className="font-medium">{formatCurrency(additionalCost)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t">
                        <span>Total Estimated Cost:</span>
                        <span className="text-primary">{formatCurrency(totalCost)}</span>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Package Type: <span className="font-bold">{packageType}</span></h4>
                      <p className="text-sm text-muted-foreground">
                        This is an estimate based on your selections. Actual prices may vary based on availability, season, and specific requirements.
                      </p>
                      <div className="mt-3 text-xs">
                        {calculatorType === "domestic" ? (
                          <>
                            <p>• Toll, parking, and driver allowance included</p>
                            <p>• Pick-up and drop-off from your home</p>
                            <p>• Customized itinerary</p>
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
                  <DestinationQueryForm 
                    destinationName={destination || "Custom Tour Package"} 
                    buttonText="Get Detailed Quote"
                    buttonVariant="default"
                    className="w-full mt-6"
                  />
                ) : (
                  <Button type="submit" className="w-full mt-6">
                    Get Detailed Quote
                  </Button>
                )}
              </form>
            </Tabs>
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default PackageCalculator;
