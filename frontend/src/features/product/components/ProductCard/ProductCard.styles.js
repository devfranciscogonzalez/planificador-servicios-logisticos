import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMore;