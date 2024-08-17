import ScaleIcon from "@mui/icons-material/Scale";
import { CustomIconButton } from "../../../components/common";
import ServiceTypeChip from "../../service/components/ServiceUI/ServiceTypeChip";
import TruckChip from "../components/OrderUI/TruckChip";

const useOrderWeightInputTableColumn = (filteredOrders, onEdit) => {
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "truckPlate",
      label: "Patente del Camión",
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
      name: "date",
      label: "Fecha",
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
              onClick={() => onEdit(filteredOrders[dataIndex].id)}
            >
              <ScaleIcon />
            </CustomIconButton>
          );
        },
      },
    },
  ];

  return columns;
};

export default useOrderWeightInputTableColumn;
