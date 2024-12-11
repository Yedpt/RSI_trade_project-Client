import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  // Mientras se verifica el estado de autenticación, muestra un indicador de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
