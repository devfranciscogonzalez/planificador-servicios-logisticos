import NavigationBar from "../common/Navigation/NavigationBar";
import { Box } from "@mui/material";

export default function DefaultLayout({ children }) {
  return (
    <Box component="section">
      <Box component="nav">
        <NavigationBar />
      </Box>
      <Box component="main">{children}</Box>
    </Box>
  );
}
