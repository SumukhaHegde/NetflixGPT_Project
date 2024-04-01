/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "540px",
      sm: "640px",
      xmd: "780px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
