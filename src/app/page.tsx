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
  type Tour,
  type Destination,
  type BlogPost
} from "@/components/home/home-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <HeroSlider slides={heroSlides} />
      </ClientOnly>

      <ClientOnly>
        <ServicesSection />
      </ClientOnly>

      <ClientOnly>
        <TravelCategories />
      </ClientOnly>

      {/* Featured Tours Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Tours"
            subtitle="Discover our most popular travel experiences"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {popularTours.map((tour) => (
              <ClientOnly key={tour.id}>
                <TourCard
                  tour={tour}
                  className="h-full"
                />
              </ClientOnly>
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
            {religiousTours.map((tour) => (
              <ClientOnly key={tour.id}>
                <TourCard
                  tour={tour}
                  className="h-full"
                />
              </ClientOnly>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/tours/religious">View All Religious Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
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

      {/* Religious Destinations */}
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

      {/* International Destinations */}
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

      {/* Hill Stations Section */}
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

      {/* Testimonials Section */}
      <ClientOnly>
        <TestimonialsSection testimonials={testimonials} />
      </ClientOnly>

      {/* Recent Blog Posts */}
      <ClientOnly>
        <BlogSection posts={blogPosts} />
      </ClientOnly>

      {/* WhatsApp Button */}
      <ClientOnly>
        <WhatsAppButton />
      </ClientOnly>
    </div>
  );
} 