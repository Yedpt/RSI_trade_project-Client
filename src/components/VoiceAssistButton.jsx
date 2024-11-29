// VoiceAssistButton.jsx
import React from "react";
import { FaVolumeUp } from "react-icons/fa";

const VoiceAssistButton = ({ text }) => {
  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("La síntesis de voz no es compatible con este navegador.");
    }
  };

  return (
    <button
      onClick={speakText}
      className="text-2xl cursor-pointer  bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors duration-300 hover:bg-green-600"
      title="Reproducir ayuda en voz"
    >
      <FaVolumeUp />
    </button>
  );
};

export default VoiceAssistButton;
