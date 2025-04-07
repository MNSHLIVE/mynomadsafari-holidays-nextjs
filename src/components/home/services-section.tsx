"use client";

import React from 'react';
import { Plane, Hotel, Bus, Map, Shield, HeartHandshake } from 'lucide-react';
import SectionHeading from '@/components/section-heading';

const services = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    description: 'Get the best deals on domestic and international flights'
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Book comfortable stays at handpicked hotels'
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Reliable ground transportation services'
  },
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Customized tour packages for every type of traveler'
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance coverage'
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your needs'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive travel services to make your journey seamless"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
