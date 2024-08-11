import NavigationBar from "../common/Navigation/NavigationBar";

import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";

export default function DefaultLayout({ children }) {
  return (
    <Box component="section">
      <Box component="nav">
        <NavigationBar>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<AccountCircleIcon />}
          >
            Acceder
          </Button>
        </NavigationBar>
      </Box>
      <Box component="main">{children}</Box>
    </Box>
  );
}
