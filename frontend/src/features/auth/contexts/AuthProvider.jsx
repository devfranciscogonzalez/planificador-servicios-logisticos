import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import Loading from "../../../components/common/loading/Loading";
import { authService } from "../services/authService";

/**
 *
 * TODO: implementar manejo de errores
 *
 */
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => authService.validateToken(),
    enabled: !!localStorage.getItem("token"),
    retry: false, // Evita que la consulta se reintente en caso de error
    refetchOnWindowFocus: false, // Evita que la consulta se ejecute al cambiar de pestaña
    refetchOnMount: false, // Evita que la consulta se ejecute al montar el componente
  });

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      localStorage.setItem("token", data.access_token);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.setQueriesData({ queryKey: ["authUser"] }, null);
      localStorage.removeItem("token");
    },
  });

  const value = {
    user,
    isAuthenticated: user && user.status === 1,
    login: loginMutation,
    logout: logoutMutation,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
