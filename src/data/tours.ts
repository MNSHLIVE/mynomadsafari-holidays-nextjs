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
  localCuisine?: string[];
  shoppingGuide?: string[];
  culturalExperiences?: string[];
  durationOptions?: Array<{
    days: string;
    title: string;
    price: number;
    cities: string[];
    suitableFor: string;
    accommodation: string;
  }>;
  internationalGuestPerks?: {
    accommodation: string[];
    dining: string[];
    transport: string[];
    support: string[];
  };
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
  },
  {
    id: 201,
    title: "Goa Cultural Delight",
    imageSrc: "/Destination/Domestic/Goa/goa-main.jpg",
    location: "Goa, India",
    duration: "5 Days",
    price: 35999,
    bestTime: "October to March",
    packageType: "Premier",
    country: "India",
    region: "West India",
    description: "Experience the true essence of Goa with our personalized door-to-door service. From the moment our driver picks you up, immerse yourself in Goan culture, cuisine, and breathtaking landscapes without worrying about arrangements. Discover hidden beaches, ancient churches, spice plantations, and local markets with our expert local guides.",
    activities: [
      "Beach hopping with local insights",
      "Spice plantation visit with traditional lunch",
      "Old Goa heritage walk",
      "Local market exploration",
      "Sunset river cruise",
      "Cooking class with Goan family",
      "Traditional folk performance"
    ],
    included: [
      "Personal driver throughout the trip",
      "Airport/Railway station pickup and drop",
      "4-star boutique resort stay",
      "Daily breakfast and selected meals",
      "All entrance fees and activities",
      "Local English-speaking guide",
      "24/7 on-call support",
      "Complimentary local SIM card"
    ],
    groupSize: "2-6 people",
    highlight: "Door-to-Door Personalized Service",
    itinerary: [
      {
        day: 1,
        title: "Warm Welcome to Goa",
        description: "Your journey begins with our friendly driver greeting you at Goa Airport/Railway Station with a traditional welcome. Enjoy a comfortable drive to your boutique resort in North Goa, watching the coastal landscape unfold. After check-in and refreshments, visit the iconic Calangute Beach for a serene sunset. End your day with a specially arranged Goan seafood dinner at a family-run beach shack, where the owner shares stories about local fishing traditions."
      },
      {
        day: 2,
        title: "Heritage & Spice Discovery",
        description: "After breakfast, your driver takes you to a traditional spice plantation. Experience a guided tour followed by a home-cooked Goan lunch served on banana leaves. In the afternoon, explore Old Goa's UNESCO heritage churches with our expert local guide. Visit a traditional Portuguese-era mansion to understand Goan architecture. Evening at the vibrant Mapusa market, where our guide helps you select authentic Goan spices, cashews, and local handicrafts as souvenirs for your loved ones."
      },
      {
        day: 3,
        title: "Local Life & Culinary Delights",
        description: "Start your day at a local fish market with our guide, selecting fresh catch for your cooking class. Join a Goan family to learn traditional recipes like fish curry, xacuti, and bebinca. After lunch, explore hidden beaches of South Goa in your private car. Evening features a sunset river cruise with live Goan folk music. Dinner at a heritage Portuguese restaurant featuring fusion cuisine."
      },
      {
        day: 4,
        title: "Culture & Countryside",
        description: "Morning visit to a traditional potter's village to try your hand at pottery. Drive through scenic countryside to Sahakari spice farm for a unique dining experience. Afternoon at Dudhsagar Waterfall (seasonal) or local butterfly conservatory. Evening food trail in Panjim's Latin Quarter, sampling local delicacies like chorizo pao, ros omelette, and feni tasting. Special cultural performance of Goan folk dance arranged at dinner."
      },
      {
        day: 5,
        title: "Relaxed Farewell",
        description: "Leisurely morning at resort. Visit Anjuna flea market (if Wednesday) or local boutiques for last-minute shopping. Our guide helps you pick authentic Goan souvenirs - Portuguese tiles, traditional jewelry, or Goan coconut vinegar. After lunch, our driver ensures a comfortable transfer to the airport/railway station, concluding your memorable Goan experience."
      }
    ],
    localCuisine: [
      "Fish Curry Rice - Traditional Goan staple",
      "Xacuti - Spiced meat curry",
      "Bebinca - Layered Goan dessert",
      "Chorizo Pao - Goan sausage bread",
      "Ros Omelette - Local street food delicacy",
      "Feni - Traditional cashew/coconut spirit",
      "Solkadi - Kokum digestive drink"
    ],
    shoppingGuide: [
      "Spices from Mapusa Market",
      "Cashews and cashew feni",
      "Portuguese azulejos (tiles)",
      "Goan coconut vinegar",
      "Traditional clay products",
      "Beachwear from Anjuna Market",
      "Local jewelry and shells"
    ],
    culturalExperiences: [
      "Traditional pottery making",
      "Goan cooking class",
      "Folk dance performance",
      "Spice plantation tour",
      "Local market visits",
      "Heritage home tour",
      "Fishing village visit"
    ]
  },
  {
    id: 301,
    title: "Royal Rajasthan Explorer",
    imageSrc: "/Destination/Domestic/Rajasthan/rajasthan-main.jpg",
    location: "Rajasthan, India",
    duration: "Multiple Options Available",
    price: "From ₹45,999",
    bestTime: "October to March",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "Immerse yourself in the royal heritage of Rajasthan with our personalized door-to-door service. From the moment our chauffeur greets you, experience the grandeur of palatial hotels, authentic cultural experiences, and the warmth of Rajasthani hospitality. Our carefully curated itineraries cater to both Indian families and international guests, ensuring comfort, safety, and unforgettable memories.",
    activities: [
      "Palace and Fort Tours",
      "Desert Safari in Jaisalmer",
      "Traditional Dance Performances",
      "Handicraft Workshops",
      "Royal Kitchen Cooking Classes",
      "Vintage Car Tours",
      "Camel Safari",
      "Lake Palace Boat Rides"
    ],
    durationOptions: [
      {
        days: "3N4D",
        title: "Jaipur Golden Triangle Express",
        price: 45999,
        cities: ["Delhi", "Agra", "Jaipur"],
        suitableFor: "Short Break & First Time Visitors",
        accommodation: "4-Star Heritage Hotels"
      },
      {
        days: "5N6D",
        title: "Rajasthan Heritage Discovery",
        price: 75999,
        cities: ["Jaipur", "Jodhpur", "Udaipur"],
        suitableFor: "Cultural Enthusiasts & Families",
        accommodation: "5-Star Palace Hotels"
      },
      {
        days: "7N8D",
        title: "Royal Rajasthan Complete",
        price: 99999,
        cities: ["Delhi", "Agra", "Jaipur", "Jodhpur", "Udaipur"],
        suitableFor: "Luxury Travelers & Extended Families",
        accommodation: "Palace Hotels & Heritage Resorts"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Welcome to India! Our representative will greet you at Delhi Airport with a traditional welcome. Transfer to your heritage hotel. Evening visit to Qutub Minar and Humayun's Tomb. Dinner at a renowned Indian restaurant featuring live classical music."
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description: "Morning drive to Agra. Visit the magnificent Taj Mahal during sunset. Evening exploration of Agra Fort with our expert historian guide. Special dinner featuring Mughlai cuisine at hotel's rooftop restaurant."
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        description: "Early morning Taj Mahal visit at sunrise (optional). Drive to Jaipur via Fatehpur Sikri. Evening arrival in Jaipur with welcome ceremony at hotel. Night tour of illuminated City Palace with royal family stories."
      },
      {
        day: 4,
        title: "Jaipur Exploration",
        description: "Morning visit to Amber Fort with elephant ride. Afternoon city tour including City Palace, Jantar Mantar, and Hawa Mahal. Evening cooking class with a royal family, learning traditional Rajasthani recipes."
      },
      {
        day: 5,
        title: "Jaipur to Jodhpur",
        description: "Scenic drive to Jodhpur. Visit Mehrangarh Fort and explore the blue city. Evening walk through old city markets with shopping for traditional textiles and spices. Dinner at a heritage haveli."
      },
      {
        day: 6,
        title: "Jodhpur Experience",
        description: "Morning village safari to Bishnoi villages. Afternoon visit to Umaid Bhawan Palace. Evening zip-lining tour over Mehrangarh Fort. Special dinner in the desert with folk performances."
      },
      {
        day: 7,
        title: "Jodhpur to Udaipur",
        description: "Drive to Udaipur via Ranakpur Temples. Afternoon boat ride on Lake Pichola. Evening cultural performance at Bagore Ki Haveli followed by dinner at a lakeside restaurant."
      },
      {
        day: 8,
        title: "Udaipur and Departure",
        description: "Morning visit to City Palace and vintage car museum. Afternoon at leisure for spa or shopping. Evening transfer to airport for departure flight."
      }
    ],
    included: [
      "Luxury vehicle with professional driver",
      "Heritage hotel accommodations",
      "Daily breakfast and selected meals",
      "English-speaking expert guides",
      "Monument entrance fees",
      "Cultural activities and performances",
      "Airport transfers",
      "24/7 on-ground support"
    ],
    internationalGuestPerks: {
      accommodation: [
        "Upgraded palace view rooms",
        "Complimentary room upgrades where available",
        "Early check-in and late checkout",
        "Welcome drink and fruit basket"
      ],
      dining: [
        "Special dietary arrangements",
        "Multi-cuisine restaurant options",
        "Private dining experiences",
        "Authentic local food experiences"
      ],
      transport: [
        "Luxury air-conditioned vehicles",
        "Professional English-speaking drivers",
        "Complimentary water and refreshments",
        "Wi-Fi in all vehicles"
      ],
      support: [
        "24/7 dedicated tour manager",
        "Local SIM card provided",
        "Emergency medical support",
        "Concierge services"
      ]
    },
    localCuisine: [
      "Dal Baati Churma - Traditional Rajasthani feast",
      "Laal Maas - Spiced meat delicacy",
      "Ker Sangri - Desert bean and berry dish",
      "Pyaaz Kachori - Onion-filled pastry",
      "Doodh Jalebi - Sweet delicacy",
      "Masala Chaach - Spiced buttermilk",
      "Royal Thali Experience"
    ],
    shoppingGuide: [
      "Johari Bazaar - Precious gems and jewelry",
      "Bapu Bazaar - Textiles and handicrafts",
      "Rajasthali - Government emporium",
      "Blue Pottery studios",
      "Leather goods from Jodhpur",
      "Carpets from Jaisalmer",
      "Miniature paintings"
    ],
    culturalExperiences: [
      "Royal family interaction sessions",
      "Traditional music performances",
      "Desert camping under stars",
      "Heritage walk with historians",
      "Tribal village visits",
      "Craft workshops with artisans",
      "Royal cooking demonstrations"
    ]
  },
  {
    id: 401,
    title: "Golden Triangle Tour",
    imageSrc: "/Destination/Domestic/GoldenTriangle/golden-triangle-main.jpg",
    location: "Delhi-Agra-Jaipur, India",
    duration: "5 Days",
    price: 49999,
    bestTime: "October to March",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "Experience the perfect introduction to India's rich history and culture through the Golden Triangle circuit. Visit iconic monuments, experience royal hospitality, and immerse yourself in the vibrant culture of North India.",
    activities: [
      "Taj Mahal Visit",
      "City Palace Tours",
      "Heritage Walks",
      "Cultural Shows",
      "Food Trails",
      "Handicraft Workshops"
    ],
    included: [
      "Luxury vehicle with professional driver",
      "4/5-star hotel accommodations",
      "Daily breakfast and selected meals",
      "English-speaking expert guides",
      "Monument entrance fees",
      "Airport transfers",
      "24/7 support"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Heritage",
        description: "Welcome at Delhi airport. Visit Qutub Minar, Humayun's Tomb, and India Gate. Evening Old Delhi food trail in Chandni Chowk."
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description: "Morning drive to Agra. Afternoon Taj Mahal visit at sunset. Evening Mohabbat the Taj show."
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        description: "Sunrise Taj Mahal visit (optional). Drive to Jaipur via Fatehpur Sikri. Evening local market visit."
      },
      {
        day: 4,
        title: "Jaipur Exploration",
        description: "Amber Fort visit with elephant ride. City Palace, Hawa Mahal, and local crafts exploration."
      },
      {
        day: 5,
        title: "Return to Delhi",
        description: "Morning at leisure. Afternoon drive to Delhi. Evening departure."
      }
    ]
  },
  {
    id: 402,
    title: "Kerala Backwaters Luxury",
    imageSrc: "/Destination/Domestic/Kerala/kerala-backwaters-main.jpg",
    location: "Kerala, India",
    duration: "6 Days",
    price: 65999,
    bestTime: "September to March",
    packageType: "Luxury",
    country: "India",
    region: "South India",
    description: "Immerse yourself in the serene beauty of Kerala's backwaters. Experience luxury houseboats, ayurvedic treatments, and pristine beaches while exploring God's Own Country.",
    activities: [
      "Houseboat Cruise",
      "Ayurvedic Spa",
      "Tea Plantation Visit",
      "Kathakali Show",
      "Cooking Class",
      "Beach Activities"
    ],
    included: [
      "Premium houseboat stay",
      "Luxury resort accommodations",
      "All meals during houseboat stay",
      "Private transfers",
      "Cultural shows",
      "Ayurvedic consultation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin Welcome",
        description: "Arrival in Cochin. Heritage walk in Fort Kochi. Evening Kathakali dance show."
      },
      {
        day: 2,
        title: "Munnar Hills",
        description: "Drive to Munnar. Tea plantation visit and tea tasting. Spice garden tour."
      },
      {
        day: 3,
        title: "Thekkady Wildlife",
        description: "Transfer to Thekkady. Periyar Wildlife Sanctuary boat ride. Spice plantation tour."
      },
      {
        day: 4,
        title: "Alleppey Houseboat",
        description: "Board luxury houseboat in Alleppey. Backwater cruise with all meals."
      },
      {
        day: 5,
        title: "Kovalam Beach",
        description: "Drive to Kovalam. Beach leisure. Evening ayurvedic massage."
      },
      {
        day: 6,
        title: "Departure",
        description: "Morning yoga session. Transfer to Trivandrum airport."
      }
    ]
  },
  {
    id: 501,
    title: "Char Dham Yatra",
    imageSrc: "/Destination/Domestic/Religious/chardham-main.jpg",
    location: "Uttarakhand, India",
    duration: "12 Days",
    price: 85999,
    bestTime: "May to June, September to October",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "Embark on the sacred Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Complete assistance for this spiritual journey.",
    included: [
      "All transfers in comfortable vehicle",
      "Hotel/Guest house accommodation",
      "Vegetarian meals",
      "Experienced guide",
      "Puja arrangements",
      "Medical assistance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Haridwar",
        description: "Arrival in Delhi. Transfer to Haridwar. Evening Ganga Aarti."
      },
      {
        day: 2,
        title: "Yamunotri Yatra",
        description: "Drive to Janki Chatti. Trek to Yamunotri temple. Evening aarti."
      },
      {
        day: 3,
        title: "Gangotri Darshan",
        description: "Travel to Gangotri. Temple darshan and Ganga puja."
      },
      {
        day: 4,
        title: "Kedarnath Journey",
        description: "Drive to Sonprayag. Helicopter or trek to Kedarnath."
      },
      {
        day: 5,
        title: "Badrinath Visit",
        description: "Travel to Badrinath. Temple darshan and Mana village visit."
      }
    ]
  },
  {
    id: 502,
    title: "Varanasi Spiritual Tour",
    imageSrc: "/Destination/Domestic/Religious/varanasi-main.jpg",
    location: "Varanasi, India",
    duration: "4 Days",
    price: 35999,
    bestTime: "October to March",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "Experience the spiritual essence of India's oldest living city. Witness the magnificent Ganga Aarti, explore ancient temples, and understand Hindu traditions.",
    included: [
      "Heritage hotel stay",
      "Boat rides on Ganges",
      "Temple visits",
      "Cultural shows",
      "Local guide",
      "All transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Sacred Welcome",
        description: "Arrival in Varanasi. Evening Ganga Aarti at Dashashwamedh Ghat."
      },
      {
        day: 2,
        title: "Spiritual Morning",
        description: "Sunrise boat ride. Temple tour including Kashi Vishwanath."
      },
      {
        day: 3,
        title: "Sarnath Excursion",
        description: "Visit Buddhist site Sarnath. Evening cultural program."
      },
      {
        day: 4,
        title: "Farewell",
        description: "Morning boat ride. Departure transfer."
      }
    ]
  },
  {
    id: 503,
    title: "Golden Temple & Amritsar Heritage",
    imageSrc: "/Destination/Domestic/Religious/amritsar-main.jpg",
    location: "Amritsar, Punjab",
    duration: "3 Days",
    price: 25999,
    bestTime: "October to March",
    packageType: "Premier",
    country: "India",
    region: "North India",
    description: "Experience the spiritual and cultural heart of Punjab. Visit the magnificent Golden Temple, witness the patriotic Wagah Border ceremony, and indulge in authentic Punjabi cuisine.",
    activities: [
      "Golden Temple Visit",
      "Wagah Border Ceremony",
      "Food Trail",
      "Heritage Walk",
      "Jallianwala Bagh Visit",
      "Local Market Tour"
    ],
    included: [
      "Heritage hotel stay",
      "All meals",
      "Local guide",
      "Airport transfers",
      "Sightseeing in AC vehicle",
      "All entrance fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Sacred Arrival",
        description: "Arrival and transfer to hotel. Evening visit to Golden Temple for Palki Sahib ceremony. Dinner at Langar Hall."
      },
      {
        day: 2,
        title: "Heritage & Patriotism",
        description: "Early morning Golden Temple visit. Heritage walk through old city. Afternoon Wagah Border ceremony. Evening food trail in Hall Bazaar."
      },
      {
        day: 3,
        title: "Cultural Immersion",
        description: "Visit Jallianwala Bagh, Durgiana Temple, and local markets. Evening departure."
      }
    ]
  },
  {
    id: 601,
    title: "Bali Paradise Explorer",
    imageSrc: "/Destination/International/Bali/bali-main.jpg",
    location: "Bali, Indonesia",
    duration: "7 Days",
    price: 89999,
    bestTime: "April to October",
    packageType: "Luxury",
    country: "Indonesia",
    region: "Southeast Asia",
    description: "Discover the magic of Bali through its pristine beaches, ancient temples, lush rice terraces, and vibrant culture. Perfect blend of relaxation and adventure.",
    activities: [
      "Temple Tours",
      "Rice Terrace Visit",
      "Spa Treatments",
      "Water Sports",
      "Cultural Shows",
      "Sunset Cruises"
    ],
    included: [
      "Luxury villa accommodation",
      "Private transfers",
      "Daily breakfast",
      "Selected activities",
      "English speaking guide",
      "Airport transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tropical Welcome",
        description: "Arrival in Bali. Transfer to Seminyak. Welcome dinner on beach."
      },
      {
        day: 2,
        title: "Ubud Culture",
        description: "Monkey Forest, rice terraces, and art galleries tour."
      },
      {
        day: 3,
        title: "Temple Trail",
        description: "Visit Tanah Lot and Uluwatu temples. Evening fire dance show."
      },
      {
        day: 4,
        title: "Island Adventure",
        description: "Nusa Penida tour with snorkeling and beach visits."
      },
      {
        day: 5,
        title: "Wellness Day",
        description: "Yoga session, spa treatment, and cooking class."
      },
      {
        day: 6,
        title: "Water Sports",
        description: "Beach activities in Nusa Dua. Sunset dinner cruise."
      },
      {
        day: 7,
        title: "Farewell",
        description: "Free morning. Departure transfer."
      }
    ]
  },
  {
    id: 602,
    title: "Thailand Discovery",
    imageSrc: "/Destination/International/Thailand/thailand-main.jpg",
    location: "Thailand",
    duration: "7 Days",
    price: 79999,
    bestTime: "November to March",
    packageType: "Luxury",
    country: "Thailand",
    region: "Southeast Asia",
    description: "Experience the perfect blend of culture, beaches, and city life in Thailand. From Bangkok's vibrant streets to Phuket's serene beaches.",
    activities: [
      "Temple Tours",
      "Island Hopping",
      "Thai Cooking Class",
      "Night Markets",
      "Thai Massage",
      "Beach Activities"
    ],
    included: [
      "Luxury hotel stays",
      "Daily breakfast",
      "Internal flights",
      "Private transfers",
      "English speaking guide",
      "Island tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival",
        description: "Welcome to Thailand. Evening Chao Phraya dinner cruise."
      },
      {
        day: 2,
        title: "Bangkok Temples",
        description: "Visit Grand Palace, Wat Phra Kaew, Wat Arun. Evening street food tour."
      },
      {
        day: 3,
        title: "Bangkok Markets",
        description: "Morning floating market tour. Evening free for shopping."
      },
      {
        day: 4,
        title: "Phuket Paradise",
        description: "Flight to Phuket. Evening beach dinner and fire show."
      },
      {
        day: 5,
        title: "Phi Phi Islands",
        description: "Full-day island hopping tour with snorkeling."
      },
      {
        day: 6,
        title: "Phuket Leisure",
        description: "Morning cooking class. Afternoon spa. Evening Old Town tour."
      },
      {
        day: 7,
        title: "Farewell",
        description: "Free morning for shopping. Departure transfer."
      }
    ]
  },
  {
    id: 603,
    title: "Vietnam Explorer",
    imageSrc: "/Destination/International/Vietnam/vietnam-main.jpg",
    location: "Vietnam",
    duration: "8 Days",
    price: 85999,
    bestTime: "October to March",
    packageType: "Premier",
    country: "Vietnam",
    region: "Southeast Asia",
    description: "Journey through Vietnam's highlights from Hanoi's ancient streets to Ha Long Bay's limestone karsts, and Ho Chi Minh City's vibrant culture.",
    activities: [
      "Ha Long Bay Cruise",
      "Cu Chi Tunnels",
      "Cooking Classes",
      "City Tours",
      "Water Puppet Show",
      "Market Visits"
    ],
    included: [
      "Hotel accommodations",
      "Cruise cabin",
      "Internal flights",
      "Daily breakfast",
      "English speaking guide",
      "Entrance fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Hanoi Welcome",
        description: "Arrival in Hanoi. Evening water puppet show and welcome dinner."
      },
      {
        day: 2,
        title: "Hanoi Heritage",
        description: "Visit Ho Chi Minh Complex, Temple of Literature, Old Quarter walking tour."
      },
      {
        day: 3,
        title: "Ha Long Bay",
        description: "Cruise through limestone karsts. Kayaking and cave exploration."
      },
      {
        day: 4,
        title: "Ha Long - Hanoi",
        description: "Sunrise Tai Chi. Return to Hanoi. Evening food tour."
      },
      {
        day: 5,
        title: "Ho Chi Minh City",
        description: "Flight to Ho Chi Minh. City tour including War Museum, Notre Dame Cathedral."
      },
      {
        day: 6,
        title: "Mekong Delta",
        description: "Day trip to Mekong Delta. Visit floating markets and local villages."
      },
      {
        day: 7,
        title: "Cu Chi Experience",
        description: "Morning Cu Chi Tunnels tour. Afternoon cooking class."
      },
      {
        day: 8,
        title: "Departure",
        description: "Morning market visit. Afternoon departure."
      }
    ]
  },
  {
    id: 604,
    title: "Malaysia Highlights",
    imageSrc: "/Destination/International/Malaysia/malaysia-main.jpg",
    location: "Malaysia",
    duration: "6 Days",
    price: 72999,
    bestTime: "March to October",
    packageType: "Luxury",
    country: "Malaysia",
    region: "Southeast Asia",
    description: "Experience Malaysia's diverse culture, from modern Kuala Lumpur to historical Malacca and tropical Langkawi.",
    activities: [
      "City Tours",
      "Island Hopping",
      "Cable Car Ride",
      "Cultural Shows",
      "Food Tours",
      "Heritage Walks"
    ],
    included: [
      "Luxury accommodations",
      "Daily breakfast",
      "Internal flights",
      "Private transfers",
      "English speaking guide",
      "Entrance fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "KL Welcome",
        description: "Arrival in Kuala Lumpur. Evening Petronas Towers visit and city lights tour."
      },
      {
        day: 2,
        title: "KL Exploration",
        description: "City tour including Batu Caves, National Monument, and Central Market."
      },
      {
        day: 3,
        title: "Malacca Heritage",
        description: "Day trip to Malacca. Visit Dutch Square, Christ Church, and Jonker Street."
      },
      {
        day: 4,
        title: "Langkawi Paradise",
        description: "Flight to Langkawi. Cable car ride and Sky Bridge visit."
      },
      {
        day: 5,
        title: "Island Adventure",
        description: "Island hopping tour. Eagle feeding, swimming, and beach activities."
      },
      {
        day: 6,
        title: "Farewell",
        description: "Morning at leisure. Departure transfer."
      }
    ]
  },
  {
    id: 605,
    title: "European Highlights",
    imageSrc: "/Destination/International/Europe/europe-main.jpg",
    location: "France-Switzerland-Italy",
    duration: "10 Days",
    price: 225999,
    bestTime: "April to October",
    packageType: "Luxury",
    country: "Multiple",
    region: "Europe",
    description: "Experience the best of Europe with this carefully curated tour covering iconic cities, alpine beauty, and Mediterranean charm. From Paris's romance to Swiss Alps' majesty and Italian art.",
    activities: [
      "City Walking Tours",
      "Wine Tasting",
      "Mountain Excursions",
      "Museum Visits",
      "Gondola Rides",
      "River Cruises"
    ],
    included: [
      "4-star hotel stays",
      "Daily breakfast",
      "Inter-city trains",
      "Skip-the-line tickets",
      "English speaking guides",
      "Airport transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Paris Arrival",
        description: "Welcome to Paris. Evening Seine River cruise with Eiffel Tower views."
      },
      {
        day: 2,
        title: "Paris Exploration",
        description: "Louvre Museum, Notre Dame Cathedral, and Montmartre walking tour."
      },
      {
        day: 3,
        title: "Paris to Swiss Alps",
        description: "Scenic train to Interlaken. Evening Swiss folklore dinner show."
      },
      {
        day: 4,
        title: "Jungfrau Experience",
        description: "Visit to Jungfraujoch - Top of Europe. Alpine cheese and chocolate tasting."
      },
      {
        day: 5,
        title: "Swiss Beauty",
        description: "Lake Lucerne cruise. Mount Pilatus golden round trip."
      },
      {
        day: 6,
        title: "Venice Romance",
        description: "Train to Venice. Evening gondola ride with musicians."
      },
      {
        day: 7,
        title: "Venice Discovery",
        description: "St. Mark's Basilica, Doge's Palace, and Murano glass-making tour."
      },
      {
        day: 8,
        title: "Florence Art",
        description: "Train to Florence. Uffizi Gallery and Tuscan wine tasting."
      },
      {
        day: 9,
        title: "Rome Classics",
        description: "Colosseum, Roman Forum, and Vatican Museums tour."
      },
      {
        day: 10,
        title: "Arrivederci",
        description: "Morning at leisure in Rome. Departure transfer."
      }
    ]
  },
  {
    id: 606,
    title: "Australian Adventure",
    imageSrc: "/Destination/International/Australia/australia-main.jpg",
    location: "Australia",
    duration: "12 Days",
    price: 299999,
    bestTime: "March to November",
    packageType: "Luxury",
    country: "Australia",
    region: "Oceania",
    description: "Discover Australia's diverse landscapes from the Great Barrier Reef to the Outback, combining city experiences with natural wonders and unique wildlife encounters.",
    activities: [
      "Reef Snorkeling",
      "Wildlife Tours",
      "City Explorations",
      "Desert Adventures",
      "Wine Tasting",
      "Aboriginal Experiences"
    ],
    included: [
      "Luxury accommodations",
      "Internal flights",
      "Daily breakfast",
      "Selected activities",
      "Expert guides",
      "Airport transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Sydney Welcome",
        description: "Arrival in Sydney. Evening harbour dinner cruise past Opera House."
      },
      {
        day: 2,
        title: "Sydney Icons",
        description: "Opera House tour, Bridge Climb, and Bondi Beach visit."
      },
      {
        day: 3,
        title: "Blue Mountains",
        description: "Full-day tour including Three Sisters and wildlife park."
      },
      {
        day: 4,
        title: "Cairns & Reef",
        description: "Flight to Cairns. Great Barrier Reef snorkeling experience."
      },
      {
        day: 5,
        title: "Rainforest Magic",
        description: "Daintree Rainforest tour and Aboriginal cultural experience."
      },
      {
        day: 6,
        title: "Ayers Rock",
        description: "Flight to Uluru. Sunset viewing and bush tucker dinner."
      },
      {
        day: 7,
        title: "Red Center",
        description: "Sunrise at Uluru, Kata Tjuta walk, and Field of Light."
      },
      {
        day: 8,
        title: "Melbourne Culture",
        description: "Flight to Melbourne. Laneway and street art tour."
      },
      {
        day: 9,
        title: "Great Ocean Road",
        description: "Full-day Great Ocean Road tour with Twelve Apostles."
      },
      {
        day: 10,
        title: "Wine & Wildlife",
        description: "Yarra Valley wineries and Phillip Island penguin parade."
      },
      {
        day: 11,
        title: "Melbourne Leisure",
        description: "Free day for shopping and optional activities."
      },
      {
        day: 12,
        title: "Farewell",
        description: "Morning at leisure. Departure transfer."
      }
    ]
  },
  {
    id: 701,
    title: "Northeast India Explorer",
    imageSrc: "/Destination/Domestic/Northeast/northeast-main.jpg",
    location: "Northeast India",
    duration: "9 Days",
    price: 85999,
    bestTime: "October to April",
    packageType: "Premier",
    country: "India",
    region: "Northeast India",
    description: "Explore the untouched beauty of Northeast India, covering Assam's tea gardens, Meghalaya's living root bridges, and Kaziranga's wildlife. Experience unique tribal cultures and stunning landscapes.",
    activities: [
      "Wildlife Safaris",
      "Tribal Village Visits",
      "Tea Garden Tours",
      "Cave Exploration",
      "River Cruising",
      "Cultural Shows"
    ],
    included: [
      "Comfortable accommodations",
      "All meals",
      "Expert naturalist",
      "Tribal guide",
      "All transfers",
      "Safari charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati Arrival",
        description: "Welcome to Northeast. Visit Kamakhya Temple and river cruise on Brahmaputra."
      },
      {
        day: 2,
        title: "Kaziranga Transfer",
        description: "Drive to Kaziranga. Evening cultural show and tea garden visit."
      },
      {
        day: 3,
        title: "Kaziranga Safari",
        description: "Morning and afternoon safaris to spot one-horned rhinos and tigers."
      },
      {
        day: 4,
        title: "Shillong Journey",
        description: "Scenic drive to Shillong. Visit Don Bosco Museum and Police Bazaar."
      },
      {
        day: 5,
        title: "Cherrapunji Wonder",
        description: "Visit living root bridges, waterfalls, and caves in Cherrapunji."
      },
      {
        day: 6,
        title: "Mawlynnong",
        description: "Asia's cleanest village tour and tree house views."
      },
      {
        day: 7,
        title: "Majuli Island",
        description: "Visit world's largest river island. Mask making and monastery tours."
      },
      {
        day: 8,
        title: "Tribal Experience",
        description: "Visit Nagaland border villages. Traditional dance and feast."
      },
      {
        day: 9,
        title: "Departure",
        description: "Morning local market visit. Transfer to Guwahati airport."
      }
    ]
  },
  {
    id: 702,
    title: "Indian Wildlife Safari",
    imageSrc: "/Destination/Domestic/Wildlife/wildlife-main.jpg",
    location: "Central India",
    duration: "8 Days",
    price: 95999,
    bestTime: "October to June",
    packageType: "Luxury",
    country: "India",
    region: "Central India",
    description: "Experience India's finest wildlife parks in search of tigers, leopards, and diverse wildlife. Stay in luxury jungle lodges and explore with expert naturalists.",
    activities: [
      "Jungle Safaris",
      "Bird Watching",
      "Nature Walks",
      "Wildlife Photography",
      "Village Visits",
      "Conservation Talks"
    ],
    included: [
      "Luxury jungle lodge stays",
      "All meals",
      "Safari vehicles",
      "Naturalist guides",
      "Park permits",
      "Airport transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nagpur Arrival",
        description: "Welcome at Nagpur. Drive to Pench National Park. Evening nature walk."
      },
      {
        day: 2,
        title: "Pench Safari",
        description: "Morning and afternoon safaris in Pench, famous for tigers and wild dogs."
      },
      {
        day: 3,
        title: "Kanha Transfer",
        description: "Drive to Kanha National Park. Evening wildlife documentary and expert talk."
      },
      {
        day: 4,
        title: "Kanha Explorer",
        description: "Full day of safaris in Kanha, home to diverse wildlife and barasingha."
      },
      {
        day: 5,
        title: "Bandhavgarh Journey",
        description: "Transfer to Bandhavgarh. Evening village visit and cultural interaction."
      },
      {
        day: 6,
        title: "Tiger Territory",
        description: "Explore Bandhavgarh's high density tiger habitat with expert naturalists."
      },
      {
        day: 7,
        title: "Final Safari",
        description: "Morning safari followed by wildlife photography workshop."
      },
      {
        day: 8,
        title: "Farewell",
        description: "Early morning bird watching. Transfer to Jabalpur airport."
      }
    ],
    localCuisine: [
      "Traditional tribal dishes",
      "Local forest produce",
      "Regional specialties",
      "Organic farm meals",
      "Bush dinners",
      "Interactive cooking"
    ],
    culturalExperiences: [
      "Village walks",
      "Local craft demonstrations",
      "Conservation projects",
      "Tribal art workshops",
      "Nature interpretation",
      "Star gazing sessions"
    ]
  }
]; 