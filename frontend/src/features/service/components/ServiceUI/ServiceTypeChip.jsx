import BeenhereIcon from "@mui/icons-material/Beenhere";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import { Chip } from "@mui/material";
import { SERVICE_TYPE_COLORS } from "../../constants/serviceType";

const getServiceTypeIcon = (serviceTypeId) => {
  switch (serviceTypeId) {
    case 1:
      return <LocalShippingIcon color="inherit" />;
    case 2:
      return <MoveUpIcon color="inherit" />;
    case 3:
      return <BeenhereIcon color="inherit" />;
    default:
      return null;
  }
};

const ServiceTypeChip = ({ serviceTypeId, serviceTypeName, sx }) => {
  const chipColor = SERVICE_TYPE_COLORS[serviceTypeId];

  return (
    <Chip
      label={serviceTypeName}
      icon={getServiceTypeIcon(serviceTypeId)}
      size="small"
      sx={{
        ...sx,
        backgroundColor: chipColor,
        color: "white",
      }}
    />
  );
};

export default ServiceTypeChip;
