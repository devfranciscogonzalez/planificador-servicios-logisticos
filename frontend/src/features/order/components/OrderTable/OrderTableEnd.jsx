import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderTableColumnEnd from "../../hooks/useOrderTableColumnEnd";
const OrderTableEnd = ({ orders, onDelete, isSubmitting }) => {
  const filteredOrders = orders.filter((order) => order.statusEnd === 1);

  const columns = useOrderTableColumnEnd(filteredOrders, onDelete);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Orden de Servicio finalizadas"
            color="success"
            icon={<AssignmentTurnedInIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderTableEnd;
