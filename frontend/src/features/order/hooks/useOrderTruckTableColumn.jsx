import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CustomIconButton from "../../../components/common/Button/CustomIconButton";
import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import TruckChip from "../components/OrderUI/TruckChip";

const useOrderTruckTableColumn = (filteredOrders, onEdit) => {
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
      name: "customerName",
      label: "Cliente",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "serviceTypeName",
      label: "Tipo de Servicio",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const serviceType = filteredOrders[dataIndex];
          return (
            <ServiceTypeChip
              serviceTypeId={serviceType.serviceTypeId}
              serviceTypeName={serviceType.serviceTypeName}
            />
          );
        },
      },
    },
    {
      name: "routeName",
      label: "Ruta",
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
                <AssignmentTurnedInIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useOrderTruckTableColumn;
