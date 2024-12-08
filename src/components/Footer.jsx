import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import Avatar from "@mui/material/Avatar";
import { teal } from "@mui/material/colors";

const Footer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-green-700 text-white p-4">
      <div className="text-center text-sm">
        <p>&copy; 2024 Mi Banco. Todos los derechos reservados.</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-green-300" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-green-300" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-green-300" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-4">
        <button
          onClick={scrollToTop}
          className="text-white hover:text-green-300 focus:outline-none"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>

        {user && (
          <div className="flex items-center space-x-2">
            <span>¡Hola, {user.name}!</span>
            <Avatar sx={{ bgcolor: teal[500] }}>
              {user.name ? user.name[0] : "U"}
            </Avatar>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
