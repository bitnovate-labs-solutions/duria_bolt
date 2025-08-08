"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Star, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Duria from "@/public/duria-logo-white.png";
import HeroImage from "@/public/mochi/mochi-set-optimized.jpg";

export default function TemporaryLanding() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen bg-black flex flex-col">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
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
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>
      {/* Header */}
      {/* <div className="bg-black text-white py-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
          <p className="text-lg text-gray-400">
            Sales champion for 12 consecutive years
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 flex-1 w-full">
        {/* Hero Section */}
        <div className=" text-white py-20 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
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
            <p className="text-lg text-gray-400">
              Sales champion for 12 consecutive years
            </p>
          </div>
        </div>

        {/* COMING SOON */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gray-900 text-yellow-400 border border-gray-700 px-6 py-3 rounded-lg text-sm font-medium mb-8 mt-8">
            <Star className="w-4 h-4 mr-2" />
            Coming Soon - Premium Durian Experience
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Website Under Construction
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We are currently upgrading our website to make it an exceptional
            website experience for you. <br />
            Our team is working hard to bring you the finest quality durian
            products from Malaysia with world-class service.
            <br />
            Thank you for your patience.
          </p>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            If you have any enquiries, please reach out to +6011 1091 4393
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div> */}
        </div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Premium Quality
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Hand-selected durians from the finest orchards in Southeast Asia,
              ensuring exceptional taste and quality.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Global Shipping
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Fast and reliable delivery worldwide with temperature-controlled
              logistics to preserve freshness.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Certified Quality
            </h3>
            <p className="text-gray-400 leading-relaxed">
              All products are halal certified and meet international food
              safety standards.
            </p>
          </div>
        </div> */}

        {/* Product Preview */}
        {/* <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What We'll Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🥭</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Whole Durian Fruits
                </h4>
                <p className="text-gray-400 text-sm">
                  Premium Musang King, D24, and other varieties
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍦</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Durian Products
                </h4>
                <p className="text-gray-400 text-sm">
                  Frozen pulp, ice cream, and gourmet creations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Gift Sets</h4>
                <p className="text-gray-400 text-sm">
                  Luxurious gift packages and festive collections
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌏</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Global Export</h4>
                <p className="text-gray-400 text-sm">
                  Worldwide shipping with expert logistics
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact Section */}
        {/* <div className="bg-gray-900 text-white rounded-lg p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-white">Stay Updated</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch. Sign up for early access and
            exclusive updates about our premium durian offerings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div> */}
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm text-white py-8 border-t border-gray-800 mt-auto w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Duria Malaysia Sdn Bhd & Duria Manufacturing Sdn Bhd
          </p>
        </div>
      </div>
    </section>
  );
}
