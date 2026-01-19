/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ tailwind.config.mjs
 * ╹ root/
 */

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // === SWISS DESIGN COLOR SYSTEM ===
        // Neutral Foundation (Black, White, Grays)
        swiss: {
          white: '#FFFFFF',
          black: '#000000',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          }
        },
        // Primary Text Color (from old site)
        text: '#1E1B4B',
        // === ACCENT COLORS (Used Sparingly) ===
        // Primary Accent - Indigo (from old nss-vit site)
        primary: '#4338CA',
        // Secondary/Supporting
        secondary: '#818CF8',
        accent: '#6366F1',
        // Extended Indigo Scale
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        // Functional Colors (for alerts, status)
        status: {
          success: '#16A34A',
          warning: '#CA8A04',
          error: '#DC2626',
        }
      },
      fontFamily: {
        // Swiss Style = Grotesque Sans Serif
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Swiss Typography Scale
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'title': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      spacing: {
        // Grid-based spacing (8px base unit)
        '18': '4.5rem',
        '22': '5.5rem',
        'grid': '8px',
      },
      borderWidth: {
        'swiss': '1px',
        'swiss-thick': '2px',
      },
      // NO SHADOWS - Swiss Design Principle
      // Using borders instead for visual separation
    },
  },
  plugins: [],
}
