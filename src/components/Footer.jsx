import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/outline";
import LogoImage from "../assets/logo-splashScreen.webp";

const Footer = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.user || parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  return (
    <footer className="fixed top-0 w-full flex items-center justify-between p-4 bg-gray-800 z-50">
      <div className="flex items-center">
        <img src={LogoImage} alt="logo" className="w-10 h-10 mr-4" />
        {user ? (
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
      {user && (
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
