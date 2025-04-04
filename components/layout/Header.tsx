'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page navigation
      window.history.pushState({}, '', `/#${sectionId}`);
    }
  };

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
        <a 
          href="#why-join" 
          onClick={scrollToSection('why-join')} 
          className="hover:text-brand-primary transition-colors cursor-pointer"
        >
          Why Join?
        </a>
        <a 
          href="#who-we-are" 
          onClick={scrollToSection('who-we-are')} 
          className="hover:text-brand-primary transition-colors cursor-pointer"
        >
          Who We Are
        </a>
        <a 
          href="#process" 
          onClick={scrollToSection('process')} 
          className="hover:text-brand-primary transition-colors cursor-pointer"
        >
          Process
        </a>
        <a 
          href="#organizers" 
          onClick={scrollToSection('organizers')} 
          className="hover:text-brand-primary transition-colors cursor-pointer"
        >  
          Organizers
        </a>
      </nav>
      <div className="flex space-x-4">
        <a 
          href="#slack" 
          onClick={scrollToSection('slack')}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary-dark transition-colors"
        >
          Join Us
        </a>
      </div>
    </header>
  );
};

export default Header;
