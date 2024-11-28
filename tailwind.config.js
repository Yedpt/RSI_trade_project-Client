/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f3fdf4",
          100: "#e2f9e3",
          600: "#047857",
          700: "#065f46",
        },
      },
    },
  },
  plugins: [],
};
