export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  itinerary: Array<{
    day: number;
    title: string;
    description: string[];
  }>;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
}

export const internationalDestinations: Destination[] = [
  {
    id: "bali",
    name: "Bali Tour Package",
    subtitle: "Island of the Gods - 5 Nights 6 Days",
    image: "/destinations/bali.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Seminyak",
        description: [
          "Welcome at Ngurah Rai International Airport",
          "Transfer to hotel in Seminyak",
          "Evening walk on Seminyak Beach",
          "Welcome dinner at beachfront restaurant",
          "Overnight stay in Seminyak"
        ]
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: [
          "Visit sacred Monkey Forest Sanctuary",
          "Explore Ubud Traditional Art Market",
          "Visit Tegalalang Rice Terraces",
          "Traditional Balinese dance performance",
          "Overnight stay in Ubud"
        ]
      },
      {
        day: 3,
        title: "Temple and Volcano Tour",
        description: [
          "Sunrise visit to Mount Batur",
          "Visit Tirta Empul Temple (Water Temple)",
          "Explore Besakih Temple (Mother Temple)",
          "Coffee plantation visit",
          "Overnight stay in Ubud"
        ]
      },
      {
        day: 4,
        title: "Nusa Dua Water Activities",
        description: [
          "Transfer to Nusa Dua",
          "Water sports activities (parasailing, jet ski, banana boat)",
          "Visit Uluwatu Temple for sunset",
          "Kecak Fire Dance performance",
          "Overnight stay in Nusa Dua"
        ]
      },
      {
        day: 5,
        title: "Island Exploration",
        description: [
          "Full day tour to Nusa Penida",
          "Visit Kelingking Beach",
          "Snorkeling at Crystal Bay",
          "Visit Angel's Billabong",
          "Return to Nusa Dua for overnight stay"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: [
          "Morning spa treatment",
          "Last-minute shopping at Kuta",
          "Transfer to airport",
          "Departure with wonderful memories of Bali"
        ]
      }
    ],
    highlights: [
      "Stay in luxury beach resorts",
      "Traditional Balinese cultural experiences",
      "Visit to iconic temples",
      "Adventure water sports",
      "Island hopping to Nusa Penida",
      "Spectacular sunrise and sunset views",
      "Traditional spa treatment"
    ],
    inclusions: [
      "5 nights accommodation in 4/5 star hotels",
      "Daily breakfast and selected meals",
      "All transfers in private AC vehicle",
      "English-speaking guide",
      "All temple entrance fees",
      "Water sports activities package",
      "Nusa Penida island tour",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ],
    importantNotes: [
      "Best time to visit: April to October",
      "Dress code for temples: Shoulders and knees must be covered",
      "Carry sunscreen, hat, and comfortable walking shoes",
      "Water activities subject to weather conditions",
      "Customization available for honeymoon packages",
      "Early booking recommended during peak season"
    ]
  },
  {
    id: "singapore",
    name: "Singapore Tour Package",
    subtitle: "Lion City Experience - 5 Nights 6 Days",
    image: "/destinations/singapore.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        description: [
          "Welcome at Changi International Airport",
          "Transfer to hotel in city center",
          "Evening visit to Gardens by the Bay",
          "Watch Garden Rhapsody light show",
          "Overnight stay in Singapore"
        ]
      },
      {
        day: 2,
        title: "City Highlights Tour",
        description: [
          "Visit Merlion Park and Marina Bay Sands",
          "Explore Chinatown and Little India",
          "Visit Buddha Tooth Relic Temple",
          "Evening Singapore River Cruise",
          "Night Safari experience",
          "Overnight stay in Singapore"
        ]
      },
      {
        day: 3,
        title: "Sentosa Island Adventure",
        description: [
          "Full day at Sentosa Island",
          "Visit Universal Studios Singapore",
          "S.E.A. Aquarium exploration",
          "Cable car ride experience",
          "Watch Wings of Time show",
          "Overnight stay in Singapore"
        ]
      },
      {
        day: 4,
        title: "Nature and Science Day",
        description: [
          "Morning at Singapore Zoo",
          "Visit River Wonders (formerly River Safari)",
          "Afternoon at Science Centre Singapore",
          "Evening at Singapore Botanic Gardens",
          "Overnight stay in Singapore"
        ]
      },
      {
        day: 5,
        title: "Shopping and Entertainment",
        description: [
          "Shopping at Orchard Road",
          "Visit Singapore Flyer",
          "Afternoon at ArtScience Museum",
          "Evening at Clarke Quay",
          "Optional: Dinner at rooftop restaurant",
          "Overnight stay in Singapore"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: [
          "Morning at Jewel Changi Airport",
          "Visit Rain Vortex and Forest Valley",
          "Last-minute shopping at Changi",
          "Transfer to departure terminal",
          "Departure with wonderful memories"
        ]
      }
    ],
    highlights: [
      "Luxury hotel stay in city center",
      "Visit to iconic Gardens by the Bay",
      "Universal Studios Singapore experience",
      "Night Safari adventure",
      "Sentosa Island attractions",
      "Shopping at famous Orchard Road",
      "World-class attractions and entertainment"
    ],
    inclusions: [
      "5 nights accommodation in 4/5 star hotel",
      "Daily breakfast and selected meals",
      "All transfers in private AC vehicle",
      "English-speaking guide",
      "All attraction entrance tickets",
      "Singapore River Cruise",
      "Universal Studios Singapore ticket",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ],
    importantNotes: [
      "Best time to visit: Year-round destination",
      "Carry comfortable walking shoes",
      "Universal Studios visit takes full day",
      "Book attractions in advance during peak season",
      "Keep some time for shopping",
      "Singapore Tourist Pass recommended for public transport"
    ]
  },
  {
    id: "thailand",
    name: "Thailand Tour Package",
    subtitle: "Bangkok & Pattaya - 5 Nights 6 Days",
    image: "/destinations/thailand.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description: [
          "Welcome at Suvarnabhumi International Airport",
          "Transfer to hotel in Bangkok city",
          "Evening visit to Asiatique The Riverfront",
          "Welcome dinner with Thai cultural show",
          "Overnight stay in Bangkok"
        ]
      },
      {
        day: 2,
        title: "Bangkok City Tour",
        description: [
          "Visit Grand Palace and Wat Phra Kaew",
          "Explore Wat Arun (Temple of Dawn)",
          "Wat Pho (Reclining Buddha Temple)",
          "Evening Chao Phraya dinner cruise",
          "Overnight stay in Bangkok"
        ]
      },
      {
        day: 3,
        title: "Pattaya Transfer & Activities",
        description: [
          "Morning transfer to Pattaya",
          "Visit Nong Nooch Tropical Garden",
          "Alcazar Cabaret Show",
          "Evening at Walking Street",
          "Overnight stay in Pattaya"
        ]
      },
      {
        day: 4,
        title: "Coral Island Tour",
        description: [
          "Speed boat ride to Coral Island",
          "Beach activities and water sports",
          "Parasailing and underwater walk",
          "Evening at leisure",
          "Overnight stay in Pattaya"
        ]
      },
      {
        day: 5,
        title: "Bangkok Shopping",
        description: [
          "Return to Bangkok",
          "Visit MBK Shopping Center",
          "Explore Siam Paragon",
          "Evening Thai massage",
          "Farewell dinner",
          "Overnight stay in Bangkok"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: [
          "Morning visit to Chatuchak Weekend Market (if weekend)",
          "Last-minute shopping",
          "Transfer to airport",
          "Departure with wonderful memories"
        ]
      }
    ],
    highlights: [
      "Luxury hotel stays in Bangkok and Pattaya",
      "Visit to iconic temples and palaces",
      "Coral Island tour with water sports",
      "Traditional Thai cultural shows",
      "Shopping at famous markets",
      "Thai massage experience",
      "Chao Phraya dinner cruise"
    ],
    inclusions: [
      "5 nights accommodation (3 in Bangkok, 2 in Pattaya)",
      "Daily breakfast and selected meals",
      "All transfers in private AC vehicle",
      "English-speaking guide",
      "All temple entrance fees",
      "Coral Island tour with lunch",
      "Cultural show tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ],
    importantNotes: [
      "Best time to visit: November to March",
      "Dress code for temples: No shorts or sleeveless tops",
      "Carry comfortable walking shoes",
      "Water activities subject to weather conditions",
      "Keep some time for shopping",
      "Thai currency (Baht) needed for local purchases"
    ]
  },
  {
    id: "dubai",
    name: "Dubai Tour Package",
    subtitle: "City of Gold - 5 Nights 6 Days",
    image: "/destinations/dubai.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: [
          "Welcome at Dubai International Airport",
          "Transfer to hotel in Dubai",
          "Evening Dhow Cruise with dinner",
          "Dubai Creek experience",
          "Overnight stay in Dubai"
        ]
      },
      {
        day: 2,
        title: "Modern Dubai Tour",
        description: [
          "Visit Burj Khalifa (Top Floor)",
          "Dubai Mall shopping",
          "Dubai Aquarium & Underwater Zoo",
          "Dubai Fountain show",
          "Evening Desert Safari with BBQ dinner",
          "Overnight stay in Dubai"
        ]
      },
      {
        day: 3,
        title: "Theme Parks & Entertainment",
        description: [
          "Full day at Dubai Parks and Resorts",
          "Choice of Motiongate/Bollywood Parks/Legoland",
          "IMG Worlds of Adventure (optional)",
          "Evening at Global Village",
          "Overnight stay in Dubai"
        ]
      },
      {
        day: 4,
        title: "Abu Dhabi Day Tour",
        description: [
          "Visit Sheikh Zayed Grand Mosque",
          "Ferrari World experience",
          "Photo stop at Emirates Palace",
          "Visit Qasr Al Watan Palace",
          "Return to Dubai for overnight stay"
        ]
      },
      {
        day: 5,
        title: "Dubai Attractions",
        description: [
          "Visit Miracle Garden (seasonal)",
          "Dubai Frame experience",
          "Afternoon at Wild Wadi Water Park",
          "Evening at Madinat Jumeirah",
          "Overnight stay in Dubai"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: [
          "Morning at Palm Jumeirah",
          "Visit Atlantis Aquaventure (optional)",
          "Last-minute shopping at Dubai Mall",
          "Transfer to airport",
          "Departure with wonderful memories"
        ]
      }
    ],
    highlights: [
      "Luxury hotel stay in prime location",
      "Visit to Burj Khalifa observation deck",
      "Desert Safari experience",
      "Abu Dhabi day tour",
      "Theme park adventures",
      "Dubai shopping experience",
      "Dhow cruise dinner"
    ],
    inclusions: [
      "5 nights accommodation in 4/5 star hotel",
      "Daily breakfast and selected meals",
      "All transfers in private AC vehicle",
      "English-speaking guide",
      "Desert Safari with BBQ dinner",
      "Burj Khalifa tickets (non-prime hours)",
      "Theme park entrance tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ],
    importantNotes: [
      "Best time to visit: October to March",
      "Dress code: Modest clothing for mosque visits",
      "Desert Safari not recommended for pregnant women",
      "Burj Khalifa visit subject to availability",
      "Theme park choice to be confirmed at booking",
      "Miracle Garden open only during winter season"
    ]
  }
];

export const domesticDestinations: Destination[] = [
  // Add your existing domestic destinations here
  // Following the same structure
]; 