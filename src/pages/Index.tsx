
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import AgentInfo from '@/components/home/AgentInfo';
import UseCases from '@/components/home/UseCases';
import Process from '@/components/home/Process';
import WhyUs from '@/components/home/WhyUs';
import Resources from '@/components/home/Resources';
import ContactCTA from '@/components/home/ContactCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <AgentInfo />
        <UseCases />
        <Process />
        <WhyUs />
        <Resources />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
