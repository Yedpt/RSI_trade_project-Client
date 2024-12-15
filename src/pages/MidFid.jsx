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
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { dni: "", earnings: "", nickname: "" };

    // Validación del DNI (por ejemplo, formato español: 8 dígitos + letra)
    const dniPattern = /^[0-9]{8}[A-Za-z]$/; // Esto es solo un ejemplo para DNI español
    if (!formData.dni.match(dniPattern)) {
      newErrors.dni = "El DNI debe tener 8 dígitos seguidos de una letra.";
      isValid = false;
    }

    // Validación de las ganancias anuales
    if (!formData.earnings) {
      newErrors.earnings = "Por favor, seleccione un rango de ganancias.";
      isValid = false;
    }

    // Validación del apodo
    if (!formData.nickname) {
      newErrors.nickname = "El apodo es obligatorio.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleConfirm = async () => {
    if (!validateForm()) {
      return; // Si el formulario no es válido, no hacemos nada
    }

    try {
      // Obtener el userId del localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      if (!userId) {
        throw new Error("El ID del usuario no está disponible en el localStorage.");
      }

      // Enviar la solicitud al backend
      const response = await axios.post("http://localhost:8000/api/midfid", {
        ...formData,
        userId, // Incluyendo el userId en la solicitud
      });

      console.log("MiFID actualizado:", response.data);

      // Redirige a la página de inversiones después de confirmar
      navigate("/auth/trade/investments");
    } catch (error) {
      console.error("Error al guardar los datos del MiFID:", error);
      alert("Ocurrió un error al intentar guardar los datos. Por favor, inténtelo nuevamente.");
    }
  };

  const handleCancel = () => {
    // Regresar al TradeHome si se cancela
    navigate("/auth/trade");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Actualice sus datos personales</h1>

      {/* Campo DNI */}
      <div className="mb-4">
        <label htmlFor="dni" className="block text-sm font-medium mb-1">
          DNI
        </label>
        <input
          type="text"
          id="dni"
          name="dni"
          className="w-full p-2 bg-gray-800 rounded text-white"
          value={formData.dni}
          onChange={handleChange}
          required
        />
        {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
      </div>

      {/* Campo Ganancias Anuales */}
      <div className="mb-4">
        <label htmlFor="earnings" className="block text-sm font-medium mb-1">
          Ganancias anuales
        </label>
        <select
          id="earnings"
          name="earnings"
          className="w-full p-2 bg-gray-800 rounded text-white"
          value={formData.earnings}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="30000-60000">30,000 - 60,000</option>
          <option value="60000-120000">60,000 - 120,000</option>
          <option value="120000+">120,000+</option>
        </select>
        {errors.earnings && <p className="text-red-500 text-sm">{errors.earnings}</p>}
      </div>

      {/* Campo Apodo */}
      <div className="mb-4">
        <label htmlFor="nickname" className="block text-sm font-medium mb-1">
          Apodo
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          className="w-full p-2 bg-gray-800 rounded text-white"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
        {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname}</p>}
      </div>

      {/* Botón Confirmar */}
      <button
        className="bg-green-500 w-full py-2 rounded mt-4"
        onClick={handleConfirm}
      >
        Confirmar
      </button>

      {/* Botón Cancelar */}
      <button
        className="bg-red-500 w-full py-2 rounded mt-4"
        onClick={handleCancel}
      >
        Cancelar
      </button>
    </div>
  );
};

export default Midfid;
