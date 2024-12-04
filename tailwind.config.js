/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['WorkSans', 'sans-serif'],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        pink: "hsl(275, 100%, 97%)",
        purple: {
          500: "hsl(292, 16%, 49%)",
          600: "#AC38EB",
          800: "hsl(292, 42%, 14%)"
        },
      }
    },
  },
}
