import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import ClientsSection from './sections/ClientsSection';
import AdvantagesSection from './sections/AdvantagesSection';
import { AnimatedHero } from './components/ui/animated-hero';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function App() {
  const [currentPage, setCurrentPage] = React.useState('main');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#impressum') {
        setCurrentPage('impressum');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#datenschutz') {
        setCurrentPage('datenschutz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('main');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {currentPage === 'impressum' ? (
          <Impressum />
        ) : currentPage === 'datenschutz' ? (
          <Datenschutz />
        ) : (
          <>
            <AnimatedHero />
            <ClientsSection />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <AdvantagesSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;