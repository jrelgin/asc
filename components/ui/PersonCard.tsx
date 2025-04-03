import React from 'react';
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const PersonCard = ({ name, role, image, bio }: PersonCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{role}</p>
      
      {bio && (
        <p className="text-sm text-gray-600">{bio}</p>
      )}
    </div>
  );
};

export default PersonCard;
