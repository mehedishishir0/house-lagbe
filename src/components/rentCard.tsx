"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { RentListingFlat } from "../../types/rentListingType";

interface RentCardProps {
    data: RentListingFlat;
    isWishlisted?: boolean;
    onToggleWishlist?: () => void;
}

const RentCard: React.FC<RentCardProps> = ({ data, isWishlisted = false, onToggleWishlist }) => {
    return (
        <Card className="w-full sm:w-[260px] md:w-[280px] lg:w-[310px] border shadow-none rounded-2xl overflow-hidden group">
            <CardHeader className="relative p-0 overflow-hidden">
                <Link href={`/rent/${data.id}`}>
                    <Image
                        width={900}
                        height={900}
                        src={data.images[0] || "/placeholder.jpg"}
                        alt={data.title}
                        className="w-full h-[180px] cursor-pointer sm:h-[200px] md:h-[220px] lg:h-[250px] object-cover bg-[#E9DDD366] transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </Link>
                <button
                    onClick={onToggleWishlist}
                    className={`absolute top-3 right-3 bg-white rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 ${isWishlisted ? "bg-red-100" : ""
                        }`}
                >
                    <Heart
                        className={`h-5 w-5 ${isWishlisted ? "text-red-500" : "text-gray-400"}`}
                    />
                </button>
            </CardHeader>

            <CardContent className="space-y-2 px-3 py-3">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{data.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 truncate">{data.description.slice(0, 50)}</p>

                <div className="flex justify-between items-center mt-1">
                    <span className="font-medium text-red-600 text-sm sm:text-base">
                        {data.rentAmount.toLocaleString()} {data.rentCurrency}
                    </span>
                    {data.rentIncludes && data.rentIncludes.length > 0 && (
                        <span className="text-xs text-gray-500">Includes: {data.rentIncludes.join(", ").slice(0, 20)}</span>
                    )}
                </div>

                <div className="text-xs sm:text-sm text-gray-600 mt-1 space-y-1">
                    <p>
                        Location: {data.areaThana}, {data.district}, {data.division}
                    </p>
                    {data.availableFrom && <p>Available from: {data.availableFrom}</p>}
                </div>

                {data.unlockRequiredCredits && (
                    <p className="text-xs text-yellow-600 font-medium mt-1">
                        Unlock requires {data.unlockRequiredCredits} credits
                    </p>
                )}

            </CardContent>
            <Button className="w-full mt-2 bg-gradient-to-br from-black to-blue-950 text-sm rounded-none sm:text-base">View Details</Button>
        </Card>
    );
};

export default RentCard;
