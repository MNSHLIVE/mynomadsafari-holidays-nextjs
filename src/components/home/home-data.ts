// TypeScript interfaces
export interface HeroSlide {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export interface Destination {
  imageSrc: string;
  title: string;
  description: string;
  bestTime: string;
  isPopular?: boolean;
  country?: string;
  placesToSee?: string[];
  foodRecommendations?: string[];
  tips?: string[];
  majorTours?: string[];
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  imageSrc: string;
  category: string;
  rating?: number;
  reviews?: number;
  isPopular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  author: string;
  tags: string[];
}

// Shared data for home page components
export const heroSlides: HeroSlide[] = [
  {
    imageSrc: "/Destination/Home/Hero/Rajasthan-hero.jpg",
    title: "Your One-Stop Travel Expert – Explore the World Your Way",
    subtitle: "Personalized travel experiences, expert planning, and unforgettable adventures"
  },
  {
    imageSrc: "/Destination/Home/Hero/Kerala-hero.jpg",
    title: "Discover the Beauty of Incredible India",
    subtitle: "From the Himalayas to the backwaters, experience the diversity of India"
  },
  {
    imageSrc: "/Destination/Home/Hero/Thailand-hero.jpg",
    title: "International Adventures Await",
    subtitle: "Explore exotic destinations with our curated international packages"
  },
  {
    imageSrc: "/Destination/Home/Hero/Goa-hero.jpg",
    title: "Door-to-Door Travel Solutions",
    subtitle: "We pick you up from home and drop you back - hassle-free travel guaranteed"
  },
  {
    imageSrc: "/Destination/Home/Hero/Himachal-hero.jpg",
    title: "Experience the Magic of Mountains",
    subtitle: "Discover the serene beauty of Himachal Pradesh"
  },
  {
    imageSrc: "/Destination/Home/Hero/Singapore-hero.jpg",
    title: "Explore the Lion City",
    subtitle: "Experience the perfect blend of culture and modernity in Singapore"
  }
];

export const popularDestinations = [
  {
    imageSrc: "/Destination/Home/Popular-Destinations/Rajasthan-popular.jpg",
    title: "Rajasthan, India",
    description: "Experience the vibrant culture and majestic forts of the royal state.",
    bestTime: "October - March",
    isPopular: true,
  },
  {
    imageSrc: "/Destination/Home/Popular-Destinations/Kerala-popular.jpg",
    title: "Kerala, India",
    description: "Discover the serene backwaters and lush greenery of God's own country.",
    bestTime: "September - March",
  },
  {
    imageSrc: "/Destination/Home/Popular-Destinations/Goa-popular.jpg",
    title: "Goa, India",
    description: "Relax on sandy beaches and enjoy the vibrant nightlife of this coastal paradise.",
    bestTime: "November - February",
  },
  {
    imageSrc: "/Destination/Home/Popular-Destinations/Bali-popular.jpg",
    title: "Bali, Indonesia",
    description: "Experience the perfect blend of beaches, culture, and adventure in this island paradise.",
    bestTime: "April - October",
  },
];

export const religiousDestinations = [
  {
    imageSrc: "/Destination/Home/Religious-Places/Varanasi-religious.jpg",
    title: "Varanasi",
    description: "Experience the spiritual capital of India along the sacred Ganges River.",
    bestTime: "October - March",
  },
  {
    imageSrc: "/Destination/Home/Religious-Places/Haridwar-religious.jpg",
    title: "Haridwar & Rishikesh",
    description: "Visit the holy gateway to the Himalayas and the yoga capital of the world.",
    bestTime: "September - April",
  },
  {
    imageSrc: "/Destination/Home/Religious-Places/Amritsar-religious.jpg",
    title: "Amritsar",
    description: "Visit the Golden Temple, the holiest shrine in Sikhism.",
    bestTime: "October - March",
  },
  {
    imageSrc: "/Destination/Home/Religious-Places/Tirupati-religious.jpg",
    title: "Tirupati",
    description: "Visit one of the world's richest and most visited temples in South India.",
    bestTime: "September - February",
  },
];

export const internationalDestinations = [
  {
    imageSrc: "/Destination/Home/International/Thailand-international.jpg",
    title: "Thailand",
    country: "Thailand",
    description: "Experience tropical beaches, opulent palaces, and vibrant street life.",
    bestTime: "November - March",
    placesToSee: [
      "Grand Palace, Bangkok",
      "Phi Phi Islands",
      "Wat Phra Kaew",
      "Chatuchak Market"
    ],
    foodRecommendations: [
      "Pad Thai",
      "Tom Yum Goong",
      "Green Curry",
      "Mango Sticky Rice"
    ],
    tips: [
      "Respect local customs and temples",
      "Carry light cotton clothes",
      "Book accommodations in advance",
      "Learn basic Thai phrases"
    ],
    majorTours: [
      "Bangkok City Tour",
      "Island Hopping Tour",
      "Cultural Heritage Tour",
      "Adventure Tour"
    ]
  },
  {
    imageSrc: "/Destination/Home/International/Singapore-international.jpg",
    title: "Singapore",
    country: "Singapore",
    description: "Explore the vibrant city-state with its perfect blend of culture and modernity.",
    bestTime: "February - April",
    placesToSee: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Universal Studios"
    ],
    foodRecommendations: [
      "Hainanese Chicken Rice",
      "Laksa",
      "Chili Crab",
      "Ice Kacang"
    ],
    tips: [
      "Use public transport",
      "Carry light clothes",
      "Book attractions in advance",
      "Follow local laws strictly"
    ],
    majorTours: [
      "City Explorer Tour",
      "Garden City Tour",
      "Family Fun Tour",
      "Shopping Tour"
    ]
  },
  {
    imageSrc: "/Destination/Home/International/Bali-international.jpg",
    title: "Bali",
    country: "Bali",
    description: "Discover the perfect blend of beaches, culture, and adventure in this island paradise.",
    bestTime: "April - October",
    placesToSee: [
      "Ubud Sacred Monkey Forest",
      "Uluwatu Temple",
      "Rice Terraces",
      "Beach Clubs"
    ],
    foodRecommendations: [
      "Nasi Goreng",
      "Babi Guling",
      "Gado Gado",
      "Bakso"
    ],
    tips: [
      "Respect temple dress codes",
      "Carry light clothes",
      "Book accommodations in advance",
      "Learn basic Indonesian phrases"
    ],
    majorTours: [
      "Cultural Tour",
      "Beach Tour",
      "Adventure Tour",
      "Wellness Tour"
    ]
  },
  {
    imageSrc: "/Destination/Home/International/Dubai-international.jpg",
    title: "Dubai",
    country: "Dubai",
    description: "Experience the perfect blend of luxury, adventure, and cultural heritage in this modern metropolis.",
    bestTime: "November - March",
    placesToSee: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Desert Safari"
    ],
    foodRecommendations: [
      "Shawarma",
      "Hummus",
      "Arabic Coffee",
      "Kunafa"
    ],
    tips: [
      "Respect local customs",
      "Dress modestly",
      "Book desert safari in advance",
      "Stay hydrated"
    ],
    majorTours: [
      "City Explorer Tour",
      "Desert Adventure Tour",
      "Shopping Tour",
      "Cultural Tour"
    ]
  }
];

export const hillStations = [
  {
    imageSrc: "/Destination/Home/Hill-Stations/Shimla-hill.jpg",
    title: "Shimla",
    description: "Experience the former summer capital of British India in the Himalayas.",
    bestTime: "March - June, September - November",
  },
  {
    imageSrc: "/Destination/Home/Hill-Stations/Manali-hill.jpg",
    title: "Manali",
    description: "Explore the breathtaking valleys and snow-capped mountains of this Himalayan resort.",
    bestTime: "October - June",
  },
  {
    imageSrc: "/Destination/Home/Hill-Stations/Darjeeling-hill.jpg",
    title: "Darjeeling",
    description: "Visit the Queen of Hills known for its tea plantations and views of Kanchenjunga.",
    bestTime: "September - November, March - May",
  },
  {
    imageSrc: "/Destination/Home/Hill-Stations/Ooty-hill.jpg",
    title: "Ooty",
    description: "Experience the Queen of Hill Stations in South India with its lush landscapes.",
    bestTime: "October - June",
  },
];

export const popularTours = [
  {
    imageSrc: "/Destination/Home/Featured-Tours/Golden-Triangle.jpg",
    title: "Golden Triangle Tour",
    location: "Delhi, Agra, Jaipur",
    duration: "6 Days",
    price: "Starting from ₹21,000",
    bestTime: "October - March",
    packageType: "Budgeted" as const,
  },
  {
    imageSrc: "/Destination/Home/Featured-Tours/Kerala-Backwaters.jpg",
    title: "Kerala Backwaters Luxury",
    location: "Kochi, Munnar, Alleppey",
    duration: "7 Days",
    price: "Starting from ₹35,000",
    bestTime: "September - March",
    packageType: "Luxury" as const,
  },
  {
    imageSrc: "/Destination/Home/Featured-Tours/Rajasthan-Heritage.jpg",
    title: "Premier Rajasthan Heritage",
    location: "Jaipur, Udaipur, Jodhpur",
    duration: "10 Days",
    price: "Starting from ₹75,000",
    bestTime: "October - March",
    packageType: "Premier" as const,
  },
];

export const religiousTours = [
  {
    imageSrc: "/Destination/Home/Religious-Tours/Char-Dham.jpg",
    title: "Char Dham Yatra",
    location: "Uttarakhand, India",
    duration: "12 Days",
    price: "64000",
    bestTime: "May - June, September - October",
    packageType: "Premier" as const,
    description: "A spiritual journey to the four sacred Hindu temples in the Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    itinerary: [
      {day: 1, title: "Arrival in Haridwar", description: "Welcome at Haridwar and transfer to hotel. Evening Ganga Aarti at Har Ki Pauri."},
      {day: 2, title: "Haridwar to Yamunotri", description: "Drive to Janki Chatti and trek to Yamunotri temple. Return to Barkot for overnight stay."},
      {day: 3, title: "Barkot to Gangotri", description: "Drive to Gangotri through scenic Himalayan landscapes. Visit Gangotri Temple."},
    ]
  },
  {
    imageSrc: "/Destination/Home/Religious-Tours/Varanasi-Spiritual.jpg",
    title: "Varanasi Spiritual Tour",
    location: "Uttar Pradesh, India",
    duration: "4 Days",
    price: "21332",
    bestTime: "October - March",
    packageType: "Budgeted" as const,
    description: "Experience the spiritual essence of India's oldest city with morning boat rides on the Ganges and evening aartis.",
    itinerary: [
      {day: 1, title: "Arrival in Varanasi", description: "Welcome at Varanasi Airport/Railway Station and transfer to hotel. Evening Ganga Aarti."},
      {day: 2, title: "Morning Boat Ride & Temples", description: "Early morning boat ride on the Ganges to witness sunrise. Visit important temples."},
      {day: 3, title: "Sarnath Excursion", description: "Day trip to Sarnath where Buddha gave his first sermon. Visit the Dhamek Stupa."},
    ]
  },
  {
    imageSrc: "/Destination/Home/Religious-Tours/Golden-Temple.jpg",
    title: "Golden Temple & Amritsar",
    location: "Punjab, India",
    duration: "3 Days",
    price: "15999",
    bestTime: "October - March",
    packageType: "Budgeted" as const,
    description: "Visit the magnificent Golden Temple and experience the vibrant Punjabi culture in Amritsar.",
    itinerary: [
      {day: 1, title: "Arrival in Amritsar", description: "Welcome at Amritsar and transfer to hotel. Evening visit to Golden Temple for Palki Ceremony."},
      {day: 2, title: "Golden Temple & Wagah Border", description: "Morning visit to Golden Temple. Afternoon visit to Wagah Border for the Retreat Ceremony."},
      {day: 3, title: "Amritsar City Tour", description: "Visit Jallianwala Bagh, Durgiana Temple, and local markets. Departure from Amritsar."},
    ]
  },
];

export const testimonials = [
  {
    quote: "My Nomadsafari Holidays arranged the most amazing trip to Rajasthan for us. Every detail was perfect, from the hotels to the guided tours. Highly recommend their Premier package!",
    author: "Sarah Thompson",
    role: "Traveled to Rajasthan",
    rating: 5,
  },
  {
    quote: "As a solo traveler, I was nervous about my trip to Bali, but the team at My Nomadsafari Holidays made it so easy and comfortable. The customized itinerary was exactly what I wanted.",
    author: "Michael Chen",
    role: "Traveled to Bali",
    rating: 5,
  },
  {
    quote: "The visa assistance service saved me so much time and stress. Everything was processed smoothly, and I received great advice about my trip to Dubai.",
    author: "Priya Sharma",
    role: "Traveled to Dubai",
    rating: 4,
  },
];

export const blogPosts = [
  {
    id: "budget-destinations",
    imageSrc: "/Destination/Home/Blog/Budget-Destinations.jpg",
    title: "Top 5 Budget Destinations in India",
    excerpt: "Discover incredible places to visit in India without breaking the bank. From the beaches of Goa to the mountains of Himachal Pradesh.",
    date: "May 10, 2023",
    author: "Travel Expert",
    tags: ["Budget Travel", "India"],
  },
  {
    id: "luxury-bali",
    imageSrc: "/Destination/Home/Blog/Luxury-Bali.jpg",
    title: "How to Plan a Luxury Bali Trip",
    excerpt: "Planning a luxury getaway to Bali? Here's everything you need to know about the best resorts, dining experiences, and private tours.",
    date: "April 22, 2023",
    author: "Travel Expert",
    tags: ["Luxury Travel", "Bali"],
  },
  {
    id: "visa-guide",
    imageSrc: "/Destination/Home/Blog/Visa-Guide.jpg",
    title: "The Complete Guide to Visa Requirements",
    excerpt: "Navigate the complex world of travel visas with our comprehensive guide to requirements for popular destinations.",
    date: "March 15, 2023",
    author: "Travel Expert",
    tags: ["Travel Tips", "Visa"],
  },
];

export const indianDestinations = [
  {
    imageSrc: "/Destination/Domestic/main/Rajasthan-main.jpg",
    title: "Rajasthan",
    state: "Rajasthan",
    description: "Experience the royal heritage and vibrant culture of Rajasthan, from majestic forts to colorful festivals.",
    bestTime: "October - March",
    isPopular: true,
    placesToSee: [
      "Amber Fort, Jaipur",
      "City Palace, Udaipur",
      "Mehrangarh Fort, Jodhpur",
      "Hawa Mahal, Jaipur"
    ],
    foodRecommendations: [
      "Dal Bati Churma",
      "Laal Maas",
      "Gatte ki Sabzi",
      "Pyaaz Kachori"
    ],
    tips: [
      "Visit during winter months for pleasant weather",
      "Book heritage hotels in advance",
      "Carry light cotton clothes in summer",
      "Respect local customs and traditions"
    ],
    majorTours: [
      "Golden Triangle Tour",
      "Rajasthan Heritage Tour",
      "Desert Safari Experience",
      "Palace on Wheels"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Welcome to the Pink City! Check into your hotel, followed by an evening visit to the spectacular Birla Temple and local bazaars."
      },
      {
        day: 2,
        title: "Jaipur Exploration",
        description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening cultural performance at Chokhi Dhani."
      },
      {
        day: 3,
        title: "Journey to Jodhpur",
        description: "Travel to the Blue City. Visit Mehrangarh Fort and explore the vibrant Clock Tower market."
      },
      {
        day: 4,
        title: "Jodhpur to Udaipur",
        description: "En route to Udaipur, visit the stunning Ranakpur Jain Temple. Evening boat ride on Lake Pichola."
      },
      {
        day: 5,
        title: "Udaipur Sightseeing",
        description: "Explore City Palace, Saheliyon Ki Bari, and Jagdish Temple. Evening cultural show at Bagore Ki Haveli."
      }
    ],
    highlights: [
      "Royal palaces and forts",
      "Desert safari in Jaisalmer",
      "Traditional Rajasthani cuisine",
      "Folk music and dance",
      "Heritage hotel stays"
    ]
  },
  {
    imageSrc: "/Destination/Domestic/main/Kerala-main.jpg",
    title: "Kerala",
    state: "Kerala",
    description: "Discover the serene backwaters, lush tea plantations, and rich cultural heritage of God's Own Country.",
    bestTime: "September - March",
    isPopular: true,
    placesToSee: [
      "Backwaters of Alleppey",
      "Munnar Tea Gardens",
      "Kochi Fort",
      "Kerala Houseboats"
    ],
    foodRecommendations: [
      "Appam with Stew",
      "Kerala Parotta",
      "Fish Curry",
      "Puttu and Kadala"
    ],
    tips: [
      "Book houseboats in advance",
      "Carry light cotton clothes",
      "Try Ayurvedic treatments",
      "Respect local customs"
    ],
    majorTours: [
      "Kerala Backwaters Tour",
      "Kerala Ayurveda Tour",
      "Kerala Wildlife Tour",
      "Kerala Cultural Tour"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Welcome to Kerala! Visit Fort Kochi, Chinese fishing nets, and enjoy a Kathakali performance."
      },
      {
        day: 2,
        title: "Munnar Hills",
        description: "Drive to Munnar, visit tea plantations, Eravikulam National Park, and spice gardens."
      },
      {
        day: 3,
        title: "Thekkady Wildlife",
        description: "Explore Periyar Wildlife Sanctuary, spice plantation tour, and tribal village visit."
      },
      {
        day: 4,
        title: "Alleppey Backwaters",
        description: "Board a traditional houseboat, cruise through backwaters, enjoy local cuisine and village life."
      },
      {
        day: 5,
        title: "Kovalam Beach",
        description: "Relax at Kovalam beach, enjoy Ayurvedic spa treatments and fresh seafood."
      }
    ],
    highlights: [
      "Houseboat cruise",
      "Tea plantations",
      "Ayurvedic treatments",
      "Wildlife sanctuaries",
      "Traditional arts"
    ]
  },
  {
    imageSrc: "/Destination/Domestic/main/Ladhak-main.jpg",
    title: "Ladakh",
    state: "Ladakh",
    description: "Explore the breathtaking landscapes and Buddhist monasteries of Ladakh.",
    bestTime: "May - September",
    isPopular: true,
    placesToSee: [
      "Pangong Lake",
      "Nubra Valley",
      "Thiksey Monastery",
      "Khardung La Pass"
    ],
    foodRecommendations: [
      "Thukpa",
      "Momos",
      "Butter Tea",
      "Skyu"
    ],
    tips: [
      "Acclimatize to high altitude",
      "Carry warm clothes",
      "Book permits in advance",
      "Respect local culture"
    ],
    majorTours: [
      "Ladakh Adventure Tour",
      "Buddhist Circuit Tour",
      "Ladakh Photography Tour",
      "Ladakh Cultural Tour"
    ]
  },
  {
    imageSrc: "/Destination/Domestic/main/Uttrakhand-main.jpg",
    title: "Uttarakhand",
    state: "Uttarakhand",
    description: "Visit the holy temples and scenic beauty of Uttarakhand.",
    bestTime: "March - June, September - November",
    isPopular: true,
    placesToSee: [
      "Rishikesh Temples",
      "Valley of Flowers",
      "Nainital Lake",
      "Jim Corbett National Park"
    ],
    foodRecommendations: [
      "Kumaoni Dal",
      "Bhang Ki Chutney",
      "Chainsoo",
      "Kaapa"
    ],
    tips: [
      "Carry warm clothes",
      "Book accommodations in advance",
      "Respect religious sites",
      "Follow trekking guidelines"
    ],
    majorTours: [
      "Char Dham Yatra",
      "Rishikesh Adventure Tour",
      "Wildlife Safari Tour",
      "Hill Station Tour"
    ]
  }
];

export const destinations = {
  domestic: [
    {
      title: "Rajasthan",
      image: "/Destination/Domestic/main/Rajasthan-main.jpg",
      description: "Experience the royal heritage and vibrant culture of Rajasthan, from majestic forts to colorful festivals.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description: "Welcome to the Pink City! Check into your hotel, followed by an evening visit to the spectacular Birla Temple and local bazaars."
        },
        {
          day: 2,
          title: "Jaipur Exploration",
          description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening cultural performance at Chokhi Dhani."
        },
        {
          day: 3,
          title: "Journey to Jodhpur",
          description: "Travel to the Blue City. Visit Mehrangarh Fort and explore the vibrant Clock Tower market."
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur",
          description: "En route to Udaipur, visit the stunning Ranakpur Jain Temple. Evening boat ride on Lake Pichola."
        },
        {
          day: 5,
          title: "Udaipur Sightseeing",
          description: "Explore City Palace, Saheliyon Ki Bari, and Jagdish Temple. Evening cultural show at Bagore Ki Haveli."
        }
      ],
      highlights: [
        "Royal palaces and forts",
        "Desert safari in Jaisalmer",
        "Traditional Rajasthani cuisine",
        "Folk music and dance",
        "Heritage hotel stays"
      ]
    },
    {
      title: "Kerala",
      image: "/Destination/Domestic/main/Kerala-main.jpg",
      description: "Discover the serene backwaters, lush tea plantations, and rich cultural heritage of God's Own Country.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          description: "Welcome to Kerala! Visit Fort Kochi, Chinese fishing nets, and enjoy a Kathakali performance."
        },
        {
          day: 2,
          title: "Munnar Hills",
          description: "Drive to Munnar, visit tea plantations, Eravikulam National Park, and spice gardens."
        },
        {
          day: 3,
          title: "Thekkady Wildlife",
          description: "Explore Periyar Wildlife Sanctuary, spice plantation tour, and tribal village visit."
        },
        {
          day: 4,
          title: "Alleppey Backwaters",
          description: "Board a traditional houseboat, cruise through backwaters, enjoy local cuisine and village life."
        },
        {
          day: 5,
          title: "Kovalam Beach",
          description: "Relax at Kovalam beach, enjoy Ayurvedic spa treatments and fresh seafood."
        }
      ],
      highlights: [
        "Houseboat cruise",
        "Tea plantations",
        "Ayurvedic treatments",
        "Wildlife sanctuaries",
        "Traditional arts"
      ]
    },
    {
      title: "Himachal Pradesh",
      image: "/Destination/Domestic/main/Himachal-Main.jpg",
      description: "Explore the snow-capped mountains, scenic valleys, and adventure sports in the heart of the Himalayas.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shimla",
          description: "Check-in and evening walk on Mall Road, visit Christ Church and Scandal Point."
        },
        {
          day: 2,
          title: "Shimla to Manali",
          description: "Scenic drive to Manali via Kullu Valley. Visit Hadimba Temple and local market."
        },
        {
          day: 3,
          title: "Rohtang Pass",
          description: "Full day excursion to Rohtang Pass (subject to weather). Snow activities and photography."
        },
        {
          day: 4,
          title: "Solang Valley",
          description: "Adventure activities like paragliding, zorbing, and rope activities."
        },
        {
          day: 5,
          title: "Local Exploration",
          description: "Visit Naggar Castle, Vashisht Hot Springs, and Buddhist monasteries."
        }
      ],
      highlights: [
        "Snow activities",
        "Adventure sports",
        "Buddhist monasteries",
        "Hot springs",
        "Mountain views"
      ]
    },
    {
      title: "Goa",
      image: "/Destination/Domestic/main/Goa-main.jpg",
      description: "Experience the perfect blend of beaches, Portuguese heritage, and vibrant nightlife in India's party capital.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Goa",
          description: "Check-in at beach resort, evening at Calangute Beach, dinner at beachfront restaurant."
        },
        {
          day: 2,
          title: "North Goa Tour",
          description: "Visit Fort Aguada, Chapora Fort, and Anjuna Flea Market. Evening cruise on Mandovi River."
        },
        {
          day: 3,
          title: "Old Goa Heritage",
          description: "Explore Basilica of Bom Jesus, Se Cathedral, and other Portuguese monuments. Evening at Panjim City."
        },
        {
          day: 4,
          title: "South Goa",
          description: "Visit Colva Beach, Benaulim Beach, and water sports activities. Evening at Martin's Corner."
        },
        {
          day: 5,
          title: "Adventure Day",
          description: "Dudhsagar Falls trip, spice plantation visit, and wildlife sanctuary tour."
        }
      ],
      highlights: [
        "Beach activities",
        "Portuguese heritage",
        "Water sports",
        "Nightlife",
        "Seafood cuisine"
      ]
    },
    {
      title: "Ladakh",
      image: "/Destination/Domestic/main/Ladhak-main.jpg",
      description: "Journey through the high-altitude desert, ancient monasteries, and stunning landscapes of the Land of High Passes.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Leh",
          description: "Acclimatization day, short walk around Leh Market, visit Leh Palace."
        },
        {
          day: 2,
          title: "Monastery Tour",
          description: "Visit Thiksey, Hemis, and Shey Monasteries. Evening at Shanti Stupa."
        },
        {
          day: 3,
          title: "Pangong Lake",
          description: "Full day excursion to Pangong Lake via Changla Pass. Stay at lake camp."
        },
        {
          day: 4,
          title: "Nubra Valley",
          description: "Drive to Nubra Valley via Khardung La. Visit Diskit Monastery and sand dunes."
        },
        {
          day: 5,
          title: "Local Experience",
          description: "Visit Alchi Monastery, rafting in Zanskar River, local family homestay."
        }
      ],
      highlights: [
        "Buddhist monasteries",
        "High-altitude lakes",
        "Mountain passes",
        "Desert camping",
        "Cultural experiences"
      ]
    }
  ],
  international: [
    {
      title: "Dubai",
      image: "/Destination/International/Main/Dubai-main.jpg",
      description: "Experience the perfect blend of modern luxury and traditional Arabian culture in this desert metropolis.",
      itinerary: [
        {
          day: 1,
          title: "Arrival & City Tour",
          description: "Hotel check-in, evening Dhow cruise dinner with entertainment."
        },
        {
          day: 2,
          title: "Modern Dubai",
          description: "Visit Burj Khalifa, Dubai Mall, Dubai Fountain show, and Dubai Frame."
        },
        {
          day: 3,
          title: "Desert Safari",
          description: "Dune bashing, camel riding, BBQ dinner with belly dancing show."
        },
        {
          day: 4,
          title: "Abu Dhabi Tour",
          description: "Visit Sheikh Zayed Mosque, Ferrari World, and Yas Island."
        },
        {
          day: 5,
          title: "Shopping & Leisure",
          description: "Visit Gold Souk, Spice Souk, and free time for shopping."
        }
      ],
      highlights: [
        "Burj Khalifa visit",
        "Desert safari",
        "Shopping festivals",
        "Theme parks",
        "Luxury hotels"
      ]
    },
    {
      title: "Singapore",
      image: "/Destination/International/Main/Singapore-main.jpg",
      description: "Discover the perfect blend of nature, technology, and diverse cultures in the Lion City.",
      itinerary: [
        {
          day: 1,
          title: "Arrival & City Tour",
          description: "Hotel check-in, evening visit to Gardens by the Bay light show."
        },
        {
          day: 2,
          title: "Sentosa Island",
          description: "Universal Studios, S.E.A. Aquarium, and Cable Car ride."
        },
        {
          day: 3,
          title: "Cultural Tour",
          description: "Visit Chinatown, Little India, and Marina Bay Sands."
        },
        {
          day: 4,
          title: "Nature & Wildlife",
          description: "Singapore Zoo, Night Safari, and River Safari."
        },
        {
          day: 5,
          title: "Shopping & Leisure",
          description: "Orchard Road shopping, Singapore Flyer, and Clarke Quay."
        }
      ],
      highlights: [
        "Universal Studios",
        "Gardens by the Bay",
        "Cultural districts",
        "World-class zoo",
        "Shopping paradise"
      ]
    },
    {
      title: "Thailand",
      image: "/Destination/International/Main/Thailand-main.jpg",
      description: "Experience the vibrant culture, pristine beaches, and warm hospitality of the Land of Smiles.",
      itinerary: [
        {
          day: 1,
          title: "Bangkok Arrival",
          description: "Hotel check-in, evening Chao Phraya dinner cruise."
        },
        {
          day: 2,
          title: "Bangkok Temples",
          description: "Visit Grand Palace, Wat Phra Kaew, Wat Arun, and Wat Pho."
        },
        {
          day: 3,
          title: "Phuket Transfer",
          description: "Fly to Phuket, evening beach visit and night market."
        },
        {
          day: 4,
          title: "Phi Phi Islands",
          description: "Island hopping, snorkeling, and beach activities."
        },
        {
          day: 5,
          title: "Phuket Leisure",
          description: "Big Buddha visit, Thai massage, and shopping."
        }
      ],
      highlights: [
        "Temple tours",
        "Island hopping",
        "Thai cuisine",
        "Traditional massage",
        "Night markets"
      ]
    },
    {
      title: "Bali",
      image: "/Destination/International/Main/Bali-main.jpg",
      description: "Immerse yourself in the island's rich culture, stunning beaches, and spiritual atmosphere.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Denpasar",
          description: "Transfer to Ubud, welcome dinner with traditional dance."
        },
        {
          day: 2,
          title: "Ubud Culture",
          description: "Rice terraces, monkey forest, and art villages."
        },
        {
          day: 3,
          title: "Temple Tour",
          description: "Visit Tanah Lot, Uluwatu Temple, and Kecak fire dance."
        },
        {
          day: 4,
          title: "Beach Time",
          description: "Nusa Dua beach activities, water sports, and spa."
        },
        {
          day: 5,
          title: "Adventure Day",
          description: "White water rafting, elephant safari, and cooking class."
        }
      ],
      highlights: [
        "Cultural shows",
        "Temple visits",
        "Beach activities",
        "Adventure sports",
        "Spa treatments"
      ]
    },
    {
      title: "Vietnam",
      image: "/Destination/International/Main/Vietnam-main.jpg",
      description: "Explore the rich history, stunning landscapes, and delicious cuisine of this Southeast Asian gem.",
      itinerary: [
        {
          day: 1,
          title: "Hanoi Arrival",
          description: "Check-in, explore Old Quarter, evening Water Puppet Show."
        },
        {
          day: 2,
          title: "Halong Bay Cruise",
          description: "Overnight cruise in Halong Bay, kayaking, cave exploration."
        },
        {
          day: 3,
          title: "Hoi An Ancient Town",
          description: "Walking tour of UNESCO site, lantern making workshop, cooking class."
        },
        {
          day: 4,
          title: "Ho Chi Minh City",
          description: "Cu Chi Tunnels, War Remnants Museum, Ben Thanh Market."
        },
        {
          day: 5,
          title: "Mekong Delta",
          description: "River cruise, floating markets, village visits, traditional music."
        }
      ],
      highlights: [
        "UNESCO sites",
        "River cruises",
        "War history",
        "Local cuisine",
        "Cultural workshops"
      ]
    },
    {
      title: "Maldives",
      image: "/Destination/International/Main/Maldives-main.jpg",
      description: "Experience luxury, pristine beaches, and world-class diving in this tropical paradise.",
      itinerary: [
        {
          day: 1,
          title: "Paradise Arrival",
          description: "Speedboat transfer to resort, welcome drinks, beach relaxation."
        },
        {
          day: 2,
          title: "Ocean Adventure",
          description: "Snorkeling with marine life, dolphin watching cruise, sunset fishing."
        },
        {
          day: 3,
          title: "Island Experience",
          description: "Visit local island, cultural performances, traditional crafts."
        },
        {
          day: 4,
          title: "Water Activities",
          description: "Scuba diving, jet skiing, parasailing, underwater restaurant."
        },
        {
          day: 5,
          title: "Spa & Relaxation",
          description: "Overwater spa treatment, beach dining, stargazing."
        }
      ],
      highlights: [
        "Luxury resorts",
        "Water sports",
        "Marine life",
        "Spa treatments",
        "Beach dining"
      ]
    }
  ]
};
