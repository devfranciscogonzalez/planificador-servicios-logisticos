import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";

const defaultIcon = <AddCircleIcon aria-hidden="false" focusable="true" />;

const CustomTableButton = ({
  label = "Button",
  color = "default",
  variant = "outlined",
  onClick,
  icon = defaultIcon,
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      startIcon={icon}
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
    >
      {label}
    </Button>
  );
};

export default CustomTableButton;
