/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ Announcements.tsx
 * ╹ src/components/home/
 */

import { motion } from 'framer-motion';

interface Announcement {
  title: string;
  description: string;
  date: string;
  type: 'info' | 'achievement' | 'event';
  image?: string;
  link?: string;
}

interface Props {
  items?: Announcement[];
}

const defaultAnnouncements: Announcement[] = [
  {
    date: '24-02-2025',
    title: 'NSS Scrutiny Announcement',
    description: 'Our NSS unit is scheduled for scrutiny on 27th February 2025 at Lala Lajpatrai College.',
    type: 'info',
  },
  {
    date: '15-02-2025',
    title: 'Competition Achievements',
    description: 'Our volunteers secured multiple wins in inter-college competitions across Mumbai.',
    type: 'achievement',
    link: '/achievements',
  },
  {
    date: '04-12-2024',
    title: 'Special Camp 2024-2025 Success',
    description: 'The NSS Special Camp to Kuderan Village was a huge success with great community engagement.',
    type: 'event',
  },
  {
    date: '26-11-2024',
    title: 'Quiz & Debate Competition Wins',
    description: 'Our volunteers won 1st place in both Quiz and Debate competitions on Road Safety Awareness.',
    type: 'achievement',
  },
];

const typeStyles = {
  info: 'border-l-primary',
  achievement: 'border-l-status-success',
  event: 'border-l-status-warning',
};

export default function Announcements({ items }: Props) {
  const announcements = items || defaultAnnouncements;
  return (
    <div className="space-y-4">
      {announcements.map((announcement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`border border-swiss-gray-200 border-l-4 ${typeStyles[announcement.type as keyof typeof typeStyles]} p-6 hover:border-swiss-gray-300 transition-colors`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
            {announcement.image && (
              <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <span className="text-label text-swiss-gray-400">{announcement.date}</span>
                <span className="text-label text-primary uppercase">
                  {announcement.type === 'achievement' && 'Achievement'}
                  {announcement.type === 'info' && 'Announcement'}
                  {announcement.type === 'event' && 'Event'}
                </span>
              </div>
              <h4 className="text-caption md:text-title font-semibold text-text mb-2">{announcement.title}</h4>
              <p className="text-caption md:text-body text-swiss-gray-600">{announcement.description}</p>
              {announcement.link && (
                <a
                  href={announcement.link}
                  className="inline-flex items-center gap-2 text-caption text-primary mt-3 hover:underline"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
