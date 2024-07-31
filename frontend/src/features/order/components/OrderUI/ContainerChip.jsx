import { Chip } from "@mui/material";

const ContainerChip = ({ container }) => {
  if (container == null) {
    return null;
  }

  return (
    <Chip
      label={container}
      size="small"
      variant="outlined"
      sx={{
        borderRadius: 0,
        borderColor: "black",
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        minWidth: "100px",
        letterSpacing: "2px",
      }}
    />
  );
};

export default ContainerChip;
