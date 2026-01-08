/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ AnnouncementBanner.tsx
 * ╹ src/components/home/
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Announcement } from '../../lib/sanity';
import { urlFor } from '../../lib/sanity';

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

const typeStyles = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-800 dark:text-blue-200',
    icon: 'ℹ️',
  },
  event: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-800 dark:text-purple-200',
    icon: '📅',
  },
  achievement: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-800 dark:text-amber-200',
    icon: '🏆',
  },
  urgent: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-800 dark:text-red-200',
    icon: '🚨',
  },
};

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load dismissed announcements from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('dismissedAnnouncements');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setDismissedIds(new Set(parsed));
      } catch (e) {
        // Invalid data, ignore
      }
    }
  }, []);

  // Filter out dismissed announcements
  const visibleAnnouncements = announcements.filter((a) => !dismissedIds.has(a._id));

  // Auto-rotate announcements
  useEffect(() => {
    if (visibleAnnouncements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleAnnouncements.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [visibleAnnouncements.length]);

  const handleDismiss = (id: string) => {
    const newDismissed = new Set(dismissedIds);
    newDismissed.add(id);
    setDismissedIds(newDismissed);
    localStorage.setItem('dismissedAnnouncements', JSON.stringify([...newDismissed]));

    // Move to next announcement if we dismissed the current one
    if (currentIndex >= visibleAnnouncements.length - 1) {
      setCurrentIndex(0);
    }
  };

  if (visibleAnnouncements.length === 0) {
    return null;
  }

  const currentAnnouncement = visibleAnnouncements[currentIndex];
  const styles = typeStyles[currentAnnouncement.type] || typeStyles.info;

  return (
    <div className={`relative ${styles.bg} ${styles.border} border-b`}>
      <div className="mx-auto max-w-[1400px] px-6 py-3 sm:px-8 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAnnouncement._id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-xl flex-shrink-0" role="img" aria-label={currentAnnouncement.type}>
                {styles.icon}
              </span>

              {currentAnnouncement.image && (
                <img
                  src={urlFor(currentAnnouncement.image).width(48).height(48).url()}
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover flex-shrink-0 hidden sm:block"
                />
              )}

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${styles.text} truncate`}>
                  {currentAnnouncement.isPinned && (
                    <span className="inline-block mr-2">📌</span>
                  )}
                  {currentAnnouncement.title}
                </p>
                <p className={`text-xs ${styles.text} opacity-80 truncate hidden sm:block`}>
                  {currentAnnouncement.content}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {currentAnnouncement.link && (
                <a
                  href={currentAnnouncement.link}
                  className={`text-xs font-medium ${styles.text} hover:underline hidden sm:inline`}
                >
                  {currentAnnouncement.linkText || 'Learn More'} →
                </a>
              )}

              {/* Pagination dots */}
              {visibleAnnouncements.length > 1 && (
                <div className="flex gap-1 mx-2">
                  {visibleAnnouncements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        index === currentIndex
                          ? `${styles.text} bg-current`
                          : `${styles.text} bg-current opacity-30`
                      }`}
                      aria-label={`Go to announcement ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Dismiss button */}
              {currentAnnouncement.isDismissible && (
                <button
                  onClick={() => handleDismiss(currentAnnouncement._id)}
                  className={`p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${styles.text}`}
                  aria-label="Dismiss announcement"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
