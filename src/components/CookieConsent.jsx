import React, { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);

  const handleAcceptAll = () => {
    setShowConsent(false);
  };

  const handleDeclineAll = () => {
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    setShowConsent(false);
    setShowPreferences(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center shadow-lg z-50">
      {!showPreferences ? (
        <>
          <div className="flex items-center space-x-4">
            <FaCookieBite className="text-yellow-400 text-4xl" />
            <p>
              Este sitio utiliza cookies para mejorar su experiencia. Al
              continuar navegando, aceptas nuestro uso de cookies.
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={handleAcceptAll}
              className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300 text-sm"
            >
              Aceptar Todo
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600 transition duration-300 text-sm"
            >
              Preferencias
            </button>
            <button
              onClick={handleDeclineAll}
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300 text-sm"
            >
              Rechazar Todo
            </button>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="flex justify-end">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShowPreferences(false)}
            />
          </div>
          <h2 className="text-xl font-bold mb-4">Preferencias de Cookies</h2>
          <p className="mb-4">Seleccione sus preferencias para las cookies:</p>
          <div className="mb-4">
            <input type="checkbox" id="necessary" defaultChecked disabled />
            <label htmlFor="necessary" className="ml-2">
              Cookies Necesarias
            </label>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="analytics" />
            <label htmlFor="analytics" className="ml-2">
              Cookies de Analítica
            </label>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="marketing" />
            <label htmlFor="marketing" className="ml-2">
              Cookies de Marketing
            </label>
          </div>
          <button
            onClick={handleSavePreferences}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Guardar Preferencias
          </button>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
