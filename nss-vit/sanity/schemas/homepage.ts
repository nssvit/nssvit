/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ homepage.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'stats', title: 'Statistics' },
    { name: 'featured', title: 'Featured Content' },
    { name: 'highlights', title: 'Highlights Section' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      group: 'hero',
      description: 'Main heading displayed in hero (e.g., "NOT ME, BUT YOU")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'string',
      group: 'hero',
      description: 'Subtitle below the main heading',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      description: 'Large background image for hero section',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'heroCtaText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'hero',
      description: 'Call-to-action button text',
      initialValue: 'Join Us',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'CTA Button Link',
      type: 'string',
      group: 'hero',
      description: 'URL for the CTA button',
    }),

    // Statistics
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      group: 'stats',
      description: 'Key statistics displayed on homepage',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "350+", "100+", "10K+"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Volunteers", "Events", "Lives Impacted"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon identifier (optional)',
            },
          ],
          preview: {
            select: {
              value: 'value',
              label: 'label',
            },
            prepare({ value, label }) {
              return {
                title: `${value} ${label}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),

    // Featured Content
    defineField({
      name: 'featuredAchievementText',
      title: 'Featured Achievement Text',
      type: 'string',
      group: 'featured',
      description: 'Text for achievement highlight card',
    }),
    defineField({
      name: 'featuredAchievementDescription',
      title: 'Featured Achievement Description',
      type: 'text',
      group: 'featured',
      rows: 2,
    }),
    defineField({
      name: 'featuredAchievementLink',
      title: 'Featured Achievement Link',
      type: 'string',
      group: 'featured',
      description: 'Link to achievements page or specific achievement',
    }),
    defineField({
      name: 'highlightedCamp',
      title: 'Highlighted Camp',
      type: 'reference',
      group: 'featured',
      to: [{ type: 'camp' }],
      description: 'Camp to feature on homepage highlights',
    }),
    defineField({
      name: 'campPreviewImage',
      title: 'Camp Preview Image',
      type: 'image',
      group: 'featured',
      options: { hotspot: true },
      description: 'Image shown in highlights bento for camp',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),

    // Highlights Section
    defineField({
      name: 'highlightImage',
      title: 'Highlight Image',
      type: 'image',
      group: 'highlights',
      options: { hotspot: true },
      description: 'Optional image shown in the camp card of highlights section. If not set, uses camp preview image.',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'highlightCampTitle',
      title: 'Camp Highlight Title',
      type: 'string',
      group: 'highlights',
      description: 'Title for camp card in highlights (e.g., "Special Camp")',
    }),
    defineField({
      name: 'highlightCampSubtitle',
      title: 'Camp Highlight Subtitle',
      type: 'string',
      group: 'highlights',
      description: 'Subtitle for camp card (e.g., "Camp 2024")',
    }),
    defineField({
      name: 'highlightCampDescription',
      title: 'Camp Highlight Description',
      type: 'string',
      group: 'highlights',
      description: 'Short description (e.g., "7-day camp at Kuderan Village.")',
    }),
    defineField({
      name: 'highlightAchievementTitle',
      title: 'Achievement Highlight Title',
      type: 'string',
      group: 'highlights',
      description: 'Title for achievement card (e.g., "Competition Wins")',
    }),
    defineField({
      name: 'highlightAchievementDescription',
      title: 'Achievement Highlight Description',
      type: 'string',
      group: 'highlights',
      description: 'Short description of achievements',
    }),
    defineField({
      name: 'highlightRecognitionTitle',
      title: 'Recognition Highlight Title',
      type: 'string',
      group: 'highlights',
      description: 'Title for recognition card (e.g., "Inter-College Excellence")',
    }),
    defineField({
      name: 'highlightRecognitionDescription',
      title: 'Recognition Highlight Description',
      type: 'string',
      group: 'highlights',
      description: 'Short description of recognition',
    }),
  ],
  preview: {
    select: {
      tagline: 'heroTagline',
    },
    prepare({ tagline }) {
      return {
        title: 'Homepage Content',
        subtitle: tagline || 'Configure homepage content',
      };
    },
  },
});
