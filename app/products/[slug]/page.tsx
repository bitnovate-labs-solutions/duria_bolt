import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Shield, Truck, Heart, Package } from "lucide-react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

// Mock product data - in a real app, this would come from a database
const productData: { [key: string]: any } = {
  "musang-king-whole": {
    title: "Musang King Whole Fruit",
    category: "Whole Fruits",
    price: "From RM85/kg",
    images: [
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "The crown jewel of durians, Musang King is renowned for its rich, creamy texture and intense flavor profile. Hand-selected from premium orchards in Malaysia, each fruit is carefully inspected to ensure perfect ripeness and quality.",
    features: [
      "Premium grade A+ quality",
      "Hand-selected for perfect ripeness",
      "Distinctive bitter-sweet flavor profile",
      "Creamy, custard-like texture",
      "Vacuum-sealed for freshness",
    ],
    nutritional: {
      energy: "147 kcal per 100g",
      protein: "1.5g",
      carbs: "27.1g",
      fiber: "3.8g",
      fat: "5.3g",
      vitaminC: "19.7mg",
    },
    packaging: {
      sizes: ["1kg", "2kg", "5kg"],
      shelf_life: "3-5 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Express delivery with temperature control",
    },
    benefits: [
      "Rich in antioxidants and vitamin C",
      "Natural source of healthy fats",
      "Boosts energy and metabolism",
      "Contains potassium for heart health",
    ],
    uniqueTraits: [
      "Distinctive star-shaped bottom",
      "Thick, golden flesh segments",
      "Intense aromatic fragrance",
      "Premium Malaysian origin",
    ],
  },
  "d24-whole": {
    title: "D24 Whole Fruit",
    category: "Whole Fruits",
    price: "From RM45/kg",
    images: [
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "Traditional D24 variety known for its creamy texture and balanced flavor. This classic durian offers a perfect harmony of sweetness and creaminess that appeals to both newcomers and durian enthusiasts.",
    features: [
      "Traditional D24 variety",
      "Creamy, balanced texture",
      "Perfect ripeness guarantee",
      "Classic durian flavor profile",
      "Carefully selected quality",
    ],
    nutritional: {
      energy: "147 kcal per 100g",
      protein: "1.5g",
      carbs: "27.1g",
      fiber: "3.8g",
      fat: "5.3g",
      vitaminC: "19.7mg",
    },
    packaging: {
      sizes: ["1kg", "2kg", "5kg"],
      shelf_life: "3-5 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Express delivery with temperature control",
    },
    benefits: [
      "Rich in antioxidants and vitamin C",
      "Natural source of healthy fats",
      "Boosts energy and metabolism",
      "Contains potassium for heart health",
    ],
    uniqueTraits: [
      "Traditional Malaysian variety",
      "Balanced sweet-creamy flavor",
      "Perfect for first-time tasters",
      "Consistent quality and taste",
    ],
  },
  "tekka-whole": {
    title: "Tekka Whole Fruit",
    category: "Whole Fruits",
    price: "From RM38/kg",
    images: [
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    ],
    description:
      "Sweet and mild Tekka durian, perfect for first-time durian tasters. This variety offers a gentle introduction to the world of durians with its mild, sweet flavor and smooth texture.",
    features: [
      "Mild, sweet flavor profile",
      "Perfect for beginners",
      "Smooth, creamy texture",
      "Gentle aromatic fragrance",
      "Consistent quality",
    ],
    nutritional: {
      energy: "147 kcal per 100g",
      protein: "1.5g",
      carbs: "27.1g",
      fiber: "3.8g",
      fat: "5.3g",
      vitaminC: "19.7mg",
    },
    packaging: {
      sizes: ["1kg", "2kg", "5kg"],
      shelf_life: "3-5 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Express delivery with temperature control",
    },
    benefits: [
      "Rich in antioxidants and vitamin C",
      "Natural source of healthy fats",
      "Boosts energy and metabolism",
      "Contains potassium for heart health",
    ],
    uniqueTraits: [
      "Mild, approachable flavor",
      "Perfect for durian beginners",
      "Sweet, non-overwhelming taste",
      "Smooth, creamy consistency",
    ],
  },
  "durian-ice-cream": {
    title: "Premium Durian Ice Cream",
    category: "Ice Cream Series",
    price: "From RM18/tub",
    images: [
      "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
      "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    ],
    description:
      "Artisanal ice cream crafted with authentic Musang King durian pulp. Our premium ice cream delivers the full durian experience in a creamy, frozen dessert that's perfect for sharing or enjoying as a luxurious treat.",
    features: [
      "Made with 100% authentic durian pulp",
      "No artificial flavors or preservatives",
      "Artisanal small-batch production",
      "Creamy, smooth texture",
      "Premium packaging for gifting",
    ],
    nutritional: {
      energy: "210 kcal per 100g",
      protein: "4.2g",
      carbs: "22.5g",
      fiber: "1.2g",
      fat: "12.8g",
      sugar: "18.3g",
    },
    packaging: {
      sizes: ["500ml", "1L", "2L"],
      shelf_life: "12 months frozen",
      storage: "Keep frozen at -18°C",
      shipping: "Dry ice shipping available",
    },
    benefits: [
      "Rich, authentic durian flavor",
      "Perfect dessert for durian lovers",
      "Great for special occasions",
      "Shareable family size options",
    ],
    uniqueTraits: [
      "Artisanal handcrafted quality",
      "Premium Musang King pulp base",
      "Smooth, non-icy texture",
      "Elegant packaging design",
    ],
  },
  // "durian-sorbet": {
  //   title: "Durian Sorbet",
  //   category: "Ice Cream Series",
  //   price: "From RM15/tub",
  //   images: [
  //     "https://images.pexels.com/photos/1352280/pexels-photo-1352280.jpeg",
  //     "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
  //     "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
  //   ],
  //   description:
  //     "Refreshing sorbet with pure durian flavor. A lighter alternative to ice cream, our durian sorbet offers the authentic taste of durian in a refreshing, dairy-free format.",
  //   features: [
  //     "Pure durian flavor",
  //     "Dairy-free sorbet",
  //     "Refreshing texture",
  //     "No artificial additives",
  //     "Perfect for hot weather",
  //   ],
  //   nutritional: {
  //     energy: "180 kcal per 100g",
  //     protein: "2.1g",
  //     carbs: "28.5g",
  //     fiber: "1.8g",
  //     fat: "6.2g",
  //     sugar: "22.1g",
  //   },
  //   packaging: {
  //     sizes: ["500ml", "1L"],
  //     shelf_life: "12 months frozen",
  //     storage: "Keep frozen at -18°C",
  //     shipping: "Dry ice shipping available",
  //   },
  //   benefits: [
  //     "Dairy-free option",
  //     "Refreshing durian taste",
  //     "Lower fat content",
  //     "Perfect summer treat",
  //   ],
  //   uniqueTraits: [
  //     "Pure durian sorbet",
  //     "Dairy-free alternative",
  //     "Refreshing texture",
  //     "Authentic flavor",
  //   ],
  // },
  // "durian-gelato": {
  //   title: "Durian Gelato",
  //   category: "Ice Cream Series",
  //   price: "From RM22/tub",
  //   images: [
  //     "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
  //     "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
  //     "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
  //   ],
  //   description:
  //     "Italian-style gelato with rich durian cream. Our durian gelato combines the smooth, dense texture of traditional Italian gelato with the authentic flavor of premium durian.",
  //   features: [
  //     "Italian-style gelato",
  //     "Rich, dense texture",
  //     "Authentic durian flavor",
  //     "Premium quality ingredients",
  //     "Artisanal production",
  //   ],
  //   nutritional: {
  //     energy: "225 kcal per 100g",
  //     protein: "4.8g",
  //     carbs: "24.2g",
  //     fiber: "1.5g",
  //     fat: "14.2g",
  //     sugar: "19.8g",
  //   },
  //   packaging: {
  //     sizes: ["500ml", "1L"],
  //     shelf_life: "12 months frozen",
  //     storage: "Keep frozen at -18°C",
  //     shipping: "Dry ice shipping available",
  //   },
  //   benefits: [
  //     "Rich, dense texture",
  //     "Authentic Italian style",
  //     "Premium durian flavor",
  //     "Luxurious dessert experience",
  //   ],
  //   uniqueTraits: [
  //     "Italian gelato technique",
  //     "Dense, smooth texture",
  //     "Premium durian cream",
  //     "Artisanal quality",
  //   ],
  // },
  "durian-mochi": {
    title: "Durian Mochi Set",
    category: "Mochi",
    price: "From RM24/box",
    images: [
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "Traditional Japanese mochi filled with premium durian cream. Each piece is handcrafted with authentic durian filling wrapped in soft, chewy mochi rice dough.",
    features: [
      "Traditional Japanese mochi",
      "Premium durian cream filling",
      "Handcrafted quality",
      "Soft, chewy texture",
      "Authentic durian flavor",
    ],
    nutritional: {
      energy: "185 kcal per 100g",
      protein: "3.2g",
      carbs: "32.1g",
      fiber: "1.8g",
      fat: "4.8g",
      sugar: "18.5g",
    },
    packaging: {
      sizes: ["6 pieces", "12 pieces", "24 pieces"],
      shelf_life: "7 days refrigerated",
      storage: "Keep refrigerated",
      shipping: "Temperature-controlled shipping",
    },
    benefits: [
      "Traditional Japanese treat",
      "Premium durian experience",
      "Perfect for gifting",
      "Unique fusion dessert",
    ],
    uniqueTraits: [
      "Japanese mochi technique",
      "Premium durian cream",
      "Handcrafted quality",
      "Cultural fusion dessert",
    ],
  },
  "durian-mochi-ice-cream": {
    title: "Durian Mochi Ice Cream",
    category: "Mochi",
    price: "From RM28/box",
    images: [
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "Mochi wrapped around durian ice cream for a unique treat. Experience the perfect combination of chewy mochi exterior and creamy durian ice cream center.",
    features: [
      "Mochi-wrapped ice cream",
      "Durian ice cream center",
      "Chewy mochi exterior",
      "Unique texture combination",
      "Premium quality",
    ],
    nutritional: {
      energy: "195 kcal per 100g",
      protein: "3.8g",
      carbs: "28.5g",
      fiber: "1.2g",
      fat: "7.2g",
      sugar: "20.1g",
    },
    packaging: {
      sizes: ["6 pieces", "12 pieces"],
      shelf_life: "3 months frozen",
      storage: "Keep frozen at -18°C",
      shipping: "Dry ice shipping available",
    },
    benefits: [
      "Unique texture experience",
      "Perfect temperature contrast",
      "Premium durian flavor",
      "Innovative dessert concept",
    ],
    uniqueTraits: [
      "Mochi-ice cream fusion",
      "Temperature contrast",
      "Chewy and creamy texture",
      "Innovative dessert",
    ],
  },
  "durian-mochi-gift-set": {
    title: "Durian Mochi Gift Set",
    category: "Mochi",
    price: "From RM35/set",
    images: [
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
    ],
    description:
      "Premium gift set featuring assorted durian mochi. Perfect for gifting, this set includes a variety of durian mochi flavors in elegant packaging.",
    features: [
      "Assorted durian mochi",
      "Premium gift packaging",
      "Multiple flavor varieties",
      "Elegant presentation",
      "Perfect for gifting",
    ],
    nutritional: {
      energy: "190 kcal per 100g",
      protein: "3.5g",
      carbs: "30.2g",
      fiber: "1.6g",
      fat: "5.8g",
      sugar: "19.2g",
    },
    packaging: {
      sizes: ["Gift Set", "Premium Box"],
      shelf_life: "7 days refrigerated",
      storage: "Keep refrigerated",
      shipping: "Temperature-controlled shipping",
    },
    benefits: [
      "Perfect gift option",
      "Assorted flavors",
      "Premium presentation",
      "Unique durian experience",
    ],
    uniqueTraits: [
      "Gift-ready packaging",
      "Assorted flavor variety",
      "Premium presentation",
      "Perfect for special occasions",
    ],
  },
  "mooncake-gift-set": {
    title: "Durian Mooncake Gift Set",
    category: "Mooncakes",
    price: "From RM68/set",
    images: [
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "Luxurious gift set featuring traditional mooncakes with durian filling. Celebrate special occasions with our premium durian mooncakes in elegant packaging.",
    features: [
      "Traditional mooncake style",
      "Premium durian filling",
      "Elegant gift packaging",
      "Perfect for celebrations",
      "Authentic durian flavor",
    ],
    nutritional: {
      energy: "280 kcal per 100g",
      protein: "5.2g",
      carbs: "42.1g",
      fiber: "2.1g",
      fat: "12.8g",
      sugar: "25.5g",
    },
    packaging: {
      sizes: ["4 pieces", "6 pieces", "8 pieces"],
      shelf_life: "14 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Careful packaging for fragile items",
    },
    benefits: [
      "Perfect for celebrations",
      "Traditional mooncake experience",
      "Premium durian flavor",
      "Elegant gift option",
    ],
    uniqueTraits: [
      "Traditional mooncake style",
      "Premium durian filling",
      "Celebration-ready packaging",
      "Cultural fusion dessert",
    ],
  },
  "durian-mooncake-single": {
    title: "Durian Mooncake (Single)",
    category: "Mooncakes",
    price: "From RM12/piece",
    images: [
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    ],
    description:
      "Individual durian mooncake with authentic filling. Perfect for personal enjoyment or as a single serving of our premium durian mooncake.",
    features: [
      "Individual serving size",
      "Authentic durian filling",
      "Traditional mooncake style",
      "Perfect portion control",
      "Premium quality",
    ],
    nutritional: {
      energy: "280 kcal per 100g",
      protein: "5.2g",
      carbs: "42.1g",
      fiber: "2.1g",
      fat: "12.8g",
      sugar: "25.5g",
    },
    packaging: {
      sizes: ["Single piece"],
      shelf_life: "14 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Individual packaging",
    },
    benefits: [
      "Perfect portion size",
      "Individual enjoyment",
      "Authentic durian flavor",
      "Convenient single serving",
    ],
    uniqueTraits: [
      "Individual serving",
      "Authentic durian filling",
      "Perfect portion control",
      "Convenient packaging",
    ],
  },
  "premium-mooncake-box": {
    title: "Premium Mooncake Box",
    category: "Mooncakes",
    price: "From RM128/box",
    images: [
      "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
      "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
    ],
    description:
      "Elegant box containing 6 premium durian mooncakes. Our most luxurious mooncake offering, perfect for special celebrations and premium gifting.",
    features: [
      "6 premium durian mooncakes",
      "Luxurious gift box",
      "Premium durian filling",
      "Elegant presentation",
      "Perfect for celebrations",
    ],
    nutritional: {
      energy: "280 kcal per 100g",
      protein: "5.2g",
      carbs: "42.1g",
      fiber: "2.1g",
      fat: "12.8g",
      sugar: "25.5g",
    },
    packaging: {
      sizes: ["6 pieces box"],
      shelf_life: "14 days at room temperature",
      storage: "Store in cool, dry place",
      shipping: "Premium packaging with care",
    },
    benefits: [
      "Luxurious gift option",
      "Premium durian experience",
      "Perfect for celebrations",
      "Elegant presentation",
    ],
    uniqueTraits: [
      "Premium gift box",
      "6 premium mooncakes",
      "Luxurious presentation",
      "Celebration-ready",
    ],
  },
};

export async function generateStaticParams() {
  // Include all product slugs from the Products page
  const allProductSlugs = [
    // Whole Fruits
    "musang-king-whole",
    "d24-whole",
    "tekka-whole",
    // Ice Cream Series
    "durian-ice-cream",
    // "durian-sorbet", ************
    // 'durian-gelato', ************
    // Mochi
    "durian-mochi",
    "durian-mochi-ice-cream",
    "durian-mochi-gift-set",
    // Mooncakes
    "mooncake-gift-set",
    "durian-mooncake-single",
    "premium-mooncake-box",
  ];

  return allProductSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Products
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.title}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <ProductGallery images={product.images} title={product.title} />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <Badge className="mb-6 w-fit bg-primary/10 text-primary border-primary/20">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {product.title}
              </h1>
              <div className="flex items-center mb-6">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-gray-600 text-lg">
                  (4.9/5 based on 127 reviews)
                </span>
              </div>
              <p className="text-3xl font-bold text-primary mb-8">
                {product.price}
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-10">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 mb-10">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Contact for Pricing & Availability
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-lg py-6 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300"
                  size="lg"
                >
                  <Package className="w-5 h-5 mr-3" />
                  Request Product Sample
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  <span className="font-medium">Halal Certified</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-medium">Global Shipping</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-medium">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover everything you need to know about this premium durian
              product
            </p>
          </div>

          <Tabs defaultValue="nutrition" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 p-1 rounded-2xl">
              <TabsTrigger
                value="nutrition"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
              >
                Nutrition
              </TabsTrigger>
              <TabsTrigger
                value="packaging"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
              >
                Packaging
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
              >
                Benefits
              </TabsTrigger>
              <TabsTrigger
                value="unique"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
              >
                Unique Traits
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nutrition" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-bold text-3xl mb-8 text-gray-900">
                    Nutritional Information
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(product.nutritional).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20"
                      >
                        <div className="font-bold text-gray-900 capitalize text-lg mb-2">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="text-primary font-bold text-xl">
                          {String(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center mt-10">
                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                      <img
                        src="https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg"
                        alt="Halal certification logo"
                        className="h-20 w-auto"
                      />
                      <p className="text-center text-green-700 font-semibold mt-2">
                        Halal Certified
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packaging" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-bold text-3xl mb-8 text-gray-900">
                    Packaging & Storage
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="font-bold text-2xl text-gray-900">
                        Available Sizes
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {product.packaging.sizes.map((size: string) => (
                          <div
                            key={size}
                            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/20 text-center"
                          >
                            <span className="font-bold text-primary text-lg">
                              {size}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h4 className="font-bold text-2xl text-gray-900">
                        Storage Information
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                          <h5 className="font-bold text-blue-900 mb-2">
                            Shelf Life
                          </h5>
                          <p className="text-blue-700">
                            {product.packaging.shelf_life}
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                          <h5 className="font-bold text-green-900 mb-2">
                            Storage
                          </h5>
                          <p className="text-green-700">
                            {product.packaging.storage}
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                          <h5 className="font-bold text-purple-900 mb-2">
                            Shipping
                          </h5>
                          <p className="text-purple-700">
                            {product.packaging.shipping}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-bold text-3xl mb-8 text-gray-900">
                    Health Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.benefits.map((benefit: string) => (
                      <div
                        key={benefit}
                        className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
                      >
                        <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-800 text-lg font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unique" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-bold text-3xl mb-8 text-gray-900">
                    What Makes This Special
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.uniqueTraits.map((trait: string) => (
                      <div
                        key={trait}
                        className="flex items-start space-x-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:shadow-lg transition-all duration-300"
                      >
                        <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-800 text-lg font-medium">
                          {trait}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Phase 2 Recipe Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-primary/20">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-primary text-white px-6 py-2 text-lg rounded-full">
                Coming in Phase 2
              </Badge>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">
                Recipe Videos & Ideas
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're creating delicious recipe videos and step-by-step guides
                to help you make the most of our premium durian products. Stay
                tuned for creative dessert ideas and cooking techniques!
              </p>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 rounded-xl border-2 hover:bg-primary hover:text-white transition-all duration-300"
              >
                Subscribe for Recipe Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
