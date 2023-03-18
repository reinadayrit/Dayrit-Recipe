/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-black": "#14100b"
      },
      fontstyle: {
        "italic": "italic"
      }
    },
  },
  plugins: [],
}
