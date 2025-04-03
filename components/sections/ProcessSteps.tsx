import React from 'react';
import StepCard from '../ui/StepCard';

const ProcessSteps = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Be a Part of it',
    description: 'Follow these simple steps to join our community.',
    steps: [
      {
        number: 1,
        title: 'Get the newsletter',
        description: 'Sign up to receive our weekly updates and community news.',
        icon: '/icons/newsletter.svg'
      },
      {
        number: 2,
        title: 'Join the Slack',
        description: 'Connect with community members and join the conversation.',
        icon: '/icons/slack.svg'
      },
      {
        number: 3,
        title: 'Meet us in real life',
        description: 'Attend our monthly meetups and special events.',
        icon: '/icons/meetup.svg'
      }
    ]
  };

  return (
    <section id="process" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
