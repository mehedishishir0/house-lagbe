"use client";

import React, { useState } from "react";
import { RentListingFlat } from "../../../types/rentListingType";
import RentCard from "../rentCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OfficeRent = () => {


    const rentListings: RentListingFlat[] = [
        {
            id: "1",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Nice flat in Mirpur...",
            rentAmount: 7200,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water", "gas"],
            bedrooms: 2,
            bathrooms: 1,
            balcony: 1,
            floorNumber: 3,
            gender: "Anyone",
            category: "Bachelor",
            propertyType: "Flat",
            availableFrom: "October",
            updatedAt: "19 Sep 2025",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Mirpur",
            subArea: "Mirpur 1",
            shortAddress: "Near Mirpur 1 bus stop",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5zYB7npcLT3cDV_MnsvgJsvWQdOrASOEdg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaJ9VTBtuxyYuohtZKgRiTdL_eD8daXNhxg&s",
            ],
        },
        {
            id: "2",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Flat in Dhanmondi...",
            rentAmount: 8500,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water"],
            bedrooms: 3,
            bathrooms: 2,
            availableFrom: "October",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Dhanmondi",
            images: [
                "https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg",
            ],
        },
        // Duplicate/modified items to make 10
        {
            id: "3",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Cozy flat near Gulshan...",
            rentAmount: 9000,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water", "internet"],
            bedrooms: 2,
            bathrooms: 2,
            availableFrom: "November",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Gulshan",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5zYB7npcLT3cDV_MnsvgJsvWQdOrASOEdg&s",
            ],
        },
        {
            id: "4",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Flat in Banani...",
            rentAmount: 7800,
            rentCurrency: "BDT",
            rentIncludes: ["water"],
            bedrooms: 1,
            bathrooms: 1,
            availableFrom: "September",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Banani",
            images: [
                "https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg",
            ],
        },
        {
            id: "5",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Spacious flat in Uttara...",
            rentAmount: 9500,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water", "gas"],
            bedrooms: 3,
            bathrooms: 2,
            availableFrom: "October",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Uttara",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaJ9VTBtuxyYuohtZKgRiTdL_eD8daXNhxg&s",
            ],
        },
        {
            id: "6",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Luxury flat in Mirpur...",
            rentAmount: 12000,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water", "gas", "internet"],
            bedrooms: 4,
            bathrooms: 3,
            availableFrom: "December",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Mirpur",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5zYB7npcLT3cDV_MnsvgJsvWQdOrASOEdg&s",
            ],
        },
        {
            id: "7",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Flat in Dhanmondi...",
            rentAmount: 8700,
            rentCurrency: "BDT",
            rentIncludes: ["electricity"],
            bedrooms: 2,
            bathrooms: 1,
            availableFrom: "November",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Dhanmondi",
            images: [
                "https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg",
            ],
        },
        {
            id: "8",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Cozy flat in Gulshan...",
            rentAmount: 11000,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water"],
            bedrooms: 3,
            bathrooms: 2,
            availableFrom: "October",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Gulshan",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5zYB7npcLT3cDV_MnsvgJsvWQdOrASOEdg&s",
            ],
        },
        {
            id: "9",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Flat in Banani...",
            rentAmount: 9800,
            rentCurrency: "BDT",
            rentIncludes: ["water"],
            bedrooms: 2,
            bathrooms: 1,
            availableFrom: "September",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Banani",
            images: [
                "https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg",
            ],
        },
        {
            id: "10",
            title: "TO-LET / রুম ভাড়া হবে ...",
            description: "Spacious flat in Uttara...",
            rentAmount: 10500,
            rentCurrency: "BDT",
            rentIncludes: ["electricity", "water", "gas"],
            bedrooms: 3,
            bathrooms: 2,
            availableFrom: "October",
            division: "Dhaka",
            district: "Dhaka",
            areaThana: "Uttara",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaJ9VTBtuxyYuohtZKgRiTdL_eD8daXNhxg&s",
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Responsive cards per view
    const getCardsPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 1; // mobile
            if (window.innerWidth < 1024) return 2; // tablet
        }
        return 3; // desktop
    };

    const cardsPerView = getCardsPerView();
    const maxIndex = rentListings.length - cardsPerView;

    const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <section className="container py-8">
            <h2 className="text-xl font-bold mb-4">Office </h2>

            <div className="relative">
                {/* Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                    >
                        {rentListings.map((rent) => (
                            <div
                                key={rent.id}
                                className={`flex-shrink-0 w-[calc(100%/${cardsPerView})] px-2`}
                            >
                                <RentCard data={rent} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prev button */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow"
                >
                    <ArrowLeft />
                </Button>

                {/* Next button */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow"
                >
                    <ArrowRight />
                </Button>
            </div>
        </section>
    );
};

export default OfficeRent;