import { Navigate } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const RoleProtectedElement = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleProtectedElement;
