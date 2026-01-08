/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ eventCategory.ts
 * ╹ sanity/schemas/
 */

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'eventCategory',
  title: 'Event Category',
  type: 'document',
  icon: () => '📁',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'Display name (e.g., Area Based 1, University Events)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., ab1, university)',
      options: {
        source: 'name',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of this event category',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Representative image for this category',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility',
        },
      ],
    }),
    defineField({
      name: 'color',
      title: 'Theme Color',
      type: 'color',
      description: 'Color used for UI elements related to this category',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which categories appear (lower = first)',
      initialValue: 100,
    }),
    defineField({
      name: 'isActive',
      title: 'Active?',
      type: 'boolean',
      description: 'Show this category on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug.current',
      media: 'coverImage',
    },
    prepare({ title, slug, media }) {
      return {
        title: title || 'Untitled Category',
        subtitle: slug || 'No slug',
        media,
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
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
