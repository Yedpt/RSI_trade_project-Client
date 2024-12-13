import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Card from "../components/Card";
import WinApr from "../components/WinApr";
import News from "../pages/News";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("authToken");

  return user && token ? children : <Navigate to="/" replace />;
};

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
])