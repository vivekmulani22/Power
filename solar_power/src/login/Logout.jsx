import { useAuth } from '../store/auth.jsx';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Logout = () => {
    const { Logout } = useAuth();
    
    useEffect(() => {
        Logout();       
    }, [Logout]);
    return <Navigate to="/login" />;
}   