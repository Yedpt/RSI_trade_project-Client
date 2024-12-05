import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  NewspaperIcon,
  CreditCardIcon,
} from "@heroicons/react/outline"; // Uso de iconos correctos
import Avatar from "@mui/material/Avatar";
import { teal } from "@mui/material/colors";
import SplashScreen from "../components/SplashScreen";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleShowSplashAndNavigate = () => {
    setIsSplashVisible(true);
    setTimeout(() => {
      setIsSplashVisible(false);
      navigate("/homebank/trade");
    }, 3000);
  };

  return (
    <nav className="relative w-full">
      {isSplashVisible && (
        <SplashScreen onClose={() => setIsSplashVisible(false)} />
      )}

      <div className="relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-lg rounded-xl px-6 py-4">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]"></div>

        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Mi Banco</h1>
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-x-6 w-full md:w-auto md:space-y-0`}
        >
          <Link to="/homebank" className="hover:text-green-200 flex items-center">
            <HomeIcon className="w-6 h-6" />
          </Link>

          {user ? (
            <>
              <button
                onClick={handleShowSplashAndNavigate}
                className="text-gray-500 hover:text-green-500"
              >
                <ChartBarIcon className="w-6 h-6" />
                <span className="text-xs text-center">Invertir</span>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link to="#" className="text-gray-500 hover:text-green-500">
                <NewspaperIcon className="w-6 h-6" />
                <span className="text-xs text-center">News</span>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Link to="#" className="text-gray-500 hover:text-green-500">
                <CreditCardIcon className="w-6 h-6" />{" "}
                {/* Usando CreditCardIcon en lugar de WalletIcon */}
                <span className="text-xs text-center">Cartera</span>
              </Link>
            </div>
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">¡Hola, {user.name}!</span>
              <Avatar sx={{ bgcolor: teal[500] }}>
                {user.name ? user.name[0] : "U"}
              </Avatar>
              <button
                onClick={handleLogout}
                className="hover:bg-green-500 p-2 rounded"
                title="Cerrar Sesión"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/signup")}
                className="text-green-500 hover:underline"
              >
                Hazte cliente
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded"
              >
                Iniciar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
