/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B'
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA'
        },
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626'
      }
    },
  },
  plugins: [],
};