/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ announcement.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: () => '📢',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 3,
      description: 'Brief announcement content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Announcement Type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Event', value: 'event' },
          { title: 'Achievement', value: 'achievement' },
          { title: 'Urgent', value: 'urgent' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional image for the announcement',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'URL to link to (internal like "/events" or external)',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Button/link text (e.g., "Learn More", "Register Now")',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      description: 'When this announcement should start showing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'datetime',
      description: 'When this announcement should stop showing (leave empty for no expiry)',
    }),
    defineField({
      name: 'isPinned',
      title: 'Pin to Top?',
      type: 'boolean',
      description: 'Pinned announcements always appear first',
      initialValue: false,
    }),
    defineField({
      name: 'isDismissible',
      title: 'Dismissible?',
      type: 'boolean',
      description: 'Can users close/dismiss this announcement?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      publishDate: 'publishDate',
      expiryDate: 'expiryDate',
      media: 'image',
    },
    prepare({ title, type, publishDate, expiryDate, media }) {
      const now = new Date();
      const publish = publishDate ? new Date(publishDate) : null;
      const expiry = expiryDate ? new Date(expiryDate) : null;

      let status = 'Draft';
      if (publish && publish > now) {
        status = 'Scheduled';
      } else if (publish && (!expiry || expiry > now)) {
        status = 'Active';
      } else if (expiry && expiry < now) {
        status = 'Expired';
      }

      return {
        title: title || 'Untitled Announcement',
        subtitle: `${type?.toUpperCase() || 'INFO'} • ${status}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Publish Date (Newest)',
      name: 'publishDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Pinned First',
      name: 'pinnedFirst',
      by: [
        { field: 'isPinned', direction: 'desc' },
        { field: 'publishDate', direction: 'desc' },
      ],
    },
  ],
});
