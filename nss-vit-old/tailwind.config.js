/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#1E1B4B',
        background: '#FFFFFF',
        primary: '#4338CA',
        secondary: '#818CF8',
        accent: '#6366F1',
        blue: {
          50: '#F5F7FF',
          100: '#EEF2FF',
          200: '#E0E7FF',
          300: '#93C5FD',
          400: '#60A5FA',
          600: '#3730A3',
          700: '#312E81',
          800: '#1E1B4B',
        },
        purple: {
          50: '#F8F5FF',
          100: '#F3F1FF',
          200: '#E9E8FF',
          300: '#C4B5FD',
          400: '#A78BFA',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4338CA 0%, #7C3AED 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #3730A3 0%, #5B21B6 100%)',
        'gradient-card': 'linear-gradient(165deg, #F8F5FF 0%, #F3F1FF 100%)',
        'gradient-card-hover': 'linear-gradient(165deg, #F5F7FF 0%, #E9E8FF 100%)',
        'gradient-card-active': 'linear-gradient(165deg, #EEF2FF 0%, #E0E7FF 100%)',
        'gradient-button': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-accent': 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',
        'gradient-light': 'linear-gradient(165deg, #FFFFFF 0%, #F8F5FF 100%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'button-pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'fade-in': 'fade-in-up 0.6s ease-out forwards',
        'button-pop': 'button-pop 0.3s ease-out forwards',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(67, 56, 202, 0.12)',
        medium: '0 6px 24px -4px rgba(67, 56, 202, 0.16)',
        strong: '0 8px 28px -6px rgba(67, 56, 202, 0.20)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(67, 56, 202, 0.06)',
      },
    },
  },
  plugins: [],
}