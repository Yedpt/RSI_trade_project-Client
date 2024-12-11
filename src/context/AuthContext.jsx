import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null); // Estado para el nombre del usuario
  const [sessionExpired, setSessionExpired] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (token) => {
    const expirationTime = (new Date().getTime() + 7200000).toString(); // 2 horas
    localStorage.setItem("authToken", token);
    localStorage.setItem("tokenExpiration", expirationTime);

    setIsAuthenticated(true);
    setSessionExpired(false);
    decodeTokenAndSetUserData(token); // Llamamos a la función que extrae los datos del token
  };

  const logout = (expired = false) => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpiration");
    setIsAuthenticated(false);
    setUserId(null);
    setUserName(null); // Limpiamos también el nombre del usuario
    setSessionExpired(expired);
  };

  const decodeTokenAndSetUserData = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.id); // Extraemos el ID del usuario
      setUserName(decoded.name); // Extraemos el nombre del usuario
    } catch (error) {
      console.error("Error decoding token", error);
      logout();
    }
  };

  const checkTokenExpiration = () => {
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime().toString();

    if (tokenExpiration && currentTime > tokenExpiration) {
      logout(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      checkTokenExpiration();
      decodeTokenAndSetUserData(token); // Extraemos datos al montar el componente
      setIsAuthenticated(true);
    } else {
      logout();
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        userName, // Incluimos el nombre del usuario en el contexto
        login,
        logout,
        checkTokenExpiration,
        sessionExpired,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
