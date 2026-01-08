/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ academicYear.ts
 * ╹ sanity/schemas/
 */

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'academicYear',
  title: 'Academic Year',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Academic year in format: 2024-2025',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{4}-\d{4}$/, { name: 'year format' })
          .error('Please use format: YYYY-YYYY (e.g., 2024-2025)'),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When this academic year starts',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'When this academic year ends',
    }),
    defineField({
      name: 'isCurrentYear',
      title: 'Current Year?',
      type: 'boolean',
      description: 'Mark this as the current academic year (only one should be active)',
      initialValue: false,
    }),
    defineField({
      name: 'volunteerCount',
      title: 'Total Volunteers',
      type: 'number',
      description: 'Total number of volunteers this year',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'eventsCount',
      title: 'Events Conducted',
      type: 'number',
      description: 'Total number of events conducted this year',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'beneficiariesReached',
      title: 'Beneficiaries Reached',
      type: 'number',
      description: 'Total number of people impacted this year',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      year: 'year',
      isCurrentYear: 'isCurrentYear',
      volunteerCount: 'volunteerCount',
    },
    prepare({ year, isCurrentYear, volunteerCount }) {
      return {
        title: year || 'Untitled Year',
        subtitle: isCurrentYear
          ? `Current Year • ${volunteerCount || 0} volunteers`
          : `${volunteerCount || 0} volunteers`,
      };
    },
  },
  orderings: [
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Year (Oldest First)',
      name: 'yearAsc',
      by: [{ field: 'year', direction: 'asc' }],
    },
  ],
});
