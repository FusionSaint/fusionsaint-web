/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0b1020',
        accent: '#a78bfa',
        primary: '#22d3ee'
      },
      borderRadius: {
        brand: '10px'
      }
    }
  },
  plugins: []
};
