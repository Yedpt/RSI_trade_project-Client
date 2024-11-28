import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ChartBarIcon } from "@heroicons/react/outline"; // Cambio de BriefcaseIcon a ChartBarIcon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-200 flex items-center">
              <HomeIcon className="w-6 h-6" /> {/* Ícono de Home */}
            </Link>
          </li>
          <li>
            <Link
              to="/trade"
              className="hover:text-green-200 flex items-center"
            >
              <ChartBarIcon className="w-6 h-6" /> {/* Ícono de gráfico */}
            </Link>
          </li>
        </ul>
      </div>
      {/* Menú móvil */}
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
          <li>
            <Link
              to="/trade"
              className="block hover:text-green-200 flex items-center"
            >
              <ChartBarIcon className="w-6 h-6 mr-2" /> Inversión
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
