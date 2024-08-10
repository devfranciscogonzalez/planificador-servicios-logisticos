import { Box, Container, Typography, Button } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="error" gutterBottom sx={{ mt: 2 }}>
          ¡Oops! Algo salió mal
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {error.statusText || error.message || "Ruta no encontrada"}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ mt: 2 }}
        >
          Lo sentimos, pero no pudimos encontrar la página que estás buscando.
          Puede que la página haya sido movida o eliminada.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Volver a la página principal
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
