/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      minHeight: {
        '90vh': '90vh',
      },
      boxShadow: {
        'all': '0 0 100px 0 rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'night/30': 'rgb(18 18 18 / 30%)',
        'night/80': 'rgb(18 18 18 / 80%)',
        'night/100': 'rgb(18 18 18 / 100%)',
      },
    },
  },
  plugins: [],
}

