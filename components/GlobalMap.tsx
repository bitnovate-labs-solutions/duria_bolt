"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

interface BusinessLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  x: number; // percentage from left
  y: number; // percentage from top
  region: string;
}

const businessLocations: BusinessLocation[] = [
  {
    id: "singapore",
    name: "Duria Trading Pte Ltd",
    address:
      "3791 Jalan Bukit Merah, #10-18 E-Centre @ Redhill, Singapore 159471",
    phone: "",
    email: "",
    x: 35,
    y: 48,
    region: "Singapore",
  },
  {
    id: "china",
    name: "Just Duria Foods Trading (Guangzhou) Co. Ltd",
    address:
      "No 3, Room 815, Junya North Street, Huangpu District, Guangzhou, China",
    phone: "020-31605642",
    email: "",
    x: 45,
    y: 34,
    region: "China",
  },
  {
    id: "hongkong",
    name: "Cougar Hong Kong Ltd",
    address:
      "Flat A-B, 11/F, Tsuen Wan Industrial Building, 59-71, Wang Lung St., Tsuen Wan, Hong Kong",
    phone: "23456263",
    email: "",
    x: 48,
    y: 35,
    region: "Hong Kong",
  },
  {
    id: "australia",
    name: "Duria Sydney Pty Ltd",
    address: "87 - 107 Epsom Rd, Rosebery NSW 2018, Australia",
    phone: "0405383999",
    email: "",
    x: 60,
    y: 80,
    region: "Australia",
  },
  {
    id: "newzealand",
    name: "DAILY FOODS CO. LTD",
    address: "8 Ron Driver Place, East Tamaki, Auckland, New Zealand 2013",
    phone: "0064-9-5793888",
    email: "",
    x: 70,
    y: 93,
    region: "New Zealand",
  },
];

export default function GlobalMap() {
  const [hoveredLocation, setHoveredLocation] =
    useState<BusinessLocation | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<BusinessLocation | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Responsive coordinates based on screen size
  const getResponsiveCoordinates = (location: BusinessLocation) => {
    if (isMobile) {
      // Mobile coordinates (adjusted for 200% zoom level)
      const mobileCoordinates: { [key: string]: { x: number; y: number } } = {
        singapore: { x: 35, y: 48 },
        china: { x: 45, y: 34 },
        hongkong: { x: 48, y: 35 },
        australia: { x: 60, y: 80 },
        newzealand: { x: 70, y: 93 },
      };
      return mobileCoordinates[location.id] || { x: location.x, y: location.y };
    }

    // Desktop coordinates
    return { x: location.x, y: location.y };
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-4">
      {/* Map Container */}
      <div className="relative bg-white rounded-2xl p-2 md:p-2 shadow-xl overflow-hidden">
        {/* World Map Background */}
        <div className="relative w-full h-[500px] md:h-[700px] rounded-xl">
          {/* World Map Image */}
          <Image
            src="/world_map_2.png"
            alt="World Map"
            fill
            className="object-contain md:object-contain object-scale-200 md:object-scale-100 opacity-100"
            onError={(e) => {
              // Fallback to a simple world map if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Fallback world map background */}
          <div className="absolute inset-0 bg-white opacity-0"></div>

          {/* Location Points */}
          {businessLocations.map((location) => {
            const coords = getResponsiveCoordinates(location);
            const isHovered = hoveredLocation?.id === location.id;
            return (
              <div
                key={location.id}
                className={`absolute cursor-pointer group ${
                  isHovered ? "z-50" : "z-10"
                }`}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => setSelectedLocation(location)}
              >
                {/* Location marker image */}
                <div className="relative w-8 h-8 group-hover:scale-125 transition-transform duration-200">
                  <Image
                    src="/duria_icon.png"
                    alt="Location marker"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain drop-shadow-lg"
                    onError={(e) => {
                      // Fallback to a simple pin icon if image fails
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                  {/* Fallback pin icon */}
                  <div className="hidden w-full h-full bg-red-500 rounded-full border-2 border-white shadow-lg items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Hover tooltip */}
                {hoveredLocation?.id === location.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-white text-black text-sm rounded-xl shadow-2xl border border-gray-200 whitespace-normal z-[9999] min-w-[280px] max-w-[320px]">
                    <div className="font-bold text-lg mb-2">
                      {location.name}
                    </div>
                    <div className="text-primary font-semibold mb-3">
                      {location.region}
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 text-xs">
                            Address
                          </p>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {location.address}
                          </p>
                        </div>
                      </div>

                      {location.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900 text-xs">
                              Email
                            </p>
                            <p className="text-gray-600 text-xs">
                              {location.email}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="mt-2 lg:mt-0 bg-white rounded-2xl shadow-xl p-8 h-auto md:h-[720px] flex flex-col relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-black mb-2 mt-6 md:mt-10 text-center">
                {selectedLocation.name}
              </h3>
              <p className="text-gray-600 font-medium">
                {selectedLocation.region}
              </p>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 flex-1">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">{selectedLocation.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">
                  {selectedLocation.phone || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">
                  {selectedLocation.email || "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!selectedLocation && (
        <div className="text-center h-full lg:flex lg:items-center lg:px-10 lg:text-center">
          <p className="text-gray-600 text-sm">
            Hover over or click the location markers to view our business
            locations worldwide
          </p>
        </div>
      )}
    </div>
  );
}
