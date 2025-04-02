'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/Destination/Home/hero/hero-1.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to MyNomadSafari</h1>
          <p className="text-xl mb-8">Discover Amazing Destinations</p>
          <Link 
            href="/tours" 
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="/Destination/Domestic/main/Rajasthan-main.jpg"
                alt="Rajasthan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Rajasthan</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="/Destination/Domestic/main/Kerala-main.jpg"
                alt="Kerala"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Kerala</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="/Destination/International/Main/Dubai-main.jpg"
                alt="Dubai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Dubai</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8">Explore our collection of amazing tours and destinations</p>
          <Link 
            href="/tours" 
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Tours
          </Link>
        </div>
      </section>
    </div>
  );
} 