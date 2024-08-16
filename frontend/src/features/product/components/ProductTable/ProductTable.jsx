import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import {
  CustomTableButton,
  OverlayLoader,
} from "../../../../components/common";
import { productTableStaticOption } from "../../constants/productTableOption";
import useProductTableColumn from "../../hooks/useProductTableColumn";

const ProductTable = ({ products, onAdd, onEdit, onDelete, isSubmitting }) => {
  const renderAddButton = () => {
    return <CustomTableButton label="Agregar Producto" onClick={onAdd} />;
  };
  const columns = useProductTableColumn(products, onEdit, onDelete);

  const options = {
    ...productTableStaticOption,
    customToolbar: renderAddButton,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable data={products} columns={columns} options={options} />
    </Box>
  );
};

export default ProductTable;
