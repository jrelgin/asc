import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white">
      <div className="logo">
        <Link href="/">
          <Image 
            src="/assets/images/wordMark.svg" 
            alt="Logo" 
            width={180} 
            height={32} 
            className="h-8 w-auto" 
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link href="#why-join" className="hover:text-green-500 transition-colors">
          Why Join?
        </Link>
        <Link href="#who-we-are" className="hover:text-green-500 transition-colors">
          Who We Are
        </Link>
        <Link href="#process" className="hover:text-green-500 transition-colors">
          Process
        </Link>
        <Link href="#organizers" className="hover:text-green-500 transition-colors">
          Organizers
        </Link>
      </nav>
      <div className="flex space-x-4">
        <Link 
          href="#slack" 
          className="bg-[#0FD18B] text-white px-4 py-2 rounded-md hover:bg-[#0ABF7D] transition-colors"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
