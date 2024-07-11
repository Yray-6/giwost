/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "blu":"rgb(1,75,155)",
        "blackish":"rgb(34,54,69)",
        "bluu":"#024A9C",
      }
    },
  },
  plugins: [],
};
