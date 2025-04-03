import React from 'react';
import Button from '../ui/Button';

const SlackCommunity = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Join our Slack Community',
    description: 'Connect with fellow independent professionals, share resources, ask questions, and support each other on your entrepreneurial journeys.',
    buttonText: 'Join Slack',
    buttonLink: '#',
  };

  return (
    <section id="slack" className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {content.title}
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          {content.description}
        </p>
        
        <Button 
          label={content.buttonText} 
          href={content.buttonLink}
          variant="primary"
          size="large"
        />
      </div>
    </section>
  );
};

export default SlackCommunity;
