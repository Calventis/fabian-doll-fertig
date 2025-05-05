import React, { useState } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Vielen Dank für Ihre Anfrage. Wir werden Sie umgehend kontaktieren.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div>
          <label htmlFor="service" className="block mb-2 font-medium text-gray-700">
            Leistung
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">Bitte auswählen</option>
            <option value="floor-cleaning">Fußboden-Grundreinigung</option>
            <option value="glass-cleaning">Glasreinigung</option>
            <option value="facade-cleaning">Fassadenreinigung</option>
            <option value="carpet-cleaning">Teppichreinigung</option>
            <option value="shutter-cleaning">Rolllädenreinigung</option>
            <option value="car-interior-cleaning">Auto-Innenraumreinigung</option>
            <option value="carwash-cleaning">Waschhallenreinigung</option>
            <option value="winter-service">Winterdienst</option>
            <option value="graffiti-removal">Graffitientfernung</option>
            <option value="special-orders">Sonderaufträge</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        ></textarea>
      </div>

      {submitStatus.message && (
        <div
          className={`p-4 rounded ${
            submitStatus.success ? 'bg-gray-100 text-black' : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;