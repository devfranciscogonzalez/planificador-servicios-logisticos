import NavigationBar from "../common/Navigation/NavigationBar";
import { Box } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <Box component="section">
      <Box component="nav">
        <NavigationBar />
      </Box>
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
