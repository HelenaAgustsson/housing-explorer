"use client";

import { useState } from "react";
import { BedroomFilter } from "@/components/filters/BedroomFilter";
import { ListingCard } from "@/components/listings/ListingCard";
import { mockListings } from "@/lib/mockListings";
import { mockFilters } from "@/lib/mockFilters";

export default function Home() {
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | null>(null);

  const filteredListings = selectedBedrooms
    ? mockListings.filter(
      (listing) =>
        listing.bedrooms >= selectedBedrooms
    )
    : mockListings;



  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">
          Trondheim Housing Explorer
        </h1>
        <div className="flex gap-4 my-4">
          <BedroomFilter bedrooms={mockFilters.bedrooms} selectedBedrooms={selectedBedrooms} onBedroomsChange={setSelectedBedrooms} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
            />
          ))}
        </div>
      </div>
    </main>
  );
}