export type ServiceType = {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  icon?: string;
};

export type TestimonialType = {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
};