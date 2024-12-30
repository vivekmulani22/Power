import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create auth context
export const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isloggedin, setIsLoggedIn] = useState(!!token);
    const [user, setUser] = useState("");
    const  AuthorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        setIsLoggedIn(true);
        localStorage.setItem('token', serverToken);
    };

    const Logout = () => {
        setToken("");
        setIsLoggedIn(false);
        setUser("");
        localStorage.removeItem('token');
    };

    const userAuthentication = async () => {
        try {
            if (!token) return;

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/auth/user`, {
                headers: {
                    Authorization: AuthorizationToken,
                }
            });

            if (response.status === 200) {
                const data = response.data;
                console.log("user data:", data);
                console.log("email:", data.email);
                console.log("firstName:", data.firstName);
                setUser(data.userdata);
            }
        } catch (error) {
            console.error("Error in user authentication:", error);
            // If authentication fails, clear everything
            Logout();
        }
    }

    useEffect(() => {
        userAuthentication();
    }, [token]); // Re-run when token changes

    return (
        <AuthContext.Provider value={{ 
            isloggedin,
            token, 
            storeTokenInLS, 
            Logout,
            user,
            AuthorizationToken
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw  Error('useAuth must be used within an AuthProvider');
    }
    return context;
};