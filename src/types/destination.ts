export interface Destination {
  state?: string;
  country?: string;
  title: string;
  image: string;
  description: string;
  bestTime: string;
  places: string[];
  food: string[];
  tips: string[];
  majorTours: string[];
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