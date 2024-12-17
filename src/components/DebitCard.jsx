import React, { useState, useEffect } from "react";
import {
  FaCreditCard,
  FaWallet,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaPercentage,
} from "react-icons/fa";

const DebitCard = ({ wallet = 0, initialWallet = 100000 }) => {
  const [grossGain, setGrossGain] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [netBalance, setNetBalance] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [taxRateMessage, setTaxRateMessage] = useState("");

  const calculateTaxes = (grossGain) => {
    let tax = 0;
    if (grossGain <= 6000) {
      tax = grossGain * 0.19;
      setTaxRate(19);
      setTaxRateMessage("Hasta 6.000 euros: 19%");
    } else if (grossGain <= 50000) {
      tax = 6000 * 0.19 + (grossGain - 6000) * 0.21;
      setTaxRate(21);
      setTaxRateMessage("Entre 6.000 y 50.000 euros: 21%");
    } else {
      tax = 6000 * 0.19 + 44000 * 0.21 + (grossGain - 50000) * 0.23;
      setTaxRate(23);
      setTaxRateMessage("Más de 50.000 euros: 23%");
    }
    return tax;
  };

  useEffect(() => {
    const newGrossGain = wallet - initialWallet;
    setGrossGain(newGrossGain);

    const calculatedTaxes = calculateTaxes(newGrossGain);
    setTaxes(calculatedTaxes);

    const newNetBalance = newGrossGain - calculatedTaxes;
    setNetBalance(newNetBalance > 0 ? newNetBalance : 0);
  }, [wallet, initialWallet]);

  return (
    <div className="p-4 sm:p-8 max-w-full sm:max-w-5xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg border border-green-500 backdrop-blur-md bg-opacity-75">
      <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center">
        <FaCreditCard className="mr-2 text-green-500 text-lg sm:text-2xl" />
        Tarjeta de Débito
      </h3>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center text-sm sm:text-lg text-gray-300">
          <FaWallet className="mr-2 text-base sm:text-lg" />
          <span>{initialWallet.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-sm sm:text-lg text-gray-300">
          <FaMoneyBillWave className="mr-2 text-base sm:text-lg" />
          <span>{wallet.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-sm sm:text-lg text-gray-300">
          <FaHandHoldingUsd className="mr-2 text-base sm:text-lg" />
          <span>{grossGain.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-sm sm:text-lg text-gray-300">
          <FaPercentage className="mr-2 text-base sm:text-lg" />
          <span>
            {taxes.toFixed(2)} Tokens ({taxRateMessage})
          </span>
        </div>
        <div className="flex items-center text-sm sm:text-lg text-gray-300">
          <FaCreditCard className="mr-2 text-base sm:text-lg" />
          <span>{netBalance.toFixed(2)} Tokens</span>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
