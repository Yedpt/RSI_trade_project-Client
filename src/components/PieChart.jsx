import React from "react";

const PieChart = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-transparent border border-[#a2a2a7] rounded-2xl p-6 text-white mt-20">
      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <circle
              className="text-purple-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              style={{ strokeDasharray: "100, 100", strokeDashoffset: "50" }}
            />
            <circle
              className="text-green-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              style={{ strokeDasharray: "100, 100", strokeDashoffset: "30" }}
            />
            <circle
              className="text-sky-400"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              style={{ strokeDasharray: "100, 100", strokeDashoffset: "0" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">€6,890.00</span>
            <span className="text-sm text-gray-400">Saldo</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Gastos</span>
              <span className="text-gray-400">50%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-purple-300 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Cuentas</span>
              <span className="text-gray-400">20%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-green-300 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm">
              <span>Ahorros</span>
              <span className="text-gray-400">30%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-sky-400 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
