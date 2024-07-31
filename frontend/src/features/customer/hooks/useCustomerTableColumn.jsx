import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomIconButton from "../../../components/common/Button/CustomIconButton";
import StatusChip from "../../../components/ui/StatusChip";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";

const customerTableColumn = (customers, onEdit, onDelete) => {
  const columns = [
    {
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          const customer = customers[dataIndex].user;
          return <UserAvatar name={customer.name} roleId={customer.roleId} />;
        },
      },
    },
    {
      name: "name",
      label: "Empresa",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Descripción",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Estado",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const customerStatus = customers[dataIndex].status;
          return <StatusChip enabled={customerStatus} />;
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
                onClick={() => onEdit(customers[dataIndex])}
              >
                <EditIcon />
              </CustomIconButton>
              <CustomIconButton
                aria-label="delete"
                onClick={() => onDelete(customers[dataIndex].id)}
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

export default customerTableColumn;
