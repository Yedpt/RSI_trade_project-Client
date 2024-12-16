import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 20;
  return parseFloat(Math.max(currentPrice + change, 1).toFixed(2));
};

const StockTrade = ({ selectedStock, wallet, setWallet }) => {
  const [price, setPrice] = useState(selectedStock.basePrice);
  const [data, setData] = useState([]);
  const [shares, setShares] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [averagePrice, setAveragePrice] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    setPrice(selectedStock.basePrice);
    setShares(0);
    setData([]);
    setAveragePrice(null);
  }, [selectedStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = generateRandomPrice(price);
      const time = new Date().toLocaleTimeString();
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 2000);

    return () => clearInterval(interval);
  }, [price]);

  const handleBuy = () => {
    const totalCost = price * quantity;
    if (wallet >= totalCost) {
      setWallet(wallet - totalCost);
      setShares((prev) => prev + quantity);
      setAveragePrice((prev) =>
        prev === null
          ? price
          : (prev * shares + totalCost) / (shares + quantity)
      );
    }
  };

  const handleSell = () => {
    if (shares >= quantity) {
      const totalEarned = price * quantity;
      setWallet(wallet + totalEarned);
      setShares((prev) => prev - quantity);
      if (shares - quantity === 0) setAveragePrice(null);
    }
  };

  const handleBuyAll = () => {
    const maxShares = Math.floor(wallet / price);
    if (maxShares > 0) {
      setConfirmationModal({
        message:
          "\u00bfEst\u00e1s seguro de comprar todas las acciones posibles?",
        onConfirm: () => {
          const totalCost = maxShares * price;
          setWallet(wallet - totalCost);
          setShares((prev) => prev + maxShares);
          setAveragePrice((prev) =>
            prev === null
              ? price
              : (prev * shares + totalCost) / (shares + maxShares)
          );
          setConfirmationModal(null);
        },
      });
    }
  };

  const handleSellAll = () => {
    if (shares > 0) {
      setConfirmationModal({
        message: "\u00bfEst\u00e1s seguro de vender todas tus acciones?",
        onConfirm: () => {
          setWallet(wallet + shares * price);
          setShares(0);
          setAveragePrice(null);
          setConfirmationModal(null);
        },
      });
    }
  };

  const handleQuantityChange = (value) => {
    if (value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  const renderQuantitySelector = () => (
    <div className="flex flex-col items-center space-y-2">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
        className="w-16 text-center bg-gray-800 text-white border border-gray-700 rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-400">Cantidad</p>
    </div>
  );

  const renderConfirmationModal = () =>
    confirmationModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-900 p-6 rounded-lg text-center space-y-4 shadow-lg">
          <p className="text-white">{confirmationModal.message}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={confirmationModal.onConfirm}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Confirmar
            </button>
            <button
              onClick={() => setConfirmationModal(null)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="p-4 md:p-8 max-w-full md:max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-lg">
      {renderConfirmationModal()}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
        Simulador de Trading
      </h2>

      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
        Gráfico de Precio
      </h3>
      <div className="bg-gray-800 p-2 md:p-4 rounded-lg shadow-md">
        <LineChart
          width={300}
          height={200}
          data={data}
          className="md:w-auto md:h-auto mx-auto"
        >
          <CartesianGrid stroke="#555" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: "#ccc" }} />
          <YAxis tick={{ fill: "#ccc" }} />
          <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
          <Line type="monotone" dataKey="price" stroke="#00FF00" dot={false} />
          {shares > 0 && (
            <Line
              type="monotone"
              dataKey={() => averagePrice}
              stroke="#FFA500"
              dot={false}
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg mb-6 space-y-4 md:space-y-0">
        <p className="text-base md:text-lg text-gray-300">
          <strong>Precio de la acción:</strong>{" "}
          <span
            className={price > averagePrice ? "text-blue-400" : "text-yellow-500"}
          >
            ${price}
          </span>
        </p>
        <p className="text-base md:text-lg text-gray-300">
          <strong>Wallet:</strong> {wallet.toFixed(2)} Tokens
        </p>
        <p className="text-base md:text-lg text-gray-300 flex items-center">
          <strong>Acciones:</strong>{" "}
          <span className="ml-2 text-lg">{shares}</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-4">
        {renderQuantitySelector()}
        <button
          onClick={handleBuy}
          className="px-4 md:px-6 py-2 bg-transparent border-2 border-green-500 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Comprar
        </button>
        <button
          onClick={handleSell}
          className="px-4 md:px-6 py-2 bg-transparent border-2 border-red-500 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Vender
        </button>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
        <button
          onClick={handleBuyAll}
          className="px-4 md:px-6 py-2 bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Comprar Todo
        </button>
        <button
          onClick={handleSellAll}
          className="px-4 md:px-6 py-2 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Vender Todo
        </button>
      </div>
    </div>
  );
};

export default StockTrade;
