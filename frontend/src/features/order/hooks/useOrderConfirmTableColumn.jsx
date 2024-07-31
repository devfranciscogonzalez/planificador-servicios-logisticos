import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomIconButton from "../../../components/common/Button/CustomIconButton";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import TruckChip from "../components/OrderUI/TruckChip";
import WeightChip from "../components/OrderUI/WeightChip";
import OsStatusChip from "../components/OrderUI/OsStatusChip";
import ContainerChip from "../components/OrderUI/ContainerChip";

const useOrderConfirmTableColumn = (filteredOrders, onEdit) => {
  const columns = [
    {
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          const order = filteredOrders[dataIndex];
          return <UserAvatar name={order.userName} roleId={order.userRoleId} />;
        },
      },
    },
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "date",
      label: "Fecha",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "customerServiceName",
      label: "Customer Service",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "truckPlate",
      label: "Patente Camión",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const order = filteredOrders[dataIndex];
          return <TruckChip truck_plate={order.truckPlate} />;
        },
      },
    },
    {
      name: "entry",
      label: "Fecha de Ingreso",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "weightEntry",
      label: "Peso de Entrada",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const order = filteredOrders[dataIndex];
          return <WeightChip weight={order.weightEntry} />;
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
          const order = filteredOrders[dataIndex];
          return <OsStatusChip enabled={order.status} />;
        },
      },
    },
    {
      name: "comment",
      label: "Comentario",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "container",
      label: "Contenedor",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const order = filteredOrders[dataIndex];
          return <ContainerChip container={order.container} />;
        },
      },
    },
    {
      name: "supervisorName",
      label: "Supervisor",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "dateStatus",
      label: "Fecha de Estado",
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
                onClick={() => onEdit(filteredOrders[dataIndex].id)}
              >
                <CheckCircleIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useOrderConfirmTableColumn;
