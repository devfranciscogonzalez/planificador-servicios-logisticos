import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";

const defaultIcon = <AddCircleIcon />;

const CustomTableButton = ({ label = "Button", onClick }) => {
  return (
    <Button
      size="small"
      variant="outlined"
      onClick={onClick}
      aria-label={label}
      startIcon={defaultIcon}
      sx={{
        marginLeft: "6px",
        borderRadius: "4px",
        borderColor: "grey.700",
        color: "grey.700",
        "&:hover": {
          color: "primary.main",
          borderColor: "primary.main",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomTableButton;
