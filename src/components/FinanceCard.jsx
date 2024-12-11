import React from "react";

const FinanceCard = ({ title, amount, subtitle }) => {
  const numericAmount = parseFloat(amount.replace("€", "").replace(",", "."));
  const amountColor = numericAmount < 0 ? "text-red-400" : "text-green-400";
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
      <div>
        <h3 className="text-gray-300 font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <p className={`text-2xl font-bold ${amountColor}`}>
        {numericAmount < 0
          ? `-€${Math.abs(numericAmount)}`
          : `€${numericAmount}`}
      </p>
    </div>
  );
};

export default FinanceCard;
