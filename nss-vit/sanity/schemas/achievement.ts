/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ achievement.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  icon: () => '🏆',
  fields: [
    defineField({
      name: 'title',
      title: 'Achievement Title',
      type: 'string',
      description: 'Name of the award/competition',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution/Venue',
      type: 'string',
      description: 'Where the achievement was earned',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When the achievement was earned',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Details about the achievement',
    }),
    defineField({
      name: 'image',
      title: 'Achievement Image',
      type: 'image',
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
      name: 'participants',
      title: 'Participants',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names of participants/winners',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Competition Win', value: 'competition' },
          { title: 'Recognition/Award', value: 'award' },
          { title: 'Certification', value: 'certification' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured?',
      type: 'boolean',
      description: 'Show on homepage highlights',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within the year (lower = first)',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      institution: 'institution',
      year: 'academicYear.year',
      media: 'image',
    },
    prepare({ title, institution, year, media }) {
      return {
        title: title || 'Untitled Achievement',
        subtitle: `${institution || 'No institution'} • ${year || 'No year'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
