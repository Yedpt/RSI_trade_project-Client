import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ChartBarIcon, BellIcon } from "@heroicons/react/outline";
import SplashScreen from "../components/SplashScreen";

const NavbarBankHome = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
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
    } else {
      navigate(`/auth/${targetPage}`);
    }
  };

  const handleNotificationClick = () => {
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 2000);
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
      <div className="fixed bottom-0 left-0 w-full flex items-center py-2 bg-[#16161E] shadow-md rounded-t-[15px] z-30">
        <div className="flex gap-8 pl-4">
          <NavButton page="homebank" icon={HomeIcon} label="Home" />
          <NavButton page="trade" icon={ChartBarIcon} label="Trade" />
        </div>
        <button
          className="p-2 ml-auto pr-4"
          onClick={handleNotificationClick}
          style={{ color: colors.inactiveGray }}
        >
          <BellIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {isNotificationVisible && (
        <div className="fixed bottom-16 left-0 right-0 mx-auto max-w-xs p-4 bg-black bg-opacity-80 rounded-xl text-white">
          <div className="font-bold text-gray-400">Notificaciones</div>
          <div> No tienes notificaciones.</div>
        </div>
      )}
    </nav>
  );
};

export default NavbarBankHome;
