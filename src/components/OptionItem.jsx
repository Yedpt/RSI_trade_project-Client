import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const OptionItem = ({ icon: Icon, text, hasNotification = false }) => (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-700 cursor-pointer">
      <div className="flex items-center gap-4">
        <Icon size={20} className="text-gray-400" />
        <span className="text-sm text-gray-300">{text}</span>
      </div>
      <div className="flex items-center">
        {hasNotification && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            2
          </span>
        )}
        <HiArrowRight size={20} className="text-gray-400" />
      </div>
    </div>
  );

export default OptionItem
