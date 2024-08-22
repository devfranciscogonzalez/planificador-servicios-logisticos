import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Chip } from "@mui/material";

const OsStatusChip = ({ enabled, sx }) => {
  const chipColor = enabled ? "success" : "default";
  const label = enabled ? "Confirmado" : "Rechazado";
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

export default OsStatusChip;
