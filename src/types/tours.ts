export interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  image: string;
  itinerary?: string[];
}