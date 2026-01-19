/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ ContactForm.tsx
 * ╹ src/components/shared/
 */

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  sanityProjectId: string;
  sanityDataset: string;
  sanityToken?: string; // Optional write token for mutations
}

type InquiryType = 'general' | 'volunteer' | 'partnership' | 'event' | 'other';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: InquiryType;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  inquiryType: 'general',
  subject: '',
  message: '',
};

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'volunteer', label: 'Volunteer Interest' },
  { value: 'partnership', label: 'Partnership / NGO Collaboration' },
  { value: 'event', label: 'Event Collaboration' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm({ sanityProjectId, sanityDataset, sanityToken }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Create the document to submit
      const document = {
        _type: 'contactSubmission',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        organization: formData.organization || undefined,
        inquiryType: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString(),
        status: 'new',
      };

      // If we have a token, submit directly to Sanity
      if (sanityToken) {
        const response = await fetch(
          `https://${sanityProjectId}.api.sanity.io/v2024-01-01/data/mutate/${sanityDataset}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sanityToken}`,
            },
            body: JSON.stringify({
              mutations: [{ create: document }],
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      } else {
        // Fallback: Submit to an API endpoint (you'd need to create this)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(document),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-swiss-gray-900 rounded-2xl border border-swiss-gray-200 dark:border-swiss-gray-800 p-6 sm:p-8">
      <h2 className="text-headline text-2xl font-bold text-text mb-2">Get in Touch</h2>
      <p className="text-body text-swiss-gray-600 mb-6">
        Have questions or want to collaborate? We'd love to hear from you.
      </p>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
        >
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Thank you for reaching out. We'll get back to you soon.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-green-700 dark:text-green-300 hover:underline font-medium"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email Row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone & Organization Row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-text mb-1.5">
                Organization / College
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your organization"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-text mb-1.5">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Brief subject of your inquiry"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-swiss-gray-300 dark:border-swiss-gray-700 bg-white dark:bg-swiss-gray-800 text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 text-sm">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
