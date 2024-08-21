import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { OverlayLoader } from "../../../../components/common";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderTruckTableColumn from "../../hooks/useOrderTruckTableColumn";

const OrderTruck = ({ orders, onEdit, isSubmitting }) => {
  const filteredOrders = orders.filter(
    (order) => order.statusEnd === null && order.rescheduledOsId === null
  );

  const columns = useOrderTruckTableColumn(filteredOrders, onEdit);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Ingresar Patente de Camión"
            color="primary"
            icon={<LocalShippingIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderTruck;
