import React, { useState } from "react";

const Midfid = () => {
  const [dni, setDni] = useState("");
  const [earnings, setEarnings] = useState("");

  const handleConfirm = () => {
    // Lógica para guardar en la base de datos
    console.log("DNI:", dni, "Earnings:", earnings);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Actualice sus datos personales</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">DNI</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 rounded text-white"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ganancias anuales</label>
        <select
          className="w-full p-2 bg-gray-800 rounded text-white"
          value={earnings}
          onChange={(e) => setEarnings(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="30000-60000">30,000 - 60,000</option>
          <option value="60000-120000">60,000 - 120,000</option>
        </select>
      </div>
      <button
        className="bg-green-500 w-full py-2 rounded mt-4"
        onClick={handleConfirm}
      >
        Confirmar
      </button>
    </div>
  );
};

export default Midfid;
