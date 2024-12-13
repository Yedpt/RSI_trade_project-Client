import React from "react";
import { FaChartLine } from "react-icons/fa";

const TrendingTopics = ({ onSelect }) => {
  const topics = [
    {
      name: "Apple trade",
      icon: <img src="/icons/apple.jpeg" alt="Apple" className="h-6 w-6" />,
    },
    {
      name: "Tesla trade",
      icon: <img src="/icons/tesla.png" alt="Tesla" className="h-6 w-6" />,
    },
    {
      name: "Bolsa de valores",
      icon: <FaChartLine className="h-6 w-6" />,
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap my-6 bg-[rgb(22,22,34)] p-4 rounded-lg">
      {topics.map((topic, index) => (
        <button
          key={index}
          onClick={() => onSelect(topic.name)}
          className="flex items-center gap-2 px-4 py-3 bg-[#787880] text-white rounded-lg hover:bg-[rgb(119,217,144)] transition"
        >
          {topic.icon}
          {topic.name}
        </button>
      ))}
    </div>
  );
};

export default TrendingTopics;
