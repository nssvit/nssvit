/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ seedActivityCalendar.mjs
 * ╹ scripts/
 *
 * Seeds `activityCalendar` documents into Sanity from the 2026-27
 * NSS-VIT Odd + Even semester activity calendars.
 *
 * Usage:
 *   SANITY_PROJECT_ID=xxxx SANITY_DATASET=production SANITY_TOKEN=sk... \
 *     node scripts/seedActivityCalendar.mjs
 *
 * Requires: npm i @sanity/client
 */

import "dotenv/config"; // Load environment variables from .env file
import { createClient } from "@sanity/client";




const PROJECT_ID = 'o3z0h95j';
const DATASET = 'production';
const API_VERSION = '2024-01-01';
console.log("write token", process.env.SANITY_WRITE_TOKEN);
console.log("project id", PROJECT_ID);

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const FACULTY = ["Prof. Rakshak Sood", "Prof. Aarti Koduri"];
const AUDIENCE = "Students and Faculty";
const YEAR_LABEL = "2026-27";

// ── Odd Semester (Aug 2026 – Oct 2026) ──────────────────────────────────
const oddSemester = [
  {
    srNo: 1,
    activityDetails: "Independence Day Session",
    outcomeExpected:
      "Promoted national values, unity, and civic responsibility among students.",
    weekOfMonth: "2nd Week",
    month: "August",
    year: 2026,
  },
  {
    srNo: 2,
    activityDetails: "POCSO Awareness Session",
    outcomeExpected:
      "Increased awareness regarding child safety and legal protection.",
    weekOfMonth: "3rd Week",
    month: "August",
    year: 2026,
  },
  {
    srNo: 3,
    activityDetails: "NSS Day",
    outcomeExpected:
      "Encouraged social responsibility, teamwork, and community engagement.",
    weekOfMonth: "4th Week",
    month: "September",
    year: 2026,
  },
  {
    srNo: 4,
    activityDetails: "Civic Sense Campaign",
    outcomeExpected:
      "Developed awareness about civic duties and maintaining public spaces.",
    weekOfMonth: "1st Week",
    month: "September",
    year: 2026,
  },
  {
    srNo: 5,
    activityDetails: "Women Safety Session",
    outcomeExpected:
      "Promoted awareness regarding personal safety and gender sensitivity.",
    weekOfMonth: "2nd Week",
    month: "September",
    year: 2026,
  },
  {
    srNo: 6,
    activityDetails: "Mental Health Awareness Campaign",
    outcomeExpected:
      "Encouraged open discussions on mental health and emotional wellness.",
    weekOfMonth: "1st Week",
    month: "October",
    year: 2026,
  },
  {
    srNo: 7,
    activityDetails: "E-Diya Workshop",
    outcomeExpected: "Encouraged innovation, sustainability, and festive creativity.",
    weekOfMonth: "2nd Week",
    month: "October",
    year: 2026,
  },
  {
    srNo: 8,
    activityDetails: "Kandil Making",
    outcomeExpected:
      "Encouraged creativity and appreciation of cultural traditions.",
    weekOfMonth: "3rd Week",
    month: "October",
    year: 2026,
  },
].map((e) => ({ ...e, semester: "odd" }));

// ── Even Semester (Jan 2027 – Mar 2027) ─────────────────────────────────
const evenSemester = [
  {
    srNo: 1,
    activityDetails: "Financial Literacy Awareness Session",
    outcomeExpected:
      "Improved awareness regarding financial management and responsible spending.",
    weekOfMonth: "2nd Week",
    month: "January",
    year: 2027,
  },
  {
    srNo: 2,
    activityDetails: "Digital Payment Teaching Session",
    outcomeExpected:
      "Increased awareness and confidence in digital transactions.",
    weekOfMonth: "3rd Week",
    month: "January",
    year: 2027,
  },
  {
    srNo: 3,
    activityDetails: "Road Safety Session",
    outcomeExpected: "Promoted safe road practices and responsible behavior.",
    weekOfMonth: "4th Week",
    month: "January",
    year: 2027,
  },
  {
    srNo: 4,
    activityDetails: "24 Hour Hack for Good",
    outcomeExpected:
      "Encouraged innovation, teamwork, and problem-solving skills for social causes.",
    weekOfMonth: "1st Week",
    month: "February",
    year: 2027,
  },
  {
    srNo: 5,
    activityDetails: "Superstition Awareness Session",
    outcomeExpected:
      "Encouraged rational thinking and reduced belief in superstitious practices among participants.",
    weekOfMonth: "2nd Week",
    month: "February",
    year: 2027,
  },
  {
    srNo: 6,
    activityDetails: "Swap and Sort",
    outcomeExpected: "Encouraged responsible consumption and recycling habits.",
    weekOfMonth: "3rd Week",
    month: "February",
    year: 2027,
  },
  {
    srNo: 7,
    activityDetails: "Paper Bag Making",
    outcomeExpected:
      "Promoted environmental awareness and sustainable practices.",
    weekOfMonth: "4th Week",
    month: "February",
    year: 2027,
  },
  {
    srNo: 8,
    activityDetails: "Digital Awareness Session",
    outcomeExpected:
      "Enhanced awareness about safe and responsible use of digital platforms.",
    weekOfMonth: "1st Week",
    month: "March",
    year: 2027,
  },
].map((e) => ({ ...e, semester: "even" }));

const ALL_ENTRIES = [...oddSemester, ...evenSemester];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function seed() {
  if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_WRITE_TOKEN) {
    console.error(
      "Missing SANITY_PROJECT_ID / SANITY_WRITE_TOKEN env vars. Aborting.",
    );
    process.exit(1);
  }

  const tx = client.transaction();

  for (const entry of ALL_ENTRIES) {
    const docId = `activityCalendar-${entry.semester}-${entry.srNo}-${entry.year}`;
    const doc = {
      _id: docId,
      _type: "activityCalendar",
      srNo: entry.srNo,
      activityDetails: entry.activityDetails,
      slug: { _type: "slug", current: slugify(entry.activityDetails) },
      semester: entry.semester,
      academicYear: YEAR_LABEL,
      targetedAudience: AUDIENCE,
      outcomeExpected: entry.outcomeExpected,
      facultyInCharge: FACULTY,
      weekOfMonth: entry.weekOfMonth,
      month: entry.month,
      year: entry.year,
      status: "planned",
    };
    tx.createOrReplace(doc);
  }

  const result = await tx.commit();
  console.log(`Seeded ${ALL_ENTRIES.length} activity calendar entries.`);
  console.log(result);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
