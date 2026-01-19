/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ contactInfo.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  icon: () => '📞',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Primary contact email',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'alternateEmail',
      title: 'Alternate Email',
      type: 'string',
      description: 'Secondary contact email (optional)',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Contact phone number (optional)',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'Address Line 1',
          type: 'string',
        },
        {
          name: 'line2',
          title: 'Address Line 2',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'pincode',
          title: 'Pincode',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
      description: 'Link to Google Maps location',
    }),
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'e.g., "Mon-Fri: 9:00 AM - 5:00 PM"',
    }),
  ],
  preview: {
    select: {
      email: 'email',
    },
    prepare({ email }) {
      return {
        title: 'Contact Information',
        subtitle: email || 'Configure contact details',
      };
    },
  },
});
