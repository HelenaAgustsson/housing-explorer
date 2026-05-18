export type Listing = {
  id: string;
  title: string;
  neighbourhood: string;
  price: number;
  monthlyCost: number;
  bedrooms: number;
  sqm: number;
  orientation: "north" | "south" | "east" | "west";
  commuteMinutes: number;
  imageUrl: string;
};

type ListingFilters = {
  neighbourhood: string;
  maxPrice: number | null;
  bedrooms: number | "any";
  orientation: "any" | "north" | "south" | "east" | "west";
};