import { useQuery } from "@tanstack/react-query";
import { serviceOfService } from "../services/serviceOfService";
import { adaptServiceData } from "../adapters/adaptServiceData";

const useService = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: serviceOfService.getServices,
    select: (data) => data.map(adaptServiceData),
    onError: (error) => {
      console.error("Error al cargar los Servicios: ", error);
    },
  });

  return { services, isLoading };
};

export default useService;
