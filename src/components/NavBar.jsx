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
    setActivePage(currentPath === "auth" ? "auth" : currentPath);
  }, [location]);

  const handleNavigation = (targetPage) => {
    if (targetPage === "trade") {
      setIsSplashVisible(true);
      setTimeout(() => {
        setIsSplashVisible(false);
        navigate(`/auth/${targetPage}`);
      }, 3000);
    } else if (targetPage === "auth") {
      navigate("/auth");
    } else {
      navigate(`/auth/${targetPage}`);
    }
  };

  const NavButton = ({ page, icon: Icon, label }) => (
    <button
      className="flex flex-col items-center p-2 md:text-lg"
      style={{
        color:
          page === "auth"
            ? activePage === "auth"
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
    <nav className="relative w-full">
      {isSplashVisible && (
        <SplashScreen onClose={() => setIsSplashVisible(false)} />
      )}
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center py-2 bg-[#16161E] shadow-md rounded-t-[15px] z-30">
        <NavButton
          page="trade/portfolio"
          icon={DocumentIcon}
          label="Portfolio"
        />
        <NavButton page="trade/investments" icon={ChartBarIcon} label="Trade" />
        <NavButton page="trade/home" icon={HomeIcon} label="Home" />
        <NavButton page="trade/news" icon={NewspaperIcon} label="News" />
        <NavButton page="trade/wallet" icon={CreditCardIcon} label="Wallet" />
      </div>
    </nav>
  );
};

export default NavBar;
