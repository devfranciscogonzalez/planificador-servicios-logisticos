import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const PublicRoutes = () => {
  
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
