import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChatBot from "../components/Chatbot";
import aprendeSimulando from "../assets/aprendeSimulando.svg";
import practiqueAqui from "../assets/practiqueAqui.svg";

const TradeHome = () => {
  const [activeTab, setActiveTab] = useState("Acciones");
  const [activeCategory, setActiveCategory] = useState("US Acciones");
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  const fetchStockData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/stocks");
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  const getClearbitLogo = (symbol) =>
    `https://logo.clearbit.com/${symbol.toLowerCase()}.com`;

  const handleEFTClick = () => {
    navigate("/auth/trade/eft");
  };

  const handleCardClick = () => {
    if (!hasCompletedMiFID) {
      navigate("/auth/trade/midfid"); // Llevar al formulario de MiFID si no está completo
    } else {
      navigate("/auth/trade/investments"); // Llevar a inversiones si ya está completo
    }
  };

  // Función para generar datos del gráfico en base al porcentaje de cambio
  const generateChartData = (price, change) => {
    const trend = change > 0 ? 1 : -1; // Positivo o negativo según el cambio
    return Array.from({ length: 7 }, (_, i) => ({
      name: `Día ${i + 1}`,
      price: (price + trend * i * Math.abs(change) * 0.2).toFixed(2),
    }));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 pb-28 relative">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {["Acciones", "EFT"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full ${
              activeTab === tab
                ? "bg-green-500 text-black"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() =>
              tab === "EFT" ? handleEFTClick() : setActiveTab(tab)
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Simulations Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Simulaciones y Aprendizajes</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[{ title: "Aprenda simulando", route: "/auth/trade/learn-trade", image: aprendeSimulando },
            { title: "Practique aquí", route: "/auth/trade/learn-trade", image: practiqueAqui }].map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(card.route)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {["Consejos", "Tutoriales", "Retos", "VIP", "Consultas", "Otros"].map(
            (btn, index) => (
              <button
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-green-500 hover:text-black"
                onClick={() => navigate("/auth/trade/underConstruction")}
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>

      {/* Actions Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Acciones</h2>
          <button className="text-green-500">Ver todos</button>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 mb-4">
          {["Oro", "Crypto", "US Acciones", "NFTs"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 whitespace-nowrap rounded-full ${
                activeCategory === category
                  ? "bg-green-500"
                  : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stock Cards */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className="bg-gray-800 w-64 p-4 rounded-lg flex-shrink-0 cursor-pointer"
              onClick={() => handleCardClick("/auth/trade/investments")}
            >
              <img
                src={getClearbitLogo(stock.symbol)}
                alt={stock.name}
                className="w-12 h-12 rounded-full mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold">{stock.symbol.toUpperCase()}</h3>
                <p className="text-gray-400 mb-4">{stock.name}</p>
              </div>
              {/* Precio, cambio y gráfico */}
              <div className="bg-gray-900 p-2 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-lg font-semibold">€{stock.price.toFixed(2)}</p>
                    <p
                      className={`text-sm ${
                        stock.change > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.change > 0 ? "+" : ""}
                      {stock.change.toFixed(2)}%
                    </p>
                  </div>
                </div>
                {/* Gráfico */}
                <div className="h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={generateChartData(stock.price, stock.change)}>
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={stock.change > 0 ? "#22c55e" : "#ef4444"}
                        strokeWidth={2}
                        dot={false}
                      />
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ChatBot */}
      <ChatBot className="fixed bottom-24 right-4 z-50" />
    </div>
  );
};

export default TradeHome;
