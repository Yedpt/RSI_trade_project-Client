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
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
        scale: "scale 2s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
