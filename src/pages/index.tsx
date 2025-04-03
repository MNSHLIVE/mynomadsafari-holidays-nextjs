import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";
import DestinationsSection from "@/components/home/destinations-section";
import BlogSection from "@/components/home/blog-section";
import WhatsAppButton from "@/components/whatsapp-button";
import {
  heroSlides,
  popularDestinations,
  religiousDestinations,
  internationalDestinations,
  hillStations,
  popularTours,
  religiousTours,
  testimonials,
  blogPosts
} from "@/components/home/home-data";

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      {/* Featured Tours Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Tours"
            subtitle="Discover our most popular travel experiences"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {popularTours.map((tour, index) => (
              <TourCard
                key={index}
                {...tour}
                imageSrc={tour.imageSrc}
              />
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
            {religiousTours.map((tour, index) => (
              <TourCard
                key={index}
                {...tour}
                imageSrc={tour.imageSrc}
              />
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
      <DestinationsSection
        title="Popular Destinations"
        subtitle="Explore our handpicked destinations for your next adventure"
        tag="Featured Destinations"
        destinations={popularDestinations}
        viewAllLink="/destinations"
        viewAllText="View All Destinations"
      />

      {/* Religious Destinations */}
      <DestinationsSection
        title="Popular Religious Places"
        subtitle="Embark on a spiritual journey to these sacred destinations"
        tag="Religious Tourism"
        destinations={religiousDestinations}
        viewAllLink="/destinations?category=pilgrimage"
        viewAllText="Explore Religious Tours"
        bgColor="bg-muted/30 py-16"
      />

      {/* International Destinations */}
      <DestinationsSection
        title="International Destinations"
        subtitle="Explore exotic locations around the world with our expertly crafted packages"
        tag="Global Expeditions"
        destinations={internationalDestinations}
        viewAllLink="/destinations?category=international"
        viewAllText="Explore International Destinations"
        bgColor="bg-muted/30 py-16"
      />

      {/* Hill Stations Section */}
      <DestinationsSection
        title="Popular Hill Stations"
        subtitle="Escape to the serene mountains and breathtaking landscapes"
        tag="Mountain Retreats"
        destinations={hillStations}
        viewAllLink="/destinations?category=hillstations"
        viewAllText="Explore Hill Stations"
      />

      {/* Recent Blog Posts */}
      <BlogSection posts={blogPosts} />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
} 