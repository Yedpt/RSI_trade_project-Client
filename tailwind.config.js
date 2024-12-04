module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Archivos donde se usará Tailwind
  theme: {
    extend: {
      backgroundImage: {
        'trading-bg': "url('/src/assets/onboardingImages/BG_cajaRural.svg')", // Clase personalizada para el fondo
      },
    },
  },
  plugins: [],
};
