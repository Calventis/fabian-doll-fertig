import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import { ServiceType } from '../types';

interface ServiceCarouselProps {
  services: ServiceType[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
  });

  return (
    <div className="relative px-4 py-8">
      <div ref={sliderRef} className="keen-slider min-h-[400px]">
        {services.map((service) => (
          <div
            key={service.id}
            className="keen-slider__slide rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(services.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCarousel;