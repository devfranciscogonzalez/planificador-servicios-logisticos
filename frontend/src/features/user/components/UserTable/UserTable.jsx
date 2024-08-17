import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import {
  CustomTableButton,
  OverlayLoader,
} from "../../../../components/common";
import { userTableStaticOption } from "../../constants/userTableOption";
import useUserTableColumn from "../../hooks/useUserTableColumn";

const UserTable = ({ users, onAdd, onEdit, onDelete, isSubmitting }) => {
  const renderAddButton = () => {
    return <CustomTableButton label="Registrar Usuario" onClick={onAdd} />;
  };

  const columns = useUserTableColumn(users, onEdit, onDelete);

  const options = {
    ...userTableStaticOption,
    customToolbar: renderAddButton,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable data={users} columns={columns} options={options} />
    </Box>
  );
};

export default UserTable;
