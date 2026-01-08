/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ EventAccordion.tsx
 * ╹ src/components/events/
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

interface Event {
  title: string;
  location?: string;
  description: string;
}

interface Props {
  events: Event[];
}

export default function EventAccordion({ events }: Props) {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-title text-text mb-6">Events in this Category</h3>
      {events.map((event, index) => (
        <div
          key={index}
          className={`border transition-colors ${
            expandedEvent === index
              ? 'border-primary'
              : 'border-swiss-gray-200 hover:border-swiss-gray-300'
          }`}
        >
          <button
            onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div>
              <span className="text-title text-text block">{event.title}</span>
              {event.location && (
                <span className="text-caption text-primary flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: expandedEvent === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className={`w-8 h-8 border flex items-center justify-center ${
                expandedEvent === index
                  ? 'border-primary text-primary'
                  : 'border-swiss-gray-200 text-swiss-gray-400'
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {expandedEvent === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-swiss-gray-100">
                  <p className="text-body text-swiss-gray-600 pt-6">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
