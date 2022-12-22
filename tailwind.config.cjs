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
        previews: ["header sidebar", "content sidebar"],
        "previews-1": ["header header", "content content"],
        "previews-2": ["header content"],
      },
      gridTemplateColumns: {
        layout: "18.7rem 1fr",
        previews: "minmax(0,44rem) minmax(0, 18.5rem);",
        "previews-1": "minmax(0,44rem)",
      },
      gridTemplateRows: {
        layout: "17rem 3rem 1fr auto",
        previews: "1fr 1fr",
      },
      variants: {
        gridTemplateAreas: ["responsive"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
    fontFamily: {
      body: [
        "Raleway",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Raleway",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
