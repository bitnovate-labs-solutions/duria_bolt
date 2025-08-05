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
      <Card className="cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="border-primary text-primary">{source}</Badge>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              {date}
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 line-clamp-2 text-black">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-1">{excerpt}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}