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
          DEFAULT: "hsl(var(--color-primary))",
          lighten: "hsl(var(--color-primary-lighten))",
        },
        accent: "hsl(var(--color-accent))",
        subtle: "hsl(var(--color-subtle))",
        main: "hsl(var(--color-main))",
        mute: "hsl(var(--color-mute))",
        highlight: "hsl(var(--color-highlight))",
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
        ".hide-scroll": {
          MsOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
