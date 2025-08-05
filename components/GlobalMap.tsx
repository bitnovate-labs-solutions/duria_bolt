'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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
    id: 'singapore',
    name: 'Duria Singapore Hub',
    address: '123 Orchard Road, #05-01, Singapore 238859',
    phone: '+65 6123 4567',
    email: 'singapore@duria.com',
    x: 87,
    y: 68,
    region: 'Singapore'
  },
  {
    id: 'malaysia',
    name: 'Duria Malaysia Headquarters',
    address: '456 Jalan Sultan Ismail, Kuala Lumpur 50250, Malaysia',
    phone: '+60 3 2142 3456',
    email: 'malaysia@duria.com',
    x: 85,
    y: 65,
    region: 'Malaysia'
  },
  {
    id: 'china',
    name: 'Duria China Distribution Center',
    address: '789 Nanjing Road, Shanghai 200001, China',
    phone: '+86 21 5888 1234',
    email: 'china@duria.com',
    x: 88,
    y: 48,
    region: 'China'
  },
  {
    id: 'japan',
    name: 'Duria Japan Office',
    address: '101 Ginza 4-chome, Tokyo 104-0061, Japan',
    phone: '+81 3 3567 8901',
    email: 'japan@duria.com',
    x: 92,
    y: 42,
    region: 'Japan'
  },
  {
    id: 'australia',
    name: 'Duria Australia Branch',
    address: '202 Collins Street, Melbourne VIC 3000, Australia',
    phone: '+61 3 9876 5432',
    email: 'australia@duria.com',
    x: 90,
    y: 78,
    region: 'Australia'
  },
  {
    id: 'usa',
    name: 'Duria USA West Coast',
    address: '303 Market Street, San Francisco, CA 94105, USA',
    phone: '+1 415 555 0123',
    email: 'usa@duria.com',
    x: 18,
    y: 48,
    region: 'United States'
  },
  {
    id: 'uk',
    name: 'Duria UK European Hub',
    address: '404 Oxford Street, London W1C 1AP, United Kingdom',
    phone: '+44 20 7946 0958',
    email: 'uk@duria.com',
    x: 48,
    y: 38,
    region: 'United Kingdom'
  }
];

export default function GlobalMap() {
  const [hoveredLocation, setHoveredLocation] = useState<BusinessLocation | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<BusinessLocation | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Map Container */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        {/* World Map Background */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden">
          {/* World Map Image */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
            alt="World Map"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a simple world map if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Fallback world map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 opacity-90"></div>
          
          {/* Location Points */}
          {businessLocations.map((location) => (
            <div
              key={location.id}
              className="absolute cursor-pointer group z-10"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredLocation(location)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => setSelectedLocation(location)}
            >
              {/* Location marker image */}
              <div className="relative w-8 h-8 group-hover:scale-125 transition-transform duration-200">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt="Location marker"
                  className="w-full h-full object-contain drop-shadow-lg"
                  onError={(e) => {
                    // Fallback to a simple pin icon if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback pin icon */}
                <div className="hidden w-full h-full bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Hover tooltip */}
              {hoveredLocation?.id === location.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg shadow-xl whitespace-nowrap z-20">
                  <div className="font-semibold">{location.name}</div>
                  <div className="text-xs opacity-90">{location.region}</div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">{selectedLocation.name}</h3>
              <p className="text-gray-600 font-medium">{selectedLocation.region}</p>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
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
                <p className="text-gray-600">{selectedLocation.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">{selectedLocation.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Hover over or click the location markers to view our business locations worldwide
        </p>
      </div>
    </div>
  );
} 