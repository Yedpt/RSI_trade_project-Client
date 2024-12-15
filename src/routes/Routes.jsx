import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import EducationContent from "../pages/EducationContent";
import Investments from "../pages/Investments";
import UnderConstruction from "../pages/UnderConstruction";
import Midfid from "../pages/MidFid";
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
    path: "auth",
    element: <PrivateRoutes />,
    children: [
      {
        path: "homebank",
        element: <LayoutBank />,
        children: [
          {
            index: true,
            element: <BankHome />,
          },
        ],
      },
      {
        path: "trade",
        element: <LayoutTrade />,
        children: [
          {
            index: true,
            element: <TradeHome />,
          },
          {
            path: "learn-trade",
            element: <EducationContent />,
          },
          {
            path: "investments",
            element: <Investments />,
          },
          {
            path: "midfid",
            element: <Midfid />,
          },
          {
            path: "underConstruction",
            element: <UnderConstruction />,
          },
          {
            path: "eft",
            element: <EFT />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,

          },
          {
            path: "profile",
            element: <Profile />,

            children: [],
          },
        ],
      },
    ],
  },
]);
