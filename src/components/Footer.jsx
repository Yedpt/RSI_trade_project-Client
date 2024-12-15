import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/outline";
import LogoImage from "../assets/logo-splashScreen.webp";
import { useAuth } from "../context/AuthContext";

const Footer = () => {
  const { isAuthenticated, userName, logout } = useAuth();
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).user || JSON.parse(storedUser) : null;


  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <footer className="fixed top-0 w-full flex items-center justify-between p-4 bg-gray-800 z-50">
      <div className="flex items-center">
        <img src={LogoImage} alt="logo" className="w-10 h-10 mr-4" />
        {isAuthenticated ? (
          <span className="text-zinc-400">¡Hola, {user.name}!</span>
        ) : (
          <div>
            <button
              onClick={() => navigate("/register")}
              className="text-green-100 hover:underline"
            >
              Hazte cliente
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded ml-2"
            >
              Iniciar Sesión
            </button>
          </div>
        )}
      </div>
      {isAuthenticated && (
        <div className="flex items-center">
          <LogoutIcon
            className="w-6 h-6 text-[#E1E1E1] cursor-pointer flex items-center space-x-1"
            onClick={handleLogout}
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
