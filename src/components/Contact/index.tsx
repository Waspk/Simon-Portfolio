import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm';
import { FormState } from './types';
import { sendEmail } from '../../utils/email';
import { emailConfig } from '../../config/email';

export function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const validateConfig = () => {
      const missingVars = [];
      if (!emailConfig.serviceId) missingVars.push('Service ID');
      if (!emailConfig.templateId) missingVars.push('Template ID');
      if (!emailConfig.publicKey) missingVars.push('Public Key');
      
      if (missingVars.length > 0) {
        console.error('Missing EmailJS configuration:', missingVars.join(', '));
        toast.error('Contact form is temporarily unavailable');
      }
    };
    validateConfig();
  }, []);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formState);
      toast.success('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Send email error:', error);
      
      const errorMessage = error.code === 'INVALID_TEMPLATE'
        ? 'Contact form is temporarily unavailable. Please try again later.'
        : 'Failed to send message. Please try again.';
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <ContactForm
          formState={formState}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}