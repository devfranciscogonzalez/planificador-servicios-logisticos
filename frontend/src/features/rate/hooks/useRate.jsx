import { useQuery } from "@tanstack/react-query";
import { rateService } from "../services/rateService";
import { adaptRateData } from "../adapters/adaptRateData";

const useRate = () => {
  const { data: rates, isLoading } = useQuery({
    queryKey: ["rates"],
    queryFn: rateService.getRates,
    select: (data) => data.map(adaptRateData),
  });

  return { rates, isLoading };
};

export default useRate;
