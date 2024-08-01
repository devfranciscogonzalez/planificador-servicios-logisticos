import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, CircularProgress } from "@mui/material";

const defaultAcceptIcon = <CheckCircleIcon />;

const AcceptButton = ({
  label = "Aceptar",
  type = "submit",
  onClick,
  startIcon = defaultAcceptIcon,
  isPending = false,
  fullWidth = true,
  sx = {},
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant="contained"
      color={"primary"}
      onClick={onClick}
      startIcon={isPending ? <CircularProgress size={24} /> : startIcon}
      disabled={isPending}
      sx={{
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default AcceptButton;
