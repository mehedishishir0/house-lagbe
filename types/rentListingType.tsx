export interface RentListingFlat {
  id: string;
  title: string;
  description: string;
  rentAmount: number;
  rentCurrency: string;
  rentIncludes?: string[];
  bedrooms: number;
  bathrooms: number;
  balcony?: number;
  floorNumber?: number;
  gender?: string;
  category?: string;
  propertyType?: string;
  availableFrom?: string;
  updatedAt?: string;
  division: string;
  district: string;
  areaThana: string;
  subArea?: string;
  shortAddress?: string;
  images: string[];
  unlockRequiredCredits?: number;
}
