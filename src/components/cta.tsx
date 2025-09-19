"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
    return (
        <section className="bg-gradient-to-br from-black to-blue-950 text-white py-12 rounded-2xl shadow-lg container mx-auto my-10 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
                Find Your Perfect Home with House Lagbe
            </h2>
            <p className="mb-6 text-lg text-gray-100">
                Browse thousands of rental listings and discover a place that truly feels like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
                >
                    Browse Houses
                </Button>
                <Button
                    size="lg"
                    variant="secondary"
                    className="bg-transparent border border-white text-white hover:bg-white/20"
                >
                    Post Your Property
                </Button>
            </div>
        </section>
    );
};

export default CTA;
