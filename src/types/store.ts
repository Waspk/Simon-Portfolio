export interface Offer {
  type: 'clearance' | 'seasonal' | 'special';
  title: string;
  discount: string;
  description?: string;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number];
  category: 'casual' | 'formal' | 'sports';
  image: string;
  phone?: string;
  hours?: string;
  offers: Offer[];
}

export interface FilterState {
  search: string;
  category: string;
  offerType: string;
  distance: string;
  sortBy: 'name' | 'distance' | 'offers';
  sortDesc: boolean;
}