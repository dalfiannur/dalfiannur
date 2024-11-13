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
