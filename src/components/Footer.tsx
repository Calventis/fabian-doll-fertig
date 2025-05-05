import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 100; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Logo-Doll-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvTG9nby1Eb2xsLXNjYWxlZC5qcGciLCJpYXQiOjE3NDY0MTc5NDgsImV4cCI6MjYyNDk4ODk5NDh9.7BAvNF0l4sJCVh8VyVJRHo69oAgl8PYZLQFgOIQW9eU" 
              alt="Fabian Doll Gebäudereinigung Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              Professionelle Reinigungslösungen für Unternehmen und Privatkunden.
              Zuverlässig, gründlich und termingerecht.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Zur Feldlage 10A<br />58099 Hagen</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+491705514335" className="text-gray-400 hover:text-white transition-colors">
                  +49 170 5514335
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:gebaeudereinigung.doll@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  gebaeudereinigung.doll@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mo - Fr: 8:00 - 16:00 Uhr</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Service</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">
                  Referenzen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fabian Doll Gebäudereinigung. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <a href="#impressum" className="text-gray-400 hover:text-white text-sm">Impressum</a>
            <a href="#datenschutz" className="text-gray-400 hover:text-white text-sm">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;