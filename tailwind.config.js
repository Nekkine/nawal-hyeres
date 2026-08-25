/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lin: {
          light: '#F8F4EC',
          DEFAULT: '#F1EAE0',
          dark: '#E4D9C8',
        },
        sable: '#EDE4D3',
        terracotta: {
          light: '#E08A63',
          DEFAULT: '#C4633A',
          dark: '#9E4E2C',
        },
        azur: {
          light: '#7FB2D4',
          DEFAULT: '#3E7CA6',
          dark: '#2C5A78',
        },
        olive: {
          light: '#A3AB77',
          DEFAULT: '#7C8450',
          dark: '#5C6340',
        },
        encre: {
          soft: '#2C2722',
          DEFAULT: '#211D19',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        display: ['var(--font-playfair)', '"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        etal: '1.25rem',
      },
      boxShadow: {
        parasol: '0 10px 30px -12px rgb(33 29 25 / 0.25)',
      },
    },
  },
  plugins: [],
}
