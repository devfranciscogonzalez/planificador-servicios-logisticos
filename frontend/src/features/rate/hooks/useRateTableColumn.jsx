import AutorenewIcon from "@mui/icons-material/Autorenew";
import { CustomIconButton } from "../../../components/common";
import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import PriceChip from "../components/RateUI/PriceChip";

const useRateTableColumn = (currentRates, onEdit) => {
  const columns = [
    {
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          const rate = currentRates[dataIndex];
          return <UserAvatar name={rate.userName} roleId={rate.roleId} />;
        },
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
          const serviceType = currentRates[dataIndex];
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
          const rate = currentRates[dataIndex];
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
    {
      name: "actions",
      label: "Acción",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <CustomIconButton
              aria-label="edit"
              onClick={() => onEdit(currentRates[dataIndex].id)}
            >
              <AutorenewIcon />
            </CustomIconButton>
          );
        },
      },
    },
  ];

  return columns;
};

export default useRateTableColumn;
