import React, { useState, useEffect } from "react";
import womanImage from "../assets/logo-splashScreen.webp";
import Loader from "../components/Loader";
const SplashScreen = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
      <div className="text-center text-white">
        <img src={womanImage} alt="Logo" className="w-32 h-32 mx-auto" />
        <h1 className="text-2xl font-bold text-green-500 mt-4">App Trade</h1>

        <div className="mt-4">
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
