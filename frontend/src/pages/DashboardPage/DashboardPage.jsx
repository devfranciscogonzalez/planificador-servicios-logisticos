import { Divider, Typography } from "@mui/material";
import { PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import useAuth from "../../features/auth/hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth(); 
  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        <Typography variant="h6">
          Informe Planificación - {user?.name || "Usuario no disponible"}
        </Typography>
        <Divider />
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default DashboardPage;
