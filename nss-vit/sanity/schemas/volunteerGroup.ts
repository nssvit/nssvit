/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ volunteerGroup.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'volunteerGroup',
  title: 'Volunteer Group',
  type: 'document',
  icon: () => '👥',
  fields: [
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Group Title',
      type: 'string',
      description: 'e.g., "Second Year Volunteers", "First Year Volunteers"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional description of this volunteer group',
    }),
    defineField({
      name: 'members',
      title: 'Volunteer Names',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'volunteer',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional photo',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
              validation: (Rule) => Rule.email(),
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'photo',
            },
          },
        },
      ],
      description: 'List of volunteers in this group',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which groups appear (lower = first)',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'academicYear.year',
      members: 'members',
    },
    prepare({ title, year, members }) {
      return {
        title: title || 'Untitled Group',
        subtitle: `${year || 'No year'} • ${members?.length || 0} volunteers`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
