import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { PrivateRoutes } from "../layout/PrivateRoutes";



export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "homebank",
    element: <LayoutBank />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <BankHome />
          </PrivateRoutes>
        
      ), 
      },
      {
        path: "trade",
        element: (
          <PrivateRoutes>
            <TradeHome />
          </PrivateRoutes>
        
      ), 
      },
    ],
  },
    ],
);