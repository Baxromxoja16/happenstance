/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        unica: ['"Unica One"', 'serif'], // Unica One fonti
        roboto: ['"Roboto"', 'serif'],
      },
      size: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

