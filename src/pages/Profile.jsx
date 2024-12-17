import React from "react";
import {
  HiArrowLeft,
  HiUser,
  HiBell,
  HiChat,
  HiCreditCard,
  HiCog,
  HiMap,
} from "react-icons/hi";
import OptionItem from "../components/OptionItem";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser
    ? JSON.parse(storedUser).user || JSON.parse(storedUser)
    : null;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#1e1e2d] text-white min-h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#8FE282]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-white text-xl font-bold">
            Ranking de los ganadores
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={handleReturn}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          <HiArrowLeft size={20} />
        </button>
        <h1 className="text-center text-lg font-medium">Perfil</h1>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <HiUser size={20} />
        </button>
      </div>
      <div className="flex flex-row items-center text-center py-6 ml-6 gap-5 mt-2">
        <div className="bg-gray-500 rounded-full h-16 w-16 flex items-center justify-center">
          <button>
            <Avatar sx={{ bgcolor: deepPurple[800], width: 60, height: 60 }}>
              {user.name ? user.name[0] : "U"}
            </Avatar>
          </button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-lg font-medium mt-2">{user.name}</h2>
          <p className="text-sm text-gray-400">Perfil</p>
        </div>
      </div>
      <div className="flex-1 divide-y divide-gray-700 overflow-y-auto mt-2 p-4">
        <OptionItem icon={HiUser} text="Información personal" />
        <OptionItem icon={HiCreditCard} text="Preferencias de Pago" />
        <OptionItem icon={HiCreditCard} text="Bancos y Tarjetas" />
        <OptionItem icon={HiBell} text="Notificaciones" />
        <OptionItem icon={HiChat} text="Mensajes" />
        <OptionItem icon={HiMap} text="Direcciones" />
        <OptionItem icon={HiCog} text="Ajustes" />
      </div>
    </div>
  );
};

export default Profile;
