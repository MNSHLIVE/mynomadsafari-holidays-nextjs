import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import DestinationQueryForm from '@/components/destination-query-form';
import SectionHeading from "@/components/section-heading";

export default function Rajasthan() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const toursRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = (tourName: string) => {
    setShowDetails(true);
    setSelectedTour(tourName);
    // Scroll to the tours section
    setTimeout(() => {
      toursRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Rajasthan Tour Package"
            subtitle="Experience the royal heritage and vibrant culture of Rajasthan"
            align="center"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Rajasthan</h2>
            <p className="text-muted-foreground mb-6">
              Experience the royal heritage and desert culture of Rajasthan, from majestic forts to colorful festivals.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-muted-foreground">October - March</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Places to See</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Amber Fort, Jaipur</li>
                  <li>Mehrangarh Fort, Jodhpur</li>
                  <li>City Palace, Udaipur</li>
                  <li>Hawa Mahal, Jaipur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Tours Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Major Tours</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Golden Triangle Tour</h3>
                  <Button 
                    variant="link" 
                    onClick={() => handleViewDetails('Golden Triangle Tour')}
                    className="text-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Rajasthan Heritage Tour</h3>
                  <Button 
                    variant="link" 
                    onClick={() => handleViewDetails('Rajasthan Heritage Tour')}
                    className="text-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Desert Safari Experience</h3>
                  <Button 
                    variant="link" 
                    onClick={() => handleViewDetails('Desert Safari Experience')}
                    className="text-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itineraries Section */}
      <div ref={toursRef}>
        {showDetails && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Golden Triangle Tour */}
                {(!selectedTour || selectedTour === 'Golden Triangle Tour') && (
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Golden Triangle Tour</h3>
                    <p className="text-muted-foreground mb-6">6 Days | 5 Nights</p>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Day 1: Delhi Arrival</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Welcome at Delhi Airport</li>
                            <li>Transfer to hotel</li>
                            <li>Evening at leisure</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 2: Delhi - Agra</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Drive to Agra</li>
                            <li>Visit Taj Mahal</li>
                            <li>Agra Fort tour</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 3-4: Jaipur</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Amber Fort visit</li>
                            <li>City Palace tour</li>
                            <li>Hawa Mahal visit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 5-6: Return</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Shopping in Jaipur</li>
                            <li>Return to Delhi</li>
                            <li>Departure</li>
                          </ul>
                        </div>
                      </div>

                      <DestinationQueryForm 
                        destinationName="Golden Triangle Tour"
                        buttonText="Book This Tour"
                        className="mt-8"
                      />
                    </div>
                  </div>
                )}

                {/* Rajasthan Heritage Tour */}
                {(!selectedTour || selectedTour === 'Rajasthan Heritage Tour') && (
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Rajasthan Heritage Tour</h3>
                    <p className="text-muted-foreground mb-6">8 Days | 7 Nights</p>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Day 1-2: Jaipur</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Amber Fort</li>
                            <li>City Palace</li>
                            <li>Local markets</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 3-4: Jodhpur</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Mehrangarh Fort</li>
                            <li>Clock Tower market</li>
                            <li>Desert village visit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 5-6: Udaipur</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>City Palace</li>
                            <li>Lake Pichola</li>
                            <li>Cultural show</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 7-8: Return</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Morning at leisure</li>
                            <li>Souvenir shopping</li>
                            <li>Departure</li>
                          </ul>
                        </div>
                      </div>

                      <DestinationQueryForm 
                        destinationName="Rajasthan Heritage Tour"
                        buttonText="Book This Tour"
                        className="mt-8"
                      />
                    </div>
                  </div>
                )}

                {/* Desert Safari Experience */}
                {(!selectedTour || selectedTour === 'Desert Safari Experience') && (
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Desert Safari Experience</h3>
                    <p className="text-muted-foreground mb-6">5 Days | 4 Nights</p>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Day 1: Arrival</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Welcome at Jaisalmer</li>
                            <li>Hotel check-in</li>
                            <li>Evening market visit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 2-3: Desert Camp</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Camel safari</li>
                            <li>Desert camping</li>
                            <li>Folk music and dance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 4: Jaisalmer Fort</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Fort tour</li>
                            <li>Havelis visit</li>
                            <li>Sunset point</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Day 5: Departure</h4>
                          <ul className="list-disc list-inside text-muted-foreground mt-2">
                            <li>Morning at leisure</li>
                            <li>Local market visit</li>
                            <li>Departure</li>
                          </ul>
                        </div>
                      </div>

                      <DestinationQueryForm 
                        destinationName="Desert Safari Experience"
                        buttonText="Book This Tour"
                        className="mt-8"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 