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

// Make this an async server component
export default async function Home() {
  // Ensure all data is available before rendering
  if (!popularTours?.length || !religiousTours?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {heroSlides && heroSlides.length > 0 && (
          <ClientOnly>
            <HeroSlider slides={heroSlides} />
          </ClientOnly>
        )}
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
      {popularTours && popularTours.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Featured Tours"
              subtitle="Discover our most popular travel experiences"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {popularTours.map((tour) => (
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
      {religiousTours && religiousTours.length > 0 && (
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Religious Tours"
              subtitle="Embark on a spiritual journey"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {religiousTours.map((tour) => (
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
      {popularDestinations && popularDestinations.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Destinations"
              subtitle="Explore our handpicked destinations for your next adventure"
              tag="Featured Destinations"
              destinations={popularDestinations}
              viewAllLink="/destinations"
              viewAllText="View All Destinations"
            />
          </ClientOnly>
        </div>
      )}

      {religiousDestinations && religiousDestinations.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Religious Places"
              subtitle="Embark on a spiritual journey to these sacred destinations"
              tag="Religious Tourism"
              destinations={religiousDestinations}
              viewAllLink="/destinations?category=pilgrimage"
              viewAllText="Explore Religious Tours"
              bgColor="bg-muted/30 py-16"
            />
          </ClientOnly>
        </div>
      )}

      {internationalDestinations && internationalDestinations.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="International Destinations"
              subtitle="Explore exotic locations around the world with our expertly crafted packages"
              tag="Global Expeditions"
              destinations={internationalDestinations}
              viewAllLink="/destinations?category=international"
              viewAllText="Explore International Destinations"
              bgColor="bg-muted/30 py-16"
            />
          </ClientOnly>
        </div>
      )}

      {hillStations && hillStations.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <DestinationsSection
              title="Popular Hill Stations"
              subtitle="Escape to the serene mountains and breathtaking landscapes"
              tag="Mountain Retreats"
              destinations={hillStations}
              viewAllLink="/destinations?category=hillstations"
              viewAllText="Explore Hill Stations"
            />
          </ClientOnly>
        </div>
      )}

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <TestimonialsSection testimonials={testimonials} />
          </ClientOnly>
        </div>
      )}

      {/* Recent Blog Posts */}
      {blogPosts && blogPosts.length > 0 && (
        <div className="relative">
          <ClientOnly>
            <BlogSection posts={blogPosts} />
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