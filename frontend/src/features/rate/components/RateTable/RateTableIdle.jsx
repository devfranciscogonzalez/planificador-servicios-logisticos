import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { rateTableStaticOption } from "../../constants/rateTableOption";
import useRateTableColumnIdle from "../../hooks/useRateTableColumnIdle";
import CancelIcon from "@mui/icons-material/Cancel";

const RateTableIdle = ({ rates, isSubmitting }) => {
  const columns = useRateTableColumnIdle(rates);

  const options = {
    ...rateTableStaticOption,
  };
  const idleRates = rates.filter((rate) => rate.status === 0);

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
