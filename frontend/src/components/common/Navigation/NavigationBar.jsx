import { AppBar, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";

const NavigationBar = () => (
  <AppBar
    position="static"
    sx={(theme) => ({
      [theme.breakpoints.down("sm")]: {
        p: "3px 0",
      },
    })}
  >
    <Toolbar sx={{ px: 2 }} disableGutters>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default NavigationBar;
