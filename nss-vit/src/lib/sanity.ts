/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ sanity.ts
 * ╹ src/lib/
 */

import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

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

export interface ActivityCalendarEntry extends SanityDocument {
  _type: 'activityCalendarEntry';
  srNo: number;
  activityDetails: string;
  slug: { current: string };
  academicYear: AcademicYear;
  semester: 'odd' | 'even';
  targetedAudience: string;
  outcomeExpected: string;
  facultyInCharge: string[];
  weekOfMonth: string;
  month: string;
  year: number;
  status: 'planned' | 'completed' | 'cancelled';
  linkedEvent?: EventEntry;
  order?: number;
  isVisible: boolean;
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

export interface LocationDetails {
  venue: string;
  city?: string;
  state?: string;
  googleMapsLink?: string;
}

export interface RegistrationDetails {
  registrationUrl?: string;
  registrationDeadline?: string;
  maxParticipants?: number;
}

export interface MetricItem {
  label: string;
  value: string;
  note?: string;
}

export interface ImpactStats {
  beneficiariesCount?: number;
  volunteersCount?: number;
  hoursOfService?: number;
  fundsRaised?: number;
  itemsDistributed?: number;
  additionalMetrics?: MetricItem[];
}

export interface TimelineItem {
  title: string;
  time: string;
  description: string;
}

export interface TestimonialItem {
  personName: string;
  role?: string;
  image?: SanityImage;
  quote: string;
}

export interface SEODetails {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface GalleryItem {
  image: SanityImage;
  caption?: string;
}

export interface EventEntry extends SanityDocument {
  _type: 'eventEntry';
  title: string;
  slug: { current: string };
  shortDescription: string;
  description: any[]; // Portable Text array
  reportLink?: string;
  category: EventCategory;
  tags?: string[];
  coverImage: SanityImage;
  gallery?: GalleryItem[];
  eventDate: string;
  isCancelled: boolean;
  location?: LocationDetails;
  registration?: RegistrationDetails;
  impact?: ImpactStats;
  timeline?: TimelineItem[];
  testimonials?: TestimonialItem[];
  featured: boolean;
  seo?: SEODetails;
  status?: 'cancelled' | 'upcoming' | 'completed';
}

export interface EventsPage extends SanityDocument {
  _type: 'eventsPage';
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: SanityImage;
  ctaText?: string;
  ctaLink?: string;
  seo?: SEODetails;
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

  // Upcoming events (legacy event schema — kept for backward compat)
  upcomingEvents: `*[_type == "event" && isUpcoming == true && eventDate > now()] | order(eventDate asc)[0...5] {
    ...,
    category->
  }`,

  activityCalendarEntries:`*[_type == "activityCalendar"] | order(year asc, srNo asc) {
  _id,
  srNo,
  activityDetails,
  "slug": slug.current,
  semester,
  academicYear,
  targetedAudience,
  outcomeExpected,
  facultyInCharge,
  weekOfMonth,
  month,
  year,
  status
}`,

  // ─── eventEntry ────────────────────────────────────────────────────────────
  // All queries for the new eventEntry document type are grouped here.
  // Usage:  sanityClient.fetch(queries.eventEntry.upcoming)
  //         sanityClient.fetch(queries.eventEntry.bySlug('my-slug'))
  // ──────────────────────────────────────────────────────────────────────────
  eventEntry: {

    /** Events page singleton — hero title, subtitle, hero image, CTA, SEO + analytics settings */
    page: `*[_type == "eventsPage"][0] {
      heroTitle,
      heroSubtitle,
      heroImage,
      ctaText,
      ctaLink,
      seo,
      analyticsDataSource,
      "manualStats": manualStats {
        totalEventsCompleted,
        totalHoursCompleted,
        totalBeneficiaries,
        "categoryStats": categoryStats[] {
          "categoryId": category->_id,
          "categoryName": category->name,
          "categorySlug": category->slug.current,
          "categoryColor": category->color,
          eventsCount,
          hoursCount
        }
      }
    }`,

    /** Upcoming: isUpcoming == true */
    upcoming: `*[_type == "eventEntry" && isUpcoming == true] | order(eventDate asc) {
      _id, title,
      "slug": slug.current,
      shortDescription, description, coverImage,
      reportLink,
      eventDate, featured, isCancelled,
      "status": select(isCancelled == true => "cancelled", "upcoming"),
      category->{ _id, name, "slug": slug.current, color },
      tags, location,
      "registration": registration { registrationUrl },
      "impact": impact { beneficiariesCount, volunteersCount, hoursOfService }
    }`,

    /** Ongoing: (Not used now, returns empty) */
    ongoing: `*[_type == "eventEntry" && false]`,

    /** Past: isUpcoming == false */
    past: `*[_type == "eventEntry" && isUpcoming != true] | order(eventDate desc) {
      _id, title,
      "slug": slug.current,
      shortDescription, description, coverImage,
      reportLink,
      eventDate, featured, isCancelled,
      "status": select(isCancelled == true => "cancelled", "completed"),
      category->{ _id, name, "slug": slug.current, color },
      tags, location,
      "impact": impact { beneficiariesCount, volunteersCount, hoursOfService }
    }`,

    /** Featured: featured == true */
    featured: `*[_type == "eventEntry" && featured == true] | order(eventDate asc) {
      _id, title,
      "slug": slug.current,
      shortDescription, description, coverImage,
      reportLink,
      eventDate, featured, isCancelled,
      "status": select(
        isCancelled == true => "cancelled",
        isUpcoming == true => "upcoming",
        "completed"
      ),
      category->{ _id, name, "slug": slug.current, color },
      tags, location,
      "registration": registration { registrationUrl },
      "impact": impact { beneficiariesCount, volunteersCount, hoursOfService }
    }`,

    /** All events ordered newest first */
    all: `*[_type == "eventEntry"] | order(eventDate desc) {
      _id, title,
      "slug": slug.current,
      shortDescription, description, coverImage,
      reportLink,
      eventDate, featured, isCancelled,
      "status": select(
        isCancelled == true => "cancelled",
        isUpcoming == true => "upcoming",
        "completed"
      ),
      category->{ _id, name, "slug": slug.current, color },
      tags,
      "impact": impact { beneficiariesCount, volunteersCount, hoursOfService }
    }`,

    /** Single event detail by slug */
    bySlug: (slug: string) => `*[_type == "eventEntry" && slug.current == "${slug}"][0] {
      _id, title,
      "slug": slug.current,
      shortDescription, coverImage,
      reportLink,
      eventDate, featured, isCancelled,
      "status": select(
        isCancelled == true => "cancelled",
        isUpcoming == true => "upcoming",
        "completed"
      ),
      category->{ _id, name, "slug": slug.current, color },
      tags, location,
      description, gallery,
      registration, impact,
      timeline, testimonials, seo
    }`,
  },
};

