/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ sanity.ts
 * ╹ src/lib/
 */

import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// NSS VIT Sanity Project
const PROJECT_ID = 'o3z0h95j';
const DATASET = 'production';

// Configure the image URL builder
const builder = createImageUrlBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});

/**
 * Generate optimized image URL from Sanity image reference
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Get image URL with default optimizations
 */
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
): string {
  let imageBuilder = builder.image(source).auto('format').fit('max');

  if (width) {
    imageBuilder = imageBuilder.width(width);
  }
  if (height) {
    imageBuilder = imageBuilder.height(height);
  }

  return imageBuilder.url();
}

// ============================================
// Type Definitions
// ============================================

/**
 * Base Sanity Document
 */
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
}

/**
 * Image with alt text
 */
export interface SanityImage extends SanityImageSource {
  alt?: string;
  caption?: string;
}

// --------------------------------------------
// Reference Types
// --------------------------------------------

export interface AcademicYear extends SanityDocument {
  _type: 'academicYear';
  year: string;
  startDate?: string;
  endDate?: string;
  isCurrentYear: boolean;
  volunteerCount?: number;
  eventsCount?: number;
  beneficiariesReached?: number;
}

export interface Position extends SanityDocument {
  _type: 'position';
  title: string;
  category: 'faculty' | 'leadership' | 'head' | 'lead';
  hierarchyOrder: number;
  description?: string;
  isActive: boolean;
}

export interface EventCategory extends SanityDocument {
  _type: 'eventCategory';
  name: string;
  slug: { current: string };
  description?: string;
  coverImage?: SanityImage;
  color?: { hex: string };
  order: number;
  isActive: boolean;
}

// --------------------------------------------
// Singleton Types
// --------------------------------------------

export interface SiteConfig extends SanityDocument {
  _type: 'siteConfig';
  title: string;
  tagline?: string;
  nssLogo: SanityImage;
  vitLogo: SanityImage;
  favicon?: SanityImage;
  siteDescription?: string;
  ogImage?: SanityImage;
  keywords?: string[];
}

export interface Homepage extends SanityDocument {
  _type: 'homepage';
  heroTagline: string;
  heroSubtext?: string;
  heroImage?: SanityImage;
  heroCtaText?: string;
  heroCtaLink?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon?: string;
  }>;
  featuredAchievementText?: string;
  featuredAchievementDescription?: string;
  featuredAchievementLink?: string;
  highlightedCamp?: Camp;
  campPreviewImage?: SanityImage;
}

export interface AboutContent extends SanityDocument {
  _type: 'aboutContent';
  title: string;
  description?: string;
  aboutImage?: SanityImage;
  missionTitle?: string;
  missionText?: string;
  visionTitle?: string;
  visionText?: string;
  valuesTitle?: string;
  values?: Array<{
    title: string;
    description?: string;
    icon?: string;
  }>;
  benefitsTitle?: string;
  benefits?: Array<{
    title: string;
    description?: string;
  }>;
}

export interface Navigation extends SanityDocument {
  _type: 'navigation';
  mainNav?: Array<{
    label: string;
    href: string;
    order: number;
    isExternal: boolean;
    isVisible: boolean;
  }>;
  ctaButton?: {
    label?: string;
    href?: string;
    isVisible: boolean;
  };
}

export interface FooterContent extends SanityDocument {
  _type: 'footerContent';
  aboutTitle?: string;
  aboutDescription?: string;
  quickLinksTitle?: string;
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
  socialLinksTitle?: string;
  socialLinks?: Array<{
    platform: 'instagram' | 'linkedin' | 'youtube' | 'facebook' | 'twitter' | 'github';
    url: string;
    label?: string;
  }>;
  copyrightText?: string;
  legalLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export interface ContactInfo extends SanityDocument {
  _type: 'contactInfo';
  email: string;
  alternateEmail?: string;
  phone?: string;
  address?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    pincode?: string;
  };
  googleMapsUrl?: string;
  officeHours?: string;
}

// --------------------------------------------
// Collection Types
// --------------------------------------------

export interface TeamMember extends SanityDocument {
  _type: 'teamMember';
  name: string;
  academicYear: AcademicYear;
  position: Position;
  photo?: SanityImage;
  bio?: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  order: number;
  isActive: boolean;
}

export interface Volunteer {
  name: string;
  photo?: SanityImage;
  email?: string;
}

export interface VolunteerGroup extends SanityDocument {
  _type: 'volunteerGroup';
  academicYear: AcademicYear;
  title: string;
  description?: string;
  members: Volunteer[];
  order: number;
}

export interface Event extends SanityDocument {
  _type: 'event';
  title: string;
  slug?: { current: string };
  academicYear: AcademicYear;
  category: EventCategory;
  eventDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  fullDescription?: any[]; // Portable text
  registrationLink?: string;
  coverImage?: SanityImage;
  gallery?: SanityImage[];
  volunteersInvolved?: number;
  beneficiaries?: number;
  hoursContributed?: number;
  isHighlighted: boolean;
  isUpcoming: boolean;
}

export interface Benefit {
  title: string;
  description?: string;
}

export interface ImpactStory {
  _key: string;
  title: string;
  description?: string;
  image?: SanityImage;
  altText?: string;
}

export interface Camp extends SanityDocument {
  _type: 'camp';
  academicYear: AcademicYear;
  location: string;
  startDate?: string;
  endDate?: string;
  datesDisplay?: string;
  theme?: string;
  description?: string;
  highlights?: string[];
  significance?: string;
  benefits?: Benefit[];
  activities?: string[];
  coverImage?: SanityImage;
  carouselImages?: SanityImage[];
  impactStories?: ImpactStory[];
  volunteersParticipated?: number;
  beneficiariesReached?: number;
}

export interface Achievement extends SanityDocument {
  _type: 'achievement';
  title: string;
  academicYear: AcademicYear;
  institution?: string;
  date?: string;
  description?: string;
  image?: SanityImage;
  participants?: string[];
  category?: 'competition' | 'award' | 'certification' | 'other';
  isFeatured: boolean;
  order: number;
}

export interface GalleryImage extends SanityDocument {
  _type: 'galleryImage';
  image: SanityImage;
  caption?: string;
  academicYear: AcademicYear;
  category?: EventCategory;
  event?: Event;
  dateTaken?: string;
  tags?: string[];
  photographer?: string;
  isFeatured: boolean;
  order: number;
}

// --------------------------------------------
// Dynamic Content Types
// --------------------------------------------

export interface Announcement extends SanityDocument {
  _type: 'announcement';
  title: string;
  content: string;
  type: 'info' | 'event' | 'achievement' | 'urgent';
  image?: SanityImage;
  link?: string;
  linkText?: string;
  publishDate: string;
  expiryDate?: string;
  isPinned: boolean;
  isDismissible: boolean;
}

export interface FAQ extends SanityDocument {
  _type: 'faq';
  question: string;
  answer: string;
  richAnswer?: any[]; // Portable text
  category?: 'general' | 'membership' | 'events' | 'camp' | 'volunteering';
  order: number;
  isVisible: boolean;
}

export interface Developer extends SanityDocument {
  _type: 'developer';
  name: string;
  photo?: SanityImage;
  role?: string;
  description?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  website?: string;
  order: number;
}

export interface ContactSubmission extends SanityDocument {
  _type: 'contactSubmission';
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  organization?: string;
  inquiryType?: 'general' | 'volunteer' | 'partnership' | 'event' | 'other';
  submittedAt: string;
  status: 'new' | 'in_progress' | 'responded' | 'closed';
  notes?: string;
  assignedTo?: string;
}

// ============================================
// GROQ Query Helpers
// ============================================

/**
 * Common GROQ queries for fetching data
 */
export const queries = {
  // Site settings
  siteConfig: `*[_type == "siteConfig"][0]`,
  homepage: `*[_type == "homepage"][0]`,
  aboutContent: `*[_type == "aboutContent"][0]`,
  navigation: `*[_type == "navigation"][0]`,
  footerContent: `*[_type == "footerContent"][0]`,
  contactInfo: `*[_type == "contactInfo"][0]`,

  // Academic years
  academicYears: `*[_type == "academicYear"] | order(year desc)`,
  currentYear: `*[_type == "academicYear" && isCurrentYear == true][0]`,

  // Team members by year
  teamByYear: (year: string) =>
    `*[_type == "teamMember" && academicYear->year == "${year}" && isActive == true] | order(position->hierarchyOrder asc, order asc) {
      ...,
      academicYear->,
      position->
    }`,

  // Volunteers by year
  volunteersByYear: (year: string) =>
    `*[_type == "volunteerGroup" && academicYear->year == "${year}"] | order(order asc) {
      ...,
      academicYear->
    }`,

  // Events by year
  eventsByYear: (year: string) =>
    `*[_type == "event" && academicYear->year == "${year}"] | order(eventDate desc) {
      ...,
      academicYear->,
      category->
    }`,

  // Event categories
  eventCategories: `*[_type == "eventCategory" && isActive == true] | order(order asc)`,

  // Camps by year
  campsByYear: `*[_type == "camp"] | order(startDate desc) {
    ...,
    academicYear->
  }`,

  // Achievements by year
  achievementsByYear: (year: string) =>
    `*[_type == "achievement" && academicYear->year == "${year}"] | order(order asc, date desc) {
      ...,
      academicYear->
    }`,

  // Gallery by year
  galleryByYear: (year: string) =>
    `*[_type == "galleryImage" && academicYear->year == "${year}"] | order(category->order asc, order asc) {
      ...,
      academicYear->,
      category->,
      event->
    }`,

  // Active announcements
  activeAnnouncements: `*[_type == "announcement" && publishDate <= now() && (expiryDate == null || expiryDate > now())] | order(isPinned desc, publishDate desc)`,

  // FAQs
  faqs: `*[_type == "faq" && isVisible == true] | order(category asc, order asc)`,

  // Developers
  developers: `*[_type == "developer"] | order(order asc)`,

  // Upcoming events
  upcomingEvents: `*[_type == "event" && isUpcoming == true && eventDate > now()] | order(eventDate asc)[0...5] {
    ...,
    category->
  }`,
};
