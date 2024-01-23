/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        invoiceSh: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
        bigSh: " 0px 10px 20px 0px rgba(72, 84, 159, 0.25);",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        laptop: { max: "56.25em" },
        tablet: { max: "48.75em" },
        mobile: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
