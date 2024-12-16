import React from "react";

const StockButtons = ({ stocks, updateSelectedStock }) => {
  return (
    <div className="bg-black text-white rounded-lg p-4 shadow-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {stocks.map((stock, index) => (
          <button
            key={index}
            className="flex flex-col items-center text-center p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
            onClick={() => updateSelectedStock(stock.name)}
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full mb-2">
              <span className="text-md sm:text-lg">{stock.logo}</span>
            </div>
            <span className="text-xs sm:text-sm">{stock.name}</span>
            <span className="text-xs text-gray-400">${stock.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockButtons;
