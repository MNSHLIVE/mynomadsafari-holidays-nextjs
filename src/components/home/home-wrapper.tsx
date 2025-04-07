'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";
import DestinationsSection from "@/components/home/destinations-section";
import BlogSection from "@/components/home/blog-section";
import WhatsAppButton from "@/components/whatsapp-button";
import ServicesSection from "@/components/home/services-section";
import TravelCategories from "@/components/home/travel-categories";
import TestimonialsSection from "@/components/home/testimonials-section";
import ErrorBoundary from "@/components/error-boundary";
import FeaturedTours from "@/components/home/featured-tours";
import PopularDestinations from "@/components/home/popular-destinations";
import Testimonials from "@/components/home/testimonials";
import {
  HeroSlide as ImportedHeroSlide,
  Destination as ImportedDestination,
  Tour as ImportedTour,
  BlogPost as ImportedBlogPost,
  heroSlides,
  popularDestinations,
  religiousDestinations,
  internationalDestinations,
  hillStations,
  popularTours,
  religiousTours,
  testimonials,
  blogPosts,
} from "@/components/home/home-data";
import PackageCalculator from "@/components/home/package-calculator";

// Define interfaces for our safe data
interface HeroSlide {
  imageSrc: string;
  title: string;
  subtitle: string;
}

interface Destination {
  imageSrc: string;
  title: string;
  description: string;
  bestTime: string;
}

interface Tour {
  id: string;
  title: string;
  imageSrc: string;
  location: string;
  duration: string;
  price: string;
  bestTime: string;
  packageType: "Budgeted";
  description: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  author: string;
  tags: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface SafeData {
  heroSlides: HeroSlide[];
  popularDestinations: Destination[];
  religiousDestinations: Destination[];
  internationalDestinations: Destination[];
  hillStations: Destination[];
  popularTours: Tour[];
  religiousTours: Tour[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
}

// Fallback data with proper typing
const FALLBACK_DATA: SafeData = {
  heroSlides: [{
    imageSrc: "/placeholder.jpg",
    title: "Your One-Stop Travel Expert",
    subtitle: "Explore the world your way"
  }],
  popularDestinations: [{
    imageSrc: "/placeholder.jpg",
    title: "Popular Destination",
    description: "Experience amazing destinations",
    bestTime: "All year round"
  }],
  religiousDestinations: [{
    imageSrc: "/placeholder.jpg",
    title: "Religious Destination",
    description: "Experience spiritual journeys",
    bestTime: "All year round"
  }],
  internationalDestinations: [{
    imageSrc: "/placeholder.jpg",
    title: "International Destination",
    description: "Explore the world",
    bestTime: "All year round"
  }],
  hillStations: [{
    imageSrc: "/placeholder.jpg",
    title: "Hill Station",
    description: "Experience mountain beauty",
    bestTime: "All year round"
  }],
  popularTours: [{
    id: "default-tour",
    title: "Popular Tour Package",
    imageSrc: "/placeholder.jpg",
    location: "Location TBD",
    duration: "Duration TBD",
    price: "Price on request",
    bestTime: "Best time TBD",
    packageType: "Budgeted" as const,
    description: "Experience amazing destinations"
  }],
  religiousTours: [{
    id: "default-religious-tour",
    title: "Religious Tour Package",
    imageSrc: "/placeholder.jpg",
    location: "Location TBD",
    duration: "Duration TBD",
    price: "Price on request",
    bestTime: "Best time TBD",
    packageType: "Budgeted" as const,
    description: "Experience spiritual journeys"
  }],
  testimonials: [{
    quote: "Amazing experience with NomadSafari Holidays",
    author: "Happy Traveler",
    role: "Verified Customer",
    rating: 5
  }],
  blogPosts: [{
    id: "default-post",
    title: "Travel Blog",
    excerpt: "Explore amazing destinations",
    imageSrc: "/placeholder.jpg",
    date: new Date().toISOString(),
    author: "Travel Expert",
    tags: ["Travel", "Adventure"]
  }]
};

// Helper function to ensure data arrays exist and convert price to string
const ensureArray = <T extends Record<string, any>>(data: T[] | undefined | null, fallback: T[]): T[] => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return fallback;
  }
  // If the array contains tour objects, ensure price is a string
  if (data.length > 0 && 'price' in data[0]) {
    return data.map(item => ({
      ...item,
      price: typeof item.price === 'number' ? item.price.toString() : item.price
    }));
  }
  return data;
};

export default function HomeWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [safeData, setSafeData] = useState<SafeData>(FALLBACK_DATA);

  useEffect(() => {
    try {
      // Convert imported types to our safe types
      const data: SafeData = {
        heroSlides: ensureArray<HeroSlide>(heroSlides as HeroSlide[], FALLBACK_DATA.heroSlides),
        popularDestinations: ensureArray<Destination>(popularDestinations as Destination[], FALLBACK_DATA.popularDestinations),
        religiousDestinations: ensureArray<Destination>(religiousDestinations as Destination[], FALLBACK_DATA.religiousDestinations),
        internationalDestinations: ensureArray<Destination>(internationalDestinations as Destination[], FALLBACK_DATA.internationalDestinations),
        hillStations: ensureArray<Destination>(hillStations as Destination[], FALLBACK_DATA.hillStations),
        popularTours: ensureArray<Tour>(popularTours.map(tour => ({
          ...tour,
          price: typeof tour.price === 'number' ? tour.price.toString() : tour.price,
          packageType: "Budgeted"
        })) as Tour[], FALLBACK_DATA.popularTours),
        religiousTours: ensureArray<Tour>(religiousTours.map(tour => ({
          ...tour,
          price: typeof tour.price === 'number' ? tour.price.toString() : tour.price,
          packageType: "Budgeted"
        })) as Tour[], FALLBACK_DATA.religiousTours),
        testimonials: ensureArray<Testimonial>(testimonials as Testimonial[], FALLBACK_DATA.testimonials),
        blogPosts: ensureArray<BlogPost>(blogPosts as BlogPost[], FALLBACK_DATA.blogPosts)
      };

      setSafeData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
          <p className="text-muted-foreground">Please wait while we prepare your experience.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ErrorBoundary>
        <div className="relative">
          <HeroSlider slides={safeData.heroSlides} />
        </div>
      </ErrorBoundary>
      
      {/* Package Calculator */}
      <ErrorBoundary>
        <PackageCalculator />
      </ErrorBoundary>

      {/* Travel Categories */}
      <ErrorBoundary>
        <TravelCategories />
      </ErrorBoundary>

      {/* Featured Tours */}
      <ErrorBoundary>
        <FeaturedTours tours={safeData.popularTours} />
      </ErrorBoundary>

      {/* Popular Destinations */}
      <ErrorBoundary>
        <PopularDestinations destinations={safeData.popularDestinations} />
      </ErrorBoundary>

      {/* Testimonials */}
      <ErrorBoundary>
        <Testimonials testimonials={safeData.testimonials} />
      </ErrorBoundary>

      {/* Blog Section */}
      <ErrorBoundary>
        <BlogSection posts={safeData.blogPosts} />
      </ErrorBoundary>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
} 