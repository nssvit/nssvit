/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CategoryOverview.tsx
 * ╹ src/components/events/
 */

import { motion } from 'framer-motion';

interface Props {
  name: string;
  img: string;
  description: string;
  eventCount: number;
}

export default function CategoryOverview({ name, img, description, eventCount }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
    >
      <div className="md:col-span-5 relative overflow-hidden border border-swiss-gray-200">
        <img
          src={img}
          alt={name}
          className="w-full h-48 md:h-80 object-cover md:grayscale md:hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-text/80 p-3 md:p-4">
          <h3 className="text-caption md:text-title font-semibold text-white">{name}</h3>
        </div>
      </div>

      <div className="md:col-span-7 flex flex-col justify-center">
        <p className="text-caption md:text-body text-swiss-gray-600 mb-4 md:mb-6">{description}</p>
        <div className="flex items-center gap-2 text-xs md:text-caption text-swiss-gray-500">
          <span className="w-6 md:w-8 h-px bg-primary"></span>
          {eventCount} events in this category
        </div>
      </div>
    </motion.div>
  );
}
