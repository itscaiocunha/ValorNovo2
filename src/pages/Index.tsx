
import { useEffect } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CompanyStats from '@/components/CompanyStats';
import About from '@/components/About';
import ClientsCarousel from '@/components/ClientsCarousel';
import ContentLibrary from '@/components/ContentLibrary';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements();
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <CompanyStats />
        <About />
        <ClientsCarousel />
        <ContentLibrary />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
