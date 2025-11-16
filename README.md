# NSS VIT Official Website

[![Astro](https://img.shields.io/badge/Astro-4.16+-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)

Official website for the National Service Scheme (NSS) at Vidyalankar Institute of Technology, Mumbai.

**Motto**: *Not Me But You*

## 🌟 About NSS VIT

The National Service Scheme at VIT aims to develop student personalities through community service and social initiatives. We are committed to fostering leadership, civic responsibility, and social awareness among students while serving the community.

## 🚀 Technology Stack

This website has been completely refactored using modern web technologies:

- **[Astro](https://astro.build)** - Modern static site generator with island architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[React](https://react.dev)** - Interactive UI components
- **Content Collections** - Type-safe content management
- **Cloudinary CDN** - Optimized image delivery

## ✨ Key Features

- ⚡ **Lightning Fast**: Optimized static site with minimal JavaScript
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎨 **Modern UI**: Beautiful gradients, animations, and transitions
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible**: WCAG compliant and keyboard navigable
- 📊 **Analytics Ready**: Cloudflare Web Analytics integrated
- 🗂️ **Content Collections**: All data managed through JSON collections
- 🎯 **Type Safe**: Full TypeScript support for reliability

## 📁 Project Structure

```
nss-vit/
├── public/              # Static assets
│   ├── assets/         # Images and media
│   └── favicon/        # Favicon files
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Content Collections (JSON)
│   │   ├── team/
│   │   ├── achievements/
│   │   ├── faqs/
│   │   └── home-content/
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   └── styles/         # Global styles
└── README.md           # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Getting Started

```bash
# Navigate to project directory
cd nss-vit

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` after starting the dev server.

## 📝 Content Management

All website content is managed through Astro Content Collections in the `src/content/` directory. This provides:

- ✅ Type safety with Zod schemas
- ✅ Easy content updates via JSON files
- ✅ No hardcoded data in components
- ✅ Automatic validation

### Adding Content

**Team Members**: Add JSON files to `src/content/team/`
**Achievements**: Add JSON files to `src/content/achievements/`
**FAQs**: Edit `src/content/faqs/faqs.json`
**Home Content**: Edit `src/content/home-content/values-objectives-goals.json`

See the [README in nss-vit/](./nss-vit/README.md) for detailed documentation.

## 🌐 Pages

- **Home** (`/`) - Landing page with hero, about, values, and FAQs
- **Team** (`/team`) - Team members grouped by position
- **Achievements** (`/achievements`) - Competition victories and recognitions
- **Events** (`/events`) - NSS activities and events
- **Camp** (`/camp`) - Special camp information
- **Gallery** (`/gallery`) - Photo gallery

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades (Brand color)
- **Accent**: Red shades (Highlights)
- **Gradients**: Smooth transitions throughout

### Typography
- **Display**: Poppins (Headings)
- **Body**: Inter (Content)

## 📊 Performance

- ⚡ Lighthouse Score: 95+ across all metrics
- 🖼️ Optimized images via Cloudinary
- 📦 Minimal JavaScript bundle
- 🚀 Static generation for instant loads

## 🔒 Security

- Right-click protection enabled
- HTTPS enforced
- Secure headers configured
- No exposed secrets

## 📱 Social Media

- **LinkedIn**: [NSS VIT](https://www.linkedin.com/company/nss-vit)
- **Instagram**: [@nss.vit](https://www.instagram.com/nss.vit)
- **Email**: nss@vit.edu.in

## 📄 License

Copyright © 2025 NSS VIT. All rights reserved.

## 👥 Contributors

Developed with ❤ by the NSS VIT Technical Team

---

## 🔄 Migration from React to Astro

This website was recently refactored from React + Vite to Astro for:
- Better performance (static generation)
- Improved SEO
- Type-safe content management
- Reduced JavaScript bundle size
- Enhanced developer experience

The old React version is preserved in `nss-vit-old/` for reference.

---

<div align="center">

**[Visit Website](https://www.nssvit.in)** | **[Report Bug](https://github.com/nssvit/nssvit/issues)** | **[Request Feature](https://github.com/nssvit/nssvit/issues)**

Made with ⚡ by NSS VIT

</div>
