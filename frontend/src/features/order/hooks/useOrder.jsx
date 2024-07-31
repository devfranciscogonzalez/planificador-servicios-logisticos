import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";
import { adaptOrderData } from "../adapters/adaptOrderData";

const useOrder = () => {
  const {
    data: orders,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: orderService.getOrders,
    select: (data) => data.map(adaptOrderData),
  });

  return { orders, isSuccess, isLoading };
};

export default useOrder;
