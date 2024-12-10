import React from "react";
import FinanceApp from "../components/FinanceApp";
import PieChart from "../components/PieChart";

const BankHome = () => {
  return (
    <div className="bg-gray-900 min-h-screen relative p-4 mt-16">
      <h1 className="absolute top-4 left-4 text-lg font-semibold text-gray-200 my-5">
        ¡Mira tus movimientos!
      </h1>
      <PieChart />
      <FinanceApp />
    </div>
  );
};

export default BankHome;
