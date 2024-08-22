import MaximizeIcon from "@mui/icons-material/Maximize";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Alert, AlertTitle, Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../../utils/storage";

const UserInfoRestrictionAlert = () => {
  const [open, setOpen] = useState(() =>
    getFromLocalStorage("openUserRestrictionInfo", true)
  );

  useEffect(() => {
    setToLocalStorage("openUserRestrictionInfo", open);
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="toggle"
            color="inherit"
            size="small"
            onClick={handleToggle}
          >
            {open ? (
              <MinimizeIcon fontSize="inherit" />
            ) : (
              <MaximizeIcon fontSize="inherit" />
            )}
          </IconButton>
        }
        sx={{ width: "100%" }}
      >
        <AlertTitle>Restricción en la Demo</AlertTitle>
        {open && (
          <Typography variant="subtitle1">
            Las funcionalidades de edición y eliminación de usuarios están
            desactivadas en esta demo. Para probar la funcionalidad completa,
            por favor regístrate con un nuevo usuario.
          </Typography>
        )}
      </Alert>
    </Box>
  );
};

export default UserInfoRestrictionAlert;
