import React from 'react';
import Button from '../ui/Button';
import VerticalScrollGallery from '../ui/VerticalScrollGallery';

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
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community member working' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community collaboration' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community workspace' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community event' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community member at computer' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community meeting' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community workshop' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community presentation' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community gathering' },
      { src: '/assets/images/temp4hero/66e871553b799f9c879a2407_new-p-800.jpg', alt: 'Community discussion' },
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
        
        <div className="mt-10 lg:mt-0 overflow-hidden rounded-lg">
          <VerticalScrollGallery 
            images={heroContent.images}
            className="w-full"
            speed={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
