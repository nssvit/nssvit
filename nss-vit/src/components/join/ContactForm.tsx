/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ ContactForm.tsx
 * ╹ src/components/join/
 */

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
}

const interestOptions = [
  { value: 'volunteer', label: 'Become a Volunteer' },
  { value: 'collaborate', label: 'Collaborate on Events' },
  { value: 'sponsor', label: 'Sponsor/Partner' },
  { value: 'ngo', label: 'NGO Partnership' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', interest: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-title text-text mb-2">Thank You!</h3>
        <p className="text-body text-swiss-gray-600">
          We've received your message and will get back to you within 2-3 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary hover:underline text-caption font-semibold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-caption text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-caption font-semibold text-text mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-caption font-semibold text-text mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-caption font-semibold text-text mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Interest */}
        <div>
          <label htmlFor="interest" className="block text-caption font-semibold text-text mb-2">
            I'm interested in <span className="text-red-500">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
          >
            <option value="">Select an option</option>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-caption font-semibold text-text mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors"
          placeholder="What's this about?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-caption font-semibold text-text mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-swiss-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Tell us more about how you'd like to get involved..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:bg-swiss-gray-300 text-white px-8 py-3 text-caption font-semibold transition-colors"
      >
        {status === 'submitting' ? (
          <>
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
