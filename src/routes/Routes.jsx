import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import LayoutTrade from "../layout/LayoutTrade";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("authToken");

  return user && token ? children : <Navigate to="/login" replace />;
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBank />,
    children: [
      {
        index: true,
        element: <BankHome />,
      },
      {
        path: "aboutus",
        element: <div>About</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login initialView="register" />, // Ruta para el registro directo
  },
  {
    path: "/trade",
    element: <LayoutTrade />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <TradeHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "news",
        element: (
          <ProtectedRoute>
            <div>news</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
