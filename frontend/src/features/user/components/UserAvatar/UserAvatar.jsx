import { Avatar } from "@mui/material";
import { ROLE_COLORS } from "../../constants/userRoles";

const getInitials = (name) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

// Componente Avatar
const UserAvatar = ({ name, roleId, sx }) => {
  const avatarColor = ROLE_COLORS[roleId] || "grey"; // Color por defecto si el rol no está definido
  return (
    <Avatar sx={{ ...sx, bgcolor: avatarColor }}>{getInitials(name)}</Avatar>
  );
};

export default UserAvatar;
