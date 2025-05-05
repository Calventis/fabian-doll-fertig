import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
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
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[600px] rounded-xl overflow-hidden">
        {images.map((image, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(images.length)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === idx ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;