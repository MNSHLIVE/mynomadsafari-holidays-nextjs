'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PackageCalculatorProps {
  basePrice: number;
  title: string;
}

export function PackageCalculator({ basePrice, title }: PackageCalculatorProps) {
  const [adults, setAdults] = useState(2); // Default 2 adults
  const [extraAdults, setExtraAdults] = useState(0); // Additional adults beyond 2
  const [infants, setInfants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [roomType, setRoomType] = useState("standard"); // standard, deluxe, suite

  const calculatePrice = useCallback(() => {
    let price = basePrice; // Base price (for 2 adults)
    
    // Calculate extra adult cost (35% of base price per extra adult for triple sharing)
    if (extraAdults > 0) {
      const extraAdultCost = basePrice * 0.35 * extraAdults;
      price += extraAdultCost;
    }

    // Room type adjustments
    switch (roomType) {
      case "deluxe":
        price *= 1.2; // 20% more for deluxe
        break;
      case "suite":
        price *= 1.5; // 50% more for suite
        break;
    }

    setTotalPrice(Math.round(price));
  }, [basePrice, extraAdults, roomType]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const handleExtraAdultsChange = (value: number) => {
    setExtraAdults(value);
  };

  const handleInfantsChange = (value: number) => {
    setInfants(value);
  };

  const handleRoomTypeChange = (value: string) => {
    setRoomType(value);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Calculate Package Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Base Package (2 Adults)</Label>
            <p className="text-sm text-muted-foreground mb-2">Base price includes 2 adults: ₹{basePrice.toLocaleString()}</p>
          </div>

          <div className="space-y-2">
            <Label>Extra Adults (+35% per person)</Label>
            <Select 
              value={extraAdults.toString()} 
              onValueChange={(value) => setExtraAdults(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select extra adults" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No extra adults</SelectItem>
                <SelectItem value="1">1 extra adult (Triple sharing)</SelectItem>
                <SelectItem value="2">2 extra adults (2 rooms)</SelectItem>
              </SelectContent>
            </Select>
            {extraAdults > 0 && (
              <p className="text-sm text-muted-foreground">
                Extra adult cost: ₹{Math.round(basePrice * 0.35 * extraAdults).toLocaleString()}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Infants (0-2 years)</Label>
            <Select 
              value={infants.toString()} 
              onValueChange={(value) => setInfants(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of infants" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No infants</SelectItem>
                <SelectItem value="1">1 infant</SelectItem>
                <SelectItem value="2">2 infants</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Infants travel free</p>
          </div>

          <div className="space-y-2">
            <Label>Room Type</Label>
            <Select 
              value={roomType} 
              onValueChange={setRoomType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Room</SelectItem>
                <SelectItem value="deluxe">Deluxe Room (+20%)</SelectItem>
                <SelectItem value="suite">Suite (+50%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 border-t">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Total Price</p>
                  <p className="text-sm text-muted-foreground">
                    {2 + extraAdults} Adults, {infants} Infants
                  </p>
                </div>
                <p className="text-2xl font-bold text-primary">₹{totalPrice.toLocaleString()}</p>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Base price for 2 adults: ₹{basePrice.toLocaleString()}</p>
                {extraAdults > 0 && (
                  <p>• Extra adult(s) cost: ₹{Math.round(basePrice * 0.35 * extraAdults).toLocaleString()}</p>
                )}
                {roomType !== "standard" && (
                  <p>• Room upgrade: {roomType === "deluxe" ? "+20%" : "+50%"}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 