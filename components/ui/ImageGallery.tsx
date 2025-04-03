import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
  className?: string;
}

const ImageGallery = ({ images, className = '' }: ImageGalleryProps) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden rounded-lg ${image.className || ''}`}
          style={{ height: index % 3 === 0 ? '240px' : '180px' }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
