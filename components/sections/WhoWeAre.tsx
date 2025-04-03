import React from 'react';

const WhoWeAre = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Who We Are',
    description: 'A community of independent professionals supporting each other on our entrepreneurial journeys. We believe that working independently doesn\'t mean working alone.',
    missionStatement: 'Our mission is to create a supportive environment where independent professionals can find community, resources, and opportunities to grow.'
  };

  return (
    <section id="who-we-are" className="py-16 px-6 md:px-12 bg-orange-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {content.title}
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          {content.description}
        </p>
        
        <div className="border-l-4 border-orange-400 pl-6 py-2 text-left max-w-2xl mx-auto">
          <p className="text-lg italic text-gray-700">
            {content.missionStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
