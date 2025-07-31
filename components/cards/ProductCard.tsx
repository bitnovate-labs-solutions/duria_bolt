import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  isNew 
}: ProductCardProps) {
  return (
    <Link href={`/shop/${id}`}>
      <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary/90">
              New
            </Badge>
          )}
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 bg-white/90 text-gray-700"
          >
            {category}
          </Badge>
        </div>
        <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          {price && (
            <p className="font-semibold text-primary">
              {price}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}