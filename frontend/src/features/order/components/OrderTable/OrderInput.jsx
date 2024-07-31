import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderInputTableColumn from "../../hooks/useOrderInputTableColumn";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import dayjs from "dayjs";

const OrderInput = ({ orders, onEdit, isSubmitting }) => {
  const today = dayjs().format("DD/MM/YYYY");

  const filteredOrders = orders.filter(
    (order) =>
      order.entry === null && order.date === today && order.truckPlate !== null
  );
  
  const columns = useOrderInputTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Registrar Ingreso"
            color="primary"
            icon={<ArrowCircleRightRoundedIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderInput;
