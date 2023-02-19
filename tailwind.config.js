/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        // With logic of 62.5% => 10px = 1rem
        1.2: '1.2rem',
        1.4: '1.4rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        2: '2rem',
        2.4: '2.4rem',
        3.2: '3.2rem',
        4: '4rem',
        5.2: '5.2rem',
        5.6: '5.6rem',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      letterSpacing: {
        0: '0px',
        1: '0.1px',
        2: '0.2px',
        4: '0.4px',
        12: '1.2px',
        15: '1.5px',
      },
      lineHeight: {
        // With logic of 62.5% => 10px = 1rem
        1.4: '1.4rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        2: '2rem',
        2.1: '2.1rem',
        2.2: '2.2rem',
        2.4: '2.4rem',
        2.5: '2.5rem',
        2.8: '2.8rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6.5: '6.5rem',
        7: '7rem',
      },
    },
  },
  plugins: [],
};
