import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface MediaCardProps {
  title: string;
  image: string;
  excerpt: string;
  source: string;
  date: string;
  link?: string;
}

export default function MediaCard({ title, image, excerpt, source, date, link }: MediaCardProps) {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper {...cardProps}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">{source}</Badge>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              {date}
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}