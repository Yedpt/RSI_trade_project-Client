import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const colors = {
    activeGreen: "#8ee281",
    inactiveGray: "#696F74",
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    setActivePage(currentPath === "homebank" ? "homebank" : currentPath);
  }, [location]);

  const handleNavigation = (targetPage) => {
    if (targetPage === "trade") {
      setIsSplashVisible(true);
      setTimeout(() => {
        setIsSplashVisible(false);
        navigate(`/homebank/${targetPage}`);
      }, 3000);
    } else if (targetPage === "homebank") {
      navigate("/homebank");
    } else {
      navigate(`/homebank/${targetPage}`);
    }
  };

  const NavButton = ({ page, icon: Icon, label }) => (
    <button
      className="flex flex-col items-center p-2 md:text-lg"
      style={{
        color:
          page === "homebank"
            ? activePage === "homebank"
              ? colors.activeGreen
              : colors.inactiveGray
            : activePage === page
            ? colors.activeGreen
            : colors.inactiveGray,
      }}
      onClick={() => handleNavigation(page)}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
      <span className="text-xs md:text-sm">{label}</span>
    </button>
  );

  return (
    <nav className="fixed bottom-0 left-0 w-full">
      {isSplashVisible && (
        <SplashScreen onClose={() => setIsSplashVisible(false)} />
      )}
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center py-2 bg-[#16161E] shadow-md rounded-t-[15px] z-30">
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
