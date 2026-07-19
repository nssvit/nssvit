/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ activityCalendar.ts
 * ╹ schemas/documents/
 *
 * Sanity schema for the yearly NSS activity calendar (lesson plan).
 * Each document is one planned activity, tagged to a semester + academic year,
 * matching the two source docs:
 *   - ACTIVITY_CALENDAR_2026-2027_EVEN_.docx
 *   - ACTIVITY_CALENDER_2026-2027_ODD_.docx
 */

import { defineField, defineType } from "sanity";
import { CalendarIcon  } from "@sanity/icons";

export default defineType({
  name: "activityCalendar",
  title: "Activity Calendar Entry",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "srNo",
      title: "Sr. No",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "activityDetails",
      title: "Activity Details",
      description: "Name of the activity/session, e.g. 'Financial Literacy Awareness Session'",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "activityDetails", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "semester",
      title: "Semester",
      type: "string",
      options: {
        list: [
          { title: "Odd Semester", value: "odd" },
          { title: "Even Semester", value: "even" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "academicYear",
      title: "Academic Year",
      description: "e.g. '2026-27'",
      type: "string",
      initialValue: "2026-27",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetedAudience",
      title: "Targeted Audience",
      type: "string",
      initialValue: "Students and Faculty",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "outcomeExpected",
      title: "Outcome Expected",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facultyInCharge",
      title: "Faculty In Charge",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "weekOfMonth",
      title: "Week of Month",
      type: "string",
      options: {
        list: [
          { title: "1st Week", value: "1st Week" },
          { title: "2nd Week", value: "2nd Week" },
          { title: "3rd Week", value: "3rd Week" },
          { title: "4th Week", value: "4th Week" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "month",
      title: "Month",
      type: "string",
      options: {
        list: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ].map((m) => ({ title: m, value: m })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      description: "Planning-stage status of this calendar entry. Defaults to 'planned' since this data is a lesson plan, not a log of held events.",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "planned",
    }),
    defineField({
      name: "linkedEvent",
      title: "Linked Event",
      description: "Optional reference to the actual event document once it has been created/reported for this calendar entry.",
      type: "reference",
      to: [{ type: "event" }],
    }),
  ],
  orderings: [
    {
      title: "Semester, then Sr. No",
      name: "semesterSrNo",
      by: [
        { field: "semester", direction: "asc" },
        { field: "srNo", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "activityDetails",
      semester: "semester",
      month: "month",
      weekOfMonth: "weekOfMonth",
    },
    prepare({ title, semester, month, weekOfMonth }) {
      return {
        title,
        subtitle: `${semester === "odd" ? "Odd" : "Even"} Sem · ${weekOfMonth}, ${month}`,
      };
    },
  },
});
