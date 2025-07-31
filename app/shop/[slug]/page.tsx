import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTab } from '@/components/ui/tabs';
import { Star, Shield, Truck, Heart, Package } from 'lucide-react';
import Link from 'next/link';

// Mock product data - in a real app, this would come from a database
const productData: { [key: string]: any } = {
  'musang-king-whole': {
    title: 'Musang King Whole Fruit',
    category: 'Whole Fruits',
    price: 'From $85/kg',
    images: [
      'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
      'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
      'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg'
    ],
    description: 'The crown jewel of durians, Musang King is renowned for its rich, creamy texture and intense flavor profile. Hand-selected from premium orchards in Malaysia, each fruit is carefully inspected to ensure perfect ripeness and quality.',
    features: [
      'Premium grade A+ quality',
      'Hand-selected for perfect ripeness',
      'Distinctive bitter-sweet flavor profile',
      'Creamy, custard-like texture',
      'Vacuum-sealed for freshness'
    ],
    nutritional: {
      energy: '147 kcal per 100g',
      protein: '1.5g',
      carbs: '27.1g',
      fiber: '3.8g',
      fat: '5.3g',
      vitaminC: '19.7mg'
    },
    packaging: {
      sizes: ['1kg', '2kg', '5kg'],
      shelf_life: '3-5 days at room temperature',
      storage: 'Store in cool, dry place',
      shipping: 'Express delivery with temperature control'
    },
    benefits: [
      'Rich in antioxidants and vitamin C',
      'Natural source of healthy fats',
      'Boosts energy and metabolism',
      'Contains potassium for heart health'
    ],
    uniqueTraits: [
      'Distinctive star-shaped bottom',
      'Thick, golden flesh segments',
      'Intense aromatic fragrance',
      'Premium Malaysian origin'
    ]
  },
  'durian-ice-cream': {
    title: 'Premium Durian Ice Cream',
    category: 'Consumables',
    price: 'From $18/tub',
    images: [
      'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
      'https://images.pexels.com/photos/7251821/pexels-photo-7251821.jpeg'
    ],
    description: 'Artisanal ice cream crafted with authentic Musang King durian pulp. Our premium ice cream delivers the full durian experience in a creamy, frozen dessert that\'s perfect for sharing or enjoying as a luxurious treat.',
    features: [
      'Made with 100% authentic durian pulp',
      'No artificial flavors or preservatives',
      'Artisanal small-batch production',
      'Creamy, smooth texture',
      'Premium packaging for gifting'
    ],
    nutritional: {
      energy: '210 kcal per 100g',
      protein: '4.2g',
      carbs: '22.5g',
      fiber: '1.2g',
      fat: '12.8g',
      sugar: '18.3g'
    },
    packaging: {
      sizes: ['500ml', '1L', '2L'],
      shelf_life: '12 months frozen',
      storage: 'Keep frozen at -18°C',
      shipping: 'Dry ice shipping available'
    },
    benefits: [
      'Rich, authentic durian flavor',
      'Perfect dessert for durian lovers',
      'Great for special occasions',
      'Shareable family size options'
    ],
    uniqueTraits: [
      'Artisanal handcrafted quality',
      'Premium Musang King pulp base',
      'Smooth, non-icy texture',
      'Elegant packaging design'
    ]
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-amber-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image: string, index: number) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${product.title} ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(4.9/5 based on 127 reviews)</span>
            </div>
            <p className="text-2xl font-bold text-amber-600 mb-6">{product.price}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string) => (
                  <li key={feature} className="flex items-center">
                    <Heart className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                Contact for Pricing & Availability
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Package className="w-4 h-4 mr-2" />
                Request Product Sample
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-1 text-green-600" />
                Halal Certified
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-4 h-4 mr-1 text-blue-600" />
                Global Shipping
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 mr-1 text-amber-600" />
                Premium Quality
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="nutrition" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTab value="nutrition">Nutrition</TabsTab>
            <TabsTab value="packaging">Packaging</TabsTab>
            <TabsTab value="benefits">Benefits</TabsTab>
            <TabsTab value="unique">Unique Traits</TabsTab>
          </TabsList>

          <TabsContent value="nutrition" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(product.nutritional).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-amber-600 font-medium">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center mt-6">
                  <img
                    src="https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg"
                    alt="Halal certification logo"
                    className="h-16 w-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packaging" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Packaging & Storage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Available Sizes</h4>
                    <div className="space-y-2">
                      {product.packaging.sizes.map((size: string) => (
                        <Badge key={size} variant="outline">{size}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Storage Information</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><strong>Shelf Life:</strong> {product.packaging.shelf_life}</li>
                      <li><strong>Storage:</strong> {product.packaging.storage}</li>
                      <li><strong>Shipping:</strong> {product.packaging.shipping}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Health Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit: string) => (
                    <div key={benefit} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unique" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">What Makes This Special</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.uniqueTraits.map((trait: string) => (
                    <div key={trait} className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg">
                      <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{trait}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Phase 2 Recipe Section */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-8 text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Coming in Phase 2</Badge>
            <h3 className="text-2xl font-bold mb-4">Recipe Videos & Ideas</h3>
            <p className="text-gray-600 mb-6">
              We're creating delicious recipe videos and step-by-step guides to help you 
              make the most of our premium durian products. Stay tuned for creative dessert 
              ideas and cooking techniques!
            </p>
            <Button variant="outline">
              Subscribe for Recipe Updates
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}