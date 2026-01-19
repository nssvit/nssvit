/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ footerContent.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footerContent',
  title: 'Footer Content',
  type: 'document',
  icon: () => '🦶',
  groups: [
    { name: 'about', title: 'About Section', default: true },
    { name: 'links', title: 'Quick Links' },
    { name: 'social', title: 'Social Media' },
    { name: 'legal', title: 'Legal & Copyright' },
  ],
  fields: [
    // About Section
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      group: 'about',
      initialValue: 'NSS VIT',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      group: 'about',
      rows: 3,
      description: 'Short description in footer',
    }),

    // Quick Links
    defineField({
      name: 'quickLinksTitle',
      title: 'Quick Links Title',
      type: 'string',
      group: 'links',
      initialValue: 'Quick Links',
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      group: 'links',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),

    // Social Media
    defineField({
      name: 'socialLinksTitle',
      title: 'Social Links Title',
      type: 'string',
      group: 'social',
      initialValue: 'Connect With Us',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Accessible label for screen readers',
            },
          ],
          preview: {
            select: { platform: 'platform', url: 'url' },
            prepare({ platform, url }) {
              const labels: Record<string, string> = {
                instagram: 'Instagram',
                linkedin: 'LinkedIn',
                youtube: 'YouTube',
                facebook: 'Facebook',
                twitter: 'Twitter/X',
                github: 'GitHub',
              };
              return {
                title: labels[platform] || platform,
                subtitle: url,
              };
            },
          },
        },
      ],
    }),

    // Legal & Copyright
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'legal',
      description: 'e.g., "© 2024 NSS VIT. All rights reserved."',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      group: 'legal',
      of: [
        {
          type: 'object',
          name: 'legalLink',
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
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Content',
        subtitle: 'Links and social media',
      };
    },
  },
});
