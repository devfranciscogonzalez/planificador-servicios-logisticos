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

const UserAvatar = ({ name, roleId, sx }) => {
  const avatarColor = ROLE_COLORS[roleId] || "grey";
  return (
    <Avatar sx={{ ...sx, bgcolor: avatarColor }}>{getInitials(name)}</Avatar>
  );
};

export default UserAvatar;
