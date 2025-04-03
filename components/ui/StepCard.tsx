import React from 'react';
import Image from 'next/image';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Icon or Step Number */}
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon ? (
          <Image src={icon} alt="" width={32} height={32} />
        ) : (
          <span className="text-blue-500 font-bold text-xl">{number}</span>
        )}
      </div>
      
      {/* Title */}
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;
