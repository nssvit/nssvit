/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ FAQAccordion.tsx
 * ╹ src/components/shared/
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQ[];
}

// Default FAQ data as fallback
const defaultFaqs: FAQ[] = [
  {
    question: 'Who can join NSS?',
    answer: "Any First Year student enrolled in our college can join NSS if passionate about community service and leadership.",
  },
  {
    question: 'How can I join NSS?',
    answer: "Fill out the interview registration form on our website. Interviews are held at the beginning of each academic year.",
  },
  {
    question: 'What events does NSS conduct?',
    answer: "Community service, health camps, environmental programs, literacy drives, blood donation camps, and workshops.",
  },
  {
    question: 'When are events conducted?',
    answer: "Events are held exclusively on weekends to balance service and academics.",
  },
  {
    question: 'Is attending camp compulsory?',
    answer: "Yes, attending at least one camp in your 2-year NSS journey is required. Selection is based on hours completed.",
  },
];

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Use provided FAQs or fallback to defaults
  const faqData = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="space-y-2">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`border ${activeIndex === index ? 'border-primary' : 'border-swiss-gray-200'} transition-colors`}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="text-caption font-medium text-text pr-4">{item.question}</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="flex-shrink-0 text-swiss-gray-400"
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.15 }}
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-caption text-swiss-gray-600">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
