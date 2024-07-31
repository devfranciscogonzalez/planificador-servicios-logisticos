import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { adaptUserData } from "../adapters/adaptUserData";

const useUser = () => {
  const {
    data: users,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
    select: (data) => data.map(adaptUserData),
  });
  return { users, isLoading };
};

export default useUser;
