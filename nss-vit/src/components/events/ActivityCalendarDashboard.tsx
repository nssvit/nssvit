/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ ActivityCalendarDashboard.tsx
 * ╹ src/components/activity-calendar/
 *
 * Dashboard view of the yearly NSS activity calendar (lesson plan),
 * fed by the `activityCalendar` Sanity document type. Mirrors the
 * visual language of EventsPage.tsx (Swiss grid, swiss-gray palette,
 * text-label eyebrows, primary accent).
 *
 * Usage on a page:
 *
 *   import ActivityCalendarDashboard from "../components/activity-calendar/ActivityCalendarDashboard";
 *   import { sanityClient } from "../lib/sanity";
 *   import { ACTIVITY_CALENDAR_QUERY } from "../components/activity-calendar/query";
 *
 *   const entries = await sanityClient.fetch(ACTIVITY_CALENDAR_QUERY);
 *   <ActivityCalendarDashboard entries={entries} academicYear="2026-27" />
 */

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCalendar from "./EventCalendar";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Semester = "odd" | "even";

export interface ActivityCalendarEntry {
  _id: string;
  srNo: number;
  activityDetails: string;
  slug: string;
  semester: Semester;
  academicYear: string;
  targetedAudience: string;
  outcomeExpected: string;
  facultyInCharge: string[];
  weekOfMonth: string;
  month: string;
  year: number;
  status: "planned" | "completed" | "cancelled";
}

interface Props {
  entries: ActivityCalendarEntry[];
  academicYear?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const MONTH_ORDER = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function sortEntries(a: ActivityCalendarEntry, b: ActivityCalendarEntry) {
  if (a.year !== b.year) return a.year - b.year;
  const mDiff = MONTH_ORDER.indexOf(a.month) - MONTH_ORDER.indexOf(b.month);
  if (mDiff !== 0) return mDiff;
  return a.srNo - b.srNo;
}

function groupByMonth(entries: ActivityCalendarEntry[]) {
  const map = new Map<string, ActivityCalendarEntry[]>();
  entries.forEach((e) => {
    const key = `${e.month} ${e.year}`;
    const list = map.get(key) || [];
    list.push(e);
    map.set(key, list);
  });
  return Array.from(map.entries());
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: ActivityCalendarEntry["status"] }) {
  const map = {
    planned: {
      label: "Planned",
      cls: "bg-indigo-50 text-primary border border-primary/20",
    },
    completed: {
      label: "Completed",
      cls: "bg-green-50 text-green-700 border border-green-200",
    },
    cancelled: {
      label: "Cancelled",
      cls: "bg-red-50 text-red-600 border border-red-200",
    },
  };
  const { label, cls } = map[status] ?? map.planned;
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wide ${cls}`}
    >
      {label}
    </span>
  );
}

// ─── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-swiss-gray-200 px-5 py-4">
      <div className="text-3xl font-bold text-text leading-none mb-1">
        {value}
      </div>
      <div className="text-label text-swiss-gray-500">{label}</div>
    </div>
  );
}

// ─── Activity Row ───────────────────────────────────────────────────────────────

function ActivityRow({
  entry,
  index,
  onSelect,
}: {
  entry: ActivityCalendarEntry;
  index: number;
  onSelect: (e: ActivityCalendarEntry) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={() => onSelect(entry)}
      className="flex items-start gap-4 py-4 border-b border-swiss-gray-100 last:border-0 group cursor-pointer"
    >
      {/* Week badge */}
      <div className="flex-shrink-0 w-16 text-center">
        <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-1 py-0.5 rounded-t-sm">
          {entry.weekOfMonth.replace(" Week", "")}
        </div>
        <div className="border border-t-0 border-swiss-gray-200 text-text font-bold text-[11px] leading-tight py-1.5 rounded-b-sm">
          Week
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text text-sm leading-snug mb-0.5 group-hover:text-primary transition-colors">
          {entry.activityDetails}
        </h3>
        <p className="text-xs text-swiss-gray-500 mb-1">
          {entry.targetedAudience} &middot; {entry.facultyInCharge.join(" & ")}
        </p>
        <p className="text-xs text-swiss-gray-500 line-clamp-1">
          {entry.outcomeExpected}
        </p>
      </div>

      <div className="flex-shrink-0 self-center">
        <StatusBadge status={entry.status} />
      </div>
    </motion.div>
  );
}

// ─── Detail Modal ───────────────────────────────────────────────────────────────

function ActivityDetailModal({
  entry,
  onClose,
}: {
  entry: ActivityCalendarEntry | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-text/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-lg border border-swiss-gray-200 shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-label text-primary font-bold tracking-widest">
                  {entry.weekOfMonth}, {entry.month} {entry.year}
                </span>
                <button
                  onClick={onClose}
                  className="text-swiss-gray-400 hover:text-text transition-colors text-lg leading-none"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              <h2 className="text-xl font-bold text-text mb-3">
                {entry.activityDetails}
              </h2>

              <div className="mb-4">
                <StatusBadge status={entry.status} />
              </div>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-label text-swiss-gray-500 mb-0.5">
                    Targeted Audience
                  </dt>
                  <dd className="text-text">{entry.targetedAudience}</dd>
                </div>
                <div>
                  <dt className="text-label text-swiss-gray-500 mb-0.5">
                    Outcome Expected
                  </dt>
                  <dd className="text-swiss-gray-600 leading-relaxed">
                    {entry.outcomeExpected}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-swiss-gray-500 mb-0.5">
                    Faculty In Charge
                  </dt>
                  <dd className="text-text">
                    {entry.facultyInCharge.join(", ")}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ActivityCalendarDashboard({
  entries,
  academicYear,
}: Props) {
  const [semesterFilter, setSemesterFilter] = useState<Semester | "all">("all");
  const [selected, setSelected] = useState<ActivityCalendarEntry | null>(null);

  const year = academicYear || entries[0]?.academicYear || "2026-27";

  const filtered = useMemo(() => {
    const list =
      semesterFilter === "all"
        ? entries
        : entries.filter((e) => e.semester === semesterFilter);
    return [...list].sort(sortEntries);
  }, [entries, semesterFilter]);

  const grouped = useMemo(() => groupByMonth(filtered), [filtered]);

  const oddCount = entries.filter((e) => e.semester === "odd").length;
  const evenCount = entries.filter((e) => e.semester === "even").length;
  const facultySet = new Set(entries.flatMap((e) => e.facultyInCharge));

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[220px] flex items-end overflow-hidden bg-text">
        <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/70 to-text/40" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 w-full">
          <span className="text-label text-white/60 block mb-2">
            NSS VIT Dashboard
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Activity Calendar {year}
          </h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            The full lesson plan of sessions, campaigns, and workshops scheduled
            across the odd and even semesters.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Total Activities" value={entries.length} />
          <StatCard label="Odd Semester" value={oddCount} />
          <StatCard label="Even Semester" value={evenCount} />
          <StatCard label="Faculty Involved" value={facultySet.size} />
        </div>
      </section>

      {/* ── Calendar ──────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="text-label text-swiss-gray-600 font-bold tracking-widest">
            PLANNED ACTIVITIES
          </h2>
          <div className="flex border border-swiss-gray-200 rounded-sm overflow-hidden text-xs font-semibold">
            {(["all", "odd", "even"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSemesterFilter(s)}
                className={`px-3 py-1.5 transition-colors ${
                  semesterFilter === s
                    ? "bg-primary text-white"
                    : "bg-white text-swiss-gray-600 hover:bg-swiss-gray-50"
                }`}
              >
                {s === "all" ? "All" : s === "odd" ? "Odd Sem" : "Even Sem"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start ">
          <div>
            {grouped.length > 0 ? (
              <div className="flex flex-col gap-8">
                {grouped.map(([monthLabel, monthEntries]) => (
                  <div key={monthLabel}>
                    <h3 className="text-label font-bold uppercase tracking-widest text-primary mb-5">
                      {monthLabel}
                    </h3>
                    <div className="border border-swiss-gray-200 divide-y-0 px-4">
                      {monthEntries.map((entry, i) => (
                        <ActivityRow
                          key={entry._id}
                          entry={entry}
                          index={i}
                          onSelect={setSelected}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-swiss-gray-200 p-8 text-center text-swiss-gray-400">
                <p className="text-sm font-medium">
                  No activities to show yet.
                </p>
              </div>
            )}
          </div>

          <EventCalendar
            upcomingEvents={entries.map((entry) => ({
              title: entry.activityDetails,
              eventDate: (() => {
                const year = entry.year;
                const month = MONTH_ORDER.indexOf(entry.month);

                // Start from the 1st of the month
                const date = new Date(year, month, 1);

                // Find the first Friday of the month
                const day = date.getDay(); // 0 = Sun ... 5 = Fri
                const daysUntilFriday = (5 - day + 7) % 7;
                date.setDate(1 + daysUntilFriday);

                // Special cases
                if (year === 2026 && month === 7 && date.getDate() === 15) {
                  // Aug (month index 7): 15 Aug -> 14 Aug
                  date.setDate(14);
                }

                if (year === 2026 && month === 9 && date.getDate() === 17) {
                  // Oct (month index 9): 17 Oct -> 16 Oct
                  date.setDate(16);
                }

                return date.toISOString();
              })(),
              status:
                entry.status === "completed"
                  ? "completed"
                  : entry.status === "cancelled"
                    ? "cancelled"
                    : "upcoming",
            }))}
            pastEvents={[]}
          />
        </div>
      </section>

      <ActivityDetailModal entry={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
