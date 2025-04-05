export interface Destination {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  bestTime?: string;
  placesToSee?: string[];
  foodRecommendations?: string[];
  tips?: string[];
  majorTours?: string[];
  state?: string;
  country?: string;
  budgets: {
    budgeted: string;
    luxury: string;
    premier: string;
  };
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

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Mumbai",
    imageSrc: "/Destination/Domestic/Maharashtra/Mumbai/Mumbai-Main.jpg",
    description: "Mumbai, the city of dreams, is a vibrant metropolis that seamlessly blends tradition with modernity. From historic architecture to bustling markets, from Bollywood glamour to street food culture, Mumbai offers an unforgettable experience.",
    bestTime: "October to February",
    placesToSee: [
      "Gateway of India",
      "Marine Drive",
      "Colaba Causeway",
      "Elephanta Caves",
      "Juhu Beach",
      "Siddhivinayak Temple",
      "Dharavi",
      "Bollywood Studios"
    ],
    foodRecommendations: [
      "Vada Pav",
      "Pav Bhaji",
      "Bhel Puri",
      "Mumbai Sandwich",
      "Bombay Duck",
      "Modak"
    ],
    tips: [
      "Best to explore the city using local trains during non-peak hours",
      "Carry an umbrella during monsoon season (June-September)",
      "Try street food from hygienic and popular vendors",
      "Book Elephanta Caves ferry tickets in advance",
      "Visit religious places early morning to avoid crowds"
    ],
    majorTours: [
      "Mumbai City Tour",
      "Bollywood Studio Tour",
      "Food Trail Tour",
      "Heritage Walk"
    ],
    state: "Maharashtra",
    country: "India",
    budgets: {
      budgeted: "₹15,000",
      luxury: "₹35,000",
      premier: "₹75,000"
    },
    itinerary: [
      {
        day: 1,
        title: "South Mumbai Exploration",
        description: [
          "Visit Gateway of India",
          "Explore Colaba Causeway",
          "Evening at Marine Drive"
        ]
      },
      {
        day: 2,
        title: "Cultural & Religious Tour",
        description: [
          "Morning at Siddhivinayak Temple",
          "Visit Haji Ali Dargah",
          "Evening at Juhu Beach"
        ]
      },
      {
        day: 3,
        title: "Heritage & History",
        description: [
          "Visit Elephanta Caves",
          "Explore Prince of Wales Museum",
          "Evening heritage walk in Fort area"
        ]
      }
    ],
    highlights: [
      "Historic colonial architecture",
      "Vibrant street food culture",
      "Bollywood experience",
      "Local train journey",
      "Coastal beauty"
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Local transport",
      "English speaking guide",
      "Monument entrance fees"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Camera fees",
      "Tips and gratuities",
      "Optional activities"
    ],
    importantNotes: [
      "Carry valid ID proof",
      "Dress modestly for temple visits",
      "Follow local customs and traditions",
      "Keep valuables safe",
      "Stay hydrated"
    ]
  }
]; 