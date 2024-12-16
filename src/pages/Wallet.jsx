import React, { useState, useEffect } from "react";
import {
  FaWallet,
  FaExclamationCircle,
  FaArrowDown,
  FaArrowUp,
  FaCreditCard,
  FaCoins,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { SiTesla } from "react-icons/si";

const RechargeModal = ({
  isOpen,
  onClose,
  onRecharge,
  currentBalance,
  isDebit,
}) => {
  const [amount, setAmount] = useState("");
  const safetyLimit = 1350;

  const handleRechargeOrDebit = () => {
    const transactionAmount = parseFloat(amount);

    if (transactionAmount > 0) {
      if (isDebit) {
        if (transactionAmount <= currentBalance) {
          onRecharge(-transactionAmount);
          onClose();
        } else {
          alert(
            `El monto debe ser mayor a 0 y no exceder €${currentBalance.toLocaleString()}`
          );
        }
      } else {
        const maxRecharge = currentBalance - safetyLimit;
        if (transactionAmount <= maxRecharge) {
          onRecharge(transactionAmount);
          onClose();
        } else {
          alert(
            `¡Error! El monto debe ser mayor a 0 y no exceder el límite de €${maxRecharge.toLocaleString()}.`
          );
        }
      }
    } else {
      alert("Por favor, ingrese un monto válido.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-96 shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {isDebit ? "Transferir a Wallet" : "Recargar Tarjeta"}
        </h2>

        <div className="bg-blue-900 p-4 rounded-lg mb-4 flex items-center">
          <FaExclamationCircle className="text-yellow-500 mr-3 text-2xl" />
          <p className="text-sm text-white">
            {isDebit
              ? "Puedes transferir saldo desde tu tarjeta hacia el Wallet Principal."
              : `Tu Wallet Principal mantiene un fondo de seguridad de €${safetyLimit} que evita que llegues a saldo cero.`}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">
            Monto a {isDebit ? "transferir" : "recargar"}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              €
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-8 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Monto a transferir 0% comisión"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Wallet: €{currentBalance.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleRechargeOrDebit}
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            {isDebit ? (
              <FaArrowUp className="mr-2" />
            ) : (
              <FaArrowDown className="mr-2" />
            )}
            {isDebit ? "Transferir" : "Recarga a Tarjeta"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Wallet = () => {
  const [cardBalance, setCardBalance] = useState(2500);
  const [mainWalletBalance, setMainWalletBalance] = useState(5000);
  const [isRechargeModalOpen, setIsRechargeModalOpen] = useState(false);
  const [isDebitMode, setIsDebitMode] = useState(false);
  const [investmentData, setInvestmentData] = useState({
    tesla: 300,
    apple: 450,
    gold: 150,
  });
  const safetyLimit = 1350;

  useEffect(() => {
    const updateInvestments = setTimeout(() => {
      setInvestmentData({ tesla: 350, apple: 500, gold: 200 });
    }, 2000);
    return () => clearTimeout(updateInvestments);
  }, []);

  const handleRecharge = (amount) => {
    if (amount > 0) {
      if (mainWalletBalance - amount >= safetyLimit) {
        setCardBalance((prev) => prev + amount);
        setMainWalletBalance((prev) => prev - amount);
      } else {
        alert(
          `Fondos insuficientes. El saldo no puede ser menor a €${safetyLimit.toLocaleString()}`
        );
      }
    } else {
      const absoluteAmount = Math.abs(amount);
      if (absoluteAmount <= cardBalance) {
        setCardBalance((prev) => prev - absoluteAmount);
        setMainWalletBalance((prev) => prev + absoluteAmount);
      } else {
        alert("El saldo de la tarjeta no puede ser negativo.");
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 pt-[80px]">
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaWallet className="text-2xl text-green-400 mr-2" />
            <div>
              <h2 className="text-lg text-gray-300">Wallet Principal</h2>
              <p className="text-2xl font-bold text-green-500">
                €{mainWalletBalance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-6 md:space-y-0">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">Mi Tarjeta</h1>
              <FaCreditCard className="text-3xl text-blue-500" />
            </div>
            <h2 className="text-xl text-gray-200">Saldo de Tarjeta</h2>
            <p className="text-3xl font-bold text-white">
              €{cardBalance.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => {
                setIsDebitMode(true);
                setIsRechargeModalOpen(true);
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center w-full md:w-auto"
            >
              <FaArrowUp className="mr-2" />
              Transferir a Wallet
            </button>
            <button
              onClick={() => {
                setIsDebitMode(false);
                setIsRechargeModalOpen(true);
              }}
              className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center w-full md:w-auto"
            >
              <FaArrowDown className="mr-2" />
              Recarga a Tarjeta
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-5 flex items-center justify-between hover:bg-gray-700 transition">
          <SiTesla className="text-3xl text-red-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-200">Tesla</h3>
            <p className="text-2xl text-gray-100">€{investmentData.tesla}</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 flex items-center justify-between hover:bg-gray-700 transition">
          <AiFillApple className="text-3xl text-blue-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-200">Apple</h3>
            <p className="text-2xl text-gray-100">€{investmentData.apple}</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 flex items-center justify-between hover:bg-gray-700 transition">
          <FaCoins className="text-3xl text-yellow-400" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-200">Oro</h3>
            <p className="text-2xl text-gray-100">€{investmentData.gold}</p>
          </div>
        </div>
      </div>

      <RechargeModal
        isOpen={isRechargeModalOpen}
        onClose={() => setIsRechargeModalOpen(false)}
        onRecharge={handleRecharge}
        currentBalance={mainWalletBalance}
        isDebit={isDebitMode}
      />
    </div>
  );
};

export default Wallet;
