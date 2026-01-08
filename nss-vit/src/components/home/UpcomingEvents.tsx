/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ UpcomingEvents.tsx
 * ╹ src/components/home/
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Event } from '../../lib/sanity';
import { urlFor } from '../../lib/sanity';

interface UpcomingEventsProps {
  events: Event[];
  maxEvents?: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(eventDate: string): TimeLeft | null {
  const difference = new Date(eventDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownTimer({ eventDate }: { eventDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  if (!timeLeft) {
    return <span className="text-swiss-gray-500">Event started</span>;
  }

  return (
    <div className="flex gap-2 text-xs">
      {timeLeft.days > 0 && (
        <div className="bg-primary/10 text-primary px-2 py-1 rounded">
          <span className="font-bold">{timeLeft.days}</span>d
        </div>
      )}
      <div className="bg-primary/10 text-primary px-2 py-1 rounded">
        <span className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>h
      </div>
      <div className="bg-primary/10 text-primary px-2 py-1 rounded">
        <span className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>m
      </div>
      {timeLeft.days === 0 && (
        <div className="bg-primary/10 text-primary px-2 py-1 rounded">
          <span className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>s
        </div>
      )}
    </div>
  );
}

export default function UpcomingEvents({ events, maxEvents = 3 }: UpcomingEventsProps) {
  const upcomingEvents = events
    .filter((event) => event.eventDate && new Date(event.eventDate) > new Date())
    .slice(0, maxEvents);

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-8">
          <h2 className="text-headline text-2xl sm:text-3xl font-bold text-text">
            Upcoming Events
          </h2>
          <p className="text-body text-swiss-gray-600 mt-2">
            Join us at our upcoming events and make a difference
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <motion.article
              key={event._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-swiss-gray-900 rounded-xl border border-swiss-gray-200 dark:border-swiss-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Event Image */}
              {event.coverImage && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={urlFor(event.coverImage).width(400).height(200).url()}
                    alt={event.coverImage.alt || event.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                  {event.category && (
                    <span className="absolute top-3 left-3 bg-white/90 dark:bg-swiss-gray-900/90 text-xs font-medium px-2 py-1 rounded-full">
                      {event.category.name}
                    </span>
                  )}
                </div>
              )}

              <div className="p-5">
                {/* Date and Countdown */}
                <div className="flex items-center justify-between mb-3">
                  <time className="text-xs text-swiss-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.eventDate && new Date(event.eventDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                  {event.eventDate && <CountdownTimer eventDate={event.eventDate} />}
                </div>

                {/* Title */}
                <h3 className="text-title font-semibold text-text mb-2 line-clamp-2">
                  {event.title}
                </h3>

                {/* Location */}
                {event.location && (
                  <p className="text-caption text-swiss-gray-500 flex items-center gap-1 mb-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                )}

                {/* Description */}
                {event.description && (
                  <p className="text-body text-sm text-swiss-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center"
                    >
                      Register Now
                    </a>
                  )}
                  <a
                    href={`/events#${event.slug?.current || event._id}`}
                    className="px-4 py-2 text-sm font-medium text-swiss-gray-700 dark:text-swiss-gray-300 hover:bg-swiss-gray-100 dark:hover:bg-swiss-gray-800 rounded-lg transition-colors"
                  >
                    Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Events Link */}
        <div className="text-center mt-8">
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Events
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
