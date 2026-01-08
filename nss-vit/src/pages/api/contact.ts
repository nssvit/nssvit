/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ contact.ts
 * ╹ src/pages/api/
 */

import type { APIRoute } from 'astro';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'o3z0h95j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message, interest } = data;

    // Validate required fields
    if (!name || !email || !subject || !message || !interest) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create contact submission in Sanity
    await client.create({
      _type: 'contactSubmission',
      name,
      email,
      phone: phone || null,
      subject,
      message,
      interest,
      submittedAt: new Date().toISOString(),
      isRead: false,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
