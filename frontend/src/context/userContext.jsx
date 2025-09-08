import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/axiosInstance"; 
import { API_PATHS } from "../utils/apiPaths";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const refreshUser = async () => {
    try {
      const res = await api.get(API_PATHS.AUTH.USER);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.error("Failed to refresh user:", err);
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // 🔹 Run effect when token changes
  useEffect(() => {
    if (!token) return;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      refreshUser();
    }
  }, [token]); // <-- runs again when token changes

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser, logout, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsersAuth() {
  return useContext(UserContext);
}