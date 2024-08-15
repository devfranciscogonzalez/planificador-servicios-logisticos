import { Paper } from "@mui/material";

const PaperComponent = ({ children, relativePosition }) => {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={(theme) => ({
        p: 2,
        position: relativePosition ? "relative" : "initial",
        bgcolor: "background",
        [theme.breakpoints.down("sm")]: {
          p: 1,
        },
      })}
    >
      {children}
    </Paper>
  );
};

export default PaperComponent;
