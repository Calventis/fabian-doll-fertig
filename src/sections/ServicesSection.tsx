import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCarousel from '../components/ServiceCarousel';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/services';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Unsere Reinigungsleistungen"
            subtitle="Professionelle Lösungen für alle Reinigungsanforderungen"
            centered
          />
        </AnimatedSection>

        <AnimatedSection>
          <ServiceCarousel services={services} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;