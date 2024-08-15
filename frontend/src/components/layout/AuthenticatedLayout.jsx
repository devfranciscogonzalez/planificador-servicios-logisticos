import { Box, Container } from "@mui/material";
import { useDrawer } from "../../hooks/useDrawer";
import DrawerBar from "../common/Navigation/DrawerBar";

const AuthenticatedLayout = ({ children }) => {
  const { drawerOpen, toggleDrawer } = useDrawer();

  return (
    <Box component="section" sx={{ display: "flex" }}>
      <DrawerBar toggleDrawer={toggleDrawer} open={drawerOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          my: 10,
          boxSizing: "content-box",
          overflow: "auto",
        }}
      >
        <Container
          maxWidth="false"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              px: 1,
            },
          })}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AuthenticatedLayout;
