export interface Tour {
  id: number;
  title: string;
  imageSrc: string;
  location: string;
  duration: string;
  price: number | string;
  bestTime: string;
  packageType: "Budgeted" | "Luxury" | "Premier";
  country: string;
  region: string;
  description: string;
  activities?: string[];
  included?: string[];
  groupSize?: string;
  highlight?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
  }>;
}

export const tours: Tour[] = [
  // Featured Door-to-Door Packages
  {
    id: 101,
    title: "Dubai Family Delight",
    imageSrc: "/Destination/International/Tours/Dubai/Dubai-Family-Delight.jpg",
    location: "Dubai, UAE",
    duration: "7 Days",
    price: 159999,
    bestTime: "October - April",
    packageType: "Luxury",
    country: "UAE",
    region: "Middle East",
    description: "Experience the magic of Dubai with this exclusive family package. From doorstep pickup to airport transfers, everything is taken care of for a hassle-free vacation.",
    activities: ["Desert Safari", "Burj Khalifa Visit", "Dubai Mall Shopping", "Dhow Cruise Dinner"],
    included: ["Home Pickup & Drop", "5-Star Accommodation", "All Meals", "Private Tours", "Visa Processing", "Travel Insurance"],
    groupSize: "Family Package (4 persons)",
    highlight: "Door-to-Door Service",
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Welcome to Dubai! Our representative will meet you at the airport and transfer you to your hotel. Evening at leisure." },
      { day: 2, title: "Dubai City Tour", description: "Full-day city tour including visits to Dubai Museum, Gold Souk, and Jumeirah Beach." },
      { day: 3, title: "Desert Safari", description: "Morning at leisure. Afternoon desert safari with BBQ dinner and entertainment." },
      { day: 4, title: "Burj Khalifa & Dubai Mall", description: "Visit the world's tallest building and enjoy shopping at Dubai Mall." },
      { day: 5, title: "Abu Dhabi Tour", description: "Full-day Abu Dhabi city tour including Sheikh Zayed Mosque and Ferrari World." },
      { day: 6, title: "Aquaventure & Palm", description: "Full day at Atlantis Aquaventure Waterpark. Evening Palm Jumeirah tour." },
      { day: 7, title: "Departure", description: "After breakfast, transfer to airport for your return flight." }
    ]
  },
  {
    id: 102,
    title: "Singapore Complete Experience",
    imageSrc: "/Destination/International/Tours/Singapore/Singapore-Complete-Experience.jpg",
    location: "Singapore",
    duration: "6 Days",
    price: 145999,
    bestTime: "Year Round",
    packageType: "Luxury",
    country: "Singapore",
    region: "Southeast Asia",
    description: "Discover the beauty of Singapore with our complete package that takes care of every detail from your doorstep to Singapore and back.",
    activities: ["Gardens by the Bay", "Universal Studios", "Sentosa Island", "Singapore Flyer"],
    included: ["Home Pickup & Drop", "4-Star Accommodation", "Breakfast & Dinner", "Skip-the-line Attraction Tickets", "Visa Processing", "Travel Insurance"],
    groupSize: "Up to 6 people",
    highlight: "Door-to-Door Service",
    itinerary: [
      { day: 1, title: "Arrive in Singapore", description: "Arrive at Changi Airport and transfer to your hotel. Evening at leisure to explore the nearby area." },
      { day: 2, title: "City Tour", description: "Explore Singapore's highlights including Merlion Park, Gardens by the Bay, and Marina Bay Sands." },
      { day: 3, title: "Universal Studios", description: "Full day at Universal Studios Singapore with access to all attractions and shows." },
      { day: 4, title: "Sentosa Island", description: "Enjoy the beaches and attractions of Sentosa Island, including the S.E.A. Aquarium and cable car ride." },
      { day: 5, title: "Shopping & Cultural Tour", description: "Visit Chinatown, Little India, and enjoy shopping at Orchard Road." },
      { day: 6, title: "Departure", description: "Check out and transfer to Changi Airport for your return flight." }
    ]
  }
]; 