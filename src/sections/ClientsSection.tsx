import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

const ClientsSection: React.FC = () => {
  const clients = [
    { image: 'https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Kunden/Screenshot%202025-05-01%20234451.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvS3VuZGVuL1NjcmVlbnNob3QgMjAyNS0wNS0wMSAyMzQ0NTEucG5nIiwiaWF0IjoxNzQ2NDIwODA5LCJleHAiOjczNDcwNjEzMjgwOX0.ydSoTNTLBpodKRuqadpxE4FUSll1b6HgfNMjFM8Zwtc', alt: 'Client 1' },
    { image: 'https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Kunden/unnamed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvS3VuZGVuL3VubmFtZWQucG5nIiwiaWF0IjoxNzQ2NDIwODMzLCJleHAiOjM1MjE0MjkxNjgzM30.gM3ejcjMjF_cQ9TeQVO_DYQ8GRezFwyYpfLgYSIp5mI', alt: 'Client 2' },
    { image: 'https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Kunden/mcdonalds-the-m-logo-1968.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvS3VuZGVuL21jZG9uYWxkcy10aGUtbS1sb2dvLTE5NjguanBnIiwiaWF0IjoxNzQ2NDIwODU3LCJleHAiOjEyNTMxNzMyODU3fQ.QSL0ov6_DSuV9e7seCmYb20qdRzoJIvC1HFx4LlfqX0', alt: 'Client 3' },
    { image: 'https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Kunden/Screenshot_2024-08-16_215438-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvS3VuZGVuL1NjcmVlbnNob3RfMjAyNC0wOC0xNl8yMTU0MzgtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NDY0MjA4ODAsImV4cCI6ODc0NzQxMjg4MH0.sXCLhLc64fd3Od-EJuv7xMXPHviMkCFAF7-UZKooMsU', alt: 'Client 4' },
    { image: 'https://fvlvtfzdbotdsuibsiyb.supabase.co/storage/v1/object/sign/media-doll/Fabian%20Doll%20Website/Kunden/Kirchenkreis%20Iserlohn%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzJmMWM1M2I5LTdjZjEtNDg0Zi1hMTk3LTZiM2Y4Njc3ZWI2YyJ9.eyJ1cmwiOiJtZWRpYS1kb2xsL0ZhYmlhbiBEb2xsIFdlYnNpdGUvS3VuZGVuL0tpcmNoZW5rcmVpcyBJc2VybG9obiBsb2dvLnBuZyIsImlhdCI6MTc0NjQyMDg5OSwiZXhwIjo5MDk0MzA4ODk5fQ.CJd3LHKl6p5TVeT5OFoOc_1a0nJnw7uYwufLMRbAQoQ', alt: 'Client 5' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionTitle
            title="Unsere Kunden vertrauen uns"
            subtitle="Schließen Sie sich über 250 zufriedenen Kunden an"
            centered
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center mt-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-6 transition-all duration-300"
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="relative max-h-24 w-auto object-contain transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientsSection;