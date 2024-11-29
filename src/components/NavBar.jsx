import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeIcon, ChartBarIcon, LogoutIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Banco</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200 flex items-center">
            <HomeIcon className="w-6 h-6" />
          </Link>

          {user ? (
            <>
              <Link
                to="/trade"
                className="hover:text-green-200 flex items-center"
              >
                <ChartBarIcon className="w-6 h-6" />
              </Link>
              <div className="flex items-center">
                <span className="mr-4">¡Hola, {user.name}!</span>
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
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-2 md:hidden">
          <li>
            <Link
              to="/"
              className="block hover:text-green-200 flex items-center"
            >
              <HomeIcon className="w-6 h-6 mr-2" /> Inicio
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/trade"
                className="block hover:text-green-200 flex items-center"
              >
                <ChartBarIcon className="w-6 h-6 mr-2" /> Inversión
              </Link>
            </li>
          )}
          {user ? (
            <li className="flex items-center">
              <span className="mr-4">¡Hola, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="hover:text-green-200 flex items-center"
              >
                <LogoutIcon className="w-6 h-6 mr-2" /> Cerrar Sesión
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="block hover:text-green-200">
                Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
