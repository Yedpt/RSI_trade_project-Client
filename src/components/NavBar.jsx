import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/outline";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Usuario almacenado:", parsedUser); // Verifica qué datos tiene el usuario
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  const handleOpenRegisterModal = () => navigate("/register");

  return (
    <nav className="relative bg-green-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Banco</h1>
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
                <span className="mr-4">¡Hola, {user.name}!</span>{" "}
                {/* Verifica si "name" existe */}
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
