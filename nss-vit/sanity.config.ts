/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ sanity.config.ts
 * ╹ root/
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard';
import { schemaTypes } from './sanity/schemas';

// NSS VIT Sanity Project
const PROJECT_ID = 'o3z0h95j';
const DATASET = 'production';

export default defineConfig({
  name: 'nss-vit',
  title: 'NSS VIT',
  projectId: PROJECT_ID,
  dataset: DATASET,
  plugins: [
    // Content editing with custom structure
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings Group
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(
                S.list()
                  .title('Site Settings')
                  .items([
                    S.listItem()
                      .title('Site Configuration')
                      .icon(() => '🔧')
                      .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
                    S.listItem()
                      .title('Homepage')
                      .icon(() => '🏠')
                      .child(S.document().schemaType('homepage').documentId('homepage')),
                    S.listItem()
                      .title('About Content')
                      .icon(() => 'ℹ️')
                      .child(S.document().schemaType('aboutContent').documentId('aboutContent')),
                    S.listItem()
                      .title('Navigation')
                      .icon(() => '🧭')
                      .child(S.document().schemaType('navigation').documentId('navigation')),
                    S.listItem()
                      .title('Footer')
                      .icon(() => '🦶')
                      .child(S.document().schemaType('footerContent').documentId('footerContent')),
                    S.listItem()
                      .title('Contact Info')
                      .icon(() => '📞')
                      .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
                  ])
              ),

            S.divider(),

            // Reference Data Group
            S.listItem()
              .title('Reference Data')
              .icon(() => '📋')
              .child(
                S.list()
                  .title('Reference Data')
                  .items([
                    S.documentTypeListItem('academicYear').title('Academic Years'),
                    S.documentTypeListItem('position').title('Positions'),
                    S.documentTypeListItem('eventCategory').title('Event Categories'),
                  ])
              ),

            S.divider(),

            // Main Content
            S.documentTypeListItem('teamMember').title('Team Members'),
            S.documentTypeListItem('volunteerGroup').title('Volunteer Groups'),
            S.documentTypeListItem('event').title('Events'),
            S.documentTypeListItem('camp').title('Special Camps'),
            S.documentTypeListItem('achievement').title('Achievements'),
            S.documentTypeListItem('galleryImage').title('Gallery'),

            S.divider(),

            // Dynamic Content
            S.documentTypeListItem('announcement').title('Announcements'),
            S.documentTypeListItem('faq').title('FAQs'),

            S.divider(),

            // Website
            S.documentTypeListItem('developer').title('Developers'),
            S.documentTypeListItem('contactSubmission').title('Contact Submissions'),
          ]),
    }),

    // Media library browser
    media(),

    // GROQ query playground
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),

    // Color picker input
    colorInput(),

    // Dashboard with widgets
    dashboardTool({
      widgets: [
        // Project info card
        projectInfoWidget(),

        // Team members with access
        projectUsersWidget(),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
