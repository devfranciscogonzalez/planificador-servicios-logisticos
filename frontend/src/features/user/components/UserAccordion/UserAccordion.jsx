import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/system";
import { ROLE_COLORS } from "../../constants/userRoles";
import useRoles from "../../hooks/useRoles";
import UserAvatar from "../UserAvatar/UserAvatar";
import RoleChip from "../UserUI/RoleChip";

const UserAccordion = () => {
  const { roles } = useRoles();
  return (
    <>
      {roles?.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
            sx={{
              backgroundColor: ROLE_COLORS
                ? alpha(ROLE_COLORS[item.id], 0.1)
                : "background.default",
            }}
          >
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: ROLE_COLORS ? ROLE_COLORS[item.id] : "default",
              }}
            >
              <UserAvatar name={item.name} roleId={item.id} />
              {item.name}
              <RoleChip roleName={item.name} roleId={item.id} />
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: ROLE_COLORS
                ? alpha(ROLE_COLORS[item.id], 0.1)
                : "default",
            }}
          >
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UserAccordion;
