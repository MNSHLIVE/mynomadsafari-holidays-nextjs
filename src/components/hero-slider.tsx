"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSliderProps {
  slides: Array<{
    imageSrc: string;
    title: string;
    subtitle?: string;
  }>;
  interval?: number;
  className?: string;
}

const HeroSlider = ({ slides, interval = 5000, className }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calculator = document.getElementById('package-calculator');
    if (calculator) {
      calculator.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={cn("relative h-[600px] md:h-[700px] overflow-hidden", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="absolute inset-0">
            <Image
              src={slide.imageSrc}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          <div className="absolute inset-0 z-[2] flex items-center">
            <div className="max-w-3xl mx-auto text-center text-white pt-20 md:pt-0 animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/30 mb-4">
                Discover the World with Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-white/80 mb-8">
                  {slide.subtitle}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 z-[3]"
                >
                  <Link href="/calculate-tour">
                    Calculate Your Trip
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 z-[3]"
                >
                  <Link href="/destinations">
                    Know More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[4] rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[4] rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[4] flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
