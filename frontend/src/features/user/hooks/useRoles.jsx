import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";

const useRoles = () => {
  const { data: roles } = useQuery({
    queryKey: ["roles"],
    queryFn: userService.getRoles,
    onError: (error) => {
      console.error("Error al cargar los roles: ", error);
    },
  });

  return { roles };
};

export default useRoles;
