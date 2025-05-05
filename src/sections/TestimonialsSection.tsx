import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedSection from '../components/AnimatedSection';
import { testimonials } from '../data/testimonials';
import Marquee from 'react-fast-marquee';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Das sagen unsere Kunden"
            centered
            light
          />
          <div className="flex items-center justify-center gap-2 mb-12">
            <p className="text-white">Ausgezeichnet von Google ⭐ 4.9 von 5</p>
          </div>
        </AnimatedSection>

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-[400px] mx-4">
                <TestimonialCard
                  name={testimonial.name}
                  company=""
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;