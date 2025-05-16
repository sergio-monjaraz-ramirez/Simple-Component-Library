/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4784C4",
        "primary-light": "#EEF3F9",
        "primary-dark": "#4784C43D",
        secondary: "#48A634",
        "light-gray": "#EFF1F3",
        "star-yellow": "#FBB03B",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        normal: 300,
        semibold: 500,
        bold: 700,
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
