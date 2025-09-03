import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  price?: string;
  isNew?: boolean;
}

export default function ProductCard({
  id,
  title,
  image,
  description,
  category,
  price,
  isNew,
}: ProductCardProps) {
  return (
    // TEMPORARILY HIDDEN (NO DETAILS YET FOR PRODUCTS)
    // <Link href={`/products/${id}`}>
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 rounded-2xl border border-gray-200 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={384}
          className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isNew && (
          <Badge className="absolute top-6 left-6 bg-primary hover:bg-primary/90 rounded-full px-4 py-2 text-sm md:text-base">
            New
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="absolute top-6 right-6 bg-black/90 text-white rounded-full px-4 py-2 text-sm md:text-base"
        >
          {category}
        </Badge>
      </div>
      <CardContent className="p-8 flex-1 flex flex-col">
        <h3 className="font-bold text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description.includes("*") ? (
          <ul className="text-gray-500 text-base md:text-lg mb-6 leading-relaxed flex-1 space-y-1">
            {description
              .split("*")
              .filter((item) => item.trim())
              .map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{item.trim()}</span>
                </li>
              ))}
          </ul>
        ) : (
          <div 
            className="text-gray-500 text-base md:text-lg mb-6 leading-relaxed flex-1"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {price && (
          <p className="font-bold text-xl md:text-2xl text-primary mt-auto">
            {price}
          </p>
        )}
      </CardContent>
    </Card>
    // </Link>
  );
}
