"use client";
import { useState } from "react";
import Image from "next/image";
import TeamCard from "@/components/cards/TeamCard";
import MediaCard from "@/components/cards/MediaCard";
import GlobalMap from "@/components/GlobalMap";
import AnimatedCounter from "@/components/ui/animated-counter";
import { useFadeUp, useTimelineItemFadeUp } from "@/hooks/use-fade-up";
import { Globe, Users, Award, Truck } from "lucide-react";

// OUR LEADERSHIP TEAM DATA ----------------------------------------------
// const teamMembers = [
//   {
//     name: "David Lim",
//     position: "Founder & CEO",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     bio: "With over 20 years in the durian industry, David founded Duria with a vision to share premium durians globally. His expertise in cultivation and export has made the company a trusted name worldwide.",
//   },
//   {
//     name: "Sarah Chen",
//     position: "Head of Quality Assurance",
//     image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
//     bio: "Sarah ensures every durian meets our strict quality standards. Her background in food science and 15 years of experience guarantee the authenticity and safety of our products.",
//   },
//   {
//     name: "Michael Wong",
//     position: "International Sales Director",
//     image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
//     bio: "Michael leads our global expansion efforts, building relationships with distributors and retailers worldwide. His multilingual skills and cultural understanding drive our international success.",
//   },
//   {
//     name: "Lisa Tan",
//     position: "Operations Manager",
//     image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
//     bio: "Lisa oversees our supply chain and logistics operations, ensuring timely and safe delivery of our products. Her operational excellence keeps our global customers satisfied.",
//   },
// ];

const mediaArticles = [
  {
    title: "Duria Exports Premium Fruits to 15 Countries",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    excerpt:
      "Local durian export company reaches new milestone in international expansion, bringing Southeast Asian delicacy to global markets.",
    source: "Food & Beverage News",
    date: "2024-01-15",
    link: "#",
  },
  {
    title: "The Rise of Premium Durian Exports",
    image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    excerpt:
      "Industry report highlights the growing demand for high-quality durians in international markets, featuring Duria as a leading exporter.",
    source: "Asia Trade Magazine",
    date: "2023-12-08",
    link: "#",
  },
  {
    title: "Sustainable Durian Farming Practices",
    image: "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
    excerpt:
      "Duria partners with local farmers to implement sustainable farming practices, ensuring quality while protecting the environment.",
    source: "Green Agriculture Today",
    date: "2023-11-22",
    link: "#",
  },
];

const exportCountries = [
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "China", flag: "🇨🇳" },
  { name: "Hong Kong", flag: "🇭🇰" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "New Zealand", flag: "🇳🇿" },
];

// HERO STATS ----------------------------------------------
const stats = [
  { icon: Globe, number: 10, suffix: "+", label: "Export Countries" },
  { icon: Award, number: 25, suffix: "+", label: "Quality Awards and Accolades" },
  { icon: Truck, number: 100000, suffix: "+", label: "Shipments Delivered" },
];

// ABOUT DURIA TIMELINE DATA ----------------------------------------------
const timelineData = [
  {
    year: "2005",
    title: "Foundation",
    image: "/about/about_1.jpg",
    imageAlt: "Duria team at ribbon-cutting ceremony",
    content:
      "Founded by Wong Woei Ming with support from Malaysia's Ministry of Agriculture, Duria established the country's first durian collection factory, pioneering processed durian exports. This marked the beginning of Malaysia's organized durian export industry. ",
  },
  {
    year: "2008-2011",
    title: "Market Expansion",
    image: "/about/about_2.jpg",
    imageAlt: "Modern food processing facility with Multivac equipment",
    content:
      "Since 2008, Duria doubled exports to Singapore and entered the Hong Kong market in 2009, significantly boosting Musang King's popularity. Between 2010 and 2011, Duria became the first company to export durian to Mainland China in large volumes following Premier Wen Jiabao's endorsement.",
  },
  {
    year: "2012-2015",
    title: "Global Reach",
    image: "/about/about_3.jpg",
    imageAlt: "Food processing facility with conveyor belt system",
    content:
      "The company expanded its reach, supplying Malaysian supermarkets and exporting to China, Singapore, Australia, New Zealand, the UK, and the US. This period significantly strengthened Malaysia's durian industry.",
  },
  {
    year: "2016-2017",
    title: "Innovation & Growth",
    image: "/about/about_4.jpg",
    imageAlt: "Workers operating industrial food processing equipment",
    content:
      "In 2016, Duria was chosen as an Entry Point Project (EPP) under the Northern Corridor Economic Region (NCER) with Perak government support under the Northern Corridor Economic Region (NCER) with Perak government support to further develop the durian sector. With AgroBank support, Duria built Malaysia's first durian pilot project featuring advanced High Pressure Processing (HPP) and Nitrogen Freezing Tunnel technologies. Consequently, the factory was relocated to Kamunting, Perak. In 2017, Duria established a primary processing factory in Pengkalan Hulu through a joint venture with smallholders and collectors. This initiative boosted local economies in Greater Kamunting and Pengkalan Hulu, created jobs, and included CSR programs to support smallholder farmers. It enhanced income for farmers in Pengkalan Hulu, Batu Kurau, and Greater Kamunting, contributing to sustainable rural development.",
  },
];

export default function About() {
  const [activeYear, setActiveYear] = useState(0);
  
  // Fade-up animations for milestone items
  const headerFadeUp = useFadeUp({ threshold: 0.3 });
  
  // Individual timeline item animations
  const timelineItem1 = useTimelineItemFadeUp(0);
  const timelineItem2 = useTimelineItemFadeUp(200);
  const timelineItem3 = useTimelineItemFadeUp(400);
  const timelineItem4 = useTimelineItemFadeUp(600);
  const timelineItem5 = useTimelineItemFadeUp(800);
  
  return (
    <div className="min-h-screen">
      {/* HERO SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
              About Duria
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are passionate about bringing the world's finest durians from
              Southeast Asia to your table, combining traditional expertise with
              modern export excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    delay={index * 200}
                    duration={2500}
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DURIA SECTION ----------------------------------------------------------------------------- */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Story of Duria
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From Malaysia's first durian collection factory to advanced
              processing technologies, we've revolutionized how the world
              experiences premium durian products.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Timeline Navigation */}
            <div className="lg:col-span-1">
              {/* Mobile: Row layout with years only */}
              <div className="lg:hidden flex gap-2 mb-8">
                {[
                  { year: "2005" },
                  { year: "2008" },
                  { year: "2012" },
                  { year: "2016" },
                ].map((item, index) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(index)}
                    className={`flex-1 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      activeYear === index
                        ? "bg-primary text-white shadow-[0_0px_25px_0px_rgba(0,0,0,0.15)]"
                        : "bg-white text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="text-sm font-medium">{item.year}</div>
                  </button>
                ))}
              </div>

              {/* Desktop: Full layout with titles and descriptions */}
              <div className="hidden lg:block space-y-4">
                {[
                  {
                    year: "2005",
                    description:
                      "Established Malaysia's first durian collection factory",
                  },
                  {
                    year: "2008-2011",
                    description:
                      "Entered Singapore, Hong Kong, and China markets",
                  },
                  {
                    year: "2012-2015",
                    description: "Expanded to 6+ countries worldwide",
                  },
                  {
                    year: "2016-2017",
                    description:
                      "Advanced processing technologies and partnerships",
                  },
                ].map((item, index) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeYear === index
                        ? "bg-primary text-white shadow-[0_0px_25px_0px_rgba(0,0,0,0.15)]"
                        : "bg-white text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="text-2xl font-light mb-2">{item.year}</div>
                    <div className="text-sm opacity-75">{item.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white p-2 pt-0 lg:p-8 lg:pt-0 rounded-2xl">
                {/* Image */}
                <div className="relative mb-8">
                  <Image
                    src={timelineData[activeYear].image}
                    alt={timelineData[activeYear].imageAlt}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-medium text-black mb-4">
                    {timelineData[activeYear].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {timelineData[activeYear].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S STORY SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Founder's Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet Wong Woei Ming, the visionary behind Malaysia's durian
              revolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Founded in 2005 by Wong Woei Ming with support from
                    Malaysia's Ministry of Agriculture, Duria established the
                    country's first durian collection factory.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Since 2008, it doubled processed durian exports to Singapore
                    and pioneered Malaysian durian entry into Hong Kong in 2009,
                    boosting Musang King's popularity.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Between 2010 and 2011, Duria was the first to enter Mainland
                    China's market in large volumes after Premier Wen Jiabao
                    advocated for durian trade.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    From 2012 onwards, the company expanded domestically and
                    internationally, supplying Malaysian supermarkets and
                    exporting to China, Singapore, Australia, New Zealand, the
                    UK, and the US, continuously strengthening Malaysia's durian
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LEADERSHIP TEAM (REMOVED BASED ON SITEMAP) */}
      {/* <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals who drive our mission to
              deliver the world's finest durians to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section> */}

      {/* GLOBAL REACH SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Global Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our worldwide network of business locations and
              distribution centers that bring premium durians to customers
              across the globe.
            </p>
          </div>

          {/* Interactive Map */}
          <GlobalMap />

          {/* Export Countries Grid (REMOVED BASED ON SITEMAP) */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              Countries We Export To
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
              {exportCountries.map((country) => (
                <div
                  key={country.name}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <div className="text-sm font-semibold text-black">
                    {country.name}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* MILESTONE TIMELINE SECTION ----------------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerFadeUp.elementRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerFadeUp.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Company Milestone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that shaped Duria's growth from local startup to
              global durian leader
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden md:block"></div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-6 top-0 w-1 bg-primary h-full md:hidden"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2008-2009 */}
              <div 
                ref={timelineItem1.elementRef}
                className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  timelineItem1.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 md:hidden"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">🌏</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">
                          2008-2009
                        </div>
                        <div className="text-primary font-semibold">
                          Market Entry
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Duria products successfully entered the Singapore and Hong
                      Kong markets, establishing our first international
                      presence and building the foundation for global expansion.
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>

              {/* 2012 */}
              <div 
                ref={timelineItem2.elementRef}
                className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  timelineItem2.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 md:hidden"></div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">🥮</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">
                          2012
                        </div>
                        <div className="text-primary font-semibold">
                          China Market Launch
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Launch of Durian Mooncake into the China market,
                      introducing traditional Chinese consumers to the unique
                      taste of premium durian products during festive seasons.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div 
                ref={timelineItem3.elementRef}
                className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  timelineItem3.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 md:hidden"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">🏆</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">
                          2015
                        </div>
                        <div className="text-primary font-semibold">
                          EPP Recognition
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Duria selected as EPP (Entry Point Project) under the
                      Northern Corridor Economic Region, recognizing our
                      contribution to Malaysia's economic development and durian
                      industry growth.
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>

              {/* 2018 */}
              <div 
                ref={timelineItem4.elementRef}
                className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  timelineItem4.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 md:hidden"></div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">📦</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">
                          2018
                        </div>
                        <div className="text-primary font-semibold">
                          Alibaba Partnership
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Historic order of 1 million durian mooncakes by Alibaba,
                      marking a major milestone in e-commerce partnerships and
                      demonstrating the global demand for our premium products.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div 
                ref={timelineItem5.elementRef}
                className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  timelineItem5.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 md:hidden"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-12 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">🍦</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">
                          2022
                        </div>
                        <div className="text-primary font-semibold">
                          Innovation Launch
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Launch of Musang King durian ice cream, expanding our
                      product portfolio with innovative frozen desserts that
                      bring the premium durian experience to new markets.
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA & PRESS (TEMPORARILY HIDDEN OUT) ----------------------------------------------------------------------------- */}
      {/* <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Media & Press
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See what the industry is saying about Duria and our commitment to
              quality and innovation in durian exports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaArticles.map((article, index) => (
              <MediaCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
