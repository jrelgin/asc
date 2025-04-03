import React from 'react';
import Image from 'next/image';

interface StepCardProps {
  number?: number;
  title: string;
  description: string;
  icon?: string;
}

const StepCard = ({ title, description, icon, linkText, linkUrl }: StepCardProps & { linkText?: string; linkUrl?: string }) => {
  return (
    <div className="flex flex-col items-start p-6">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center mb-5 text-brand-secondary-DEFAULT">
        {icon && (
          <Image 
            src={icon} 
            alt="" 
            width={48} 
            height={48} 
            className="text-brand-secondary-DEFAULT" 
          />
        )}
      </div>
      
      {/* Title */}
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>
      
      {/* Link if provided */}
      {linkText && linkUrl && (
        <a href={linkUrl} className="text-[#0FD18B] font-medium flex items-center group hover:underline">
          {linkText}
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default StepCard;
