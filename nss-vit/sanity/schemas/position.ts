/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ position.ts
 * ╹ sanity/schemas/
 */

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'position',
  title: 'Position',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'title',
      title: 'Position Title',
      type: 'string',
      description: 'e.g., Program Officer, Faculty Advisor, Documentation Lead',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Position category for grouping',
      options: {
        list: [
          { title: 'Faculty', value: 'faculty' },
          { title: 'Leadership', value: 'leadership' },
          { title: 'Head', value: 'head' },
          { title: 'Lead', value: 'lead' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hierarchyOrder',
      title: 'Hierarchy Order',
      type: 'number',
      description: 'Lower number = higher position (1 = highest). Used for sorting.',
      validation: (Rule) => Rule.required().min(1),
      initialValue: 100,
    }),
    defineField({
      name: 'description',
      title: 'Role Description',
      type: 'text',
      description: 'Brief description of responsibilities',
      rows: 3,
    }),
    defineField({
      name: 'isActive',
      title: 'Active Position?',
      type: 'boolean',
      description: 'Is this position currently in use?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      order: 'hierarchyOrder',
    },
    prepare({ title, category, order }) {
      const categoryLabels: Record<string, string> = {
        faculty: 'Faculty',
        leadership: 'Leadership',
        head: 'Head',
        lead: 'Lead',
      };
      return {
        title: title || 'Untitled Position',
        subtitle: `${categoryLabels[category] || category} • Order: ${order || 'N/A'}`,
      };
    },
  },
  orderings: [
    {
      title: 'Hierarchy (Highest First)',
      name: 'hierarchyAsc',
      by: [{ field: 'hierarchyOrder', direction: 'asc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
});
