import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

const useBusinessType = () => {
  const { data: businessType } = useQuery({
    queryKey: ["businessType"],
    queryFn: productService.getBusinesses,
    onError: (error) => {
      console.error("Error al cargar los Tipos de Negocios: ", error);
    },
  });
  return { businessType };
};

export default useBusinessType;
