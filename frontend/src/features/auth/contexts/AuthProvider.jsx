import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import Loading from "../../../components/common/Loading/Loading";
import { authService } from "../services/authService";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => authService.validateToken(),
    enabled: !!localStorage.getItem("token"),
    retry: false, 
    refetchOnWindowFocus: false, 
    refetchOnMount: false, 
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
    isAuthenticated: user && user.status,
    login: loginMutation,
    logout: logoutMutation,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
