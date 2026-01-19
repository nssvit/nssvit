# NSS VIT - Official Website

> **"Not Me, But You"** - The motto that drives our community service

The official website for the National Service Scheme (NSS) unit at Vidyalankar Institute of Technology, Mumbai. Built with modern web technologies for a fast, responsive, and content-managed experience.

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5 - Static-first with server capabilities
- **UI Components:** [React](https://react.dev) v19 - Interactive islands
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4 - Swiss-style design system
- **CMS:** [Sanity](https://sanity.io) v5 - Headless content management
- **Animations:** [Framer Motion](https://framer.com/motion) - Smooth transitions
- **Icons:** [Lucide React](https://lucide.dev) - Consistent iconography
- **Deployment:** [Vercel](https://vercel.com) - Edge-optimized hosting

## Features

- **Swiss Typography System** - Clean, hierarchical text with Inter font
- **Dynamic Content** - All content managed via Sanity CMS
- **Responsive Design** - Mobile-first, optimized for all devices
- **Image Lightbox** - Full-screen image viewing with navigation
- **Year-based Filtering** - Browse team, events, achievements by academic year
- **Contact Form** - Submissions stored in Sanity
- **SEO Optimized** - Meta tags, sitemap, structured data

## Pages

| Page | Description |
|------|-------------|
| `/` | Homepage with hero, highlights, stats, about, FAQ |
| `/events` | Events organized by category and year |
| `/team` | Team members and volunteers by position |
| `/gallery` | Photo gallery with category filters |
| `/camp` | Special Camp information and gallery |
| `/achievements` | Awards and recognitions |
| `/get-involved` | Contact form and ways to contribute |
| `/developers` | Website credits |
| `/admin` | Sanity Studio (content management) |

## Project Structure

```
nss-vit/
├── public/              # Static assets (favicon, etc.)
├── sanity/
│   └── schemas/         # Sanity content type definitions
├── scripts/
│   └── seed-sanity.mjs  # Data seeding scripts
├── src/
│   ├── components/      # React & Astro components
│   │   ├── achievements/
│   │   ├── camp/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── home/
│   │   ├── join/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── team/
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utilities & Sanity client
│   ├── pages/           # Route pages
│   └── styles/          # Global CSS & Swiss design tokens
├── astro.config.mjs     # Astro configuration
├── sanity.config.ts     # Sanity Studio configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (for CMS access)

### Installation

```bash
# Clone the repository
git clone https://github.com/nssvit/nss-vit.git
cd nss-vit

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Sanity project credentials
```

### Environment Variables

Create a `.env` file with:

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### Development

```bash
# Start dev server (http://localhost:4321)
npm run dev

# Access Sanity Studio at /admin
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

Access the Sanity Studio at `/admin` to manage:

- **Site Config** - Logo, navigation, footer
- **Homepage** - Hero content, stats, highlights
- **Events** - Categories and event details
- **Team Members** - Positions and volunteers
- **Gallery** - Photo collections by year/category
- **Camp** - Special camp information
- **Achievements** - Awards and recognitions
- **Announcements** - Banner notifications
- **FAQs** - Frequently asked questions

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run seed:all` | Seed all content to Sanity |
| `npm run upload:all` | Upload all images to Sanity |

## Design System

The website follows Swiss/International Typographic Style principles:

- **Typography Scale:** Display (48px), Headline (36px), Title (22px), Body (17px), Caption (15px), Label (12px)
- **Colors:** Primary (#4338CA), Text (#1A1F2C), Grays (Swiss gray palette)
- **Spacing:** 8px grid system with responsive adjustments
- **Components:** Cards, buttons, forms following Swiss minimalism

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

**Developed & Maintained by:**
- **Harshal More** - Technical Head, NSS VIT (2024-2025)

**Built with:**
- Astro + React + Sanity + Tailwind CSS

## License

This project is proprietary to NSS VIT, Vidyalankar Institute of Technology.

---

**NSS VIT** | Vidyalankar Institute of Technology, Wadala, Mumbai - 400037

Website: [nssvit.in](https://nssvit.in) | Instagram: [@nssvit](https://instagram.com/nssvit)
