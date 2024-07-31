import { Navigate } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const RoleProtectedElement = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    // Redirige a la página de inicio o a una página de error si el usuario no tiene el rol necesario
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleProtectedElement;
