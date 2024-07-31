import { IconButton } from "@mui/material";

const CustomIconButton = ({ children, ...props }) => (
  <IconButton
    {...props}
    sx={{
      "&:hover svg": {
        color: "primary.main",
      },
    }}
  >
    {children}
  </IconButton>
);

export default CustomIconButton;
