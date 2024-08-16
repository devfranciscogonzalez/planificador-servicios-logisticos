import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Box, Chip } from "@mui/material";
import dayjs from "dayjs";
import MUIDataTable from "mui-datatables";
import { OverlayLoader } from "../../../../components/common";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderWeightInputTableColumn from "../../hooks/useOrderWeightInputTableColumn";

const OrderWeightInput = ({ orders, onEdit, isSubmitting }) => {
  const today = dayjs().format("DD/MM/YYYY");

  const filteredOrders = orders.filter(
    (order) =>
      order.date === today &&
      order.entry !== null &&
      order.truckPlate !== null &&
      order.weightEntry === null
  );

  const columns = useOrderWeightInputTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Registrar Peso de Ingreso"
            color="primary"
            icon={<ArrowCircleDownIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderWeightInput;
