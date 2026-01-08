/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ seed-sanity.mjs
 * ╹ scripts/
 *
 * Bulk data seeding script for Sanity CMS
 * Reads from data/ folder and seeds to Sanity
 *
 * Usage:
 *   npm run seed           - Show help
 *   npm run seed:refs      - Seed reference data (positions, categories, years)
 *   npm run seed:team      - Seed team members
 *   npm run seed:events    - Seed events
 *   npm run seed:volunteers - Seed volunteer groups
 *   npm run seed:achievements - Seed achievements
 *   npm run seed:camp      - Seed camp data
 *   npm run seed:developers - Seed developers
 *   npm run seed:faqs      - Seed FAQs
 *   npm run seed:gallery   - Seed gallery images
 *   npm run seed:all       - Seed everything
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const PROJECT_ID = 'o3z0h95j';
const DATASET = 'production';
const API_VERSION = '2024-01-01';

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Helper to read JSON files
function readJson(path) {
  try {
    return JSON.parse(readFileSync(join(dataDir, path), 'utf-8'));
  } catch (err) {
    console.log(`  ⚠️  Could not read ${path}: ${err.message}`);
    return null;
  }
}

// Helper to create slug
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ═══════════════════════════════════════════════════════════════════════════
// REFERENCE DATA (Must be seeded first)
// ═══════════════════════════════════════════════════════════════════════════

const academicYears = [
  {
    _id: 'year-2023-2024',
    _type: 'academicYear',
    year: '2023-2024',
    startDate: '2023-06-01',
    endDate: '2024-05-31',
    isCurrentYear: false,
    volunteerCount: 100,
    eventsCount: 50,
    beneficiariesReached: 5000,
  },
  {
    _id: 'year-2024-2025',
    _type: 'academicYear',
    year: '2024-2025',
    startDate: '2024-06-01',
    endDate: '2025-05-31',
    isCurrentYear: true,
    volunteerCount: 100,
    eventsCount: 60,
    beneficiariesReached: 8000,
  },
];

// Position mapping from data to schema
const positionMapping = {
  'Program Officer': { id: 'pos-program-officer', category: 'faculty', order: 1 },
  'Faculty Advisor': { id: 'pos-faculty-advisor', category: 'faculty', order: 2 },
  'In-Charge': { id: 'pos-in-charge', category: 'leadership', order: 10 },
  'Documentation Lead': { id: 'pos-documentation-lead', category: 'lead', order: 20 },
  'Creatives Lead': { id: 'pos-creatives-lead', category: 'lead', order: 21 },
  'Events Lead': { id: 'pos-events-lead', category: 'lead', order: 22 },
  'Publicity Lead': { id: 'pos-publicity-lead', category: 'lead', order: 23 },
  'Cultural Lead': { id: 'pos-cultural-lead', category: 'lead', order: 24 },
  'Social Media Lead': { id: 'pos-social-media-lead', category: 'lead', order: 25 },
};

const positions = Object.entries(positionMapping).map(([title, config]) => ({
  _id: config.id,
  _type: 'position',
  title,
  category: config.category,
  hierarchyOrder: config.order,
  isActive: true,
}));

// Event category mapping from data
const categoryMapping = {
  'ab1': { id: 'cat-ab1', name: 'Area Based - 1', order: 1 },
  'ab2': { id: 'cat-ab2', name: 'Area Based - 2', order: 2 },
  'university': { id: 'cat-university', name: 'University Events', order: 3 },
  'college': { id: 'cat-college', name: 'College Events', order: 4 },
  'competitions': { id: 'cat-competitions', name: 'Competitions', order: 5 },
  'clg': { id: 'cat-college', name: 'College Events', order: 4 }, // alias
  'camp': { id: 'cat-special-camp', name: 'Special Camp', order: 6 },
};

// ═══════════════════════════════════════════════════════════════════════════
// SEEDING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

async function seedReferences() {
  console.log('\n📚 Seeding reference data...\n');

  // Academic Years
  console.log('  📅 Academic Years:');
  for (const year of academicYears) {
    try {
      await client.createOrReplace(year);
      console.log(`    ✓ ${year.year}`);
    } catch (err) {
      console.log(`    ✗ ${year.year}: ${err.message}`);
    }
  }

  // Positions
  console.log('\n  👤 Positions:');
  for (const position of positions) {
    try {
      await client.createOrReplace(position);
      console.log(`    ✓ ${position.title}`);
    } catch (err) {
      console.log(`    ✗ ${position.title}: ${err.message}`);
    }
  }

  // Event Categories (from events.json)
  const eventsData = readJson('events/events.json');
  if (eventsData?.categories) {
    console.log('\n  📁 Event Categories:');
    for (const cat of eventsData.categories) {
      const catDoc = {
        _id: categoryMapping[cat.id]?.id || `cat-${cat.id}`,
        _type: 'eventCategory',
        name: cat.name,
        slug: { _type: 'slug', current: cat.id },
        description: cat.description,
        order: categoryMapping[cat.id]?.order || 100,
        isActive: true,
      };
      try {
        await client.createOrReplace(catDoc);
        console.log(`    ✓ ${cat.name}`);
      } catch (err) {
        console.log(`    ✗ ${cat.name}: ${err.message}`);
      }
    }
  }

  console.log('\n✅ Reference data seeded!\n');
}

async function seedTeam() {
  console.log('\n👥 Seeding team members...\n');

  const teamData = readJson('team/team-2024-2025.json');
  if (!teamData?.members) {
    console.log('  ⚠️  No team data found');
    return;
  }

  const yearRef = 'year-2024-2025';
  let count = 0;

  for (const member of teamData.members) {
    const posConfig = positionMapping[member.position];
    if (!posConfig) {
      console.log(`    ⚠️  Unknown position "${member.position}" for ${member.name}`);
      continue;
    }

    const doc = {
      _type: 'teamMember',
      name: member.name,
      academicYear: { _type: 'reference', _ref: yearRef },
      position: { _type: 'reference', _ref: posConfig.id },
      email: member.email || undefined,
      linkedin: member.linkedin || undefined,
      order: member.order,
      isActive: true,
      // Store external image URL in a custom field or skip for now
      // Note: For images, you'd need to upload to Sanity or use external URLs
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ ${member.name} (${result._id})`);
      count++;
    } catch (err) {
      console.log(`  ✗ ${member.name}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} team members!\n`);
}

async function seedEvents() {
  console.log('\n📅 Seeding events...\n');

  const eventsData = readJson('events/events.json');
  if (!eventsData?.eventDetails) {
    console.log('  ⚠️  No events data found');
    return;
  }

  const yearRef = 'year-2024-2025';
  let count = 0;

  for (const categoryGroup of eventsData.eventDetails) {
    const catId = categoryMapping[categoryGroup.category]?.id || `cat-${categoryGroup.category}`;

    for (const event of categoryGroup.events) {
      const doc = {
        _type: 'event',
        title: event.title,
        slug: { _type: 'slug', current: slugify(event.title) },
        academicYear: { _type: 'reference', _ref: yearRef },
        category: { _type: 'reference', _ref: catId },
        location: event.location,
        description: event.description,
        isHighlighted: false,
        isUpcoming: false,
      };

      try {
        const result = await client.create(doc);
        console.log(`  ✓ ${event.title} (${result._id})`);
        count++;
      } catch (err) {
        console.log(`  ✗ ${event.title}: ${err.message}`);
      }
    }
  }

  console.log(`\n✅ Seeded ${count} events!\n`);
}

async function seedVolunteers() {
  console.log('\n🙋 Seeding volunteer groups...\n');

  const volData = readJson('volunteers/volunteers-2024-2025.json');
  if (!volData?.groups) {
    console.log('  ⚠️  No volunteer data found');
    return;
  }

  const yearRef = 'year-2024-2025';
  let count = 0;

  for (let i = 0; i < volData.groups.length; i++) {
    const group = volData.groups[i];
    const members = group.members.map((name, idx) => ({
      _key: `vol-${idx + 1}`,
      name: name,
    }));

    const doc = {
      _type: 'volunteerGroup',
      academicYear: { _type: 'reference', _ref: yearRef },
      title: group.title,
      order: i + 1,
      members: members,
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ ${group.title} - ${members.length} volunteers (${result._id})`);
      count++;
    } catch (err) {
      console.log(`  ✗ ${group.title}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} volunteer groups!\n`);
}

async function seedAchievements() {
  console.log('\n🏆 Seeding achievements...\n');

  const achieveData = readJson('achievements/achievements-2024-2025.json');
  if (!achieveData?.achievements) {
    console.log('  ⚠️  No achievements data found');
    return;
  }

  const yearRef = 'year-2024-2025';
  let count = 0;

  for (let i = 0; i < achieveData.achievements.length; i++) {
    const achieve = achieveData.achievements[i];

    const doc = {
      _type: 'achievement',
      title: achieve.title,
      academicYear: { _type: 'reference', _ref: yearRef },
      institution: achieve.institution,
      category: 'competition',
      order: i + 1,
      isFeatured: i < 3, // Feature first 3
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ ${achieve.title} (${result._id})`);
      count++;
    } catch (err) {
      console.log(`  ✗ ${achieve.title}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} achievements!\n`);
}

async function seedCamp() {
  console.log('\n🏕️  Seeding camp data...\n');

  const campFiles = ['camp/camp-2023-2024.json', 'camp/camp-2024-2025.json'];
  let count = 0;

  for (const file of campFiles) {
    const campData = readJson(file);
    if (!campData) continue;

    const yearRef = `year-${campData.year}`;

    // Parse dates from the display string
    const benefits = campData.tabs?.benefits?.map((b, i) => ({
      _key: `benefit-${i + 1}`,
      title: b.title,
      description: b.description,
    })) || [];

    const impactStories = campData.impact?.map((imp, i) => ({
      _key: `impact-${i + 1}`,
      title: imp.title,
      description: imp.description,
      altText: imp.altText,
    })) || [];

    const doc = {
      _id: `camp-${campData.year}`,
      _type: 'camp',
      academicYear: { _type: 'reference', _ref: yearRef },
      location: campData.location,
      datesDisplay: campData.dates,
      theme: campData.theme,
      description: campData.description,
      highlights: campData.highlights || [],
      significance: campData.tabs?.significance,
      benefits: benefits,
      activities: campData.tabs?.activities || [],
      impactStories: impactStories,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ Camp ${campData.year} - ${campData.location}`);
      count++;
    } catch (err) {
      console.log(`  ✗ Camp ${campData.year}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} camps!\n`);
}

async function seedDevelopers() {
  console.log('\n👨‍💻 Seeding developers...\n');

  const devData = readJson('developers/developers.json');
  if (!devData?.developers) {
    console.log('  ⚠️  No developers data found');
    return;
  }

  let count = 0;

  for (let i = 0; i < devData.developers.length; i++) {
    const dev = devData.developers[i];

    const doc = {
      _type: 'developer',
      name: dev.name,
      role: dev.title,
      description: dev.description,
      linkedin: dev.linkedin || undefined,
      github: dev.github || undefined,
      email: dev.email || undefined,
      order: i + 1,
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ ${dev.name} (${result._id})`);
      count++;
    } catch (err) {
      console.log(`  ✗ ${dev.name}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} developers!\n`);
}

async function seedFaqs() {
  console.log('\n❓ Seeding FAQs...\n');

  const faqData = readJson('faqs/faqs.json');
  if (!faqData?.faqs) {
    console.log('  ⚠️  No FAQ data found');
    return;
  }

  let count = 0;

  for (let i = 0; i < faqData.faqs.length; i++) {
    const faq = faqData.faqs[i];

    const doc = {
      _type: 'faq',
      question: faq.question,
      answer: faq.answer,
      category: 'general',
      order: i + 1,
      isVisible: true,
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ FAQ ${i + 1}: ${faq.question.substring(0, 40)}... (${result._id})`);
      count++;
    } catch (err) {
      console.log(`  ✗ FAQ ${i + 1}: ${err.message}`);
    }
  }

  console.log(`\n✅ Seeded ${count} FAQs!\n`);
}

async function seedSiteSettings() {
  console.log('\n⚙️  Seeding site settings...\n');

  // 1. Site Config
  const siteConfig = {
    _id: 'siteConfig',
    _type: 'siteConfig',
    title: 'NSS VIT',
    tagline: 'Not Me, But You',
    siteDescription: 'NSS VIT Vidyalankar - National Service Scheme unit fostering community service, leadership development, and social responsibility since 1969.',
    keywords: ['NSS', 'VIT', 'Vidyalankar', 'National Service Scheme', 'Mumbai', 'Volunteers', 'Community Service'],
  };

  console.log('  📋 Site Config:');
  try {
    await client.createOrReplace(siteConfig);
    console.log('    ✓ Site Configuration');
  } catch (err) {
    console.log(`    ✗ Site Configuration: ${err.message}`);
  }

  // 2. Homepage
  const homepage = {
    _id: 'homepage',
    _type: 'homepage',
    heroTagline: 'NOT ME, BUT YOU',
    heroSubtext: 'Fostering community service and leadership at Vidyalankar since 1969.',
    heroCtaText: 'Join Us',
    heroCtaLink: '/team',
    stats: [
      { _key: 'stat-1', value: '100+', label: 'Volunteers', icon: 'users' },
      { _key: 'stat-2', value: '60+', label: 'Events', icon: 'calendar' },
      { _key: 'stat-3', value: '8K+', label: 'Lives Impacted', icon: 'heart' },
    ],
    featuredAchievementText: 'Competition Wins',
    featuredAchievementDescription: '1st place in Street Play & Group Dance at inter-college events.',
    featuredAchievementLink: '/achievements',
  };

  console.log('\n  🏠 Homepage:');
  try {
    await client.createOrReplace(homepage);
    console.log('    ✓ Homepage Content');
  } catch (err) {
    console.log(`    ✗ Homepage Content: ${err.message}`);
  }

  // 3. Navigation
  const navigation = {
    _id: 'navigation',
    _type: 'navigation',
    mainNav: [
      { _key: 'nav-1', label: 'About', href: '/#about', order: 1, isExternal: false, isVisible: true },
      { _key: 'nav-2', label: 'Events', href: '/events', order: 2, isExternal: false, isVisible: true },
      { _key: 'nav-3', label: 'Team', href: '/team', order: 3, isExternal: false, isVisible: true },
      { _key: 'nav-4', label: 'Gallery', href: '/gallery', order: 4, isExternal: false, isVisible: true },
      { _key: 'nav-5', label: 'Camp', href: '/camp', order: 5, isExternal: false, isVisible: true },
      { _key: 'nav-6', label: 'Achievements', href: '/achievements', order: 6, isExternal: false, isVisible: true },
    ],
    ctaButton: {
      label: 'Join NSS',
      href: '/team#join',
      isVisible: true,
    },
  };

  console.log('\n  🧭 Navigation:');
  try {
    await client.createOrReplace(navigation);
    console.log('    ✓ Navigation Menu');
  } catch (err) {
    console.log(`    ✗ Navigation Menu: ${err.message}`);
  }

  // 4. Footer Content
  const footerContent = {
    _id: 'footerContent',
    _type: 'footerContent',
    aboutTitle: 'NSS VIT',
    aboutDescription: 'National Service Scheme unit at Vidyalankar Institute of Technology, fostering community service and leadership development since 1969.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { _key: 'link-1', label: 'About Us', href: '/#about' },
      { _key: 'link-2', label: 'Events', href: '/events' },
      { _key: 'link-3', label: 'Our Team', href: '/team' },
      { _key: 'link-4', label: 'Gallery', href: '/gallery' },
      { _key: 'link-5', label: 'Special Camp', href: '/camp' },
      { _key: 'link-6', label: 'Achievements', href: '/achievements' },
    ],
    socialLinksTitle: 'Connect With Us',
    socialLinks: [
      { _key: 'social-1', platform: 'instagram', url: 'https://www.instagram.com/nss_vit/', label: 'Follow us on Instagram' },
      { _key: 'social-2', platform: 'linkedin', url: 'https://www.linkedin.com/company/nssvit/', label: 'Connect on LinkedIn' },
      { _key: 'social-3', platform: 'youtube', url: 'https://www.youtube.com/@nssvit', label: 'Subscribe on YouTube' },
    ],
    copyrightText: '© 2025 NSS VIT. All rights reserved.',
  };

  console.log('\n  🦶 Footer:');
  try {
    await client.createOrReplace(footerContent);
    console.log('    ✓ Footer Content');
  } catch (err) {
    console.log(`    ✗ Footer Content: ${err.message}`);
  }

  // 5. Contact Info
  const contactInfo = {
    _id: 'contactInfo',
    _type: 'contactInfo',
    email: 'nss@vit.edu.in',
    address: {
      line1: 'Vidyalankar Institute of Technology',
      line2: 'Wadala (East)',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400037',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Vidyalankar+Institute+of+Technology+Mumbai',
    officeHours: 'Mon-Fri: 9:00 AM - 5:00 PM',
  };

  console.log('\n  📞 Contact Info:');
  try {
    await client.createOrReplace(contactInfo);
    console.log('    ✓ Contact Information');
  } catch (err) {
    console.log(`    ✗ Contact Information: ${err.message}`);
  }

  console.log('\n✅ Site settings seeded!\n');
}

async function seedGallery() {
  console.log('\n🖼️  Seeding gallery images...\n');

  const galleryData = readJson('gallery/gallery-2024-2025.json');
  if (!galleryData?.sections) {
    console.log('  ⚠️  No gallery data found');
    return;
  }

  const yearRef = 'year-2024-2025';
  const baseUrl = galleryData.baseUrl;
  let count = 0;

  console.log('  Note: Gallery images use Cloudinary URLs.');
  console.log('  Creating gallery documents with external image references...\n');

  for (const [section, info] of Object.entries(galleryData.sections)) {
    const catId = categoryMapping[section]?.id || `cat-${section}`;

    for (let i = 1; i <= info.count; i++) {
      const imageUrl = `${baseUrl}/${galleryData.year}/${section}/${i}.jpg`;

      const doc = {
        _type: 'galleryImage',
        academicYear: { _type: 'reference', _ref: yearRef },
        category: { _type: 'reference', _ref: catId },
        caption: `${info.label} - Image ${i}`,
        order: count + 1,
        isFeatured: i === 1, // Feature first image of each section
        tags: [info.label.toLowerCase(), galleryData.year],
      };

      try {
        const result = await client.create(doc);
        console.log(`  ✓ ${info.label} #${i} (${result._id})`);
        count++;
      } catch (err) {
        console.log(`  ✗ ${info.label} #${i}: ${err.message}`);
      }
    }
  }

  console.log(`\n✅ Seeded ${count} gallery entries!`);
  console.log('  ⚠️  Note: Images need to be uploaded separately via Sanity Studio.\n');
}

// ═══════════════════════════════════════════════════════════════════════════
// CLI INTERFACE
// ═══════════════════════════════════════════════════════════════════════════

async function main() {
  const command = process.argv[2] || 'help';

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('\n❌ Error: SANITY_WRITE_TOKEN not found in environment variables.');
    console.error('   Add it to your .env file:\n');
    console.error('   SANITY_WRITE_TOKEN=your-token-here\n');
    console.error('   Get a token from: https://sanity.io/manage/project/o3z0h95j/api#tokens\n');
    process.exit(1);
  }

  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║           NSS-VIT Sanity Data Seeding Script                  ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝');
  console.log(`\n🎯 Project: ${PROJECT_ID}`);
  console.log(`📦 Dataset: ${DATASET}`);
  console.log(`📂 Data Dir: ${dataDir}`);

  switch (command) {
    case 'references':
    case 'refs':
      await seedReferences();
      break;

    case 'team':
      await seedTeam();
      break;

    case 'events':
      await seedEvents();
      break;

    case 'volunteers':
      await seedVolunteers();
      break;

    case 'achievements':
      await seedAchievements();
      break;

    case 'camp':
      await seedCamp();
      break;

    case 'developers':
      await seedDevelopers();
      break;

    case 'faqs':
      await seedFaqs();
      break;

    case 'gallery':
      await seedGallery();
      break;

    case 'settings':
    case 'site':
      await seedSiteSettings();
      break;

    case 'all':
      await seedReferences();
      await seedSiteSettings();
      await seedTeam();
      await seedEvents();
      await seedVolunteers();
      await seedAchievements();
      await seedCamp();
      await seedDevelopers();
      await seedFaqs();
      // await seedGallery(); // Optional - many documents
      console.log('\n📸 Skipped gallery (run separately with: npm run seed:gallery)\n');
      break;

    case 'help':
    default:
      console.log('\n📖 Available commands:\n');
      console.log('  npm run seed:refs        - Positions, categories, academic years');
      console.log('  npm run seed:settings    - Site config, homepage, navigation, footer, contact');
      console.log('  npm run seed:team        - Team members (18 members)');
      console.log('  npm run seed:events      - Events from all categories');
      console.log('  npm run seed:volunteers  - Volunteer groups with names');
      console.log('  npm run seed:achievements - Competition achievements');
      console.log('  npm run seed:camp        - Camp data (2023-24 & 2024-25)');
      console.log('  npm run seed:developers  - Website developers');
      console.log('  npm run seed:faqs        - FAQ entries');
      console.log('  npm run seed:gallery     - Gallery image entries');
      console.log('  npm run seed:all         - Everything (except gallery)');
      console.log('\n💡 Recommended order: refs → settings → team → events → volunteers → achievements → camp → developers → faqs\n');
      break;
  }
}

main().catch((err) => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
