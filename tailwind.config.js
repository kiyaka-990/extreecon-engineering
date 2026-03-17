/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F47B20',
        navy: '#1A2B5E',
        dark: '#0D1526',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
