import { TourCalculator } from '@/components/TourCalculator';
import { TourCard } from '@/components/TourCard';

const religiousTours = [
  {
    id: 1,
    title: "Char Dham Yatra",
    description: "Visit the four sacred shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience the spiritual journey of a lifetime.",
    image: "/Destination/Domestic/Tours/Religious/Hindu/CharDham/CharDham-Main.jpg",
    duration: "12 Days",
    basePrice: 45000,
    highlights: [
      "Visit all four sacred shrines",
      "Professional guide",
      "Comfortable accommodation",
      "All meals included"
    ]
  },
  {
    id: 2,
    title: "Badrinath Kedarnath Yatra",
    description: "Embark on a sacred journey to the holy shrines of Badrinath and Kedarnath in the majestic Himalayas.",
    image: "/Destination/Domestic/Tours/Religious/Hindu/BadrinathKedarnath/BadrinathKedarnath-Main.jpg",
    duration: "8 Days",
    basePrice: 35000,
    highlights: [
      "Visit both sacred shrines",
      "Helicopter service available",
      "Medical assistance",
      "Accommodation en route"
    ]
  },
  {
    id: 3,
    title: "Varanasi & Prayagraj",
    description: "Experience the spiritual essence of India with Ganga Aarti, temple visits, and holy dip in the sacred rivers.",
    image: "/Destination/Domestic/Tours/Religious/Hindu/VaranasiPrayagraj/VaranasiPrayagraj-Main.jpg",
    duration: "5 Days",
    basePrice: 25000,
    highlights: [
      "Morning Ganga Aarti",
      "Temple visits",
      "Boat ride on Ganga",
      "Holy dip experience"
    ]
  }
];

export default function ReligiousTours() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Religious Tours</h1>
      
      {/* Tour Calculator */}
      <div className="mb-12">
        <TourCalculator basePrice={25000} title="Religious Tour Calculator" />
      </div>

      {/* Tour Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {religiousTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
} 