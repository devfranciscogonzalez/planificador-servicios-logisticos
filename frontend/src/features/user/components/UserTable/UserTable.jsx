import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import ChipButton from "../../../../components/common/Button/ChipButton";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { userTableStaticOption } from "../../constants/userTableOption";
import useUserTableColumn from "../../hooks/useUserTableColumn";

const UserTable = ({ users, onAdd, onEdit, onDelete, isSubmitting }) => {
  const renderAddButton = () => {
    return <ChipButton label={"Registrar Usuario"} onClick={onAdd} />;
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
