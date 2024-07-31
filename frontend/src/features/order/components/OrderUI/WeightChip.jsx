import { Chip } from "@mui/material";

const WeightChip = ({ weight }) => {
  if (weight == null) {
    return null;
  }
  return (
    <Chip
      label={`${weight} kg`}
      size="small"
      sx={{
        backgroundColor: "lightGreen",
        borderRadius: 2,
        fontWeight: "bold",
      }}
    />
  );
};

export default WeightChip;
