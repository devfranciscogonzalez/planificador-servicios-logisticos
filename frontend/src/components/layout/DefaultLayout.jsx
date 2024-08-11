import NavigationBar from "../common/Navigation/NavigationBar";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import useAuth from "../../features/auth/hooks/useAuth";

export default function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/app/dashboard", { replace: true });
  }

  return (
    <Box component="section">
      <Box component="nav">
        <NavigationBar />
      </Box>
      <Box component="main">{children}</Box>
    </Box>
  );
}
