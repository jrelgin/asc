import React from 'react';

const WhoWeAre = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Who We Are',
    description: 'There\'s many networking groups out there! This group was created for solo business owners and freelancers, independent (i.e. an original company, not a subsidiary or a franchise), and Atlanta area-based professionals.',
    missionStatement: 'We seek to be a safe space for entrepreneurs who feel less welcome in other organizations, particularly people who identify as women, BIPOC, non-binary, and/or transgender though everyone is welcome.'
  };

  return (
    <section id="who-we-are" className="py-16 px-6 md:px-12 bg-[#FDF3E1]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {content.title}
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          {content.description}
        </p>
        
        <div className="border-l-4 border-brand-accent-DEFAULT pl-6 py-2 text-left max-w-2xl mx-auto">
          <p className="text-lg italic text-gray-700">
            {content.missionStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
