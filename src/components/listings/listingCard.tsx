import Image from "next/image";
import { Listing } from "@/lib/types";
import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
    listing: Listing;
};

export function ListingCard({ listing }: Props) {
    return (
        <Card className="overflow-hidden">
            <div className="relative h-52 w-full">
                <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    loading="eager"
                />
            </div>

            <CardContent className="space-y-4 p-4">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                        {listing.title}
                    </h2>

                    <p className="text-sm text-zinc-500">
                        {listing.neighbourhood}
                    </p>
                </div>

                <div className="flex gap-2">
                    <Badge variant="secondary">
                        {listing.orientation}
                    </Badge>

                    <Badge variant="outline">
                        {listing.commuteMinutes} min commute
                    </Badge>
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-2xl font-bold">
                            NOK {listing.price.toLocaleString()}
                        </p>

                        <p className="text-sm text-zinc-500">
                            {listing.sqm} m² • {listing.bedrooms} bed
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}