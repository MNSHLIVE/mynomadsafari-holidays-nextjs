import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";
import DestinationsSection from "@/components/home/destinations-section";
import BlogSection from "@/components/home/blog-section";
import WhatsAppButton from "@/components/whatsapp-button";
import ClientOnly from "@/components/client-only";
import ServicesSection from "@/components/home/services-section";
import TravelCategories from "@/components/home/travel-categories";
import TestimonialsSection from "@/components/home/testimonials-section";
import ErrorBoundary from "@/components/error-boundary";
import {
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
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading component
function LoadingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
        <p className="text-muted-foreground">Please wait while we prepare your experience.</p>
      </div>
    </div>
  );
}

// Import HomeWrapper dynamically with no SSR
const HomeWrapper = dynamic(() => import('@/components/home/home-wrapper'), {
  ssr: false,
  loading: LoadingComponent
});

// Metadata for the home page
export const metadata: Metadata = {
  title: "NomadSafari Holidays - Your One-Stop Travel Expert",
  description: "Discover amazing destinations and travel experiences with NomadSafari Holidays. We offer customized tour packages, religious tours, and international travel services.",
};

// Fallback data for safety
const FALLBACK_DATA = {
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
    price: "Price TBD",
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
    price: "Price TBD",
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

// Helper function to ensure data arrays exist
const ensureArray = <T extends any>(data: T[] | undefined | null, fallback: T[]): T[] => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return fallback;
  }
  return data;
};

export default function Home() {
  return <HomeWrapper />;
} 