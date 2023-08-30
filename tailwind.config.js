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
        h1: ['64px', { fontWeight: 600, lineHeight: '72px' }],
        h2: ['40px', { fontWeight: 600, lineHeight: '40px' }],
        h3: ['32px', { fontWeight: 600, lineHeight: '40px' }],
        h4: ['24px', { fontWeight: 600, lineHeight: '32px' }],
        h5: ['18px', { fontWeight: 600, lineHeight: '24px' }],
        body1: ['16px', { fontWeight: 400, lineHeight: '24px' }],
        body2: ['14px', { fontWeight: 400, lineHeight: '14px' }],
        body3: ['13px', { fontWeight: 400, lineHeight: '13px' }],
      },
      colors: {
        black: '#35414B',
        lightBlack: '#4E5A65',
        purple: '#794CFF',
        lightPurple: '#F0EBFA',
        ghostWhite: '#FBFAFE',
        charcoal: '#4B3F35',
        honeydew: '#F2F9EB',
        platinum: '#E1E5EA',
      },
    },
  },
  plugins: [],
};
