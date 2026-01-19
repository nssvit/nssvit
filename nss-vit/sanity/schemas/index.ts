/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ index.ts
 * ╹ sanity/schemas/
 */

// Core Reference Schemas
import academicYear from './academicYear';
import position from './position';
import eventCategory from './eventCategory';

// Singleton Schemas (Site-wide settings)
import siteConfig from './siteConfig';
import homepage from './homepage';
import aboutContent from './aboutContent';
import navigation from './navigation';
import footerContent from './footerContent';
import contactInfo from './contactInfo';

// Collection Schemas (Year-based content)
import teamMember from './teamMember';
import volunteerGroup from './volunteerGroup';
import event from './event';
import camp from './camp';
import achievement from './achievement';
import galleryImage from './galleryImage';

// Dynamic Content Schemas
import announcement from './announcement';
import faq from './faq';
import developer from './developer';
import contactSubmission from './contactSubmission';

export const schemaTypes = [
  // Core References (define first as other schemas reference these)
  academicYear,
  position,
  eventCategory,

  // Singletons (Site-wide settings)
  siteConfig,
  homepage,
  aboutContent,
  navigation,
  footerContent,
  contactInfo,

  // Collections (Year-based)
  teamMember,
  volunteerGroup,
  event,
  camp,
  achievement,
  galleryImage,

  // Dynamic Content
  announcement,
  faq,
  developer,
  contactSubmission,
];
