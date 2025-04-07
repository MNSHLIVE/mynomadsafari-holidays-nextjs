'use client';

import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '@/components/section-heading';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Travelers Say"
          subtitle="Read about experiences from our satisfied customers"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-4">{testimonial.quote}</blockquote>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
