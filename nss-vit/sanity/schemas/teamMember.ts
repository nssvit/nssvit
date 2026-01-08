/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ teamMember.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: () => '👤',
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'contact', title: 'Contact' },
    { name: 'display', title: 'Display Settings' },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
      description: 'Which year this member served',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'position' }],
      validation: (Rule) => Rule.required(),
      description: 'Role/position held',
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      group: 'basic',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the photo for accessibility',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      group: 'basic',
      rows: 3,
      description: 'Brief description (optional)',
    }),

    // Contact
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'contact',
    }),

    // Display Settings
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Override position hierarchy for display (lower = first)',
      initialValue: 100,
    }),
    defineField({
      name: 'isActive',
      title: 'Active/Visible',
      type: 'boolean',
      group: 'display',
      description: 'Show this member on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      position: 'position.title',
      year: 'academicYear.year',
      media: 'photo',
    },
    prepare({ name, position, year, media }) {
      return {
        title: name || 'Untitled Member',
        subtitle: `${position || 'No position'} • ${year || 'No year'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
