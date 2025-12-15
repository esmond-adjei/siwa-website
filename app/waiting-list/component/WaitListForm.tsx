'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import type { FormData, SubmitStatus } from '@/types';

const WaitlistForm = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: '', message: '' });

  useEffect(() => {
    const emailFromUrl = searchParams.get('email');
    if (emailFromUrl) {
      setFormData(prev => ({ ...prev, email: emailFromUrl }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for joining our waitlist! We\'ll be in touch soon.'
      });
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        institution: '',
        message: ''
      });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container max-w-2xl! mx-auto">
      {submitStatus.message && (
        <div 
          className={`mb-4 p-4 rounded ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
        <div>
          <label htmlFor="firstName" className="form-input-label">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-input-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="form-input-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="email"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="form-input-label">Phone</label>
        <PhoneInput
          country={'GH'}
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder='233 111 222 3333'
          style={{
            display: 'flex',
            gap: '20px',
          }}
        />
      </div>

      <div>
        <label htmlFor="institution" className="form-input-label">Institution</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          placeholder="Institution Name (eg: University, Company, NGO)"
          className="form-input"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="form-input-label">
          Notes / Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
          rows={4}
          placeholder="Your message here..."
        />
      </div>
      
      <button 
        type="submit" 
        className="submit-btn w-full bg-black hover:bg-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
      </button>
    </form>
  );
};

export default WaitlistForm;
