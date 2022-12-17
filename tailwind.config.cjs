/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
