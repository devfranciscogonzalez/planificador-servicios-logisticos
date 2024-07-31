import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderOutputTableColumn from "../../hooks/useOrderOutputTableColumn";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import dayjs from "dayjs";

const OrderOutput = ({ orders, onEdit, isSubmitting }) => {
  const today = dayjs().format("DD/MM/YYYY");

  const filteredOrders = orders.filter(
    (order) =>
      order.entry !== null &&
      order.exit === null &&
      order.date === today &&
      order.weightExit !== null
  );

  const columns = useOrderOutputTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Registrar Salida"
            color="error"
            icon={<ArrowCircleLeftRoundedIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderOutput;
