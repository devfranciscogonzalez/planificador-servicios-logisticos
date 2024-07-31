import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

const usePlanning = () => {
  const {
    data: planning,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["planning"],
    queryFn: orderService.getPlanning,
  });

  return { planning, isSuccess, isLoading };
};

export default usePlanning;
