import { useQuery } from "@tanstack/react-query";
import { customerService } from "../services/customerService";

const useActiveCustomer = () => {
  const { data: customersActive } = useQuery({
    queryKey: ["customersActive"],
    queryFn: customerService.getActiveCustomers,
    onError: (error) => {
      console.error("Error al cargar los Clientes Activos: ", error);
    },
  });
  return { customersActive };
};

export default useActiveCustomer;
