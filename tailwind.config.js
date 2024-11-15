const plugins = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: "var(--font-baloo)",
        fredoka: "var(--font-fredoka)",
      },
      colors: {
        primary: {
          DEFAULT: "#1E3A8A", // Biru tua (dominant)
          light: "#3B82F6", // Biru cerah (accent)
          pale: "#BFDBFE", // Biru muda (hover/highlight)
        },
        neutral: {
          DEFAULT: "#F3F4F6", // Abu-abu terang (background)
          white: "#FFFFFF", // Putih
          light: "#F3F4F6", // Kontras Lembut
        },
      },
    },
  },
  plugins: [
    plugins(function ({ addUtilities }) {
      addUtilities({
        ".text-vertical-mixed": {
          textOrientation: "mixed",
          writingMode: "vertical-rl",
        },
        ".text-vertical-upright": {
          textOrientation: "upright",
          writingMode: "vertical-rl",
        },
        ".text-vertical-sideways": {
          textOrientation: "sideways",
          writingMode: "vertical-rl",
        },
        ".text-vertical-sideways-right": {
          textOrientation: "sideways-right",
          writingMode: "vertical-rl",
        },
        ".text-vertical-glyph": {
          textOrientation: "use-glyph-orientation",
          writingMode: "vertical-rl",
        },
      });
    }),
  ],
};
