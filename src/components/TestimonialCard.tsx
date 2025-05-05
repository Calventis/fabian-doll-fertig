import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  text,
  rating,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-black fill-black' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic flex-grow">"{text}"</p>
      <div className="border-t pt-4 mt-auto">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;