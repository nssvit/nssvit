/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ navigation.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: () => '🧭',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Main Navigation',
      type: 'array',
      description: 'Primary navigation menu items',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Display text for the link',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'URL path (e.g., /events, /team)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Display order (lower = first)',
              initialValue: 100,
            },
            {
              name: 'isExternal',
              title: 'External Link?',
              type: 'boolean',
              description: 'Opens in new tab',
              initialValue: false,
            },
            {
              name: 'isVisible',
              title: 'Visible?',
              type: 'boolean',
              description: 'Show in navigation',
              initialValue: true,
            },
          ],
          preview: {
            select: {
              label: 'label',
              href: 'href',
              order: 'order',
            },
            prepare({ label, href, order }) {
              return {
                title: label || 'Untitled',
                subtitle: `${href} • Order: ${order}`,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      description: 'Call-to-action button in navigation (optional)',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'href',
          title: 'Link',
          type: 'string',
        },
        {
          name: 'isVisible',
          title: 'Show CTA?',
          type: 'boolean',
          initialValue: false,
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'Menu items and links',
      };
    },
  },
});
