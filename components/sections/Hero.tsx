"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Assets
import HeroImage from "@/public/mochi/mochi-set-optimized.jpg";
import Duria from "@/public/duria-logo-white.png";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
        )}

        <Image
          src={HeroImage}
          alt="Premium durian fruits"
          fill
          priority
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-8">
        {/* <div className="flex items-center justify-center space-x-2 mb-6">
          <Crown className="w-8 h-8 text-primary" />
          <span className="text-primary font-medium">The King of Fruits</span>
        </div> */}

        <div className="flex justify-center mb-6">
          <Image
            src={Duria}
            alt="Premium durian fruits"
            priority
            width={250}
            height={250}
            quality={100}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
        {/* 
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-primary">Export Excellence</span>
        </h1> */}

        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-tight capitalize font-semibold px-4">
          Excellence in Premium Durian
        </p>

        <div className="flex items-center justify-center mb-8 w-full max-w-4xl mx-auto px-4">
          <div className="w-16 md:w-32 h-[1px] border border-yellow-400"></div>
          <h1 className="text-base md:text-lg lg:text-xl font-light leading-tight px-4 md:px-8 text-center">
            <span className="text-primary">
              Delivering High-Quality Products for Export
            </span>
          </h1>
          <div className="w-16 md:w-32 h-[1px] border border-yellow-400"></div>
        </div>

        <p className="text-lg md:text-xl lg:text-2lg mb-8 text-gray-100 max-w-2xl mx-auto leading-tight font-medium px-4">
          Expert in producing and distributing premium durian products across
          Southeast Asia, delivering the finest quality, freshness, and
          authentic taste to satisfy discerning customers region-wide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-2/3 sm:w-auto bg-primary hover:bg-primary/90 text-black px-8 py-4 text-lg"
            >
              Explore Products
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-2/3 sm:w-auto text-yellow-500 hover:bg-primary hover:text-black px-8 py-4 text-lg"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2 text-gray-300">Scroll to discover</p>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center mx-auto">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
