import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Box, Chip } from "@mui/material";
import dayjs from "dayjs";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderWeighOutputTableColumn from "../../hooks/useOrderWeighOutputTableColumn";

const OrderWeightOutput = ({ orders, onEdit, isSubmitting }) => {
  const today = dayjs().format("DD/MM/YYYY");

  const filteredOrders = orders.filter(
    (order) =>
      order.entry !== null &&
      order.date === today &&
      order.truckPlate !== null &&
      order.weightEntry !== null &&
      order.weightExit === null
  );

  const columns = useOrderWeighOutputTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Registrar Peso de Salida"
            color="error"
            icon={<ArrowCircleUpIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderWeightOutput;
