/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gpa": "auto, auto",
        "Dgpa": "auto, auto, auto, auto",
        "smDgpa": "1.2fr, 1fr",
      },
      boxShadow: {
        "menu": "0 5px 20px gray",
      }
    },
  },
  plugins: [],
}