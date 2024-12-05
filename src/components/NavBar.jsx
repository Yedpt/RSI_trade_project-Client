import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Avatar from "@mui/material/Avatar";
import { teal } from "@mui/material/colors";
import SplashScreen from "../components/SplashScreen";

import videoNavbar from "../assets/video/video-navbar.mp4";

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

  const handleOpenRegisterModal = () => navigate("/signup");

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
      <div
        className={`${
          user ? "bg-transparent" : "bg-green-600"
        } text-white flex justify-between items-center p-4`}
      >
        {user ? (
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={videoNavbar} type="video/mp4" />
            </video>
          </div>
        ) : null}
        <h1 className="text-xl font-bold">Mi Banco</h1>

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

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-x-6 w-full md:w-auto md:space-y-0`}
        >
          <Link
            to="/homebank"
            className="hover:text-green-200 flex items-center"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>

          {user ? (
            <>
              <button
                onClick={handleShowSplashAndNavigate}
                className="hover:text-green-200 flex items-center"
              >
                <ChartBarIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-4">
                <span>¡Hola, {user.name}!</span>
                <Avatar sx={{ bgcolor: teal[500] }}>
                  {user.name ? user.name[0] : "U"}
                </Avatar>
                <button
                  onClick={handleLogout}
                  className="hover:bg-green-500 p-2 rounded"
                  title="Cerrar Sesión"
                >
                  <LogoutIcon className="w-6 h-6" />
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={handleOpenRegisterModal}
                className="flex items-center space-x-2 text-green-100 hover:underline"
              >
                <UserIcon className="w-5 h-5" />
                <span>Hazte cliente</span>
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded"
              >
                Iniciar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
