import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpNewUser } from "../services/authService";
import { ChevronUpIcon } from "@heroicons/react/solid";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const signUpData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      const result = await signUpNewUser(signUpData);
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Ocurrió un error durante el registro.");
    }
  };

  const handleBackButtonClick = () => navigate("/");

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center relative">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Registrarse
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-green-700 font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-green-700 font-medium mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-green-700 font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              required
              autoComplete="new-password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-green-700 font-medium mb-2"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              required
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Registrarse
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-green-600 hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>

      <button
        onClick={handleBackButtonClick}
        className="absolute bottom-4 text-green-600 hover:text-green-800"
      >
        <ChevronUpIcon className="w-6 h-6 transform -rotate-90" />
      </button>
    </div>
  );
};

export default SignUp;
