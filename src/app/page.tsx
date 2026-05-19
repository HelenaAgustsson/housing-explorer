import { MainFilter } from "@/components/filters/mainFilter";
import { ListingCard } from "@/components/listings/listingCard";
import { mockListings } from "@/lib/mockListings";
import { mockFilters } from "@/lib/mockFilters";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">
          Trondheim Housing Explorer
        </h1>
        <MainFilter filters={mockFilters} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockListings.map((listing) => (
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