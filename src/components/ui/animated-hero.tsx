import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import Button from "../Button";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Bürogebäude", "Wohnungen", "Mietshäuser", "Praxen", "Geschäfte"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="w-full min-h-screen flex items-center relative"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-white block mb-6">Reinigungen für</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-24">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-white"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white block mt-6">in höchster Qualität</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center">
              Von kleinen Wohnungen bis zu großen Bürokomplexen - wir sind Ihr zuverlässiger Partner 
              für alle Reinigungsaufgaben. Profitieren Sie von unserer langjährigen Erfahrung.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button secondary onClick={() => scrollToSection('contact')} className="gap-4">
              Jetzt anfragen <PhoneCall className="w-4 h-4" />
            </Button>
            <Button onClick={() => scrollToSection('services')} className="gap-4">
              Mehr erfahren <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };