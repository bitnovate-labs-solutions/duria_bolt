import ProductCard from '@/components/cards/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTab } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const products = {
  'whole-fruits': [
    {
      id: 'musang-king-whole',
      title: 'Musang King Whole Fruit',
      image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
      description: 'Premium grade Musang King durian, hand-selected for perfect ripeness.',
      category: 'Whole Fruits',
      price: 'From $85/kg',
      isNew: true
    },
    {
      id: 'd24-whole',
      title: 'D24 Whole Fruit',
      image: 'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
      description: 'Traditional D24 variety known for its creamy texture and balanced flavor.',
      category: 'Whole Fruits',
      price: 'From $45/kg'
    },
    {
      id: 'tekka-whole',
      title: 'Tekka Whole Fruit',
      image: 'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg',
      description: 'Sweet and mild Tekka durian, perfect for first-time durian tasters.',
      category: 'Whole Fruits',
      price: 'From $38/kg'
    }
  ],
  'pulps': [
    {
      id: 'musang-king-pulp',
      title: 'Musang King Frozen Pulp',
      image: 'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
      description: 'Pure Musang King pulp, flash-frozen to preserve authentic flavor.',
      category: 'Pulps',
      price: 'From $35/pack'
    },
    {
      id: 'd24-pulp',
      title: 'D24 Frozen Pulp',
      image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
      description: 'Convenient D24 pulp perfect for desserts and cooking.',
      category: 'Pulps',
      price: 'From $28/pack'
    }
  ],
  'consumables': [
    {
      id: 'durian-ice-cream',
      title: 'Premium Durian Ice Cream',
      image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      description: 'Artisanal ice cream made with authentic durian pulp.',
      category: 'Consumables',
      price: 'From $18/tub'
    },
    {
      id: 'durian-mochi',
      title: 'Durian Mochi Set',
      image: 'https://images.pexels.com/photos/7251821/pexels-photo-7251821.jpeg',
      description: 'Traditional Japanese mochi filled with premium durian cream.',
      category: 'Consumables',
      price: 'From $24/box'
    },
    {
      id: 'durian-cake',
      title: 'Durian Layer Cake',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
      description: 'Decadent layered cake infused with rich durian flavor.',
      category: 'Consumables',
      price: 'From $48/cake'
    }
  ],
  'festive': [
    {
      id: 'mooncake-gift-set',
      title: 'Durian Mooncake Gift Set',
      image: 'https://images.pexels.com/photos/7251821/pexels-photo-7251821.jpeg',
      description: 'Luxurious gift set featuring traditional mooncakes with durian filling.',
      category: 'Festive/Gifting',
      price: 'From $68/set',
      isNew: true
    },
    {
      id: 'premium-gift-box',
      title: 'Premium Durian Gift Box',
      image: 'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg',
      description: 'Elegant gift box containing assorted durian products.',
      category: 'Festive/Gifting',
      price: 'From $128/box'
    }
  ],
  'party': [
    {
      id: 'durian-party-package',
      title: 'Durian Tasting Party Package',
      image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
      description: 'Complete party package with multiple durian varieties and accessories.',
      category: 'Durian Party',
      price: 'From $280/package'
    }
  ]
};

const categories = [
  { id: 'all', name: 'All Products', count: Object.values(products).flat().length },
  { id: 'whole-fruits', name: 'Whole Fruits', count: products['whole-fruits'].length },
  { id: 'pulps', name: 'Pulps', count: products.pulps.length },
  { id: 'consumables', name: 'Consumables', count: products.consumables.length },
  { id: 'festive', name: 'Festive/Gifting', count: products.festive.length },
  { id: 'party', name: 'Durian Party', count: products.party.length }
];

export default function Shop() {
  const allProducts = Object.values(products).flat();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of durian products, from fresh whole fruits 
            to gourmet creations crafted with authentic flavors.
          </p>
        </div>

        {/* Phase 2 Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Phase 2</Badge>
            <span className="text-amber-800 font-medium">Product Education & Recipes Coming Soon</span>
          </div>
          <p className="text-amber-700 text-sm mt-2">
            We're working on detailed educational content about each durian variety and delicious recipes 
            to help you make the most of our products.
          </p>
        </div>

        {/* Product Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTab key={category.id} value={category.id} className="text-xs sm:text-sm">
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTab>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="whole-fruits">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products['whole-fruits'].map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pulps">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.pulps.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consumables">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.consumables.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="festive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.festive.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="party">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.party.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}