/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ contactSubmission.ts
 * ╹ sanity/schemas/
 */

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  icon: () => '📬',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      readOnly: true,
      description: 'For NGO/partner inquiries',
    }),
    defineField({
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'string',
      options: {
        list: [
          { title: 'General Inquiry', value: 'general' },
          { title: 'Volunteer Interest', value: 'volunteer' },
          { title: 'Partnership/NGO', value: 'partnership' },
          { title: 'Event Collaboration', value: 'event' },
          { title: 'Other', value: 'other' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Responded', value: 'responded' },
          { title: 'Closed', value: 'closed' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes about this submission',
    }),
    defineField({
      name: 'assignedTo',
      title: 'Assigned To',
      type: 'string',
      description: 'Team member handling this inquiry',
    }),
    defineField({
      name: 'interest',
      title: 'Interest',
      type: 'string',
      options: {
        list: [
          { title: 'Volunteer', value: 'volunteer' },
          { title: 'Sponsor', value: 'sponsor' },
          { title: 'Partner/NGO', value: 'partner' },
          { title: 'Media', value: 'media' },
          { title: 'Other', value: 'other' },
        ],
      },
      readOnly: true,
      description: 'Primary interest area',
    }),
    defineField({
      name: 'isRead',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as read when reviewed',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      subject: 'subject',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({ name, subject, status, submittedAt }) {
      const statusLabels: Record<string, string> = {
        new: '🔴 New',
        in_progress: '🟡 In Progress',
        responded: '🟢 Responded',
        closed: '⚫ Closed',
      };
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : 'No date';
      return {
        title: name || 'Anonymous',
        subtitle: `${statusLabels[status] || status} • ${subject || 'No subject'} • ${date}`,
      };
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'submittedAt', direction: 'desc' },
      ],
    },
  ],
});
