import { useQuery } from "@tanstack/react-query";
import { rateService } from "../services/rateService";

const useRateCode = (code) => {
  const {
    data: rateCode,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["rateCode"],
    queryFn: () => rateService.getByCode(code),
    enabled: !!code,
  });

  return { rateCode, isSuccess, isLoading };
};

export default useRateCode;
