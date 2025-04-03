import React from 'react';
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  role: string;
  company?: string;
  image: string;
  bio?: string;
}

const PersonCard = ({ name, role, company, image, bio }: PersonCardProps) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square mb-5 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      
      {/* Name */}
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      
      {/* Company/Role with highlight color */}
      <p className="text-[#0FD18B] font-medium mb-4">{company || role}</p>
      
      {/* Bio */}
      {bio && (
        <p className="text-gray-700 text-sm leading-relaxed max-w-sm">{bio}</p>
      )}
    </div>
  );
};

export default PersonCard;
