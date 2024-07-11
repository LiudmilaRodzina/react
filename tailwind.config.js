/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(68, 56, 202, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(68, 56, 202)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
