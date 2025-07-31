import DurianPartyForm from '@/components/forms/DurianPartyForm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';

const resellers = [
  {
    name: 'Fresh Market Singapore',
    logo: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg',
    locations: ['Singapore', 'Malaysia'],
    website: '#',
    description: 'Premium grocery chain specializing in fresh Asian produce'
  },
  {
    name: 'Golden Dragon Foods',
    logo: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
    locations: ['Hong Kong', 'China'],
    website: '#',
    description: 'Leading distributor of Southeast Asian specialty foods'
  },
  {
    name: 'Asia Gourmet Market',
    logo: 'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg',
    locations: ['Australia', 'New Zealand'],
    website: '#',
    description: 'Boutique Asian food market with premium selections'
  },
  {
    name: 'Tropical Delights Store',
    logo: 'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
    locations: ['United States', 'Canada'],
    website: '#',
    description: 'Specialty store for tropical fruits and delicacies'
  },
  {
    name: 'Euro Asian Market',
    logo: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
    locations: ['United Kingdom', 'Germany', 'Netherlands'],
    website: '#',
    description: 'European distributor of authentic Asian products'
  },
  {
    name: 'Middle East Gourmet',
    logo: 'https://images.pexels.com/photos/7251821/pexels-photo-7251821.jpeg',
    locations: ['UAE', 'Saudi Arabia'],
    website: '#',
    description: 'Premium food distributor serving the Middle East region'
  }
];

export default function WhereToBuy() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where to Buy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find Duria products at these trusted retailers worldwide, 
            or host your own durian party with our catering service.
          </p>
        </div>

        {/* Resellers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Retail Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resellers.map((reseller) => (
              <Card key={reseller.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={reseller.logo}
                      alt={reseller.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{reseller.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{reseller.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {reseller.locations.map((location) => (
                      <Badge key={location} variant="secondary" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={reseller.website}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Maps Placeholder */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Interactive Store Locator
                  </h3>
                  <p className="text-gray-500">
                    Google Maps integration will be added to help you find the nearest retailer
                  </p>
                  <Badge className="mt-4 bg-blue-100 text-blue-800">Phase 2 Feature</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Durian Party Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Host a Durian Party
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create an unforgettable experience for your guests with our curated durian party packages. 
              Perfect for celebrations, corporate events, or introducing friends to the king of fruits!
            </p>
          </div>

          <DurianPartyForm />

          {/* Party Package Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Custom Packages</h3>
                <p className="text-gray-600 text-sm">
                  Tailored party packages based on your guest count and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Our team provides tasting guidance and educational content
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Full Service</h3>
                <p className="text-gray-600 text-sm">
                  Complete setup, delivery, and cleanup service available
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}