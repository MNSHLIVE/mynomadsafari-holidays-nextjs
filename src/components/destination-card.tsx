"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { DestinationQueryForm } from "./destination-query-form";

interface DestinationCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bestTime?: string;
  link?: string;
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
  link = `/destinations/${title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`,
  className,
  isPopular = false,
  places = [],
  food = [],
  tips = [],
}: DestinationCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm border border-border/50",
          className
        )}
      >
        <div className="relative h-48 md:h-60 overflow-hidden">
          {isPopular && (
            <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              Popular
            </div>
          )}
          <div className={cn(
            "absolute inset-0 bg-gray-200",
            isLoaded ? "hidden" : "block"
          )} />
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              isLoaded ? "block" : "invisible"
            )}
            onLoadingComplete={() => setIsLoaded(true)}
          />
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-lg">{description}</DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h4 className="mb-2 text-lg font-semibold">Best Time to Visit</h4>
                <p className="text-gray-600">{bestTime}</p>
              </div>

              {places.length > 0 && (
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Places to Visit</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-600">
                    {places.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              )}

              {food.length > 0 && (
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Local Cuisine</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-600">
                    {food.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {tips.length > 0 && (
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Travel Tips</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-600">
                    {tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-4 text-lg font-semibold">Inquire About {title}</h4>
              <DestinationQueryForm destination={title} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DestinationCard;
