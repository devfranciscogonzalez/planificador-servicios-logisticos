import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import { Chip } from "@mui/material";
import { ROLE_COLORS } from "../../constants/userRoles";

const RoleChip = ({ roleId, roleName, sx }) => {
  const chipColor = ROLE_COLORS[roleId];
  const icon =
    roleId === 6 ? (
      <AdminPanelSettingsIcon color="inherit" />
    ) : (
      <PersonIcon color="inherit" />
    );
  return (
    <Chip
      label={roleName}
      size="small"
      icon={icon}
      sx={{
        ...sx,
        backgroundColor: chipColor,
        color: "white",
      }}
    />
  );
};

export default RoleChip;
