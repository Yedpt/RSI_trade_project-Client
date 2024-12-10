import create from "zustand";

// Creamos el store con Zustand
export const useAuthStore = create((set) => ({
  user: null,
  authToken: null,
  setUser: (user) => set({ user }),
  setAuthToken: (token) => set({ authToken: token }),
  logout: () => set({ user: null, authToken: null }),
}));
