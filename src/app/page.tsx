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

// Default data for safety
const defaultTour = {
  id: "default-tour",
  title: "Tour Package",
  imageSrc: "/placeholder.jpg",
  location: "Location TBD",
  duration: "Duration TBD",
  price: "Price TBD",
  bestTime: "Best time TBD",
  packageType: "Budgeted" as const,
  description: "Tour description coming soon",
};

// Helper function to ensure data arrays exist
const ensureArray = <T extends any>(data: T[] | undefined | null, defaultItem?: T): T[] => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return defaultItem ? [defaultItem] : [];
  }
  return data;
};

export default function Home() {
  // Ensure all data arrays exist with proper fallbacks
  const safeTours = {
    popular: ensureArray(popularTours, defaultTour),
    religious: ensureArray(religiousTours, defaultTour),
  };

  const safeDestinations = {
    popular: ensureArray(popularDestinations),
    religious: ensureArray(religiousDestinations),
    international: ensureArray(internationalDestinations),
    hillStations: ensureArray(hillStations),
  };

  const safeHeroSlides = ensureArray(heroSlides);
  const safeTestimonials = ensureArray(testimonials);
  const safeBlogPosts = ensureArray(blogPosts);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {safeHeroSlides.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <HeroSlider slides={safeHeroSlides} />
          </ClientOnly>
        </div>
      )}

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
      {safeTours.popular.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Featured Tours"
              subtitle="Discover our most popular travel experiences"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {safeTours.popular.map((tour) => (
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
      )}

      {/* Religious Tours Section */}
      {safeTours.religious.length > 0 && (
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Religious Tours"
              subtitle="Embark on a spiritual journey"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {safeTours.religious.map((tour) => (
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
      )}

      {/* Destinations Sections */}
      {safeDestinations.popular.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Destinations"
              subtitle="Explore our handpicked destinations for your next adventure"
              tag="Featured Destinations"
              destinations={safeDestinations.popular}
              viewAllLink="/destinations"
              viewAllText="View All Destinations"
            />
          </ClientOnly>
        </div>
      )}

      {safeDestinations.religious.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Religious Places"
              subtitle="Embark on a spiritual journey to these sacred destinations"
              tag="Religious Tourism"
              destinations={safeDestinations.religious}
              viewAllLink="/destinations?category=pilgrimage"
              viewAllText="Explore Religious Tours"
              bgColor="bg-muted/30 py-16"
            />
          </ClientOnly>
        </div>
      )}

      {safeDestinations.international.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="International Destinations"
              subtitle="Explore exotic locations around the world with our expertly crafted packages"
              tag="Global Expeditions"
              destinations={safeDestinations.international}
              viewAllLink="/destinations?category=international"
              viewAllText="Explore International Destinations"
              bgColor="bg-muted/30 py-16"
            />
          </ClientOnly>
        </div>
      )}

      {safeDestinations.hillStations.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Hill Stations"
              subtitle="Escape to the serene mountains and breathtaking landscapes"
              tag="Mountain Retreats"
              destinations={safeDestinations.hillStations}
              viewAllLink="/destinations?category=hillstations"
              viewAllText="Explore Hill Stations"
            />
          </ClientOnly>
        </div>
      )}

      {/* Testimonials Section */}
      {safeTestimonials.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <TestimonialsSection testimonials={safeTestimonials} />
          </ClientOnly>
        </div>
      )}

      {/* Recent Blog Posts */}
      {safeBlogPosts.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <BlogSection posts={safeBlogPosts} />
          </ClientOnly>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        <ClientOnly>
          <WhatsAppButton />
        </ClientOnly>
      </div>
    </div>
  );
} 