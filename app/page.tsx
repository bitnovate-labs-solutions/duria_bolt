"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ProductCard from "@/components/cards/ProductCard";
import CarouselCard from "@/components/cards/CarouselCard";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { Button } from "@/components/ui/button";
import {
  Star,
  Truck,
  Shield,
  Globe,
  Quote,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import TemporaryLanding from "@/components/TemporaryLanding";
import { config } from "@/lib/config";

const featuredProducts = [
  {
    id: "musang-king-whole",
    title: "Musang King Whole Fruit",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    description:
      "Premium grade Musang King durian, hand-selected for perfect ripeness and authentic flavor.",
    category: "Whole Fruits",
    price: "From $85/kg",
    isNew: true,
  },
  {
    id: "d24-pulp",
    title: "D24 Frozen Pulp",
    image: "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
    description:
      "Convenient frozen D24 pulp, perfect for desserts and culinary creations.",
    category: "Pulps",
    price: "From $28/pack",
  },
  {
    id: "durian-ice-cream",
    title: "Premium Durian Ice Cream",
    image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    description:
      "Artisanal ice cream made with authentic durian pulp for a creamy, indulgent experience.",
    category: "Consumables",
    price: "From $18/tub",
  },
  {
    id: "mooncake-gift-set",
    title: "Durian Mooncake Gift Set",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    description:
      "Luxurious gift set featuring traditional mooncakes filled with premium durian paste.",
    category: "Festive/Gifting",
    price: "From $68/set",
  },
];

// WHY CHOOSE DURIA? -----------------------------------------------------------------------------
const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "We craft premium durian products using only the finest, hand-selected durian fruits",
  },
  {
    icon: Award,
    title: "Halal Certified",
    description:
      "All our offerings are halal certified and comply with the highest international food safety standards",
  },
  {
    icon: CheckCircle,
    title: "HACCP Certified",
    description:
      "Our production follows strict HACCP guidelines to ensure safety and quality at every step",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description:
      "Enjoy fast, reliable delivery worldwide with temperature-controlled logistics for freshness guaranteed",
  },
  {
    icon: TrendingUp,
    title: "Expertise You Can Trust",
    description:
      "With decades of experience, we bring you authentic durian products backed by deep knowledge and exceptional service",
  },
];

const reviews = [
  {
    name: "Sarah Chen",
    location: "Singapore",
    rating: 5,
    title: "Exceptional Quality",
    review:
      "The Musang King durian I received was absolutely perfect. The texture was creamy, the flavor was rich and complex, and the delivery was impeccable. Will definitely order again!",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
  },
  {
    name: "Michael Wong",
    location: "Hong Kong",
    rating: 5,
    title: "Best Durian Experience",
    review:
      "As a durian connoisseur, I've tried many suppliers, but Duria stands out for their consistent quality and authentic taste. The D24 pulp is exactly like what I remember from Malaysia.",
    avatar:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    name: "Lisa Tan",
    location: "Australia",
    rating: 5,
    title: "Amazing Service",
    review:
      "The customer service is outstanding, and the durian ice cream is to die for! Perfect for introducing friends to durian. The packaging kept everything fresh during shipping.",
    avatar:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
  {
    name: "David Lim",
    location: "United States",
    rating: 5,
    title: "Authentic Taste",
    review:
      "Finally found durian that tastes like the real thing! The whole fruit was perfectly ripe and the flavor was incredible. Worth every penny for the premium quality.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Emma Rodriguez",
    location: "United Kingdom",
    rating: 5,
    title: "Perfect Gift",
    review:
      "Ordered the mooncake gift set for my parents and they were blown away. The durian filling was authentic and the presentation was beautiful. Highly recommend!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Ahmed Hassan",
    location: "UAE",
    rating: 5,
    title: "Outstanding Quality",
    review:
      "The frozen pulp arrived in perfect condition despite the long journey. The taste is exactly like fresh durian. Great for making desserts and smoothies.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];

export default function Home() {
  // Show temporary landing page if configured
  if (config.showTemporaryLanding) {
    return <TemporaryLanding />;
  }

  // Show main website content
  return (
    <div className="min-h-screen">
      {/* HERO SECTION ----------------------------------------------------------------------------- */}
      <Hero />

      {/* WHY CHOOSE DURIA SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Duria?
            </h2>
            {/* REMOVED BASED ON SITEMAP GIVEN  */}
            {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're committed to delivering the finest durian experience through
              quality, authenticity, and exceptional service.
            </p> */}
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center group w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION (REMOVED BASED ON SITEMAP REQUIREMENTS) ----------------------------------------------------------------------------- */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium selection of durian products, from whole
              fruits to gourmet creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* PRODUCTS INNOVATION AND HIGHLIGHTS SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Products Innovation and Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Through strict raw material control, fully automated production
              lines and Spanish & German equipment, we continuously innovate
              products, open up online and offline marketing links, and excel in
              creating popular durian products.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Premium brand, focusing on differentiation, creating a festive
              gift-giving scene, and forming a Musang King durian derivative
              product with unique market competitiveness in terms of quality,
              brand and appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Categories with Carousel */}
            {[
              "3D Musang King Durian Ice Cream",
              "Musang King Durian Snowy Mooncake",
              "Premium Durian Mooncake",
              "Twister Blackthorn Durian Snowy Mooncake",
              "Durian Mochi Series",
              "Musang King Durian Snowy Skin",
              "Frozen Durian Pulp",
              "Frozen Durian Whole Fruit",
              "Musang King Durian Paste",
            ].map((productName, index) => (
              <CarouselCard
                key={index}
                productName={productName}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Story
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in 2005 by Wong Woei Ming with support from Malaysia’s
                Ministry of Agriculture, Duria established the country’s first
                durian collection factory.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Since 2008, it doubled processed durian exports to Singapore and
                pioneered Malaysian durian entry into Hong Kong in 2009,
                boosting Musang King’s popularity.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Between 2010 and 2011, Duria was the first to enter Mainland
                China’s market in large volumes after Premier Wen Jiabao
                advocated for durian trade.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                From 2012 onwards, the company expanded domestically and
                internationally, supplying Malaysian supermarkets and exporting
                to China, Singapore, Australia, New Zealand, the UK, and the US,
                continuously strengthening Malaysia’s durian industry.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/about/about_1.jpg"
                alt="Durian farm and cultivation"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (REMOVED BASED ON SITEMAP REQUIREMENTS)   ----------------------------------------------------------------------------- */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what durian enthusiasts
              worldwide have to say about their Duria experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-black">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                <h5 className="font-semibold text-lg text-black mb-3">
                  {review.title}
                </h5>

                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-black font-semibold ml-2">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* NEWSLETTER SECTION (REMOVED BASED ON SITEMAP REQUIREMENTS)   ----------------------------------------------------------------------------- */}
      {/* <NewsletterForm /> */}
    </div>
  );
}
