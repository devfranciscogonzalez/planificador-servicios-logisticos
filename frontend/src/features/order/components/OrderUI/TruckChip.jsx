import { Chip } from "@mui/material";

const TruckChip = ({ truck_plate }) => {
  if (truck_plate == null) {
    return null;
  }

  const formattedPlate = truck_plate ? truck_plate.split("-").join(" · ") : " ";

  return (
    <Chip
      label={formattedPlate}
      size="small"
      variant="outlined"
      sx={{
        borderRadius: 0,
        borderColor: "black",
        fontWeight: "bold",
        minWidth: "100px",
      }}
    />
  );
};

export default TruckChip;
