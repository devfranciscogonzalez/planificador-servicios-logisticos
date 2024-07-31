import { useQuery } from "@tanstack/react-query";
import { rateService } from "../services/rateService";

const useRoutes = () => {
  const {
    data: routes,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["routes"],
    queryFn: rateService.getRoutes,
  });

  return { routes, isSuccess, isLoading };
};

export default useRoutes;
