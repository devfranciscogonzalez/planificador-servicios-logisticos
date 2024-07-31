import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderTableColumn from "../../hooks/useOrderTableColumn";
import ListAltIcon from "@mui/icons-material/ListAlt";

const OrderTable = ({ orders, onEdit, onMoveEnd, isSubmitting }) => {
  const filteredOrders = orders.filter(
    (order) => order.statusEnd === null && order.rescheduledOsId === null
  );

  const columns = useOrderTableColumn(filteredOrders, onEdit, onMoveEnd);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Orden de Servicio vigentes"
            color="primary"
            icon={<ListAltIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderTable;
