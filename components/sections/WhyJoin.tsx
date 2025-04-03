import React from 'react';
import Image from 'next/image';

const WhyJoin = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Why Join?',
    description: 'A supportive community for independent professionals to learn, connect, and grow together.',
    benefits: [
      {
        title: 'Growth Network',
        description: 'Connect with like-minded professionals who can help you grow your business.'
      },
      {
        title: 'Knowledge Sharing',
        description: 'Learn from others who have overcome similar challenges in their independent journey.'
      }
    ],
    image: '/placeholder-why-join.jpg'
  };

  return (
    <section id="why-join" className="py-16 px-6 md:px-12 bg-green-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src={content.image}
            alt="Community members collaborating"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {content.description}
          </p>
          
          <div className="space-y-6">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
