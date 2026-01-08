/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ camp.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'camp',
  title: 'Special Camp',
  type: 'document',
  icon: () => '🏕️',
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media' },
    { name: 'impact', title: 'Impact' },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basic',
      description: 'Village/area and district',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      group: 'basic',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      group: 'basic',
    }),
    defineField({
      name: 'datesDisplay',
      title: 'Dates Display Text',
      type: 'string',
      group: 'basic',
      description: 'Human-readable date range (e.g., "27th November - 4th December, 2024")',
    }),
    defineField({
      name: 'theme',
      title: 'Camp Theme',
      type: 'string',
      group: 'basic',
      description: 'e.g., "Sarvangin Vikas"',
    }),

    // Content
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      rows: 4,
      description: 'Overview of the camp',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'Main achievements/activities',
    }),
    defineField({
      name: 'significance',
      title: 'Significance',
      type: 'text',
      group: 'content',
      rows: 4,
      description: 'Why this camp matters',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'benefit',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'List of activities conducted',
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
      name: 'carouselImages',
      title: 'Carousel Images',
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
          ],
        },
      ],
    }),

    // Impact
    defineField({
      name: 'impactStories',
      title: 'Impact Stories',
      type: 'array',
      group: 'impact',
      of: [
        {
          type: 'object',
          name: 'impactStory',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'altText',
              title: 'Image Alt Text',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'volunteersParticipated',
      title: 'Volunteers Participated',
      type: 'number',
      group: 'impact',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'beneficiariesReached',
      title: 'Beneficiaries Reached',
      type: 'number',
      group: 'impact',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      year: 'academicYear.year',
      location: 'location',
      theme: 'theme',
      media: 'coverImage',
    },
    prepare({ year, location, theme, media }) {
      return {
        title: `Camp ${year || 'Unknown Year'}`,
        subtitle: `${location || 'No location'} ${theme ? `• ${theme}` : ''}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
});
