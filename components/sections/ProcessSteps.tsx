import React from 'react';
import StepCard from '../ui/StepCard';

const ProcessSteps = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Be a Part of It',
    description: 'At Atlanta Solopreneurs, we empower local entrepreneurs to thrive. Discover new opportunities, build connections, and grow your business with us.',
    steps: [
      {
        title: 'Get the newsletter',
        description: "Here's where you'll get all your updates on other members, upcoming events and cool stuff happening in Atlanta we think you should know about. You can also promote your own stuff!",
        icon: '/assets/icons/layout.svg',
        linkText: 'Subscribe',
        linkUrl: '#subscribe'
      },
      {
        title: 'Join the Slack',
        description: 'This the main place we hang out to get to know each other, start a conversation to ask or offer support and help us plan our next event.',
        icon: '/assets/icons/convo.svg',
        linkText: 'Join Slack',
        linkUrl: '#slack'
      },
      {
        title: 'Meet up in real life',
        description: "Come to an event or plan your own. Members create what they want to see. We'll help you promote it.",
        icon: '/assets/icons/pinpoint.svg',
        linkText: 'See Our Events',
        linkUrl: '#events'
      }
    ]
  };

  return (
    <section id="process" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            {content.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {content.steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              linkText={step.linkText}
              linkUrl={step.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
