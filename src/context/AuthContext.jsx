import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (token) => {
    const expirationTime = (new Date().getTime() + 7200000).toString(); // 2 horas
    localStorage.setItem("authToken", token);
    localStorage.setItem("tokenExpiration", expirationTime);

    setIsAuthenticated(true);
    setSessionExpired(false);
    decodeTokenAndSetUserId(token);
  };

  const logout = (expired = false) => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpiration");
    setIsAuthenticated(false);
    setUserId(null);
    setSessionExpired(expired);
  };

  const decodeTokenAndSetUserId = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.id); // Extraer y guardar solo el ID del usuario
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
      setIsAuthenticated(true);
      decodeTokenAndSetUserId(token);
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
