import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { titlesByRoute } from "../../../constants/mappingObject";
import MenuAppBar from "../../../features/auth/components/MenuAppBar";
import useAuth from "../../../features/auth/hooks/useAuth";
import { getRoleNavigationItems } from "../../../utils/navigationUtil";
import Logo from "../Logo/Logo";
import { AppBar, Drawer } from "./DrawerBar.styles";

export default function DrawerBar({ toggleDrawer, open }) {
  
  const location = useLocation();
  const titles = titlesByRoute[location.pathname] || "Mi Aplicación";
  const { user, logout } = useAuth();
  const roleBasedNavigation = getRoleNavigationItems(user.role);

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1, pl: "24px" }}
          >
            {titles}
          </Typography>
          <MenuAppBar logout={logout} user={user} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: "6px",
            gap: 1,
          }}
        >
          <Logo color="azul" />
          <IconButton onClick={toggleDrawer} sx={{ p: 0 }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav">{roleBasedNavigation}</List>
      </Drawer>
    </>
  );
}
