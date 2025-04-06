"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DestinationQueryForm from "@/components/destination-query-form";

interface DestinationCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bestTime?: string;
  className?: string;
  isPopular?: boolean;
  places?: string[];
  food?: string[];
  tips?: string[];
}

const DestinationCard = ({
  imageSrc,
  title,
  description,
  bestTime,
  className,
  isPopular,
  places = [],
  food = [],
  tips = []
}: DestinationCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm border border-border/50",
          className
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
          {isPopular && (
            <div className="absolute top-3 left-3">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Popular
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          {bestTime && (
            <p className="text-xs text-muted-foreground mt-auto mb-3">
              <span className="font-medium">Best time to visit:</span> {bestTime}
            </p>
          )}
          <div className="mt-auto">
            <Button 
              variant="default" 
              className="w-full group bg-primary hover:bg-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Explore</span>
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Destination Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Destination Details */}
            <div className="space-y-6">
              {/* Destination Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Best Time */}
              {bestTime && (
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Best Time to Visit</h4>
                  <p className="text-sm text-muted-foreground">{bestTime}</p>
                </div>
              )}

              {/* Places to Visit */}
              {places.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Places to Visit</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {places.map((place, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Local Food */}
              {food.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Local Cuisine</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {food.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Tips */}
              {tips.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Travel Tips</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-primary">ℹ</span>
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Inquiry Form */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Plan Your Trip to {title}</h3>
              <DestinationQueryForm 
                destinationName={title}
                buttonText="Send Inquiry"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DestinationCard;
