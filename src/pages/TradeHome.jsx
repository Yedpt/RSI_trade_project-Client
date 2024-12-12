import React, { useState, useEffect } from "react";
import ChatBot from "../components/Chatbot"; // Componente de chatbot
import axios from "axios";

const TradeHome = () => {
  const [tab, setTab] = useState("acciones"); // Estado para alternar entre "Acciones" y "EFT"
  const [educationContent, setEducationContent] = useState([]); // Contenido educativo
  const [stocks, setStocks] = useState([]); // Acciones
  const [selectedCategory, setSelectedCategory] = useState("US Acciones"); // Categoría seleccionada

  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
  

  // Obtener datos de simulaciones y aprendizajes desde el backend
  useEffect(() => {
    const fetchEducationContent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/education_content`);
        setEducationContent(response.data);
      } catch (error) {
        console.error("Error fetching education content:", error);
      }
    };

    fetchEducationContent();
  }, [apiUrl]);

  // Obtener datos de acciones desde el backend
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const symbols = ["ABNB", "SPOT"]; // Empresas
        const response = await axios.get(`${apiUrl}/stocks`, {
          params: { symbols: symbols.join(",") },
        });
        setStocks(response.data || []);
      } catch (error) {
        console.error("Error fetching stock data:", error.message);
      }
    };

    fetchStocks();
  }, [apiUrl]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 relative">
      {/* Botones "Acciones" y "EFT" */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`w-full py-2 text-sm rounded-lg ${
            tab === "acciones" ? "bg-green-500" : "bg-gray-700"
          }`}
          onClick={() => setTab("acciones")}
        >
          Acciones
        </button>
        <button
          className={`w-full py-2 text-sm rounded-lg ${
            tab === "eft" ? "bg-green-500" : "bg-gray-700"
          }`}
          onClick={() => setTab("eft")}
        >
          EFT
        </button>
      </div>

      {/* Contenido dinámico */}
      {tab === "acciones" ? (
        <>
          {/* Simulaciones y Aprendizajes */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Simulaciones y Aprendizajes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationContent.map((content) => (
                <div
                  key={content.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-base font-bold">{content.title}</h3>
                  <p className="text-sm text-gray-400">{content.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Botones de navegación */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Consejos", "Tutoriales", "Retos", "Vip", "Consultas", "Otros"].map((label) => (
              <button
                key={label}
                className="px-4 py-2 text-sm bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Acciones */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Acciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4"
                >
                  <img
                    src={`https://logo.clearbit.com/${stock.symbol.toLowerCase()}.com`}
                    alt={stock.symbol}
                    className="w-12 h-12 object-contain bg-white rounded"
                    onError={(e) => (e.target.src = "/default-logo.png")} // Logo predeterminado
                  />
                  <div>
                    <h3 className="text-base font-bold">{stock.symbol}</h3>
                    <p className="text-sm text-gray-400">Precio: €{stock.price}</p>
                    <p
                      className={`text-sm ${
                        stock.change > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      Cambio: {stock.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Botones debajo de la sección "Acciones" */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Oro", "Crypto", "US Acciones", "NFTs"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm bg-gray-700 rounded-lg hover:bg-gray-600 ${
                  selectedCategory === category ? "bg-green-500" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-400">Próximamente contenido de EFT...</div>
      )}

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4">
        <ChatBot />
      </div>
    </div>
  );
};

export default TradeHome;
