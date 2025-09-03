import ProductCarousel from "@/components/cards/ProductCarousel";

// ICE CREAM DATA =================================================================
const iceCreamSeries = [
  {
    id: "durian-ice-cream",
    title: "Musang King Durian Ice Cream (3 pieces per box)",
    image: "/ice_cream/durian_icecream.png",
    // description: "Artisanal ice cream made with authentic durian pulp.",
    description:
      "* 50% durian flesh * 70g x 3 pieces / box * 20 boxes / carton ",
    category: "Ice Cream Series",
    // price: "From RM18/tub",
  },
  {
    id: "durian-ice-cream",
    title: "Musang King Durian Ice Cream",
    image: "/ice_cream/durian_icecream.png",
    description: "* 50% durian flesh * 80ml / tub",
    category: "Ice Cream Series",
    // description: "Refreshing sorbet with pure durian flavor.",
    // price: "From RM15/tub",
  },
  {
    id: "durian-ice-cream",
    title: "Musang King Durian Ice Cream (Single Stick)",
    image: "/ice_cream/durian_icecream.png",
    description: "* 50% durian flesh * 50g / piece",
    category: "Ice Cream Series",
    // description: "Italian-style gelato with rich durian cream.",
    // price: "From RM22/tub",
  },
  {
    id: "durian-ice-cream",
    title: "Duria White Coffee Ice Cream",
    image: "/ice_cream/duria_icecream_coffee.png",
    description: "* 50% durian flesh * 50g / piece",
    category: "Ice Cream Series",
    // description: "Italian-style gelato with rich durian cream.",
    // price: "From RM22/tub",
  },
];

// MOONCAKES DATA =================================================================
const mooncakes = [
  {
    id: "premium-mooncake-box",
    title: "Musang King Snow Skin Mooncake (Premium)",
    image: "/mooncake/mooncake_1.jpg",
    description: "",
    category: "Mooncakes",
    // description: "Elegant box containing 6 premium durian mooncakes.",
    // price: "From RM128/box",
  },
  {
    id: "premium-mooncake-box",
    title: "Black Thorn Musang King Snow Skin Mooncake",
    image: "/mooncake/blackthorn1.jpg",
    description: "* 60g x 6pcs / box * 2 pcs packaging * 15 boxes / carton",
    category: "Mooncakes",
    // description: "Elegant box containing 6 premium durian mooncakes.",
    // price: "From RM128/box",
  },
  {
    id: "durian-mooncake-single",
    title: "Musang King Snowskin Mooncake (Bamboo Charcoal / Crystal)",
    image: "/snowy_mooncake/msk_snowy_mooncake.jpg",
    description: "",
    category: "Mooncakes",
    // description: "Individual durian mooncake with authentic filling.",
    // price: "From RM12/piece",
  },
  // {
  //   id: "mooncake-gift-set",
  //   title: "",
  //   image: "",
  //   description:
  //     "Luxurious gift set featuring traditional mooncakes with durian filling.",
  //   category: "Mooncakes",
  //   price: "From RM68/set",
  //   isNew: true,
  // },
];

// MOCHI DATA =================================================================
const mochi = [
  {
    id: "durian-mochi",
    title: "Musang King Mochi",
    image: "/mochi/mochi-set-optimized.jpg",
    description: "",
    // description: "Traditional Japanese mochi filled with premium durian cream.",
    category: "Mochi",
    // price: "From RM24/box",
  },
  // {
  //   id: "durian-mochi-ice-cream",
  //   title: "Durian Mochi Ice Cream",
  //   image: "https://images.pexels.com/photos/7251822/pexels-photo-7251822.jpeg",
  //   description: "Mochi wrapped around durian ice cream for a unique treat.",
  //   category: "Mochi",
  //   price: "From RM28/box",
  // },
  // {
  //   id: "durian-mochi-gift-set",
  //   title: "Durian Mochi Gift Set",
  //   image: "https://images.pexels.com/photos/7251823/pexels-photo-7251823.jpeg",
  //   description: "Premium gift set featuring assorted durian mochi.",
  //   category: "Mochi",
  //   price: "From RM35/set",
  // },
];

// WHOLE FRUITS DATA =================================================================
const wholeFruits = [
  {
    id: "musang-king-whole",
    title: "Musang King Whole Fruit",
    image: "/whole_fruit/durian_whole_fruit.jpg",
    description: "",
    category: "Whole Fruits",
    // description:
    //   "Premium grade Musang King durian, hand-selected for perfect ripeness.",
    // price: "From RM85/kg",
    // isNew: true,
  },
  // {
  //   id: "d24-whole",
  //   title: "D24 Whole Fruit",
  //   image: "/whole_fruit/durian_whole_fruit.jpg",
  //   description: "",
  //   category: "Whole Fruits",
  //   // description:
  //   //   "Traditional D24 variety known for its creamy texture and balanced flavor.",
  //   // price: "From RM45/kg",
  // },
  // {
  //   id: "tekka-whole",
  //   title: "Tekka Whole Fruit",
  //   image: "/whole_fruit/durian_whole_fruit.jpg",
  //   description: "",
  //   category: "Whole Fruits",
  //   // description:
  //   //   "Sweet and mild Tekka durian, perfect for first-time durian tasters.",
  //   // price: "From RM38/kg",
  // },
];

// CAKE DATA =================================================================
const cakes = [
  {
    id: "durian-cake",
    title: "Musang King Thousand Layer Cake (Boxed)",
    image: "/cake/durian-cake.jpg",
    description: "",
    category: "Cake",
    // description:
    //   "* Premium Musang King durian filling, * Moist sponge cake layers, * Perfect for celebrations",
    // price: "From RM45/cake",
  },
  // {
  //   id: "durian-cheesecake",
  //   title: "Durian Cheesecake",
  //   image: "/cake/durian-cheesecake.jpg",
  //   description:
  //     "* Creamy cheesecake with durian swirl, * Graham cracker crust, * Rich and indulgent",
  //   category: "Cake",
  //   price: "From RM38/cake",
  // },
];

// SPRING ROLLS DATA =================================================================
const springRolls = [
  {
    id: "durian-spring-rolls",
    title: "Musang King Durian Spring Rolls (Pre-made Dessert)",
    image: "/spring-rolls/durian-spring-rolls.jpg",
    description: "",
    category: "Spring Rolls",
    // description:
    //   "* Crispy spring roll wrapper, * Sweet durian filling, * Perfect appetizer or dessert",
    // price: "From RM28/box",
  },
  // {
  //   id: "durian-spring-rolls-frozen",
  //   title: "Frozen Durian Spring Rolls",
  //   image: "/spring-rolls/frozen-spring-rolls.jpg",
  //   description:
  //     "* Ready-to-fry spring rolls, * Convenient frozen format, * Maintains freshness",
  //   category: "Spring Rolls",
  //   price: "From RM32/box",
  // },
];

// FROZEN DURIAN PULP DATA =================================================================
const frozenDurianPulp = [
  {
    id: "musang-king-pulp",
    title: "D101 Durian Pulp",
    image: "/frozen_pulp/durian_pulp1.jpg",
    description: "",
    category: "Frozen Durian Pulp",
    // description:
    //   "* 100% pure Musang King durian, * Flash frozen for freshness, * 500g per pack",
    // price: "From RM45/pack",
  },
  {
    id: "d24-pulp",
    title: "Musang King Durian Pulp",
    image: "/frozen_pulp/durian_pulp2.jpg",
    description: "",
    category: "Frozen Durian Pulp",
    // description:
    //   "* Premium D24 durian variety, * No additives or preservatives, * 1kg per pack",
    // price: "From RM38/pack",
  },
  {
    id: "mixed-pulp",
    title: "D24 Durian Pulp",
    image: "/frozen_pulp/durian_pulp3.jpg",
    description: "",
    category: "Frozen Durian Pulp",
    // description:
    //   "* Blend of premium durian varieties, * Perfect for cooking and baking, * 750g per pack",
    // price: "From RM42/pack",
  },
];

// MUSANG KING DURIAN PASTE DATA =================================================================
const musangKingPaste = [
  {
    id: "musang-king-paste",
    title: "D24 Durian Puree",
    image: "",
    description: "",
    category: "Musang King Durian Paste",
    // description:
    //   "* Concentrated Musang King flavor, * Perfect for mooncakes and desserts, * 250g per jar",
    // price: "From RM28/jar",
  },
  {
    id: "durian-paste-premium",
    title: "Musang King Durian Paste",
    image: "",
    description: "",
    category: "Musang King Durian Paste",
    // description:
    //   "* Ultra-smooth texture, * Intense durian flavor, * 500g per jar",
    // price: "From RM45/jar",
  },
  {
    id: "durian-paste-premium",
    title: "D24 Durian Paste",
    image: "",
    description: "",
    category: "Musang King Durian Paste",
    // description:
    //   "* Ultra-smooth texture, * Intense durian flavor, * 500g per jar",
    // price: "From RM45/jar",
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
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Through strict raw material control, fully automated production
              lines and Spanish and German equipment, we continuously innovate
              products, open up online and offline marketing links, and excel in
              creating popular durian products.
            </p>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Premium brand , focusing on differentiation, creating a festive
              gift-giving scene, and forming a Musang King durian derivative
              product with unique market competitiveness in terms of quality,
              brand and appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Ice Cream Series Section */}
      <ProductCarousel
        products={iceCreamSeries}
        title="Ice Cream Series"
        description=""
        // description="Artisanal ice cream creations made with authentic durian pulp for a creamy, indulgent experience."
        className="bg-white"
      />

      {/* Mooncakes Section */}
      <ProductCarousel
        products={mooncakes}
        title="Mooncakes"
        description=""
        // description="Luxurious mooncakes with authentic durian filling, perfect for celebrations and gifting."
        className="bg-green-50"
      />

      {/* Mochi Section */}
      <ProductCarousel
        products={mochi}
        title="Mochi"
        description=""
        // description="Traditional Japanese mochi filled with premium durian cream for a delightful treat."
        className="bg-white"
      />

      {/* Whole Fruits Section */}
      <ProductCarousel
        products={wholeFruits}
        title="Whole Fruits"
        description=""
        // description="Premium whole durian fruits, hand-selected for perfect ripeness and authentic flavor."
        className="bg-green-50"
      />

      {/* Cake Section */}
      <ProductCarousel
        products={cakes}
        title="Cake"
        description=""
        // description="Delicious durian cakes and cheesecakes, perfect for celebrations and special occasions."
        className="bg-white"
      />

      {/* Spring Rolls Section */}
      <ProductCarousel
        products={springRolls}
        title="Spring Rolls"
        description=""
        // description="Crispy spring rolls filled with sweet durian, available fresh or frozen for convenience."
        className="bg-green-50"
      />

      {/* Frozen Durian Pulp Section */}
      <ProductCarousel
        products={frozenDurianPulp}
        title="Frozen Durian Pulp"
        description=""
        // description="Premium frozen durian pulp, perfect for cooking, baking, and creating authentic durian dishes."
        className="bg-white"
      />

      {/* Musang King Durian Paste Section */}
      <ProductCarousel
        products={musangKingPaste}
        title="Musang King Durian Paste"
        description=""
        // description="Concentrated durian paste with intense flavor, ideal for mooncakes, desserts, and culinary creations."
        className="bg-green-50"
      />
    </div>
  );
}
