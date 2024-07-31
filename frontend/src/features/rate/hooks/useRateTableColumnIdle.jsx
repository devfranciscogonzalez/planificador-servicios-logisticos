import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import PriceChip from "../components/RateUI/PriceChip";

const useRateTableColumnIdle = (rates) => {
  const columns = [
    {
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          const rate = rates[dataIndex];
          return <UserAvatar name={rate.userName} roleId={rate.roleId} />;
        },
      },
    },
    {
      name: "code",
      label: "Codigo",
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
      name: "serviceName",
      label: "Servicio",
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
          const serviceType = rates[dataIndex];
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
      name: "productName",
      label: "Producto",
      options: {
        filter: false,
        sort: true,
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
      name: "price",
      label: "Precio",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const rate = rates[dataIndex];
          return <PriceChip price={rate.price} currency={rate.currency} />;
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
  ];

  return columns;
};

export default useRateTableColumnIdle;
