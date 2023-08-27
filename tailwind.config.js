/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Josefin', 'sans-serif'],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontSize: {
        h1: ['32px', { fontWeight: 600, lineHeight: '40px' }],
        h2: ['24px', { fontWeight: 600, lineHeight: '32px' }],
        h3: ['18px', { fontWeight: 600, lineHeight: '24px' }],
        body1: ['16px', { fontWeight: 400, lineHeight: '24px' }],
        body2: ['14px', { fontWeight: 400, lineHeight: '14px' }],
      },
    },
  },
  plugins: [],
};
