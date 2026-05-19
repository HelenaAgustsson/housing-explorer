import { BedroomFilter } from "./bedroomFilter";
import { ListingFilters } from "@/lib/types";

type FiltersProps = {
    filters: ListingFilters;
};

export function MainFilter({ filters }: FiltersProps) {
    return (
        <div className="flex gap-4 my-4">
            <BedroomFilter bedrooms={filters.bedrooms} />
        </div>
    );
};

