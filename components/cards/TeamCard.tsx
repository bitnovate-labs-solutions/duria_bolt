import { Card, CardContent } from '@/components/ui/card';

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export default function TeamCard({ name, position, image, bio }: TeamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-1">{name}</h3>
                    <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
}