/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ siteConfig.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  icon: () => '⚙️',
  groups: [
    { name: 'branding', title: 'Branding', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // Branding
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'branding',
      initialValue: 'NSS VIT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
      description: 'Short tagline for the site',
      initialValue: 'Not Me, But You',
    }),
    defineField({
      name: 'nssLogo',
      title: 'NSS Logo',
      type: 'image',
      group: 'branding',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'NSS Logo',
        },
      ],
    }),
    defineField({
      name: 'vitLogo',
      title: 'VIT Logo',
      type: 'image',
      group: 'branding',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'VIT Logo',
        },
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'branding',
      description: 'Site favicon (preferably SVG or PNG)',
    }),

    // SEO
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Default meta description for SEO',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG Image',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
      description: 'Default image for social media sharing (1200x630px recommended)',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Default Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Default SEO keywords',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Configuration',
        subtitle: 'Global settings and branding',
      };
    },
  },
});
