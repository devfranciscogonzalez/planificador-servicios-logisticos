import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

const useActiveProduct = () => {
  const { data: productsActive } = useQuery({
    queryKey: ["products"],
    queryFn: productService.
    getActiveProducts,
    onError: (error) => {
      console.error("Error al cargar los Productos Activos: ", error);
    },
  });

  return { productsActive };
};

export default useActiveProduct;
