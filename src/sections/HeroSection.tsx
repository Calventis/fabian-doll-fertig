import React from 'react';
import Button from '../components/Button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professionelle Gebäudereinigung für Ihr Unternehmen
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Zuverlässige und gründliche Reinigungslösungen für alle Arten von Gebäuden und Büros.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button onClick={() => scrollToSection('contact')}>
              Kostenfreies Angebot
            </Button>
            <Button 
              secondary 
              onClick={() => scrollToSection('services')}
            >
              Unsere Leistungen
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={() => scrollToSection('services')}
          className="text-white focus:outline-none"
          aria-label="Scroll to services"
        >
          <ArrowDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;