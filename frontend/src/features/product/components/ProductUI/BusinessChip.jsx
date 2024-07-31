import { Chip } from "@mui/material";
import { BUSINESS_COLORS } from "../../constants/productBusiness";

const BusinessChip = ({ businessId, businessName, sx }) => {
  const chipColor = BUSINESS_COLORS[businessId];

  return (
    <Chip
      label={businessName}
      size="small"
      sx={{
        ...sx,
        backgroundColor: chipColor,
        color: "white",
      }}
    />
  );
};

export default BusinessChip;
