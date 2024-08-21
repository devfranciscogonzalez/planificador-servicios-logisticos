import MaximizeIcon from "@mui/icons-material/Maximize";
import MinimizeIcon from "@mui/icons-material/Minimize";
import {
  Alert,
  AlertTitle,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../../utils/storage";
import { ACCOUNTS } from "../../constants/userAccounts";

const UserInfoAlert = () => {
  const [open, setOpen] = useState(() =>
    getFromLocalStorage("openInfoUser", true)
  );

  useEffect(() => {
    setToLocalStorage("openInfoUser", open);
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Alert
        severity="info"
        action={
          <IconButton
            aria-label="close"
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
        <AlertTitle>Información sobre el inicio de sesión</AlertTitle>
        <Typography
          variant="subtitle1"
          component="span"
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={handleToggle}
        >
          Puedes utilizar los siguientes usuarios para iniciar sesión en la
          aplicación:
        </Typography>
        {open && (
          <List dense={true}>
            {ACCOUNTS.map((account, index) => (
              <div key={index}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemText
                    primary={account.role}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          Email: {account.email}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          Contraseña: {account.password}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        )}
      </Alert>
    </Box>
  );
};

export default UserInfoAlert;
