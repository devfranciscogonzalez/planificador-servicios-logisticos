import StatusChip from "../../../components/ui/StatusChip";
import BusinessChip from "../../product/components/ProductUI/BusinessChip";
import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import TruckChip from "../components/OrderUI/TruckChip";
import WeightChip from "../components/OrderUI/WeightChip";

const useOrderTableColumn = (filteredOrders) => {
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
      name: "rescheduledOsId",
      label: "ID Reprogramada",
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
  ];

  return columns;
};

export default useOrderTableColumn;
