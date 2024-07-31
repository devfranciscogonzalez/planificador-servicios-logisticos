import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderConfirmTableColumn from "../../hooks/useOrderConfirmTableColumn";
import RecommendIcon from "@mui/icons-material/Recommend";

const OrderConfirm = ({ orders, onEdit, isSubmitting }) => {
  const filteredOrders = orders.filter(
    (order) =>
      order.entry !== null &&
      order.truckPlate !== null &&
      order.weightEntry !== null &&
      order.statusEnd === null
  );

  const columns = useOrderConfirmTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip label="Confirmar" color="success" icon={<RecommendIcon />} />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderConfirm;
