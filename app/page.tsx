import Hero from '@/components/sections/Hero';
import ProductCard from '@/components/cards/ProductCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { Button } from '@/components/ui/button';
import { Star, Truck, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 'musang-king-whole',
    title: 'Musang King Whole Fruit',
    image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
    description: 'Premium grade Musang King durian, hand-selected for perfect ripeness and authentic flavor.',
    category: 'Whole Fruits',
    price: 'From $85/kg',
    isNew: true
  },
  {
    id: 'd24-pulp',
    title: 'D24 Frozen Pulp',
    image: 'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
    description: 'Convenient frozen D24 pulp, perfect for desserts and culinary creations.',
    category: 'Pulps',
    price: 'From $28/pack'
  },
  {
    id: 'durian-ice-cream',
    title: 'Premium Durian Ice Cream',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
    description: 'Artisanal ice cream made with authentic durian pulp for a creamy, indulgent experience.',
    category: 'Consumables',
    price: 'From $18/tub'
  },
  {
    id: 'mooncake-gift-set',
    title: 'Durian Mooncake Gift Set',
    image: 'https://images.pexels.com/photos/7251821/pexels-photo-7251821.jpeg',
    description: 'Luxurious gift set featuring traditional mooncakes filled with premium durian paste.',
    category: 'Festive/Gifting',
    price: 'From $68/set'
  }
];

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Hand-selected durians from the finest orchards in Southeast Asia'
  },
  {
    icon: Shield,
    title: 'Halal Certified',
    description: 'All our products are halal certified and meet international food safety standards'
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Fast and reliable delivery to countries worldwide with temperature-controlled logistics'
  },
  {
    icon: Globe,
    title: 'Expert Knowledge',
    description: 'Decades of experience in durian cultivation, processing, and export'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Duria?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the finest durian experience through quality, 
              authenticity, and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of durian products, from whole fruits to gourmet creations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a passion for sharing the extraordinary taste of premium durians, 
                Duria has grown from a local farm to an international export company. 
                We work directly with experienced growers across Southeast Asia to bring you 
                the finest quality durians.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every durian we export is carefully selected, tested for quality, and 
                handled with the utmost care to preserve its authentic flavor and texture.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg"
                alt="Durian farm and cultivation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <NewsletterForm />
    </div>
  );
}