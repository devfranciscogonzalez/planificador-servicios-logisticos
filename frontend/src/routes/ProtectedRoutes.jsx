import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth(); // Este hook debe devolver el estado de autenticación

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
