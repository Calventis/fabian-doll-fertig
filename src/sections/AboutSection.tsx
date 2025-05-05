import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src="https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/neue%20stock%20images/beispielfoto.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvbmV1ZSBzdG9jayBpbWFnZXMvYmVpc3BpZWxmb3RvLmpwZyIsImlhdCI6MTc0NjQyMTMyNSwiZXhwIjoyODE4NjQ1MzI1fQ.HQwGxs7su0itjD2GHnlv3CKc174yCnspwCA1PE4xsw4"
                alt="Über Fabian Doll Gebäudereinigung"
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionTitle
              title="Über Fabian Doll Gebäudereinigung"
              subtitle="Ihr familiärer Partner für professionelle Reinigung seit 2019"
            />

            <p className="text-gray-600 mb-6">
              Seit unserer Gründung am 15. März 2019 legen wir besonderen Wert auf ein familiäres 
              Umfeld - sowohl innerhalb unseres Teams als auch im Umgang mit unseren Kunden. 
              Regelmäßige Firmengrillen stärken unseren Zusammenhalt und fördern den persönlichen 
              Austausch. Wir haben uns bewusst dafür entschieden, unsere Firma überschaubar zu 
              halten, um jedem einzelnen Kunden die Aufmerksamkeit zu bieten, die er verdient.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 bg-gray-100 p-1 rounded-full">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Familiäres Arbeitsumfeld</h3>
                  <p className="text-gray-600">
                    Wir pflegen eine persönliche Atmosphäre und starken Teamzusammenhalt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 bg-gray-100 p-1 rounded-full">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Persönliche Kundenbetreuung</h3>
                  <p className="text-gray-600">
                    Durch unsere bewusst klein gehaltene Struktur garantieren wir individuelle Betreuung.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 bg-gray-100 p-1 rounded-full">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Langfristige Kundenbeziehungen</h3>
                  <p className="text-gray-600">
                    Wir setzen auf nachhaltige Partnerschaften und enge Kundenbindung.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => scrollToSection('contact')}>
              Kontaktieren Sie uns
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;