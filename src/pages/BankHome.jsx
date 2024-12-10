import React from "react";
import FinanceApp from "../components/FinanceApp";
import PieChart from "../components/PieChart";
import FinanceCard from "../components/FinanceCard";

const BankHome = () => {
  return (
    <div className="bg-gray-900 min-h-screen relative p-4 mt-16">
      <h1 className="absolute top-4 left-4 text-lg font-semibold text-gray-200 my-5">
        ¡Mira tus movimientos!
      </h1>
      <PieChart />
      <FinanceApp />
      <div className="flex flex-col gap-y-4 mt-8 w-full max-w-[400px] mx-auto mb-[80px]">
        <FinanceCard title="Spotify" amount="-€12.99" subtitle="Pago mensual" />
        <FinanceCard
          title="Transferencia"
          amount="€300"
          subtitle="Ingreso de transferencia"
        />
        <FinanceCard
          title="Compras"
          amount="-€88"
          subtitle="Compras recientes"
        />
      </div>
    </div>
  );
};

export default BankHome;
