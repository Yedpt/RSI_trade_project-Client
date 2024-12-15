import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Card from "../components/Card";
import WinApr from "../components/WinApr";
import News from "../pages/News";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import EducationContent from "../pages/EducationContent";
import Investments from "../pages/Investments";
import UnderConstruction from "../pages/UnderConstruction";
import  EFT from "../pages/EFT";
import TradeHeader from "../components/TradeHeader";
import Portfolio from "../pages/Portfolio";
import { PrivateRoutes } from "../layout/PrivateRoutes";
import LayoutTrade from "../layout/LayoutTrade";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "new", // Nueva ruta independiente
    element: <News />,
  },
  {
    path: "homebank",
    element: <LayoutBank />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <BankHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "trade",
        element: (
          <ProtectedRoute>
            <TradeHome />
          </ProtectedRoute>
        
      ), 
      },
    ],
  },
    ],
);