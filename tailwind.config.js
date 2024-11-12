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
  plugins: [],
};
