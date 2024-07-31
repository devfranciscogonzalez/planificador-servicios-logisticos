import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const OverlayLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Box
      component={"div"}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 2,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default OverlayLoader;
