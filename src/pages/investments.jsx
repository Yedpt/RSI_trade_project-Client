import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de usar react-router-dom
import { FaArrowLeft } from "react-icons/fa";
import BannerCarousel from "../components/BannerCarousel";
import StockTrade from "../components/StockTrade";
import StockButtons from "../components/StockButtons";
import DebitCard from "../components/DebitCard";
import VoiceAssistButton from "../components/VoiceAssistButton";

const Investments = () => {
  const [stocks] = useState([
    { name: "NVDA", logo: "🌿", basePrice: 120 },
    { name: "TSLA", logo: "🚗", basePrice: 870 },
    { name: "AAPL", logo: "🍎", basePrice: 3200 },
    { name: "AMZN", logo: "📦", basePrice: 300 },
    { name: "MSFT", logo: "🖥️", basePrice: 250 },
    { name: "INTC", logo: "💾", basePrice: 1 },
    { name: "ITX", logo: "👗", basePrice: 25 },
    { name: "GLD", logo: "🏦", basePrice: 1800 },
  ]);

  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [wallet, setWallet] = useState(100000);

  const navigate = useNavigate(); // Para navegación

  const updateSelectedStock = (stockName) => {
    const stock = stocks.find((s) => s.name === stockName);
    setSelectedStock(stock);
  };

  return (
    <div className="min-h-screen bg-darkBackground text-white relative overflow-hidden">
      {/* Eliminar espacio blanco */}
      <style>
        {`body, html { margin: 0; padding: 0; box-sizing: border-box; overflow-x: hidden; }`}
      </style>

      {/* Botón de regreso */}
      <button
        onClick={() => navigate("/auth/trade")}
        className="absolute top-4 left-4 flex items-center bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow-lg transition"
        aria-label="Regresar"
      >
        <FaArrowLeft className="text-lg" />
      </button>

      {/* Botón de asistente de voz */}
      <div className="absolute top-4 right-4">
        <VoiceAssistButton text="Bienvenidos al simulador de trading" />
      </div>

      <div className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="text-xl sm:text-3xl font-bold text-center">
          Simulador de Trading
        </h1>
        <BannerCarousel />
        <StockTrade
          selectedStock={selectedStock}
          wallet={wallet}
          setWallet={setWallet}
        />
        <DebitCard wallet={wallet} />
        <StockButtons
          stocks={stocks}
          updateSelectedStock={updateSelectedStock}
        />
      </div>
    </div>
  );
};

export default Investments;
