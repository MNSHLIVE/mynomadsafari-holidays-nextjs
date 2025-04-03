import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bestTime?: string;
  link?: string;
  className?: string;
  isPopular?: boolean;
}

const DestinationCard = ({
  imageSrc,
  title,
  description,
  bestTime,
  link = `/destinations/${title.toLowerCase().replace(/\s+/g, '-')}`,
  className,
  isPopular = false,
}: DestinationCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl card-hover relative flex flex-col bg-card shadow-sm",
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
        <Link href={link} className="mt-auto">
          <Button 
            variant="default" 
            className="w-full group bg-primary hover:bg-primary/90"
          >
            <span>Explore</span>
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
