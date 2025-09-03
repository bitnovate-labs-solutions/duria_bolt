"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselCardProps {
  productName: string;
  index: number;
}

interface ImageData {
  src: string;
  isLocal: boolean;
  isTextSlide?: boolean;
  textContent?: string;
}

export default function CarouselCard({
  productName,
  index,
}: CarouselCardProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);
  const [imageError, setImageError] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  // Get images for this card based on index and product name
  const getImagesForCard = (
    cardIndex: number,
    product: string
  ): ImageData[] => {
    // Use local durian ice cream image for the specific product
    if (product.toLowerCase().includes("3d musang king durian ice cream")) {
      return [
        {
          src: "/ice_cream/durian_icecream.png",
          isLocal: true,
        },
        {
          src: "/ice_cream/durian_icecream.png",
          isLocal: true,
        },
        {
          src: "/ice_cream/durian_icecream.png",
          isLocal: true,
        },
      ];
    }

    // Use local mooncake image for Musang King Durian Snowy Mooncake
    if (product.toLowerCase().includes("musang king durian snowy mooncake")) {
      return [
        {
          src: "/snowy_mooncake/msk_snowy_mooncake.jpg",
          isLocal: true,
        },
        {
          src: "/snowy_mooncake/msk_snowy_mooncake.jpg",
          isLocal: true,
        },
        {
          src: "/snowy_mooncake/msk_snowy_mooncake.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local mooncake image for Premium Durian Mooncake
    if (product.toLowerCase().includes("premium durian mooncake")) {
      return [
        {
          src: "/mooncake/mooncake_1.jpg",
          isLocal: true,
        },
        {
          src: "/mooncake/mooncake_1.jpg",
          isLocal: true,
        },
        {
          src: "/mooncake/mooncake_1.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local twister images for Twister Blackthorn
    if (product.toLowerCase().includes("twister blackthorn")) {
      return [
        {
          src: "/twister_blackthorn/twister_1.jpg",
          isLocal: true,
        },
        {
          src: "/twister_blackthorn/twister_2.jpg",
          isLocal: true,
        },
        {
          src: "/twister_blackthorn/twister_1.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local mochi image for Durian Mochi Series
    if (product.toLowerCase().includes("durian mochi series")) {
      return [
        {
          src: "/mochi/mochi-set-optimized.jpg",
          isLocal: true,
        },
        {
          src: "/mochi/mochi-set-optimized.jpg",
          isLocal: true,
        },
        {
          src: "/mochi/mochi-set-optimized.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local snowy skin images for Musang King Durian Snowy Skin
    if (product.toLowerCase().includes("musang king durian snowy skin")) {
      return [
        {
          src: "/snowy_skin/msk_snowy_skin_1.jpg",
          isLocal: true,
        },
        {
          src: "/snowy_skin/msk_snowy_skin_2.jpg",
          isLocal: true,
        },
        {
          src: "/snowy_skin/msk_snowy_skin_3.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local durian pulp images for Frozen Durian Pulp
    if (product.toLowerCase().includes("frozen durian pulp")) {
      return [
        {
          src: "/frozen_pulp/durian_pulp1.jpg",
          isLocal: true,
        },
        {
          src: "/frozen_pulp/durian_pulp2.jpg",
          isLocal: true,
        },
        {
          src: "/frozen_pulp/durian_pulp3.jpg",
          isLocal: true,
        },
      ];
    }

    // Use local durian whole fruit image for Frozen Durian Whole Fruit
    if (product.toLowerCase().includes("frozen durian whole fruit")) {
      return [
        {
          src: "/whole_fruit/durian_whole_fruit.jpg",
          isLocal: true,
        },
        {
          src: "/whole_fruit/durian_whole_fruit.jpg",
          isLocal: true,
        },
        {
          src: "/whole_fruit/durian_whole_fruit.jpg",
          isLocal: true,
        },
      ];
    }

    // Use text slides for Musang King Durian Paste
    if (product.toLowerCase().includes("musang king durian paste")) {
      return [
        {
          src: "",
          isLocal: false,
          isTextSlide: true,
          textContent: "D24 Durian Puree",
        },
        {
          src: "",
          isLocal: false,
          isTextSlide: true,
          textContent: "Musang King Durian Paste",
        },
        {
          src: "",
          isLocal: false,
          isTextSlide: true,
          textContent: "D24 Durian Paste",
        },
      ];
    }

    // For other products, show fallback placeholder
    return [
      {
        src: "",
        isLocal: false,
      },
      {
        src: "",
        isLocal: false,
      },
      {
        src: "",
        isLocal: false,
      },
    ];
  };

  const cardImages = getImagesForCard(index, productName);

  // Preload next image for better performance
  React.useEffect(() => {
    if (cardImages.length > 1) {
      const nextImageIndex = (currentSlide + 1) % cardImages.length;
      const nextImage = cardImages[nextImageIndex];
      if (nextImage && nextImage.src) {
        const img = new window.Image();
        img.src = nextImage.src;
      }
    }
  }, [currentSlide, cardImages]);

  const handleImageError = (imageIndex: number) => {
    setImageError((prev) => {
      const newErrors = [...prev];
      newErrors[imageIndex] = true;
      return newErrors;
    });
  };

  return (
    <div className="group cursor-pointer overflow-hidden transition-all duration-300 rounded-2xl h-full flex flex-col bg-white shadow-lg hover:shadow-2xl">
      {/* Carousel Section */}
      <div className="relative overflow-hidden h-80 md:h-96">
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent>
            {cardImages.map((imageData, imageIndex) => (
              <CarouselItem key={imageIndex}>
                <div className="w-full h-80 md:h-96 relative overflow-hidden">
                  {imageData.src ? (
                    !imageError[imageIndex] ? (
                      <Image
                        src={imageData.src}
                        alt={`${productName} - Image ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        onError={() => {
                          console.log("Image failed to load:", imageData.src);
                          handleImageError(imageIndex);
                        }}
                        onLoad={() => {
                          console.log(
                            "Image loaded successfully:",
                            imageData.src
                          );
                        }}
                        unoptimized={true}
                        priority={imageIndex === 0}
                        loading={imageIndex === 0 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <div className="text-4xl mb-4 flex justify-center">
                            <Image
                              src="/duria_icon.png"
                              alt="duria_favicon"
                              width={40}
                              height={40}
                              unoptimized={true}
                              priority={imageIndex === 0}
                            />
                          </div>
                          <div className="text-lg font-semibold mb-2">
                            Durian Product
                          </div>
                          <div className="text-sm text-gray-500">
                            {productName}
                          </div>
                        </div>
                      </div>
                    )
                  ) : imageData.isTextSlide ? (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="text-4xl mb-4 flex justify-center">
                          <Image
                            src="/duria_icon.png"
                            alt="duria_favicon"
                            width={40}
                            height={40}
                            unoptimized={true}
                            priority={imageIndex === 0}
                          />
                        </div>
                        <div className="text-2xl font-bold mb-2 text-primary">
                          {imageData.textContent}
                        </div>
                        <div className="text-sm text-gray-500">
                          Premium Durian Product
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="text-6xl mb-4">🍈</div>
                        <div className="text-lg font-semibold mb-2">
                          Durian Product
                        </div>
                        <div className="text-sm text-gray-500">
                          {productName}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        {cardImages.length > 1 &&
          cardImages.some((img) => img.src !== cardImages[0].src) && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {Array.from(new Set(cardImages.map((img) => img.src))).map(
                (_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => api?.scrollTo(dotIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentSlide === dotIndex
                        ? "bg-primary scale-125"
                        : "bg-white/70 hover:bg-white/90"
                    }`}
                  />
                )
              )}
            </div>
          )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors text-center">
          {productName}
        </h3>
      </div>
    </div>
  );
}
