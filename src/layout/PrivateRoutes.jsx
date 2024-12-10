import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};


export const PrivateAdminRoutes = () => {
    const { isAuthenticated, isAdmin } = useAuth();

    return isAuthenticated && isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};