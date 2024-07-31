import { Box, Paper } from "@mui/material";

const PaperComponent = ({ children, relativePosition }) => {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        p: 2,
        position: relativePosition ? "relative" : "initial",
        bgcolor: "background",
      }}
    >
      <Box component="article" mt={4}>
        {children}
      </Box>
    </Paper>
  );
};

export default PaperComponent;
