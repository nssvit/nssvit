/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ faq.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: () => '❓',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'richAnswer',
      title: 'Rich Answer',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional rich text answer with formatting (overrides simple answer)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Membership', value: 'membership' },
          { title: 'Events', value: 'events' },
          { title: 'Camp', value: 'camp' },
          { title: 'Volunteering', value: 'volunteering' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within category (lower = first)',
      initialValue: 100,
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible?',
      type: 'boolean',
      description: 'Show this FAQ on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      question: 'question',
      category: 'category',
      isVisible: 'isVisible',
    },
    prepare({ question, category, isVisible }) {
      return {
        title: question || 'Untitled Question',
        subtitle: `${category || 'general'} ${!isVisible ? '• Hidden' : ''}`,
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
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
});
