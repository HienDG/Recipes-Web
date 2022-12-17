/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "skeleton-loading": {
          "0%": { backgroundColor: "hsl(200,20%,70%)" },
          "100%": { backgroundColor: "hsl(200,20%,95%)" },
        },
      },
      animation: {
        skeleton: "skeleton-loading 1s linear infinite alternate",
      },
      gridTemplateAreas: {
        layout: ["image body", "actions   body"],
        responsive: ["image", "body", "actions"],
      },
      gridTemplateColumns: {
        layout: "18.7rem 1fr",
      },
      gridTemplateRows: {
        layout: "17rem 3rem 1fr auto",
      },
      variants: {
        gridTemplateAreas: ["responsive"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
