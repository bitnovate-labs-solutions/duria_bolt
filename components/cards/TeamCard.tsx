import { Card, CardContent } from '@/components/ui/card';

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export default function TeamCard({ name, position, image, bio }: TeamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 bg-white">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2 text-black">{name}</h3>
        <p className="text-primary font-semibold mb-4">{position}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
}