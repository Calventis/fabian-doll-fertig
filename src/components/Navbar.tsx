import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isStaticPage, setIsStaticPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      setIsStaticPage(hash === '#impressum' || hash === '#datenschutz');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isStaticPage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className="cursor-pointer"
            onClick={() => window.location.hash = ''}
          >
            <img 
              src="https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Logo%20Doll%20transparent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvTG9nbyBEb2xsIHRyYW5zcGFyZW50LnBuZyIsImlhdCI6MTc0NjQxNzc5MCwiZXhwIjoyNjI0OTg4OTc5MH0.LsTLskMJKGbFrUTQpCjNRoylBhXSGM5RB8-s4iE2Mog" 
              alt="Fabian Doll Gebäudereinigung Logo" 
              className="h-16 md:h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink 
                title="Leistungen" 
                scrolled={scrolled || isStaticPage}
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => scrollToSection('services'), 0);
                }}
              />
              <NavLink 
                title="Über uns" 
                scrolled={scrolled || isStaticPage}
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => scrollToSection('about'), 0);
                }}
              />
              <NavLink 
                title="Referenzen" 
                scrolled={scrolled || isStaticPage}
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => scrollToSection('testimonials'), 0);
                }}
              />
              <NavLink 
                title="Kontakt" 
                scrolled={scrolled || isStaticPage}
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => scrollToSection('contact'), 0);
                }}
              />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                scrolled || isStaticPage ? 'text-black' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[400px] opacity-100 shadow-xl'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink 
            title="Leistungen" 
            onClick={() => {
              setIsOpen(false);
              window.location.hash = '';
              setTimeout(() => scrollToSection('services'), 0);
            }} 
          />
          <MobileNavLink 
            title="Über uns" 
            onClick={() => {
              setIsOpen(false);
              window.location.hash = '';
              setTimeout(() => scrollToSection('about'), 0);
            }} 
          />
          <MobileNavLink 
            title="Referenzen" 
            onClick={() => {
              setIsOpen(false);
              window.location.hash = '';
              setTimeout(() => scrollToSection('testimonials'), 0);
            }} 
          />
          <MobileNavLink 
            title="Kontakt" 
            onClick={() => {
              setIsOpen(false);
              window.location.hash = '';
              setTimeout(() => scrollToSection('contact'), 0);
            }} 
          />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  title: string;
  scrolled: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, scrolled, onClick }) => (
  <button
    onClick={onClick}
    className={`font-medium transition-colors duration-300 hover:text-gray-600 ${
      scrolled ? 'text-black' : 'text-white'
    }`}
  >
    {title}
  </button>
);

interface MobileNavLinkProps {
  title: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left py-2 text-gray-800 font-medium border-b border-gray-100 hover:text-gray-600"
  >
    {title}
  </button>
);

export default Navbar;