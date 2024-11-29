import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpNewUser, loginUser } from "../services/authService";

const Login = () => {
  const [isLoginModal, setIsLoginModal] = useState(true);
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const signUpData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    const result = await signUpNewUser(signUpData);
    if (result.success) {
      // Automatically log in after successful signup
      const loginResult = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (loginResult.success) {
        localStorage.setItem("user", JSON.stringify(loginResult.userData.user));
        navigate("/");
      }
    } else {
      setError(result.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    const result = await loginUser(loginData);
    if (result.success) {
      localStorage.setItem("user", JSON.stringify(result.userData.user));
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          {isLoginModal ? "Iniciar Sesión" : "Registrarse"}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={isLoginModal ? handleLogin : handleSignUp}>
          {!isLoginModal && (
            <div className="mb-4">
              <label className="block text-green-700 mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required={!isLoginModal}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-green-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-700 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {!isLoginModal && (
            <div className="mb-4">
              <label className="block text-green-700 mb-2">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required={!isLoginModal}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {isLoginModal ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLoginModal(!isLoginModal)}
            className="text-green-600 hover:underline"
          >
            {isLoginModal
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
