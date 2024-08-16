import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import {
  CustomTableButton,
  OverlayLoader,
} from "../../../../components/common";
import { customerTableStaticOption } from "../../constants/customerTableOption";
import useCustomerTableColumn from "../../hooks/useCustomerTableColumn";

const CustomerTable = ({
  customers,
  onAdd,
  onEdit,
  onDelete,
  isSubmitting,
}) => {
  const renderAddCustomerButton = () => {
    return <CustomTableButton label="Registrar Cliente" onClick={onAdd} />;
  };
  const columns = useCustomerTableColumn(customers, onEdit, onDelete);
  const options = {
    ...customerTableStaticOption,
    customToolbar: renderAddCustomerButton,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable data={customers} columns={columns} options={options} />
    </Box>
  );
};

export default CustomerTable;
