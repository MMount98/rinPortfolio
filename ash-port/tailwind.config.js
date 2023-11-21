/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('/src/componeents/Images/homepagePhoto.jpg')",
      },
      fontFamily: {
        tinos: ['"Tinos"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
