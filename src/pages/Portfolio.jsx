import React from "react";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
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
        <div className="bg-white shadow-md rounded-lg p-6">
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

        <div className="bg-white shadow-md rounded-lg p-6">
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
