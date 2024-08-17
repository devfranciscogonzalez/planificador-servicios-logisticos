import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { OverlayLoader } from "../../../../components/common";
import { rateTableStaticOption } from "../../constants/rateTableOption";
import useRateTableColumn from "../../hooks/useRateTableColumn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const RateTableCurrent = ({ rates, onEdit, isSubmitting }) => {
  const options = {
    ...rateTableStaticOption,
  };
  const currentRates = rates.filter((rate) => rate.status === 1);

  const columns = useRateTableColumn(currentRates, onEdit);
  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Tarifas Vigente"
            color="success"
            icon={<CheckCircleIcon />}
          />
        }
        data={currentRates}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default RateTableCurrent;
