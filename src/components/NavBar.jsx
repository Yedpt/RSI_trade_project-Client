import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  NewspaperIcon,
  CreditCardIcon,
  DocumentIcon,
} from "@heroicons/react/outline";
import SplashScreen from "../components/SplashScreen";

const NavBar = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [activePage, setActivePage] = useState("");
  const navigate = useNavigate();

  const colors = {
    activeGreen: "#4AFF2E",
    inactiveGray: "#696F74",
  };

  const handleNavigation = (targetPage) => {
    if (targetPage === "trade") {
      setIsSplashVisible(true);
      setTimeout(() => {
        setIsSplashVisible(false);
        setActivePage(targetPage);
        navigate(`/homebank/${targetPage}`);
      }, 3000);
    } else if (targetPage === "homebank") {
      setActivePage(targetPage);
      navigate("/homebank");
    } else {
      setActivePage(targetPage);
      navigate(`/homebank/${targetPage}`);
    }
  };

  const NavButton = ({ page, icon: Icon, label }) => (
    <button
      className="flex flex-col items-center p-2 md:text-lg"
      style={{
        color: activePage === page ? colors.activeGreen : colors.inactiveGray,
      }}
      onClick={() => handleNavigation(page)}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
      <span className="text-xs md:text-sm">{label}</span>
    </button>
  );

  return (
    <nav className="relative w-full">
      {isSplashVisible && (
        <SplashScreen onClose={() => setIsSplashVisible(false)} />
      )}
      <div className="flex justify-around items-center py-2 bg-black shadow-md md:w-full">
        <NavButton page="portfolio" icon={DocumentIcon} label="Portfolio" />
        <NavButton page="trade" icon={ChartBarIcon} label="Trade" />
        <NavButton page="homebank" icon={HomeIcon} label="Home" />
        <NavButton page="news" icon={NewspaperIcon} label="News" />
        <NavButton page="wallet" icon={CreditCardIcon} label="Wallet" />
      </div>
    </nav>
  );
};

export default NavBar;
