import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import WhyJoin from '../components/sections/WhyJoin';
import WhoWeAre from '../components/sections/WhoWeAre';
import ProcessSteps from '../components/sections/ProcessSteps';
import Organizers from '../components/sections/Organizers';
import SlackCommunity from '../components/sections/SlackCommunity';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyJoin />
      <WhoWeAre />
      <ProcessSteps />
      <Organizers />
      <SlackCommunity />
    </Layout>
  );
}
