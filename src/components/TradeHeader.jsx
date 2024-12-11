import React from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const TradeHeader = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser
    ? JSON.parse(storedUser).user || JSON.parse(storedUser)
    : null;
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("profile");
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between p-4 bg-[#1e1e2d]">
      <div className="flex items-center">
        {user ? (
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full py-2 pl-4 pr-10 text-sm text-gray-300 placeholder-gray-500 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
      {user && (
        <div className="flex items-center">
          <button onClick={handleProfile}>
            <Avatar sx={{ bgcolor: "#1DB154" }}>
              {user.name ? user.name[0] : "U"}
            </Avatar>
          </button>
        </div>
      )}
    </div>
  );
};

export default TradeHeader;
