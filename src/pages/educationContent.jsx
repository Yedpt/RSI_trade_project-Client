import React, { useState } from "react";
import { Search, User, Briefcase, Home, NewspaperIcon, Wallet, MessageCircle } from "lucide-react";

import fondoInversion from "../assets/educationImages/fondoInversion.svg";
import practicando from "../assets/educationImages/practicando.svg";
import simulando from "../assets/educationImages/simulando.svg";
import sinRiesgo from "../assets/educationImages/sinRiesgo.svg";
import educationVideo1 from "../assets/educationImages/educationVideo1.mp4";
import educationVideo2 from "../assets/educationImages/educationVideo2.mp4";

const InvestmentApp = () => {
  const [activeTab, setActiveTab] = useState("Acciones");
  const [activeOption, setActiveOption] = useState("Tutoriales");
  const [avatarType, setAvatarType] = useState("homme");

  // Componente para el selector de avatar
  const AvatarSelector = () => (
    <div className="relative group">
      <div className="w-8 h-8 rounded-full bg-gray-700 cursor-pointer">
        <User className="w-full h-full p-1" />
      </div>

      {/* Menú desplegable para elegir el avatar */}
      <div className="hidden group-hover:block absolute top-full left-0 mt-2 bg-gray-800 rounded-lg p-2 shadow-lg z-50">
        <button
          onClick={() => setAvatarType("homme")}
          className={`block w-full text-left px-4 py-2 rounded ${
            avatarType === "homme" ? "bg-green-500" : "hover:bg-gray-700"
          }`}
        >
          Hombre
        </button>
        <button
          onClick={() => setAvatarType("femme")}
          className={`block w-full text-left px-4 py-2 rounded ${
            avatarType === "femme" ? "bg-green-500" : "hover:bg-gray-700"
          }`}
        >
          Mujer
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <AvatarSelector />
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full bg-gray-800 rounded-full py-2 px-4 text-sm"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["Acciones", "EFT"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full ${
              activeTab === tab ? "bg-green-500 text-white" : "bg-gray-800 text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Aprenda Section */}
      <h2 className="text-xl font-semibold mb-4">Aprenda</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 rounded-xl p-4 aspect-square">
          <img src={simulando} alt="Simulando" className="h-3/4 rounded-lg mb-2 object-cover" />
          <p className="text-sm">Aprenda simulando</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 aspect-square">
          <img src={practicando} alt="Practicando" className="h-3/4 rounded-lg mb-2 object-cover" />
          <p className="text-sm">Pratique aquí</p>
        </div>
      </div>

      {/* Options Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["Consejos", "Tutoriales", "Retos", "Vip", "Consultas", "Otros"].map((option) => (
          <button
            key={option}
            onClick={() => setActiveOption(option)}
            className={`px-4 py-1.5 rounded-full text-sm ${
              activeOption === option ? "bg-green-500" : "bg-gray-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Video List */}
      <div className="space-y-4">
        {[
          {
            title: "Entienda lo que son los fundos de inversión",
            duration: "2 minutos",
            image: fondoInversion,
            video: educationVideo1,
          },
          {
            title: "Empiece sin riesgos: invirta a partir de 0 €",
            duration: "1 minuto",
            image: sinRiesgo,
            video: educationVideo2,
          },
        ].map((video, index) => (
          <div key={index} className="flex gap-4 bg-gray-800 rounded-xl p-3">
            <img src={video.image} alt={video.title} className="w-24 h-16 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-medium mb-1">{video.title}</h3>
              <p className="text-sm text-gray-400">Video · {video.duration}</p>
              <video controls src={video.video} className="w-full mt-2 rounded-lg"></video>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 px-6 py-3 flex justify-between">
        <button className="flex flex-col items-center text-gray-400">
          <Briefcase className="w-6 h-6" />
          <span className="text-xs">Portfolio</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Home className="w-6 h-6" />
          <span className="text-xs">Invertir</span>
        </button>
        <button className="flex flex-col items-center text-white">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <NewspaperIcon className="w-6 h-6" />
          <span className="text-xs">News</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Wallet className="w-6 h-6" />
          <span className="text-xs">Wallet</span>
        </button>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-20 right-4 bg-green-500 p-2 rounded-full">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default InvestmentApp;
