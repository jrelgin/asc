import React from 'react';
import Button from '../ui/Button';
import ImageGallery from '../ui/ImageGallery';

const Hero = () => {
  // This would eventually come from TinaCMS
  const heroContent = {
    title: 'Work for yourself, not by yourself.',
    subtitle: 'Join our supportive community of independent professionals where you can find collaboration, connection, and growth.',
    ctaButton: {
      label: 'Get Started',
      href: '#process',
    },
    images: [
      { src: '/placeholder-1.jpg', alt: 'Community member working' },
      { src: '/placeholder-2.jpg', alt: 'Community collaboration' },
      { src: '/placeholder-3.jpg', alt: 'Community workspace' },
      { src: '/placeholder-4.jpg', alt: 'Community event' },
      { src: '/placeholder-5.jpg', alt: 'Community member at computer' },
      { src: '/placeholder-6.jpg', alt: 'Community meeting' },
    ]
  };

  return (
    <section id="hero" className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {heroContent.subtitle}
          </p>
          <Button 
            label={heroContent.ctaButton.label} 
            href={heroContent.ctaButton.href}
            variant="primary"
            size="large"
          />
        </div>
        
        <div className="mt-10 lg:mt-0">
          <ImageGallery 
            images={heroContent.images}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
