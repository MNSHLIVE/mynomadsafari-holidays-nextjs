import { faker } from '@faker-js/faker';
import { Tour } from '../data/tours';
import fs from 'fs';
import path from 'path';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image: string;
}

const generateItinerary = (tour: Tour, numberOfDays: number): ItineraryDay[] => {
  const itinerary: ItineraryDay[] = [];
  const destinationSlug = tour.title.toLowerCase().replace(/\s+/g, '-');

  for (let i = 0; i < numberOfDays; i++) {
    const day = i + 1;
    const imagePath = `/images/itineraries/${destinationSlug}/day-${day}.jpg`;

    itinerary.push({
      day,
      title: faker.lorem.words(3),
      description: faker.lorem.paragraph(3),
      image: imagePath
    });
  }

  return itinerary;
};

const updateToursWithItineraries = () => {
  // Read existing tours
  const toursPath = path.join(process.cwd(), 'src', 'data', 'tours.ts');
  const toursContent = fs.readFileSync(toursPath, 'utf-8');
  
  // Parse tours array
  const toursMatch = toursContent.match(/export const tours: Tour\[] = \[([\s\S]*?)\];/);
  if (!toursMatch) {
    console.error('Could not find tours array in file');
    return;
  }

  let toursArray = eval(`[${toursMatch[1]}]`);

  // Update each tour with new itinerary
  toursArray = toursArray.map((tour: Tour) => {
    const numberOfDays = parseInt(tour.duration.split(' ')[0]) || 5;
    const newItinerary = generateItinerary(tour, numberOfDays);
    return {
      ...tour,
      itinerary: newItinerary
    };
  });

  // Create image directories
  toursArray.forEach((tour: Tour) => {
    const destinationSlug = tour.title.toLowerCase().replace(/\s+/g, '-');
    const dirPath = path.join(process.cwd(), 'public', 'images', 'itineraries', destinationSlug);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Update the file
  const updatedContent = toursContent.replace(
    /export const tours: Tour\[] = \[([\s\S]*?)\];/,
    `export const tours: Tour[] = ${JSON.stringify(toursArray, null, 2)};`
  );

  fs.writeFileSync(toursPath, updatedContent);
  console.log('Tours updated with new itineraries');
};

// Run the update
updateToursWithItineraries(); 