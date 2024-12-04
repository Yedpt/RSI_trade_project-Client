import React from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";

const Footer = () => {
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
      <div className="flex justify-center mt-4">
        <button
          onClick={scrollToTop}
          className="text-white hover:text-green-300 focus:outline-none"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
