import { Listing } from "./types";

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "Modern flat in Lilleby",
    neighbourhood: "Lilleby",
    price: 4200000,
    monthlyCost: 5400,
    bedrooms: 2,
    sqm: 58,
    orientation: "west",
    commuteMinutes: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: "2",
    title: "Bright apartment near Lade",
    neighbourhood: "Lade",
    price: 3700000,
    monthlyCost: 4100,
    bedrooms: 1,
    sqm: 40,
    orientation: "south",
    commuteMinutes: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];