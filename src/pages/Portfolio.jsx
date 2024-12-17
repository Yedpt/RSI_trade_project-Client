import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto p-6 mt-16 bg-darkBackground min-h-screen">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#8FE282]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-white text-xl font-bold">Portfolio</h1>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 flex items-center bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow-lg transition"
            aria-label="Regresar"
          >
            <FaArrowLeft className="text-lg" />
          </button>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">Resumen del Portafolio</h2>
        <div className="text-xl">
          <div className="mb-4">
            <span className="font-semibold">Total:</span> €258,105.00
          </div>
          <div className="text-green-500">
            <span className="font-semibold">Ganancia:</span> +50.18%
            (€11,050.801)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 text-gray-400 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Mis activos</h3>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">Tesla (Tesal, Inc.):</span> 244.40
              <span className="text-green-500"> (+9.54, +4.06%)</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                USDJPY (Euro / U.S. Dollar):
              </span>{" "}
              139.3550
              <span className="text-red-500"> (-0.80, -0.37%)</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">AMZN (Amazon):</span> 223.40
              <span className="text-green-500"> (+3.09, +1.03%)</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">APPLE (Apple):</span> 303.40
              <span className="text-green-500"> (+3.09, +1.03%)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 text-gray-400 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Mis favoritos</h3>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">USDJPY (Euro / U.S. Dollar)</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Boe (Boeing Co)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
