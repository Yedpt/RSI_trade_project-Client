import React from 'react'
import { useNavigate } from "react-router-dom";

const EFT = () => {
    const navigate = useNavigate();
    const handleEFTClick = () => {
        navigate("/auth/trade");
    };
    
  return (
    <div>
      <p>Contenido Proximamente</p>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-green-500 hover:text-black" onClick={handleEFTClick}>regresar</button>
    </div>
  )
}

export default EFT