/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "200px",
      msm: "300px",
      mbl: "360px",
      sm: "520px",
      md: "1080px",
      lg: "1440px",
      xlg: "2160px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
