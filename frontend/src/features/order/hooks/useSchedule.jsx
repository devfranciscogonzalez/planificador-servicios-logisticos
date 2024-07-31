import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

const useSchedule = () => {
  const {
    data: schedule,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["schedule"],
    queryFn: orderService.getSchedule,
  });

  return { schedule, isSuccess, isLoading };
};

export default useSchedule;
