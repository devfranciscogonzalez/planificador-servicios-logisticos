import { AppBar, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";

const NavigationBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default NavigationBar;
