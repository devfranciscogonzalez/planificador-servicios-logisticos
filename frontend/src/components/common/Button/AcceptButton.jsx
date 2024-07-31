import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, CircularProgress } from "@mui/material";

/**
 * @param label {string} - Texto del boton
 * @param type {string} - Tipo del boton, por defecto "submit
 * @param onClick {function} - Funcion que se ejecuta al hacer click en el boton
 * @param startIcon {JSX.Element} - Icono del boton
 * @param disabled {boolean} - Indica si el boton esta deshabilitado
 * @param sx {object} - Estilos del boton
 */

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
