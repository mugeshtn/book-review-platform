import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

const AuthContext = createContext();
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/auth/profile`, { withCredentials: true });
                if(typeof(data) === "string" && data.startsWith("<!DOCTYPE html>")){
                    setUser(null)
                }
                setUser(data);
            } catch {
                setUser(null);
            } finally {
                setIsLoading(false)
            }
        };
        fetchUser();
    }, []);

    const logout = async () => {
        try {
            await axios.post(`${API_BASE}/auth/logout`, {}, { withCredentials: true });
            setUser(null);
            window.location.href = "/books";
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const value = {
        user,
        setUser,
        logout,
        isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};