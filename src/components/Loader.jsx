import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`relative w-5 h-5 border-2 border-gray-400 rounded-full animate-pulse`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div
            className="absolute w-4 h-4 bg-gray-400 rounded-full transform translate-x-1/2 translate-y-1/2 animate-scale"
            style={{ animationDelay: `${index * 0.3}s` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
