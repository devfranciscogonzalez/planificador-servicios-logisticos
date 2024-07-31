import { useQuery } from "@tanstack/react-query";
import { customerService } from "../services/customerService";
import { adaptCustomerData } from "../adapters/adaptCustomerData";

const useCustomer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: customerService.getCustomers,
    select: (data) => data.map(adaptCustomerData),
    onError: (error) => {
      console.error("Error al cargar los Clientes: ", error);
    },
  });
  return { customers: data, isLoading };
};

export default useCustomer;
