# NSS VIT - Astro Website

Official website for the National Service Scheme at Vidyalankar Institute of Technology, Mumbai.

## 🚀 Features

- **Astro Framework**: Modern static site generator with island architecture
- **Content Collections**: All content managed through type-safe JSON collections
- **Tailwind CSS**: Utility-first CSS framework for modern styling
- **React Integration**: Interactive components built with React
- **SEO Optimized**: Complete meta tags and sitemap generation
- **Performance Focused**: Fast load times with optimized images and minimal JavaScript
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Modern Animations**: Smooth transitions and engaging user experience

## 📁 Project Structure

```
/
├── public/
│   ├── assets/        # Static images and media
│   └── favicon/       # Favicon files
├── src/
│   ├── components/    # Reusable Astro and React components
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── content/       # Content Collections (JSON data)
│   │   ├── team/
│   │   ├── achievements/
│   │   ├── faqs/
│   │   ├── home-content/
│   │   └── config.ts
│   ├── layouts/       # Page layouts
│   │   └── MainLayout.astro
│   ├── pages/         # File-based routing
│   │   ├── index.astro
│   │   ├── team.astro
│   │   └── achievements.astro
│   └── styles/
│       └── global.css # Global styles and Tailwind
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Tech Stack

- **Astro** (v4.16+) - Static Site Generator
- **React** (v18.3+) - UI Components
- **TypeScript** (v5.7+) - Type Safety
- **Tailwind CSS** (v3.4+) - Styling
- **React Icons** - Icon library

## 📦 Content Collections

All website content is managed through Astro Content Collections for type safety and easy updates:

### Team Members (`src/content/team/`)
- Faculty and student leadership
- Profile images, LinkedIn, and email

### Achievements (`src/content/achievements/`)
- Competition victories
- Institutional recognitions

### FAQs (`src/content/faqs/`)
- Common questions and answers

### Home Content (`src/content/home-content/`)
- Values, Objectives, and Goals

## 🎨 Design System

### Colors
- **Primary**: Blue shades (50-950)
- **Accent**: Red shades (50-950)
- **Background**: White with gradient overlays

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (content)

### Components
- Reusable button styles (`btn-primary`, `btn-secondary`)
- Card components with hover effects
- Section titles with gradient text
- Responsive navigation with mobile menu

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
Visit `http://localhost:4321` after running `npm run dev`

## 📝 Content Management

### Adding Team Members

Create a new JSON file in `src/content/team/`:

```json
{
  "id": "unique-id",
  "name": "Member Name",
  "position": "Position Title",
  "img": "https://cloudinary.com/image-url",
  "linkedin": "https://linkedin.com/in/profile",
  "email": "email@vit.edu.in",
  "order": 1
}
```

### Adding Achievements

Create a new JSON file in `src/content/achievements/`:

```json
{
  "id": "unique-id",
  "title": "Achievement Title",
  "institution": "Institution Name",
  "image": "https://cloudinary.com/image-url",
  "order": 1
}
```

### Adding FAQs

Edit `src/content/faqs/faqs.json`:

```json
{
  "id": "unique-id",
  "question": "Your question?",
  "answer": "Detailed answer here.",
  "order": 1
}
```

## 🌐 Deployment

The site is optimized for static hosting platforms:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Deploy with `netlify deploy`
- **Cloudflare Pages**: Connect your repository

## 📊 Analytics

- Cloudflare Web Analytics integrated
- Vercel Analytics ready (add tokens)
- Speed Insights configured

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)
- React integration enabled
- Tailwind CSS configured
- Static output mode

### Tailwind Config (`tailwind.config.mjs`)
- Custom color palette
- Animation utilities
- Font family definitions

## 🎯 SEO & Performance

- Meta tags for all pages
- Open Graph support
- Twitter Cards
- Sitemap generation
- Image optimization via Cloudinary
- Lazy loading images
- Minimal JavaScript

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interfaces
- Optimized images for all screen sizes

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Copyright © 2025 NSS VIT. All rights reserved.

## 👥 Developed By

NSS VIT Technical Team

---

**Motto**: Not Me But You

**Website**: https://www.nssvit.in
**Email**: nss@vit.edu.in
**LinkedIn**: https://www.linkedin.com/company/nss-vit
**Instagram**: https://www.instagram.com/nss.vit
