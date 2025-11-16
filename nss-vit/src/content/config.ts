import { defineCollection, z } from 'astro:content';

// Team member schema
const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    img: z.string(),
    linkedin: z.string().url().optional(),
    email: z.string().email(),
    order: z.number(),
  }),
});

// Volunteer schema
const volunteerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    year: z.enum(['first', 'second', 'third', 'fourth']),
    order: z.number(),
  }),
});

// Achievement schema
const achievementCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

// Event schema
const eventCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['area-based-1', 'area-based-2', 'university', 'college', 'competitions']),
    description: z.string(),
    location: z.string().optional(),
    year: z.number().optional(),
    order: z.number(),
  }),
});

// Announcement schema
const announcementCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

// FAQ schema
const faqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

// Camp schema
const campCollection = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.string(),
    location: z.string(),
    dates: z.string(),
    theme: z.string(),
    description: z.string(),
    highlights: z.array(z.string()),
    order: z.number(),
  }),
});

// Camp impact schema
const campImpactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string(),
    imgSrc: z.string(),
    altText: z.string(),
    order: z.number(),
  }),
});

// Developer schema
const developerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    photo: z.string(),
    linkedin: z.string().url(),
    github: z.string().url(),
    email: z.string().email(),
    order: z.number(),
  }),
});

// Values, Objectives, Goals schema
const homeContentCollection = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum(['value', 'objective', 'goal']),
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'team': teamCollection,
  'volunteers': volunteerCollection,
  'achievements': achievementCollection,
  'events': eventCollection,
  'announcements': announcementCollection,
  'faqs': faqCollection,
  'camp': campCollection,
  'camp-impact': campImpactCollection,
  'developers': developerCollection,
  'home-content': homeContentCollection,
};
