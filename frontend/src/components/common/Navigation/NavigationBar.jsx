import { AppBar, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";

const NavigationBar = () => (
  <AppBar position="static" >
    <Toolbar sx={{ px: 2 }} disableGutters>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default NavigationBar;
