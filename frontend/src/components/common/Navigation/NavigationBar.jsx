import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../Logo/Logo";

const NavigationBar = ({ children }) => (
  <AppBar position="static">
    <Toolbar>
      <Box flexGrow={1}>
        <Logo />
      </Box>
      {children}
    </Toolbar>
  </AppBar>
);

export default NavigationBar;
