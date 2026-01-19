/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ galleryImage.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Brief caption for the image',
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      to: [{ type: 'academicYear' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'eventCategory' }],
      description: 'Event category this image belongs to',
    }),
    defineField({
      name: 'event',
      title: 'Related Event',
      type: 'reference',
      to: [{ type: 'event' }],
      description: 'Specific event this image is from (optional)',
    }),
    defineField({
      name: 'dateTaken',
      title: 'Date Taken',
      type: 'date',
      description: 'When the photo was taken',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Keywords for filtering/search',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
      description: 'Credit for the photographer (optional)',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured?',
      type: 'boolean',
      description: 'Show in featured/highlight sections',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within gallery (lower = first)',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      alt: 'image.alt',
      year: 'academicYear.year',
      category: 'category.name',
      media: 'image',
    },
    prepare({ caption, alt, year, category, media }) {
      return {
        title: caption || alt || 'Untitled Image',
        subtitle: `${category || 'No category'} • ${year || 'No year'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'dateTaken', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
