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

type BedroomFilterProps = Pick<ListingFilters, "bedrooms">;

export function BedroomFilter({ bedrooms }: BedroomFilterProps) {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select number of bedrooms" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Bedrooms</SelectLabel>
                    {bedrooms.map((bedroom) => (
                        <SelectItem key={bedroom} value={bedroom.toString()}>
                            {bedroom}{" "}bedroom{bedroom > 1 ? "s" : ""}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}; 