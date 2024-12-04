import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import video from "../assets/onboardingImages/video.mp4";
import onboardingUno from "../assets/onboardingImages/onboardingUno.svg";
import onboardingDos from "../assets/onboardingImages/onboardingDos.svg";

const OnboardingPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  
  const cards = [
    {
      title: "Aprenda a invertir con simulaciones",
      description: "Simulaciones prácticas permiten experimentar inversiones sin riesgo financiero real.",
      image: video,
      isVideo: true,
    },
    {
      title: "Practique con dinero virtual",
      description: "Entrena habilidades de inversión sin perder dinero real.",
      image: onboardingUno,
      isVideo: false,
    },
    {
      title: "¡Invierta y gane!",
      description: "Aprenda, domine estrategias y luego invierta con confianza.",
      image: onboardingDos,
      isVideo: false,
    },
  ];

  
  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      navigate("/home-trading"); 
    }
  };

  const handleBack = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  // Función para omitir todas las tarjetas
  const handleSkip = () => {
    navigate("/home-trading"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-trading-bg bg-cover bg-center">
      {/* Tarjeta */}
      <div className="w-80 h-96 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-5 flex flex-col items-center justify-between">
        {cards[currentCard].isVideo ? (
          <video className="w-full h-40 object-contain" controls>
            <source src={cards[currentCard].image} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        ) : (
          <img
            src={cards[currentCard].image}
            alt="Onboarding"
            className="w-full h-40 object-contain"
          />
        )}
        <h2 className="text-xl font-bold text-center text-white">{cards[currentCard].title}</h2>
        <p className="text-center text-gray-300">{cards[currentCard].description}</p>
        <div className="flex gap-2 mt-4">
          {/* Botón "Atrás" */}
          <button
            className={`bg-transparent text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white ${
              currentCard === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleBack}
            disabled={currentCard === 0} // Deshabilitar si es la primera tarjeta
          >
            Atrás
          </button>

          {/* Botón "Próximo" */}
          <button
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
            onClick={handleNext}
          >
            {currentCard < cards.length - 1 ? "Sigueinte" : "Empezar"}
          </button>

          {/* Botón "Saltar" */}
          <button
            className="bg-transparent text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white"
            onClick={handleSkip}
          >
            Saltar
          </button>
        </div>
      </div>
      {/* Indicador de progreso */}
      <div className="flex mt-4 space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentCard === index ? "bg-green-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingPage;
