'use client';

import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[selectedImage]}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image: string, index: number) => (
          <div 
            key={index} 
            className={`aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
              selectedImage === index 
                ? 'ring-4 ring-primary ring-offset-2 scale-105' 
                : 'hover:scale-110'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 