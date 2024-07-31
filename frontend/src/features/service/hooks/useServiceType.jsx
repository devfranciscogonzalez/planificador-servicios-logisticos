import { useQuery } from "@tanstack/react-query";
import { serviceOfService } from "../services/serviceOfService";

const useServiceType = () => {
  const { data: serviceType } = useQuery({
    queryKey: ["serviceTypes"],
    queryFn: serviceOfService.getServicesType,
    onError: (error) => {
      console.error("Error al cargar los Tipos de Servicios: ", error);
    },
  });
  return { serviceType };
};

export default useServiceType;
