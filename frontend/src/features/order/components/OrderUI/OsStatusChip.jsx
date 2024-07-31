import { Chip } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const OsStatusChip = ({ enabled, sx }) => {
  const chipColor = enabled ? "success" : "default";
  const label = enabled ? "Confirmarmado" : "Rechazado";
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
