import { Box } from "@mui/material";
import { OverlayLoader } from "../../../../components/common";
import RateFormFields from "../RateInputs/RateFormFields";
import RateList from "../RateList/RateList";

const RateVerify = ({ control, watch, verifiedRates, isVerifying }) => {
  return (
    <Box position="relative">
      <OverlayLoader isLoading={isVerifying} />
      <RateList rates={verifiedRates} isVerifying={isVerifying} />
      <RateFormFields
        control={control}
        watch={watch}
        verifiedRates={verifiedRates}
      />
    </Box>
  );
};

export default RateVerify;
