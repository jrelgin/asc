import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  label,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
}: ButtonProps) => {
  const baseStyles = 'inline-block rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-[#0FD18B] text-white hover:bg-[#0ABF7D]',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-[#0FD18B] text-[#0FD18B] hover:bg-[#E6F7F4]',
  };
  
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {label}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonStyles}>
      {label}
    </button>
  );
};

export default Button;
