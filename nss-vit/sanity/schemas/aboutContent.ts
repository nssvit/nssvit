/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ aboutContent.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutContent',
  title: 'About Content',
  type: 'document',
  icon: () => 'ℹ️',
  groups: [
    { name: 'intro', title: 'Introduction', default: true },
    { name: 'missionVision', title: 'Mission & Vision' },
    { name: 'values', title: 'Values & Goals' },
    { name: 'benefits', title: 'Benefits' },
  ],
  fields: [
    // Introduction
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      group: 'intro',
      description: 'e.g., "WHAT IS NSS?"',
      initialValue: 'WHAT IS NSS?',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
      group: 'intro',
      rows: 4,
      description: 'Primary description of NSS',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),

    // Mission & Vision
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      group: 'missionVision',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'missionText',
      title: 'Mission Statement',
      type: 'text',
      group: 'missionVision',
      rows: 3,
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      group: 'missionVision',
      initialValue: 'Our Vision',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Statement',
      type: 'text',
      group: 'missionVision',
      rows: 3,
    }),

    // Values
    defineField({
      name: 'valuesTitle',
      title: 'Values Section Title',
      type: 'string',
      group: 'values',
      initialValue: 'Our Values',
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      group: 'values',
      description: 'Displayed in the "Values" tab',
      of: [
        {
          type: 'object',
          name: 'value',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon identifier (optional)',
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      group: 'values',
      description: 'Displayed in the "Objectives" tab',
      of: [
        {
          type: 'object',
          name: 'objective',
          fields: [
            {
              name: 'title',
              title: 'Objective Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'array',
      group: 'values',
      description: 'Displayed in the "Goals" tab',
      of: [
        {
          type: 'object',
          name: 'goal',
          fields: [
            {
              name: 'title',
              title: 'Goal Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),

    // Benefits
    defineField({
      name: 'benefitsTitle',
      title: 'Benefits Section Title',
      type: 'string',
      group: 'benefits',
      initialValue: 'Benefits of Joining NSS',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      group: 'benefits',
      of: [
        {
          type: 'object',
          name: 'benefit',
          fields: [
            {
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Content',
        subtitle: 'Mission, Vision, Values & Benefits',
      };
    },
  },
});
