import { Box, CircularProgress, Typography } from "@mui/material";

function Loading({ message = "Cargando..." }) {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <Box sx={boxStyle}>
      <CircularProgress color="primary" size={50} thickness={5} />
      <Typography variant="h6" marginTop={2} color="primary">
        {message}
      </Typography>
    </Box>
  );
}

export default Loading;
