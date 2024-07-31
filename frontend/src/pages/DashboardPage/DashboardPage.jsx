import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import useAuth from "../../features/auth/hooks/useAuth";
import PaperContainer from "../../components/common/Container/PaperContainer";
import { Box, Divider, Typography } from "@mui/material";

const DashboardPage = () => {
  const { user } = useAuth(); // Este hook debe devolver el estado de autenticación
  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        <Typography variant="h6">
          Informe Planificación - {user?.name || "Usuario no disponible"}
        </Typography>
        <Divider />
        <Box m={3}>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/f34d9b53-19df-44d2-80a1-84b2b2e23006/page/y2USC"
            style={{
              border: 0,
              minWidth: 800,
              minHeight: 600,
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              overflow: "hidden",
            }}
            allowFullScreen
          ></iframe>
        </Box>
      </PaperContainer>
    </AuthenticatedLayout>
    // <div>Dashboard de {isAuthenticated}</div>
  );
};

export default DashboardPage;
