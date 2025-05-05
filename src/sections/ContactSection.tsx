import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Kontaktieren Sie uns"
            subtitle="Wir erstellen Ihnen gerne ein unverbindliches Angebot"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-gray-600">Zur Feldlage 10A<br />58099 Hagen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+491705514335" className="hover:underline">+49 170 5514335</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-Mail</h4>
                    <p className="text-gray-600">
                      <a href="mailto:gebaeudereinigung.doll@gmail.com" className="hover:underline">
                        gebaeudereinigung.doll@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Öffnungszeiten</h4>
                    <p className="text-gray-600">Mo - Fr: 8:00 - 16:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Einsatzgebiet</h4>
                <p className="text-gray-600">
                  Wir sind in Hagen und im Umkreis von 50 km für Sie im Einsatz.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="mt-12 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1654825293726!2d7.518906958610068!3d51.40001400382868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b93da3679da183%3A0x87eb1a2afe6a750c!2sFabian%20Doll%20Geb%C3%A4udereinigung!5e0!3m2!1sde!2sde!4v1745789578136!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Fabian Doll Gebäudereinigung"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;