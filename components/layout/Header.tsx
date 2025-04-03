import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white">
      <div className="logo">
        {/* Logo placeholder - replace with actual logo */}
        <Link href="/" className="text-xl font-bold">
          Our Community
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
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
