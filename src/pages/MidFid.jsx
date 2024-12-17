import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Midfid = () => {
  const [formData, setFormData] = useState({
    dni: "",
    earnings: "",
    nickname: "",
  });
  const [errors, setErrors] = useState({
    dni: "",
    earnings: "",
    nickname: "",
    confirmCheckbox: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false); // Estado para el checkbox
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { dni: "", earnings: "", nickname: "", confirmCheckbox: "" };

    const dniPattern = /^[0-9]{8}[A-Za-z]$/;
    if (!formData.dni.match(dniPattern)) {
      newErrors.dni = "El DNI debe tener 8 dígitos seguidos de una letra.";
      isValid = false;
    }

    if (!formData.earnings) {
      newErrors.earnings = "Por favor, seleccione un rango de ganancias.";
      isValid = false;
    }

    if (!formData.nickname) {
      newErrors.nickname = "El apodo es obligatorio.";
      isValid = false;
    }

    if (!isConfirmed) {
      newErrors.confirmCheckbox = "Debe confirmar para continuar.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleConfirm = async () => {
    if (!validateForm()) return;

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      if (!userId) throw new Error("El ID del usuario no está disponible.");

      await axios.post("http://localhost:8000/api/midfid", {
        ...formData,
        userId,
      });

      navigate("/auth/trade/investments");
    } catch (error) {
      alert("Ocurrió un error al guardar los datos.");
    }
  };

  const handleCancel = () => navigate("/auth/trade");

  return (
    <div className="min-h-screen flex flex-col justify-between p-4" style={{ backgroundColor: "#161622", color: "white" }}>
      <div className="mx-auto w-full max-w-sm">
        <h1 className="text-lg font-bold text-center mb-8">
          Por favor, actualice sus informaciones personales
        </h1>

        {/* DNI */}
        <div className="mb-5">
          <label htmlFor="dni" className="block text-sm mb-2">
            DNI
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white placeholder-gray-500"
            placeholder="Digite aquí su DNI"
            value={formData.dni}
            onChange={handleChange}
          />
          {errors.dni && <p className="text-red-500 text-xs mt-1">{errors.dni}</p>}
        </div>

        {/* Ganancias Anuales */}
        <div className="mb-5">
          <label htmlFor="earnings" className="block text-sm mb-2">
            Ganancias anuales
          </label>
          <select
            id="earnings"
            name="earnings"
            className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white"
            value={formData.earnings}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="30000-60000">30,000 - 60,000</option>
            <option value="60000-120000">60,000 - 120,000</option>
            <option value="120000+">120,000+</option>
          </select>
          {errors.earnings && <p className="text-red-500 text-xs mt-1">{errors.earnings}</p>}
        </div>

        {/* Apodo */}
        <div className="mb-5">
          <label htmlFor="nickname" className="block text-sm mb-2">
            Apodo
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white placeholder-gray-500"
            placeholder="Digite su apodo"
            value={formData.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <p className="text-red-500 text-xs mt-1">{errors.nickname}</p>}
        </div>

        {/* Confirmación Checkbox */}
        <div className="bg-gray-800 rounded p-4 text-sm text-gray-300 mb-6 flex items-start">
          <input
            type="checkbox"
            id="confirmCheckbox"
            checked={isConfirmed}
            onChange={handleCheckboxChange}
            className="mr-2 mt-1"
          />
          <label htmlFor="confirmCheckbox" className="flex-1 leading-snug">
            Confirmo que no estoy siendo asesorado por un tercero e invertiré en acciones y ETF a través de N26 bajo mi propia responsabilidad, y acepto recibir y comprender documentos legales en español.
          </label>
        </div>
        {errors.confirmCheckbox && (
          <p className="text-red-500 text-xs mb-4">{errors.confirmCheckbox}</p>
        )}

        {/* Botones */}
        <div className="space-y-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-green-500 text-black font-medium py-2 rounded hover:bg-green-600"
          >
            Confirmar
          </button>
          <button
            onClick={handleCancel}
            className="w-full bg-gray-700 text-white font-medium py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
        </div>
      </div>

      <p className="text-xs text-center text-gray-500 mt-6">
        RSI Trading no ofrece asesoramiento de inversión. Las inversiones no están preseleccionadas y no hay retorno garantizado.
      </p>
    </div>
  );
};

export default Midfid;
