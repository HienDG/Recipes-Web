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
    },
  },
  plugins: [],
};
