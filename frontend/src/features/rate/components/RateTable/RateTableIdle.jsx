import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { OverlayLoader } from "../../../../components/common";
import { rateTableStaticOption } from "../../constants/rateTableOption";
import useRateTableColumnIdle from "../../hooks/useRateTableColumnIdle";

const RateTableIdle = ({ rates, isSubmitting }) => {
  const options = {
    ...rateTableStaticOption,
  };
  const idleRates = rates.filter((rate) => !rate.status);
  const columns = useRateTableColumnIdle(idleRates);

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip label="Tarifas Inactiva" color="error" icon={<CancelIcon />} />
        }
        data={idleRates}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default RateTableIdle;
