import ProductCarousel from "@/components/cards/ProductCarousel";

const wholeFruits = [
  {
    id: "musang-king-whole",
    title: "Musang King Whole Fruit",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    description:
      "Premium grade Musang King durian, hand-selected for perfect ripeness.",
    category: "Whole Fruits",
    price: "From RM85/kg",
    isNew: true,
  },
  {
    id: "d24-whole",
    title: "D24 Whole Fruit",
    image: "https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg",
    description:
      "Traditional D24 variety known for its creamy texture and balanced flavor.",
    category: "Whole Fruits",
    price: "From RM45/kg",
  },
  {
    id: "tekka-whole",
    title: "Tekka Whole Fruit",
    image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    description:
      "Sweet and mild Tekka durian, perfect for first-time durian tasters.",
    category: "Whole Fruits",
    price: "From RM38/kg",
  },
];

const iceCreamSeries = [
  {
    id: "durian-ice-cream",
    title: "Premium Durian Ice Cream",
    image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    description: "Artisanal ice cream made with authentic durian pulp.",
    category: "Ice Cream Series",
    price: "From RM18/tub",
  },
  {
    id: "durian-sorbet",
    title: "Durian Sorbet",
    image: "https://images.pexels.com/photos/1352280/pexels-photo-1352280.jpeg",
    description: "Refreshing sorbet with pure durian flavor.",
    category: "Ice Cream Series",
    price: "From RM15/tub",
  },
  {
    id: "durian-gelato",
    title: "Durian Gelato",
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
    description: "Italian-style gelato with rich durian cream.",
    category: "Ice Cream Series",
    price: "From RM22/tub",
  },
];

const mochi = [
  {
    id: "durian-mochi",
    title: "Durian Mochi Set",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    description: "Traditional Japanese mochi filled with premium durian cream.",
    category: "Mochi",
    price: "From RM24/box",
  },
  {
    id: "durian-mochi-ice-cream",
    title: "Durian Mochi Ice Cream",
    image: "https://images.pexels.com/photos/7251822/pexels-photo-7251822.jpeg",
    description: "Mochi wrapped around durian ice cream for a unique treat.",
    category: "Mochi",
    price: "From RM28/box",
  },
  {
    id: "durian-mochi-gift-set",
    title: "Durian Mochi Gift Set",
    image: "https://images.pexels.com/photos/7251823/pexels-photo-7251823.jpeg",
    description: "Premium gift set featuring assorted durian mochi.",
    category: "Mochi",
    price: "From RM35/set",
  },
];

const mooncakes = [
  {
    id: "mooncake-gift-set",
    title: "Durian Mooncake Gift Set",
    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg",
    description:
      "Luxurious gift set featuring traditional mooncakes with durian filling.",
    category: "Mooncakes",
    price: "From RM68/set",
    isNew: true,
  },
  {
    id: "durian-mooncake-single",
    title: "Durian Mooncake (Single)",
    image: "https://images.pexels.com/photos/7251824/pexels-photo-7251824.jpeg",
    description: "Individual durian mooncake with authentic filling.",
    category: "Mooncakes",
    price: "From RM12/piece",
  },
  {
    id: "premium-mooncake-box",
    title: "Premium Mooncake Box",
    image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg",
    description: "Elegant box containing 6 premium durian mooncakes.",
    category: "Mooncakes",
    price: "From RM128/box",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[45vh] flex items-center justify-center bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Products
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Discover our premium selection of durian products, from fresh
                whole fruits to gourmet creations crafted with authentic flavors.
              </p>
            </div>
        </div>
      </section>

      {/* Whole Fruits Section */}
      <ProductCarousel
        products={wholeFruits}
        title="Whole Fruits"
        description="Premium whole durian fruits, hand-selected for perfect ripeness and authentic flavor."
        className="bg-white"
      />

      {/* Ice Cream Series Section */}
      <ProductCarousel
        products={iceCreamSeries}
        title="Ice Cream Series"
        description="Artisanal ice cream creations made with authentic durian pulp for a creamy, indulgent experience."
        className="bg-green-50"
      />

      {/* Mochi Section */}
      <ProductCarousel
        products={mochi}
        title="Mochi"
        description="Traditional Japanese mochi filled with premium durian cream for a delightful treat."
        className="bg-white"
      />

      {/* Mooncakes Section */}
      <ProductCarousel
        products={mooncakes}
        title="Mooncakes"
        description="Luxurious mooncakes with authentic durian filling, perfect for celebrations and gifting."
        className="bg-green-50"
      />
    </div>
  );
}
