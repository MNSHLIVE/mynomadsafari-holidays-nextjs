'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const BlogCard = ({
  imageSrc,
  title,
  excerpt,
  date,
  author,
  tags = [],
  link = "#",
  className,
}: BlogCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl relative flex flex-col bg-card border border-border/50 shadow-sm card-hover h-full",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gray-200 flex items-center justify-center",
          isLoaded && !hasError ? "hidden" : "block"
        )}>
          {hasError && (
            <span className="text-sm text-muted-foreground">Image not available</span>
          )}
        </div>
        {!hasError && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              isLoaded ? "block" : "invisible"
            )}
            onLoadingComplete={() => setIsLoaded(true)}
            onError={handleImageError}
          />
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-secondary/30 text-secondary-foreground px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link href={link} className="hover:text-primary transition-colors">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
          <span>{author}</span>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
