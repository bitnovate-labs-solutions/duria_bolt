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
          logo: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
    locations: ['UAE', 'Saudi Arabia'],
    website: '#',
    description: 'Premium food distributor serving the Middle East region'
  }
];

export default function WhereToBuy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Where to Buy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find Duria products at these trusted retailers worldwide, 
              or host your own durian party with our catering service.
            </p>
          </div>

          {/* Resellers Section */}
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Our Retail Partners
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resellers.map((reseller) => (
              <Card key={reseller.name} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col shadow-lg">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="aspect-video overflow-hidden rounded-xl mb-6">
                    <img
                      src={reseller.logo}
                      alt={reseller.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-black">{reseller.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{reseller.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {reseller.locations.map((location) => (
                      <Badge key={location} variant="secondary" className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={reseller.website}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mt-auto"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Maps Placeholder */}
          <Card className="mb-12 rounded-2xl shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center rounded-2xl">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Interactive Store Locator
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Google Maps integration will be added to help you find the nearest retailer
                  </p>
                  <Badge className="mt-6 bg-primary text-black font-semibold rounded-full px-4 py-2">Phase 2 Feature</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Durian Party Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Host a Durian Party
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create an unforgettable experience for your guests with our curated durian party packages. 
              Perfect for celebrations, corporate events, or introducing friends to the king of fruits!
            </p>
          </div>

          <DurianPartyForm />

          {/* Party Package Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-black">Custom Packages</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Tailored party packages based on your guest count and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-black">Expert Guidance</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our team provides tasting guidance and educational content
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-black">Full Service</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Complete setup, delivery, and cleanup service available
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        </div>
      </section>
    </div>
  );
}