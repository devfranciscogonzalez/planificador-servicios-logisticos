import { useQuery } from "@tanstack/react-query";
import { adaptProductData } from "../adapters/adaptProductData";
import { productService } from "../services/productService";

const useProduct = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productService.getProducts,
    select: (data) => data.map(adaptProductData),
    onError: (error) => {
      console.error("Error al cargar los Productos: ", error);
    },
  });

  return { products, isLoading };
};

export default useProduct;
