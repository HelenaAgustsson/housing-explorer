"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ListingFilters } from "@/lib/types";

type BedroomFilterProps = Pick<ListingFilters, "bedrooms"> & {
    selectedBedrooms: number | null;
    onBedroomsChange: (bedrooms: number | null) => void;
};

export function BedroomFilter({ bedrooms, selectedBedrooms, onBedroomsChange }: BedroomFilterProps) {
    return (
        <Select
            value={selectedBedrooms?.toString() || undefined}
            onValueChange={(value) => onBedroomsChange(value ? parseInt(value) : null)}
        >
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Number of bedrooms" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Bedrooms</SelectLabel>
                    {bedrooms.map((bedroom) => (
                        <SelectItem
                            key={bedroom}
                            value={bedroom.toString()}
                        >
                            {bedroom}+ bedroom
                            {bedroom > 1 ? "s" : ""}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}; 