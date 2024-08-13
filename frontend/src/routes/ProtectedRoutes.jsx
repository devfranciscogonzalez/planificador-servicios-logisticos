import {
  // Navigate,
  Outlet,
} from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Outlet />;
  // <Navigate to="/" />
};

export default ProtectedRoutes;
