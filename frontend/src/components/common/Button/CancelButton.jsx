import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

const defaultCancelIcon = <CancelIcon />;

const CancelButton = ({
  label = "Cancelar",
  type = "button",
  onClick,
  startIcon = defaultCancelIcon,
  isPending = false,
  sx = {},
}) => {
  return (
    <Button
      type={type}
      variant="outlined"
      color="primary"
      onClick={onClick}
      startIcon={startIcon}
      disabled={isPending}
      fullWidth
      sx={{ ...sx }}
    >
      {label}
    </Button>
  );
};

export default CancelButton;
