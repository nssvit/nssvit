/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ event.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: () => '📅',
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'details', title: 'Details' },
    { name: 'media', title: 'Media' },
    { name: 'metrics', title: 'Impact Metrics' },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'title',
        maxLength: 100,
      },
      description: 'URL-friendly identifier',
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Event Category',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'eventCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      group: 'basic',
      description: 'When the event took place or will take place',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      group: 'basic',
      description: 'For multi-day events (optional)',
    }),

    // Details
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'details',
      description: 'Where the event took place',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'details',
      rows: 3,
      description: 'Brief description for listings',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      group: 'details',
      of: [{ type: 'block' }],
      description: 'Detailed event description (rich text)',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      group: 'details',
      description: 'Link to registration form (for upcoming events)',
    }),

    // Media
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Event Photos',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),

    // Metrics
    defineField({
      name: 'volunteersInvolved',
      title: 'Volunteers Involved',
      type: 'number',
      group: 'metrics',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'beneficiaries',
      title: 'Beneficiaries Reached',
      type: 'number',
      group: 'metrics',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'hoursContributed',
      title: 'Hours Contributed',
      type: 'number',
      group: 'metrics',
      description: 'Total volunteer hours',
      validation: (Rule) => Rule.min(0),
    }),

    // Display options
    defineField({
      name: 'isHighlighted',
      title: 'Feature on Homepage?',
      type: 'boolean',
      description: 'Show in homepage highlights',
      initialValue: false,
    }),
    defineField({
      name: 'isUpcoming',
      title: 'Upcoming Event?',
      type: 'boolean',
      description: 'Mark as upcoming event',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.name',
      year: 'academicYear.year',
      date: 'eventDate',
      media: 'coverImage',
    },
    prepare({ title, category, year, date, media }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date';
      return {
        title: title || 'Untitled Event',
        subtitle: `${category || 'No category'} • ${year || 'No year'} • ${dateStr}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'eventDate', direction: 'asc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
