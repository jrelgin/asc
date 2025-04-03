import React from 'react';
import PersonCard from '../ui/PersonCard';

const Organizers = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Our Organizers',
    description: 'Meet the team that brings our community together.',
    team: [
      {
        name: 'Sarah Smith',
        role: 'Community Lead',
        image: '/placeholder-person-1.jpg',
        bio: 'Passionate about building supportive communities for independent professionals.'
      },
      {
        name: 'Alexander Chen',
        role: 'Events Coordinator',
        image: '/placeholder-person-2.jpg',
        bio: 'Organizes our monthly meetups and special community events.'
      },
      {
        name: 'Ellie Taylor',
        role: 'Content Strategist',
        image: '/placeholder-person-3.jpg',
        bio: 'Creates valuable resources and content for our community members.'
      },
      {
        name: 'James Lee',
        role: 'Member Relations',
        image: '/placeholder-person-4.jpg',
        bio: 'Ensures our community is inclusive and supportive for all members.'
      }
    ]
  };

  return (
    <section id="organizers" className="py-16 px-6 md:px-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.team.map((person, index) => (
            <PersonCard
              key={index}
              name={person.name}
              role={person.role}
              image={person.image}
              bio={person.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
