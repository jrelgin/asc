import React from 'react';
import PersonCard from '../ui/PersonCard';

const Organizers = () => {
  // This would eventually come from TinaCMS
  const content = {
    title: 'Our Organizers',
    team: [
      {
        name: 'Pame Barba',
        role: 'Organizational Coach',
        company: 'Hola Pame',
        image: '/assets/images/temp4hero/lex.jpeg',
        bio: 'Pame is an organizational coach and consultant. She writes start something! A newsletter for creative humans who want to design a better future.'
      },
      {
        name: 'Laura Green',
        role: 'Strategist',
        company: 'Impact Vector',
        image: '/assets/images/temp4hero/lex.jpeg',
        bio: 'Laura is a mother, gardener, and chart nerd strategizing growth that means more than money - especially for nonprofits & entrepreneurs who want to run businesses without becoming business people.'
      },
      {
        name: 'Lex Roman',
        role: 'UX Designer',
        company: 'Website',
        image: '/assets/images/temp4hero/lex.jpeg',
        bio: 'Lex Roman empowers creatives to book more clients through the art and science of marketing experimentation.'
      },
      {
        name: 'Jason Elgin',
        role: 'UX Designer',
        company: 'Signal Lantern',
        image: '/assets/images/temp4hero/lex.jpeg',
        bio: 'Atlanta-based UX designer with expertise in digital products. Enjoys running, gardening, & drawing.'
      }
    ]
  };

  return (
    <section id="organizers" className="py-20 md:py-28 px-6 md:px-12 bg-[#FDF3E1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.team.map((person, index) => (
            <PersonCard
              key={index}
              name={person.name}
              role={person.role}
              company={person.company}
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
