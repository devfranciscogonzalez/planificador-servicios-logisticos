import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomIconButton from "../../../components/common/Button/CustomIconButton";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import StatusChip from "../../../components/ui/StatusChip";
import BusinessChip from "../components/ProductUI/BusinessChip";
import { Box } from "@mui/material";

const useProductTableColumn = (products, onEdit, onDelete) => {
  const columns = [
    {
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          const product = products[dataIndex].user;
          return <UserAvatar name={product.name} roleId={product.roleId} />;
        },
      },
    },
    {
      name: "name",
      label: "Nombre",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Descripcion",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const description = products[dataIndex].description;
          return (
            <Box style={{ textAlign: "left", textJustify: "inter-word" }}>
              {description}
            </Box>
          );
        },
      },
    },
    {
      name: "status",
      label: "Estado",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const productState = products[dataIndex].status;
          return <StatusChip enabled={productState} />;
        },
      },
    },
    {
      name: "businessName",
      label: "Tipo de Negocio",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const product = products[dataIndex];
          return (
            <BusinessChip
              businessId={product.businessId}
              businessName={product.businessName}
            />
          );
        },
      },
    },

    {
      name: "createdAt",
      label: "Fecha de Creación",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "updatedAt",
      label: "Fecha de Actualización",
      options: {
        filter: false,
        sort: true,
      },
    },

    {
      name: "actions",
      label: "Acción",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <CustomIconButton
                aria-label="edit"
                onClick={() => onEdit(products[dataIndex])}
              >
                <EditIcon />
              </CustomIconButton>
              <CustomIconButton
                aria-label="delete"
                onClick={() => onDelete(products[dataIndex].id)}
              >
                <DeleteIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useProductTableColumn;
