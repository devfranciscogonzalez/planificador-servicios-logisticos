import { Chip } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const StatusChip = ({ enabled, sx }) => {
  
  const chipColor = enabled ? "success" : "default";
  const label = enabled ? "Habilitado" : "Deshabilitado";
  const icon = enabled ? <ThumbUpOffAltIcon /> : <ThumbDownOffAltIcon />;
  return (
    <Chip
      label={label}
      color={chipColor}
      icon={icon}
      size="small"
      sx={{ ...sx }}
    />
  );
};

export default StatusChip;
