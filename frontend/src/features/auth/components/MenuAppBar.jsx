import Logout from "@mui/icons-material/Logout";
import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import LogoutDialog from "./LogoutDialog";
import UserAvatar from "../../user/components/UserAvatar/UserAvatar";
import { Link } from "react-router-dom";

const MenuAppBar = ({ logout, user }) => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleOpenLogoutDialog = () => {
    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Abrir menu">
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <UserAvatar name={user.name} roleId={user.role_id} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          // overflow: "auto",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          ".MuiPaper-root": {
            elevation: 0,
            overflow: "visible",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/app/profile">
          <ListItemIcon>
            <UserAvatar name={user.name} roleId={user.role_id} />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={handleOpenLogoutDialog}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
      <LogoutDialog
        logout={logout}
        open={isLogoutDialogOpen}
        handleToggleDialog={handleOpenLogoutDialog}
      />
    </Box>
  );
};

export default MenuAppBar;
