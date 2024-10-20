/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FF6915',
        secondary: 'rgba(0, 0, 0, 0.6)',
        black: '#000000',
        black2: '#646464',
        white: '#ffffff',
        c4: '#c4c4c4',
        fa: '#fafafa',
        disable: '#f2f2f2',
        e5: '#e5e5e5',
      }
    },
  },
  plugins: [],
}

