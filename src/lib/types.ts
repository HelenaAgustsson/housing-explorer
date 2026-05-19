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

export type ListingFilters = {
  bedrooms: number[];
};