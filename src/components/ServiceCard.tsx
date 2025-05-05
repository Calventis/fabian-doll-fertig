import React from 'react';
import { getIconComponent } from '../data/services';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 bg-gray-100 rounded-full">
          <IconComponent size={24} className="text-black" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <div className="mt-auto">
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-gray-500">Leistungen</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="mr-2 text-black">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;