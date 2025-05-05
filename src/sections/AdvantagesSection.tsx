import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, Handshake, UserRound, Users, CheckCircle, Leaf, Recycle, Clock, Timer, Star } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: Calendar,
      title: 'Über 15 Jahre Erfahrung',
      description: 'Erfahrung',
    },
    {
      icon: Handshake,
      title: 'Maßgeschneiderte Lösungen',
      description: 'Lösungen',
    },
    {
      icon: UserRound,
      title: 'Persönlicher Ansprechpartner',
      description: 'Ansprechpartner',
    },
    {
      icon: Users,
      title: 'Zertifizierte Reinigungskräfte',
      description: 'Reinigungskräfte',
    },
    {
      icon: CheckCircle,
      title: 'Namhafte Kunden',
      description: 'Kunden',
    },
    {
      icon: Leaf,
      title: 'Umweltfreundlich',
      description: 'Umweltfreundlich',
    },
    {
      icon: Recycle,
      title: 'QualiCheck System',
      description: 'System',
    },
    {
      icon: Clock,
      title: '24/7 Verfügbarkeit',
      description: 'Verfügbarkeit',
    },
    {
      icon: Timer,
      title: 'Schnell und zuverlässig',
      description: 'zuverlässig',
    },
    {
      icon: Star,
      title: 'Positive Bewertungen',
      description: 'Bewertungen',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Überzeugen Sie sich selbst"
            subtitle="Warum Fabian Doll Gebäudereinigung? – Weil wir mehr bieten als nur Sauberkeit"
            centered
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-12">
            <h3 className="text-xl text-center mb-12">Ihre Vorteile auf einen Blick:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="mb-4 text-black">
                    <advantage.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{advantage.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AdvantagesSection;