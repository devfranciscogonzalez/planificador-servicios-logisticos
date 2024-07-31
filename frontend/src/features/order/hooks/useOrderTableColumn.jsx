import ArchiveIcon from "@mui/icons-material/Archive";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

import CustomIconButton from "../../../components/common/Button/CustomIconButton";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import StatusChip from "../../../components/ui/StatusChip";
import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import BusinessChip from "../../product/components/ProductUI/BusinessChip";
import TruckChip from "../components/OrderUI/TruckChip";
import WeightChip from "../components/OrderUI/WeightChip";
import ContainerChip from "../components/OrderUI/ContainerChip";

const useOrderTableColumn = (filteredOrders, onEdit, onMoveEnd) => {
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
      name: "code",
      label: "Código",
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
      name: "serviceName",
      label: "Servicio",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "productName",
      label: "Producto",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "bussinessName",
      label: "Tipo de Negocio",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const business = filteredOrders[dataIndex];
          return (
            <BusinessChip
              businessId={business.businessId}
              businessName={business.businessName}
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
      name: "status",
      label: "Estado",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const filteredOrderstatus = filteredOrders[dataIndex].status;
          return <StatusChip enabled={filteredOrderstatus} />;
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
      name: "entry",
      label: "Fecha de Ingreso",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "exit",
      label: "Fecha de Salida",
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
      name: "weightExit",
      label: "Peso de Salida",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const order = filteredOrders[dataIndex];
          return <WeightChip weight={order.weightExit} />;
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
                onClick={() => onEdit(filteredOrders[dataIndex])}
              >
                <EventRepeatIcon />
              </CustomIconButton>
              <CustomIconButton
                aria-label="delete"
                onClick={() => onMoveEnd(filteredOrders[dataIndex].id)}
              >
                <ArchiveIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useOrderTableColumn;
