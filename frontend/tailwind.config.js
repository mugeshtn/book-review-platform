/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts, tsx}"],
  theme: {
    extend: {
      fontFamily:{
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        primary : "#e5e5e5",
        secondary: "#284b63",
        tertiary: "#8d99ae",
        fourth: "#353535",
        navbar: "#284b63"
      }
    },
  },
  plugins: [],
}

