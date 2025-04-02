'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TourCalculatorProps {
  basePrice: number;
  title: string;
}

export function TourCalculator({ basePrice, title }: TourCalculatorProps) {
  const [adults, setAdults] = useState(1);
  const [extraAdults, setExtraAdults] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [selectedRoom, setSelectedRoom] = useState('single');

  const calculatePrice = () => {
    const adultPrice = adults * basePrice;
    const extraAdultPrice = extraAdults * (basePrice * 0.35); // Extra adults at 35% of adult price
    
    // Room price adjustment
    let roomAdjustment = 0;
    if (selectedRoom === 'single') {
      roomAdjustment = adults * (basePrice * 0.2); // 20% extra for single rooms
    } else if (selectedRoom === 'double') {
      roomAdjustment = Math.ceil(adults / 2) * (basePrice * 0.1); // 10% extra for double rooms
    }
    
    const total = adultPrice + extraAdultPrice + roomAdjustment;
    setTotalPrice(total);
  };

  const handleAdultsChange = (value: string) => {
    const num = parseInt(value) || 0;
    setAdults(Math.max(1, num));
    calculatePrice();
  };

  const handleExtraAdultsChange = (value: string) => {
    const num = parseInt(value) || 0;
    setExtraAdults(Math.max(0, num));
    calculatePrice();
  };

  const handleInfantsChange = (value: string) => {
    const num = parseInt(value) || 0;
    setInfants(Math.max(0, num));
    calculatePrice();
  };

  const handleRoomChange = (value: string) => {
    setSelectedRoom(value);
    calculatePrice();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calculate Tour Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="adults">Number of Adults</Label>
            <Input
              id="adults"
              type="number"
              min="1"
              value={adults}
              onChange={(e) => handleAdultsChange(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="extraAdults">Extra Adults (35% of Adult Price)</Label>
            <Input
              id="extraAdults"
              type="number"
              min="0"
              value={extraAdults}
              onChange={(e) => handleExtraAdultsChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="infants">Number of Infants (0-4 years) - Free</Label>
            <Input
              id="infants"
              type="number"
              min="0"
              value={infants}
              onChange={(e) => handleInfantsChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Room Preference</Label>
            <Select value={selectedRoom} onValueChange={handleRoomChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Room</SelectItem>
                <SelectItem value="double">Double Room</SelectItem>
                <SelectItem value="triple">Triple Room</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Price:</span>
              <span className="text-xl font-bold text-primary">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <Button className="w-full mt-4" onClick={calculatePrice}>
            Calculate Price
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 