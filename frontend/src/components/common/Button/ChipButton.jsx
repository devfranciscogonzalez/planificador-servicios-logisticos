import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Chip } from "@mui/material";

const defaultIcon = <AddCircleIcon />;

const ChipButton = ({
  label = "clickable",
  color = "default",
  variant = "outlined",
  onClick,
  icon = defaultIcon,
}) => {
  return (
    <Chip
      label={label}
      color={color}
      variant={variant}
      onClick={onClick}
      icon={icon}
      sx={{
        marginLeft: "6px",
        borderRadius: "4px",
        "& .MuiChip-icon": {
          opacity: "0.9",
        },
        "&:hover": {
          color: "primary.main",
          "& .MuiChip-icon": {
            color: "primary.main",
          },
        },
      }}
    />
  );
};

export default ChipButton;
