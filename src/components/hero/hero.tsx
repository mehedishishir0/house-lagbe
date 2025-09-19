"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/houserent1.jpg",
  "/houserent2.jpg",
  "/houserent3.jpg",
  "/houserent4.jpg",
];

const Hero = () => {
  return (
    <div className="relative w-full ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="relative h-[650px]">
              <Image
                width={1920}
                height={1080}
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />

              {/* Beautiful Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                  Find Your Dream House for Rent
                </h1>
                <p className="mt-4 text-white/80 text-lg md:text-2xl drop-shadow-md max-w-xl">
                  Browse the best houses and apartments for rent in your city. 
                  Find the perfect home that fits your lifestyle.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
