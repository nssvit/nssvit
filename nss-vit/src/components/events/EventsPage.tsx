/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ EventsPage.tsx
 * ╹ src/components/events/
 */

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "../../lib/sanity";
import EventsAnalytics, { type AnalyticsStats } from "./EventsAnalytics";
import EventCalendar from "./EventCalendar";
import EventDetailModal from "./EventDetailModal";
import ImpactStories, { type Testimonial } from "./ImpactStories";
// import { AnimatePresence, motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface EventCategory {
  _id: string;
  name: string;
  slug: string;
  color?: { hex: string };
}

interface EventLocation {
  venue?: string;
  city?: string;
  state?: string;
}

interface EventEntry {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  reportLink?: string;
  coverImage?: any;
  eventDate: string;
  isCancelled: boolean;
  status: "upcoming" | "completed" | "cancelled";
  category?: EventCategory;
  tags?: string[];
  location?: EventLocation;
  impact?: {
    beneficiariesCount?: number;
    volunteersCount?: number;
    hoursOfService?: number;
  };
  description?: any[];
}

interface CategoryFocus {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  coverImage?: any;
  color?: { hex: string };
}

interface Props {
  upcomingEvents: EventEntry[];
  pastEvents: EventEntry[];
  ongoingEvents: EventEntry[];
  categories: CategoryFocus[];
  testimonials: Testimonial[];
  eventsPageContent: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: any;
    ctaText?: string;
    ctaLink?: string;
    analyticsDataSource?: "auto" | "manual" | "api";
    manualStats?: {
      totalEventsCompleted?: number;
      totalHoursCompleted?: number;
      totalBeneficiaries?: number;
      categoryStats?: Array<{
        categoryId: string;
        categoryName: string;
        categorySlug: string;
        categoryColor?: { hex: string };
        eventsCount?: number;
        hoursCount?: number;
      }>;
    };
  } | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    full: d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

function locationString(loc?: EventLocation): string {
  if (!loc) return "";
  return [loc.venue, loc.city, loc.state].filter(Boolean).join(", ");
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: EventEntry["status"] }) {
  const map = {
    upcoming: {
      label: "Upcoming",
      cls: "bg-indigo-50 text-primary border border-primary/20",
    },
    ongoing: {
      label: "Ongoing",
      cls: "bg-green-50 text-green-700 border border-green-200",
    },
    completed: {
      label: "Completed",
      cls: "bg-swiss-gray-100 text-swiss-gray-600 border border-swiss-gray-200",
    },
    cancelled: {
      label: "Cancelled",
      cls: "bg-red-50 text-red-600 border border-red-200",
    },
  };
  const { label, cls } = map[status] ?? map.completed;
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wide ${cls}`}
    >
      {label}
    </span>
  );
}

// ─── Portable Text Custom Renderer ──────────────────────────────────────────

function renderBlockChildren(block: any) {
  if (!block.children || !Array.isArray(block.children)) return "";
  return block.children.map((child: any, idx: number) => {
    let content: ReactNode = child.text || "";
    if (child.marks && child.marks.length > 0) {
      child.marks.forEach((mark: string) => {
        if (mark === "strong") {
          content = <strong key={idx}>{content}</strong>;
        } else if (mark === "em") {
          content = <em key={idx}>{content}</em>;
        } else if (mark === "code") {
          content = (
            <code
              key={idx}
              className="bg-swiss-gray-100 px-1 rounded-sm font-mono text-xs"
            >
              {content}
            </code>
          );
        } else {
          const linkDef = block.markDefs?.find((def: any) => def._key === mark);
          if (linkDef && linkDef._type === "link") {
            content = (
              <a
                key={idx}
                href={linkDef.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                {content}
              </a>
            );
          }
        }
      });
    }
    return <span key={child._key || idx}>{content}</span>;
  });
}

function renderPortableText(blocks?: any[]) {
  if (!blocks || !Array.isArray(blocks)) return null;

  const rendered: ReactNode[] = [];
  let currentList: { type: "bullet" | "number"; items: any[] } | null = null;

  const flushList = () => {
    if (!currentList) return;
    const ListTag = currentList.type === "bullet" ? "ul" : "ol";
    const listClass =
      currentList.type === "bullet"
        ? "list-disc pl-5 mb-4 space-y-1.5 text-sm text-swiss-gray-600"
        : "list-decimal pl-5 mb-4 space-y-1.5 text-sm text-swiss-gray-600";

    rendered.push(
      <ListTag key={`list-${rendered.length}`} className={listClass}>
        {currentList.items.map((item, idx) => {
          const children = renderBlockChildren(item);
          return <li key={item._key || idx}>{children}</li>;
        })}
      </ListTag>,
    );
    currentList = null;
  };

  blocks.forEach((block) => {
    if (block._type !== "block") {
      flushList();
      return;
    }

    if (block.listItem) {
      if (currentList && currentList.type !== block.listItem) {
        flushList();
      }
      if (!currentList) {
        currentList = { type: block.listItem, items: [] };
      }
      currentList.items.push(block);
    } else {
      flushList();
      const children = renderBlockChildren(block);
      if (block.style === "h1") {
        rendered.push(
          <h1
            key={block._key}
            className="text-xl font-bold mt-5 mb-3 text-text"
          >
            {children}
          </h1>,
        );
      } else if (block.style === "h2") {
        rendered.push(
          <h2
            key={block._key}
            className="text-lg font-bold mt-4 mb-2 text-text"
          >
            {children}
          </h2>,
        );
      } else if (block.style === "h3") {
        rendered.push(
          <h3
            key={block._key}
            className="text-md font-semibold mt-3.5 mb-1.5 text-text"
          >
            {children}
          </h3>,
        );
      } else if (block.style === "blockquote") {
        rendered.push(
          <blockquote
            key={block._key}
            className="border-l-4 border-primary pl-4 italic my-4 text-swiss-gray-600 bg-swiss-gray-50/50 py-1 pr-2"
          >
            {children}
          </blockquote>,
        );
      } else {
        rendered.push(
          <p
            key={block._key}
            className="text-sm text-swiss-gray-600 leading-relaxed mb-3.5"
          >
            {children}
          </p>,
        );
      }
    }
  });

  flushList();
  return rendered;
}

// ─── Upcoming Event Row ────────────────────────────────────────────────────────

function UpcomingEventRow({
  event,
  index,
  onSelect,
}: {
  event: EventEntry;
  index: number;
  onSelect: (event: EventEntry) => void;
}) {
  const { month, day } = formatDate(event.eventDate);
  const loc = locationString(event.location);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      onClick={() => onSelect(event)}
      className="flex items-start gap-4 py-4 border-b border-swiss-gray-100 last:border-0 group cursor-pointer"
    >
      {/* Date badge */}
      <div className="flex-shrink-0 w-12 text-center">
        <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-1 py-0.5 rounded-t-sm">
          {month}
        </div>
        <div className="border border-t-0 border-swiss-gray-200 text-text font-bold text-xl leading-none py-1.5 rounded-b-sm">
          {day}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text text-sm leading-snug mb-0.5 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        {loc && (
          <p className="text-xs text-swiss-gray-500 flex items-center gap-1 mb-1">
            <svg
              className="w-3 h-3 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {loc}
          </p>
        )}
        <p className="text-xs text-swiss-gray-500 line-clamp-1">
          {event.shortDescription}
        </p>
      </div>

      {/* Badge */}
      <div className="flex-shrink-0 self-center">
        <StatusBadge status={event.status} />
      </div>
    </motion.div>
  );
}

// ─── Past Event Row ────────────────────────────────────────────────────────────

function PastEventRow({
  event,
  index,
  onSelect,
}: {
  event: EventEntry;
  index: number;
  onSelect: (event: EventEntry) => void;
}) {
  const { full, month, day } = formatDate(event.eventDate);
  const loc = locationString(event.location);

  const beneficiaries = event.impact?.beneficiariesCount;
  const volunteers = event.impact?.volunteersCount;

  const showBeneficiaries = beneficiaries != null && beneficiaries > 0;
  const showVolunteers =
    !showBeneficiaries && volunteers != null && volunteers > 0;

  return (
    <>
      {/* Mobile UI */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        onClick={() => onSelect(event)}
        className="md:hidden w-full text-left py-4 border-b border-swiss-gray-100 last:border-0"
      >
        <div className="rounded-lg overflow-hidden border border-swiss-gray-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] bg-swiss-gray-100">
            {event.coverImage ? (
              <img
                src={urlFor(event.coverImage).width(800).height(450).url()}
                alt={event.coverImage.alt || event.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-indigo-50 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            {event.reportLink && (
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm border border-indigo-100 flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-[10px] font-semibold text-indigo-600">Report</span>
              </div>
            )}
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-text text-sm leading-snug line-clamp-2">
                  {event.title}
                </h3>

                <div className="mt-1 flex flex-col gap-1 text-[11px] text-swiss-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{full}</span>
                  </span>

                  {loc && (
                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5 text-swiss-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="truncate">{loc}</span>
                    </span>
                  )}
                </div>
              </div>

              {showBeneficiaries && (
                <div className="flex-shrink-0 self-start bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-sm border border-swiss-gray-200">
                  <span className="text-[10px] font-semibold text-primary">
                    {beneficiaries.toLocaleString()} benef.
                  </span>
                </div>
              )}

              {showVolunteers && (
                <div className="flex-shrink-0 self-start bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-sm border border-swiss-gray-200">
                  <span className="text-[10px] font-semibold text-indigo-600">
                    {volunteers.toLocaleString()} volunteers
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-swiss-gray-500 line-clamp-2">
              {event.shortDescription}
            </p>
          </div>
        </div>
      </motion.button>

      {/* Desktop UI */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        onClick={() => onSelect(event)}
        className="hidden md:flex items-start gap-4 py-4 border-b border-swiss-gray-100 last:border-0 group cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-sm bg-swiss-gray-100">
          {event.coverImage ? (
            <img
              src={urlFor(event.coverImage).width(160).height(128).url()}
              alt={event.coverImage.alt || event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-indigo-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text text-sm leading-snug mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
            {event.title}
          </h3>
          <p className="text-xs text-swiss-gray-500 flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {full}
            </span>
            {loc && (
              <>
                <span className="text-swiss-gray-300">•</span>
                <span className="truncate">{loc}</span>
              </>
            )}
          </p>
          <p className="text-xs text-swiss-gray-500 line-clamp-1">
            {event.shortDescription}
          </p>
        </div>

        {/* Beneficiaries / Hours fallback */}
        {showBeneficiaries && (
          <div className="flex-shrink-0 text-right self-center">
            <div className="text-primary font-bold text-lg leading-none">
              {beneficiaries.toLocaleString()}
            </div>
            <div className="text-[10px] text-swiss-gray-500 font-medium">
              Beneficiaries
            </div>
          </div>
        )}

        {showVolunteers && (
          <div className="flex-shrink-0 text-right self-center">
            <div className="text-indigo-600 font-bold text-lg leading-none">
              {volunteers.toLocaleString()}
            </div>
            <div className="text-[10px] text-swiss-gray-500 font-medium">
              Volunteers
            </div>
          </div>
        )}

        {/* Report badge */}
        {event.reportLink && (
          <div className="flex-shrink-0 self-center bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 transition-colors group-hover:bg-indigo-100 group-hover:border-indigo-300">
            <svg
              className="w-3.5 h-3.5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-[10px] font-semibold text-indigo-600 whitespace-nowrap">Report</span>
          </div>
        )}
      </motion.div>
    </>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function EventsPage({
  upcomingEvents,
  pastEvents,
  ongoingEvents,
  categories,
  testimonials,
  eventsPageContent,
}: Props) {
  const allUpcoming = [...ongoingEvents, ...upcomingEvents];
  const UPCOMING_LIMIT = 5;
  const PAST_LIMIT = 5;
  const MOBILE_LIMIT = 3;

  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllPast, setShowAllPast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventEntry | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const visibleUpcoming = showAllUpcoming
    ? allUpcoming
    : allUpcoming.slice(0, isMobile ? MOBILE_LIMIT : UPCOMING_LIMIT);

  const visiblePast = showAllPast
    ? pastEvents
    : pastEvents.slice(0, isMobile ? MOBILE_LIMIT : PAST_LIMIT);

  // Calendar helpers (current month)
  const toKey = (d: Date) => d.toISOString().slice(0, 10);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthLabel = today.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const startPadding = firstOfMonth.getDay(); // 0=Sun
  const totalDays = lastOfMonth.getDate();

  const calendarCells: { date: Date; inMonth: boolean }[] = [];

  // Leading days from previous month
  for (let i = 0; i < startPadding; i++) {
    const d = new Date(firstOfMonth);
    d.setDate(firstOfMonth.getDate() - (startPadding - i));
    calendarCells.push({ date: d, inMonth: false });
  }

  // Current month days
  for (let day = 1; day <= totalDays; day++) {
    const d = new Date(
      firstOfMonth.getFullYear(),
      firstOfMonth.getMonth(),
      day,
    );
    calendarCells.push({ date: d, inMonth: true });
  }

  // Trailing days to complete rows
  while (calendarCells.length % 7 !== 0) {
    const d = new Date(lastOfMonth);
    d.setDate(
      lastOfMonth.getDate() +
        (calendarCells.length % 7 === 0 ? 0 : 7 - (calendarCells.length % 7)),
    );
    calendarCells.push({ date: d, inMonth: false });
  }

  const upcomingMap = new Map<string, number>();
  allUpcoming.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      upcomingMap.set(key, (upcomingMap.get(key) || 0) + 1);
    }
  });

  const pastMap = new Map<string, number>();
  pastEvents.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      pastMap.set(key, (pastMap.get(key) || 0) + 1);
    }
  });

  const eventsByDate = new Map<
    string,
    { title: string; status: "upcoming" | "completed" | "cancelled" }[]
  >();

  allUpcoming.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      const list = eventsByDate.get(key) || [];
      list.push({ title: e.title, status: e.status });
      eventsByDate.set(key, list);
    }
  });

  pastEvents.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      const list = eventsByDate.get(key) || [];
      list.push({ title: e.title, status: e.status });
      eventsByDate.set(key, list);
    }
  });

  // Resolve active stats based on data source
  const dataSource = eventsPageContent?.analyticsDataSource || "auto";

  const [stats, setStats] = useState<AnalyticsStats>({
    totalEventsCompleted: 0,
    totalHoursCompleted: 0,
    totalBeneficiaries: 0,
    categoryStats: [],
    dataSource,
  });

  useEffect(() => {
    const isCompetition = (cat: { name?: string; slug?: string }) => {
      const name = cat.name?.toLowerCase() || "";
      const slug = cat.slug?.toLowerCase() || "";
      return (
        name === "competitions" ||
        name === "competition" ||
        slug === "competitions" ||
        slug === "competition"
      );
    };

    const filteredCategories = categories.filter((cat) => !isCompetition(cat));

    if (dataSource === "auto") {
      const completedEvents = pastEvents
        .filter((e) => e.status === "completed" || !e.isCancelled)
        .filter((e) => !e.category || !isCompetition(e.category));

      const totalEvents = completedEvents.length;
      const totalHours = completedEvents.reduce(
        (acc, e) => acc + (e.impact?.hoursOfService || 0),
        0,
      );
      const totalBeneficiaries = completedEvents.reduce(
        (acc, e) => acc + (e.impact?.beneficiariesCount || 0),
        0,
      );

      const catStatsMap = new Map<
        string,
        { eventsCount: number; hoursCount: number }
      >();
      filteredCategories.forEach((cat) => {
        catStatsMap.set(cat._id, { eventsCount: 0, hoursCount: 0 });
      });

      completedEvents.forEach((e) => {
        if (e.category?._id && !isCompetition(e.category)) {
          const current = catStatsMap.get(e.category._id) || {
            eventsCount: 0,
            hoursCount: 0,
          };
          catStatsMap.set(e.category._id, {
            eventsCount: current.eventsCount + 1,
            hoursCount: current.hoursCount + (e.impact?.hoursOfService || 0),
          });
        }
      });

      const categoryStats = filteredCategories.map((cat) => {
        const computed = catStatsMap.get(cat._id) || {
          eventsCount: 0,
          hoursCount: 0,
        };
        return {
          categoryId: cat._id,
          categoryName: cat.name,
          categorySlug: cat.slug,
          categoryColor: cat.color,
          eventsCount: computed.eventsCount,
          hoursCount: computed.hoursCount,
        };
      });

      setStats({
        totalEventsCompleted: totalEvents,
        totalHoursCompleted: totalHours,
        totalBeneficiaries,
        categoryStats,
        dataSource: "auto",
      });
    } else if (dataSource === "manual") {
      const manual = eventsPageContent?.manualStats;
      const categoryStats = filteredCategories.map((cat) => {
        const manualCat = manual?.categoryStats?.find(
          (mcs) => mcs.categoryId === cat._id,
        );
        return {
          categoryId: cat._id,
          categoryName: cat.name,
          categorySlug: cat.slug,
          categoryColor: cat.color || manualCat?.categoryColor,
          eventsCount: manualCat?.eventsCount || 0,
          hoursCount: manualCat?.hoursCount || 0,
        };
      });

      setStats({
        totalEventsCompleted: manual?.totalEventsCompleted || 0,
        totalHoursCompleted: manual?.totalHoursCompleted || 0,
        totalBeneficiaries: manual?.totalBeneficiaries || 0,
        categoryStats,
        dataSource: "manual",
      });
    } else if (dataSource === "api") {
      // Mock/Placeholder for future external API.
      // In the future, this would fetch from an API route.
      // For now, simulate an API fetch or use a beautiful mock.
      const timer = setTimeout(() => {
        const categoryStats = filteredCategories.map((cat, idx) => ({
          categoryId: cat._id,
          categoryName: cat.name,
          categorySlug: cat.slug,
          categoryColor: cat.color,
          eventsCount: 12 + idx * 3,
          hoursCount: 280 + idx * 95,
        }));

        setStats({
          totalEventsCompleted: categoryStats.reduce(
            (acc, c) => acc + c.eventsCount,
            0,
          ),
          totalHoursCompleted: categoryStats.reduce(
            (acc, c) => acc + c.hoursCount,
            0,
          ),
          totalBeneficiaries: 2150,
          categoryStats,
          dataSource: "api",
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [dataSource, pastEvents, categories, eventsPageContent]);

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[220px] flex items-end overflow-hidden bg-text">
        {eventsPageContent?.heroImage && (
          <img
            src={urlFor(eventsPageContent.heroImage)
              .width(1600)
              .height(500)
              .url()}
            alt={eventsPageContent.heroImage?.alt || "Events Hero"}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/50 to-text/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 w-full">
          <span className="text-label text-white/60 block mb-2">
            NSS VIT Dashboard
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            {eventsPageContent?.heroTitle || "What We're Up To"}
          </h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            {eventsPageContent?.heroSubtitle ||
              "Stay updated with our upcoming and past events as we continue to serve and create impact."}
          </p>
        </div>
      </section>

      {/* ── Events Grid ───────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_0.8fr] gap-10 items-start">
          {/* Left: Events Stack */}
          <div className="flex flex-col gap-10">
            {/* ── Upcoming Events ─────────────────────────────────────────── */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-label text-primary font-bold tracking-widest">
                  UPCOMING EVENTS
                </h2>
                {allUpcoming.length > UPCOMING_LIMIT && (
                  <button
                    onClick={() => setShowAllUpcoming((v) => !v)}
                    className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    {showAllUpcoming ? "Show Less" : `View All`}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${
                        showAllUpcoming ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {visibleUpcoming.length > 0 ? (
                <div className="border border-swiss-gray-200 divide-y-0 px-4">
                  {visibleUpcoming.map((event, i) => (
                    <UpcomingEventRow
                      key={event._id}
                      event={event}
                      index={i}
                      onSelect={setSelectedEvent}
                    />
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-swiss-gray-200 p-8 text-center text-swiss-gray-400">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 opacity-40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    No upcoming events right now
                  </p>
                  <p className="text-xs mt-1">
                    Check back soon — we're always planning something new.
                  </p>
                </div>
              )}
            </div>

            {/* ── Past Events ─────────────────────────────────────────────── */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-label text-swiss-gray-600 font-bold tracking-widest">
                  PAST EVENTS
                </h2>
                {pastEvents.length > PAST_LIMIT && (
                  <button
                    onClick={() => setShowAllPast((v) => !v)}
                    className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    {showAllPast ? "Show Less" : `View All`}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${
                        showAllPast ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {visiblePast.length > 0 ? (
                <div className="border border-swiss-gray-200 divide-y-0 px-4">
                  {visiblePast.map((event, i) => (
                    <PastEventRow
                      key={event._id}
                      event={event}
                      index={i}
                      onSelect={setSelectedEvent}
                    />
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-swiss-gray-200 p-8 text-center text-swiss-gray-400">
                  <p className="text-sm font-medium">
                    No past events to show yet.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Calendar */}
          <EventCalendar upcomingEvents={allUpcoming} pastEvents={pastEvents} />
        </div>
      </section>

      {/* ── Analytics Section ──────────────────────────────────────────────── */}
      <EventsAnalytics stats={stats} />

      {/* ── Our Impact Stories ────────────────────────────────────────────── */}
      <ImpactStories testimonials={testimonials} />
      <EventDetailModal
      selectedEvent={selectedEvent}
      onClose={() => setSelectedEvent(null)}
      renderPortableText={renderPortableText}
      formatDate={formatDate}
      locationString={locationString}
    />
    </div>
  );
}
