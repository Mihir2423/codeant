/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#FAFAFA",
          elevated: "#FFFFFF",
          accent: "#F5F5F5",
        },
        action: {
          DEFAULT: "#1570EF",
          light: "#EFF8FF",
        },
        border: {
          DEFAULT: "#E9EAEB",
          strong: "#D5D7DA",
          accent: "#B2DDFF",
        },
        content: {
          strong: "#181D27",
          primary: "#414651",
          accent: "#175CD3",
        },
        shadow: {
          accent: "#0A0D120D",
        },
      },
    },
  },
  plugins: [],
};
