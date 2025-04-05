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

// Metadata for the home page
export const metadata = {
  title: 'My NomadSafari Holidays - Your One-Stop Travel Expert',
  description: 'Explore the world your way with personalized travel experiences, expert planning, and unforgettable adventures.',
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
  // Ensure all data arrays exist with proper fallbacks
  const safeData = {
    heroSlides: ensureArray(heroSlides, FALLBACK_DATA.heroSlides),
    popularDestinations: ensureArray(popularDestinations, FALLBACK_DATA.popularDestinations),
    religiousDestinations: ensureArray(religiousDestinations, FALLBACK_DATA.religiousDestinations),
    internationalDestinations: ensureArray(internationalDestinations, FALLBACK_DATA.internationalDestinations),
    hillStations: ensureArray(hillStations, FALLBACK_DATA.hillStations),
    popularTours: ensureArray(popularTours, FALLBACK_DATA.popularTours),
    religiousTours: ensureArray(religiousTours, FALLBACK_DATA.religiousTours),
    testimonials: ensureArray(testimonials, FALLBACK_DATA.testimonials),
    blogPosts: ensureArray(blogPosts, FALLBACK_DATA.blogPosts)
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <ClientOnly>
          <HeroSlider slides={safeData.heroSlides} />
        </ClientOnly>
      </div>

      {/* Services Section */}
      <div className="relative">
        <ClientOnly>
          <ServicesSection />
        </ClientOnly>
      </div>

      {/* Travel Categories */}
      <div className="relative">
        <ClientOnly>
          <TravelCategories />
        </ClientOnly>
      </div>

      {/* Featured Tours Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Tours"
            subtitle="Discover our most popular travel experiences"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {safeData.popularTours.map((tour) => (
              <div key={tour.id} className="h-full">
                <ClientOnly>
                  <TourCard tour={tour} className="h-full" />
                </ClientOnly>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/tours">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Religious Tours Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Religious Tours"
            subtitle="Embark on a spiritual journey"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {safeData.religiousTours.map((tour) => (
              <div key={tour.id} className="h-full">
                <ClientOnly>
                  <TourCard tour={tour} className="h-full" />
                </ClientOnly>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/tours/religious">View All Religious Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Sections */}
      <div className="relative">
        <ClientOnly>
          <DestinationsSection
            title="Popular Destinations"
            subtitle="Explore our handpicked destinations for your next adventure"
            tag="Featured Destinations"
            destinations={safeData.popularDestinations}
            viewAllLink="/destinations"
            viewAllText="View All Destinations"
          />
        </ClientOnly>
      </div>

      <div className="relative">
        <ClientOnly>
          <DestinationsSection
            title="Popular Religious Places"
            subtitle="Embark on a spiritual journey to these sacred destinations"
            tag="Religious Tourism"
            destinations={safeData.religiousDestinations}
            viewAllLink="/destinations?category=pilgrimage"
            viewAllText="Explore Religious Tours"
            bgColor="bg-muted/30 py-16"
          />
        </ClientOnly>
      </div>

      <div className="relative">
        <ClientOnly>
          <DestinationsSection
            title="International Destinations"
            subtitle="Explore exotic locations around the world with our expertly crafted packages"
            tag="Global Expeditions"
            destinations={safeData.internationalDestinations}
            viewAllLink="/destinations?category=international"
            viewAllText="Explore International Destinations"
            bgColor="bg-muted/30 py-16"
          />
        </ClientOnly>
      </div>

      <div className="relative">
        <ClientOnly>
          <DestinationsSection
            title="Popular Hill Stations"
            subtitle="Escape to the serene mountains and breathtaking landscapes"
            tag="Mountain Retreats"
            destinations={safeData.hillStations}
            viewAllLink="/destinations?category=hillstations"
            viewAllText="Explore Hill Stations"
          />
        </ClientOnly>
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        <ClientOnly>
          <TestimonialsSection testimonials={safeData.testimonials} />
        </ClientOnly>
      </div>

      {/* Recent Blog Posts */}
      <div className="relative">
        <ClientOnly>
          <BlogSection posts={safeData.blogPosts} />
        </ClientOnly>
      </div>

      {/* WhatsApp Button */}
      <div className="relative">
        <ClientOnly>
          <WhatsAppButton />
        </ClientOnly>
      </div>
    </div>
  );
} 