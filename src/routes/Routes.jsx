import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import News from "../pages/News";  // Add this import
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
      {
        path: "news",
        element: (
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        ),
      },
    ],
  },
])