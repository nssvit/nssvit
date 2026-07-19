import React from "react";

type CalendarEventStatus = "upcoming" | "completed" | "cancelled";

interface CalendarEvent {
  title: string;
  eventDate: string;
  status: CalendarEventStatus;
  reportLink?: string;
}

interface EventCalendarProps {
  upcomingEvents: CalendarEvent[];
  pastEvents: CalendarEvent[];
}

export default function EventCalendar({
  upcomingEvents,
  pastEvents,
}: EventCalendarProps) {
  // Calendar helpers (current month)
  const toKey = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

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
    const d = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), day);
    calendarCells.push({ date: d, inMonth: true });
  }

  // Trailing days to complete rows
  let trailingDay = 1;
  while (calendarCells.length % 7 !== 0) {
    const d = new Date(lastOfMonth);
    d.setDate(lastOfMonth.getDate() + trailingDay);
    calendarCells.push({ date: d, inMonth: false });
    trailingDay += 1;
  }

  const allUpcoming = upcomingEvents;

  const eventsByDate = new Map<
    string,
    { title: string; status: CalendarEventStatus; reportLink?: string }[]
  >();

  allUpcoming.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      const list = eventsByDate.get(key) || [];
      list.push({ title: e.title, status: e.status, reportLink: e.reportLink });
      eventsByDate.set(key, list);
    }
  });

  pastEvents.forEach((e) => {
    const d = new Date(e.eventDate);
    if (!isNaN(d.getTime())) {
      const key = toKey(d);
      const list = eventsByDate.get(key) || [];
      list.push({ title: e.title, status: e.status, reportLink: e.reportLink });
      eventsByDate.set(key, list);
    }
  });

  return (
    <div className="w-full">
      <div className="text-label text-swiss-gray-600 font-bold tracking-widest mb-5">
        EVENT CALENDAR
      </div>

      <aside className="border border-swiss-gray-200 p-4 bg-white shadow-sm lg:mt-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-text">Calendar</h3>
            <p className="text-xs text-swiss-gray-500">{monthLabel}</p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-swiss-gray-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Upcoming
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-blue-500" />
              Past
            </span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-[11px] text-swiss-gray-500 mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={`${d}-${i}`} className="font-semibold">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {calendarCells.map(({ date, inMonth }, idx) => {
            const key = toKey(date);
            const dayEvents = eventsByDate.get(key) || [];

            const isUpcoming = dayEvents.some((e) => e.status === "upcoming");
            const isPast = dayEvents.some((e) => e.status === "completed");
            const isToday = key === toKey(today);

            const bg =
              isUpcoming && !isPast
                ? "bg-emerald-500 text-white"
                : isPast && !isUpcoming
                  ? "bg-blue-500 text-white"
                  : isPast && isUpcoming
                    ? "bg-gradient-to-br from-emerald-500 to-blue-500 text-white"
                    : inMonth
                      ? "bg-white text-text"
                      : "bg-swiss-gray-50 text-swiss-gray-300";

            const ring = isToday ? "ring-2 ring-primary ring-offset-2" : "";

            return (
              <div
                key={`${key}-${idx}`}
                className={`relative group border border-swiss-gray-100 rounded-sm h-12 flex items-center justify-center ${bg} ${ring}`}
              >
                <div className="text-xs font-semibold">{date.getDate()}</div>

                {dayEvents.length > 0 && (
                  <div className="absolute z-20 top-12 left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-swiss-gray-200 shadow-lg rounded-sm p-2.5 text-[11px] text-swiss-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="font-semibold text-text mb-1.5">
                      {date.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <ul className="space-y-1.5">
                      {dayEvents.slice(0, 3).map((e, i) => (
                        <li
                          key={`${key}-e-${i}`}
                          className="flex items-start gap-2"
                        >
                          <span
                            className={`mt-1 w-2 h-2 flex-shrink-0 rounded-sm ${
                              e.status === "upcoming"
                                ? "bg-emerald-500"
                                : e.status === "cancelled"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <span className="line-clamp-2">{e.title}</span>
                            {e.reportLink && (
                              <a
                                href={e.reportLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(ev) => ev.stopPropagation()}
                                className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-sm hover:bg-indigo-100 hover:border-indigo-300 transition-colors cursor-pointer"
                              >
                                <svg
                                  className="w-2.5 h-2.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                View Report
                                <svg
                                  className="w-2 h-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                      {dayEvents.length > 3 && (
                        <li className="text-[10px] text-swiss-gray-400">
                          +{dayEvents.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
