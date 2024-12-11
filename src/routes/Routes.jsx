import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutBank from "../layout/LayoutBank";
import BankHome from "../pages/BankHome";
import TradeHome from "../pages/TradeHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import TradeHeader from "../components/TradeHeader";
import Portfolio from "../pages/Portfolio";

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
            <Footer />
            <BankHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "portfolio",
        element: (
          <ProtectedRoute>
            <TradeHeader />
            <Portfolio />
          </ProtectedRoute>
        ),
        children: [],
      },
      {
        path: "trade",
        element: (
          <ProtectedRoute>
            <TradeHeader />
            <TradeHome />
          </ProtectedRoute>
        ),
        children: [],
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: [],
      },

      {
        path: "onboarding",
        element: (
          <ProtectedRoute>
            <OnboardingPage />
          </ProtectedRoute>
      ), 
      },
      {
        path: "ranking",
        element: (
          <ProtectedRoute>
            <RankingPage />
          </ProtectedRoute>
      ),
      }
      
    ],
  },
]);
