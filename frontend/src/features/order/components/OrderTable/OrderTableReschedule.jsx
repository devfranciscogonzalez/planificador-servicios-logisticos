import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import { Box, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { OverlayLoader } from "../../../../components/common";
import { orderTableOption } from "../../constants/orderTableOption";
import useOrderTableColumnReschedule from "../../hooks/useOrderTableColumnReschedule";

const OrderTableReschedule = ({ orders, isSubmitting }) => {
  const filteredOrders = orders.filter(
    (order) => order.rescheduledOsId !== null
  );

  const columns = useOrderTableColumnReschedule(filteredOrders);

  const options = {
    ...orderTableOption,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable
        title={
          <Chip
            label="Orden de Servicio reprogramadas"
            color="warning"
            icon={<EventRepeatIcon />}
          />
        }
        data={filteredOrders}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default OrderTableReschedule;
