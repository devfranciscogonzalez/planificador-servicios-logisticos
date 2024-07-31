import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import ChipButton from "../../../../components/common/Button/ChipButton";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import { serviceTableStaticOption } from "../../constants/serviceTableOption";
import useServiceTableColumn from "../../hooks/useServiceTableColumn";

const ServiceTable = ({ services, onAdd, onEdit, onDelete, isSubmitting }) => {
  const renderAddButton = () => {
    return <ChipButton label={"Agregar Servicio"} onClick={onAdd} />;
  };
  const columns = useServiceTableColumn(services, onEdit, onDelete);

  const options = {
    ...serviceTableStaticOption,
    customToolbar: renderAddButton,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable data={services} columns={columns} options={options} />
    </Box>
  );
};

export default ServiceTable;
