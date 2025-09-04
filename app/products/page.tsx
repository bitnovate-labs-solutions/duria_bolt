import ProductCarousel from "@/components/cards/ProductCarousel";

// ICE CREAM DATA =================================================================
const iceCreamSeries = [
  {
    id: "durian-ice-cream",
    title: "Mini 3D Musang King Durian Ice Cream",
    image: "/ice_cream/durian_icecream.png",
    description:
      "* Taste like real durian, with 50% durian flesh * 50g per piece",
    category: "Ice Cream",
    // description: "Artisanal ice cream made with authentic durian pulp.",
    // price: "From RM18/tub",
  },
  {
    id: "durian-ice-cream",
    title: "3D Musang King Durian Ice Cream",
    image: "/ice_cream/3D_MSK_Icecream.jpg",
    description:
      "* Taste like real durian, with 50% durian flesh * 70g per piece",
    category: "Ice Cream",
    // description: "Artisanal ice cream made with authentic durian pulp.",
    // price: "From RM18/tub",
  },
  {
    id: "durian-ice-cream",
    title: "White Coffee Ice Cream",
    image: "/ice_cream/duria_icecream_coffee.png",
    description:
      "* Savour the famous Ipoh White Coffee in a cool and silky texture * 70g per piece",
    category: "Ice Cream",
    // description: "Italian-style gelato with rich durian cream.",
    // price: "From RM22/tub",
  },
];

// MOONCAKES DATA =================================================================
const mooncakes = [
  {
    id: "premium-mooncake-box",
    title: "Signature Musang King Durian Snowy Mooncake",
    image: "/snowy_mooncake/msk_snowy_mooncake.jpg",
    description:
      "* The best-selling classic durian mooncake, packed with pure Musang King Durian flesh and wrapped with a delicious soft snow skin * Comes with 6 pieces (60g) in an elegant gift tin box",
    category: "Mooncakes",
    // description: "Elegant box containing 6 premium durian mooncakes.",
    // price: "From RM128/box",
  },
  {
    id: "premium-mooncake-box",
    title: "Blackthorn 'Twister' Durian Snowy Mooncake",
    image: "/twister_blackthorn/twister_2.jpg",
    description:
      "* The latest mooncake creation from Duria, filled with Blackthorn durian flesh and wrapped in a two-tone snow skin * Comes with 6 pieces (60g) in a luxurious golden gift tin box",
    category: "Mooncakes",
    // description: "Elegant box containing 6 premium durian mooncakes.",
    // price: "From RM128/box",
  },
  {
    id: "premium-mooncake-box",
    title: "Premium Mooncake",
    image: "/mooncake/mooncake_1.jpg",
    description:
      "* The most luxurious mooncake gift set, featuring a large Signature Musang King mooncake surrounded by seven durian mooncake of assorted snow skin flavours * Comes with 8 pieces (160g and 60g) in a stunning purple octagonal gift tin box",
    category: "Mooncakes",
    // description: "Elegant box containing 6 premium durian mooncakes.",
    // price: "From RM128/box",
  },
  // {
  //   id: "durian-mooncake-single",
  //   title: "Musang King Snowskin Mooncake (Bamboo Charcoal / Crystal)",
  //   image: "/snowy_mooncake/msk_snowy_mooncake.jpg",
  //   description: "",
  //   category: "Mooncakes",
  //   // description: "Individual durian mooncake with authentic filling.",
  //   // price: "From RM12/piece",
  // },
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
    description:
      "Assorted range of mochi, pure durian flesh wrapped with chewy Mochi skin. * Durian Mochi, Pandan Durian Mochi, Mango Durian Mochi * Non-durian flavours include Strawberry Cheese Mochi and Blueberry Cheese Mochi * Packing size 25g x 4 pieces per box",
    category: "Mochi",
    // description: "Traditional Japanese mochi filled with premium durian cream.",
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

// MINI SNOWY SKIN DATA =================================================================
const miniSnowySkin = [
  {
    id: "mini-musang-king-snowy-skin",
    title: "Mini Musang King Snowy Skin",
    image: "/snowy_skin/msk_snowy_skin_1.jpg",
    description:
      "Enjoy the Musang King snowy skin all year long with this bite-size offering. * Comes with 6 heart-shaped pieces (30g each)",
    category: "Mini Snowy Skin",
    // description: "Bite-size snowy skin treats perfect for any occasion.",
    // price: "From RM35/box",
  },
];

// WHOLE FRUITS DATA =================================================================
const wholeFruits = [
  {
    id: "musang-king-whole",
    title: "Frozen Durian Whole Fruit",
    image: "/whole_fruit/durian_whole_fruit.jpg",
    description:
      "Popular varieties of frozen whole fruit for export markets include Musang King, Blackthorn, D101 and D24.",
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
    title: "Frozen Durian Pulp",
    image: "/frozen_pulp/durian_pulp1.jpg",
    description:
      "For convenience and ease of consuming, durian pulp is carefully extracted from the husk and packed using skinpack vacuum technology * Suitable for retail display shelves * Available in 300g and 400g packs",
    category: "Frozen Durian Pulp",
    // description:
    //   "* 100% pure Musang King durian, * Flash frozen for freshness, * 500g per pack",
    // price: "From RM45/pack",
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
      <section className="py-24 bg-primary">
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

      {/* Ice Cream Section */}
      <ProductCarousel
        products={iceCreamSeries}
        title="Ice Cream"
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

      {/* Mini Snowy Skin Section */}
      <ProductCarousel
        products={miniSnowySkin}
        title="Mini Snowy Skin"
        description=""
        // description="Bite-size snowy skin treats perfect for any occasion."
        className="bg-green-50"
      />

      {/* Whole Fruits Section */}
      <ProductCarousel
        products={wholeFruits}
        title="Whole Fruits"
        description=""
        // description="Premium whole durian fruits, hand-selected for perfect ripeness and authentic flavor."
        className="bg-white"
      />

      {/* Cake Section */}
      {/* <ProductCarousel
        products={cakes}
        title="Cake"
        description=""
        // description="Delicious durian cakes and cheesecakes, perfect for celebrations and special occasions."
        className="bg-white"
      /> */}

      {/* Spring Rolls Section */}
      {/* <ProductCarousel
        products={springRolls}
        title="Spring Rolls"
        description=""
        // description="Crispy spring rolls filled with sweet durian, available fresh or frozen for convenience."
        className="bg-green-50"
      /> */}

      {/* Frozen Durian Pulp Section */}
      <ProductCarousel
        products={frozenDurianPulp}
        title="Frozen Durian Pulp"
        description=""
        // description="Premium frozen durian pulp, perfect for cooking, baking, and creating authentic durian dishes."
        className="bg-green-50"
      />

      {/* Musang King Durian Paste Section */}
      {/* <ProductCarousel
        products={musangKingPaste}
        title="Musang King Durian Paste"
        description=""
        // description="Concentrated durian paste with intense flavor, ideal for mooncakes, desserts, and culinary creations."
        className="bg-green-50"
      /> */}
    </div>
  );
}
