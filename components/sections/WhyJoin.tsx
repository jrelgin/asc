import React from 'react';
import Image from 'next/image';

const WhyJoin = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Why Join?',
    description: 'Join us in the Atlanta Solopreneurs Co-op! It\'s lonely starting and running your own business, especially when you\'re going solo. This is a network for meeting others on the same journey, learning alongside each other and growing our businesses together.',
    benefits: [
      {
        title: 'Community Support',
        description: 'We support each other by sharing resources and building networks for referrals, partnerships, and collaborations, creating opportunities for growth and success.'
      },
      {
        title: 'Learning and Promotion',
        description: 'We focus on learning from each other\'s experiences and actively promoting one another\'s work to help everyone achieve their goals.'
      }
    ],
    image: '/assets/images/temp4hero/convo.jpg'
  };

  return (
    <section id="why-join" className="py-20 md:py-28 px-6 md:px-12 bg-[#E6F7F4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative h-[420px] lg:h-[480px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={content.image}
            alt="Community members having a conversation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            {content.title}
          </h2>
          <p className="text-lg mb-12 text-gray-800 leading-relaxed max-w-2xl">
            {content.description}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {content.benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="font-semibold text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
