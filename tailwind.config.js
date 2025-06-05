/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101B28",
        secondary: "#00FF8C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
