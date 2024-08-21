import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/system";
import { flujoPrincipal } from "../../assets/images";
import { PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import useAuth from "../../features/auth/hooks/useAuth";
import UserAvatar from "../../features/user/components/UserAvatar/UserAvatar";
import RoleChip from "../../features/user/components/UserUI/RoleChip";
import {
  ROLE_COLORS,
  ROLEFEATURES,
} from "../../features/user/constants/userRoles";
import useRoles from "../../features/user/hooks/useRoles";

const HomePage = () => {
  const { user } = useAuth();
  const { roles } = useRoles();
  console.log("roles", roles);
  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        <Typography variant="h6">
          Bienvenido a la aplicación: {user?.name || "Usuario no disponible"}
        </Typography>
        <Divider />
        {roles?.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}a-content`}
              id={`panel${item.id}a-header`}
              sx={{
                backgroundColor: ROLE_COLORS
                  ? alpha(ROLE_COLORS[item.id], 0.1)
                  : "default",
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
              {ROLEFEATURES[item.name] &&
                ROLEFEATURES[item.name].map((feature, index) => (
                  <Alert
                    key={index}
                    icon={<CheckIcon fontSize="inherit" />}
                    severity="success"
                    sx={{ background: "none", padding: "0 16px" }}
                  >
                    <Typography variant="body2">{feature}</Typography>
                  </Alert>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">Flujo principal de la aplicación</Typography>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemIcon>
                <Filter1Icon sx={{ color: ROLE_COLORS[1] }} />
              </ListItemIcon>
              <ListItemText
                primary="Creación Tarifa (Jefe Comercial)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter2Icon sx={{ color: ROLE_COLORS[2] }} />
              </ListItemIcon>
              <ListItemText
                primary="Planificación de Servicios (Customer Service)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter3Icon sx={{ color: ROLE_COLORS[2] }} />
              </ListItemIcon>
              <ListItemText
                primary="Ingreso de Patente (Customer Service)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter4Icon sx={{ color: ROLE_COLORS[3] }} />
              </ListItemIcon>
              <ListItemText
                primary="Registrar Ingreso (Portero)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter5Icon sx={{ color: ROLE_COLORS[4] }} />
              </ListItemIcon>
              <ListItemText
                primary="Romaneo de Ingreso (Romana)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter6Icon sx={{ color: ROLE_COLORS[5] }} />
              </ListItemIcon>
              <ListItemText
                primary="Confirmar/Rechazar Orden de Servicio (Supervisor)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter7Icon sx={{ color: ROLE_COLORS[4] }} />
              </ListItemIcon>
              <ListItemText
                primary="Romaneo de Salida (Romana)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Filter8Icon sx={{ color: ROLE_COLORS[3] }} />
              </ListItemIcon>
              <ListItemText
                primary="Salida de Transportista (Portero)"
                secondary="Sunt anim occaecat adipisicing consectetur ut tempor consectetur veniam tempor. Culpa officia minim fugiat eiusmod. Enim ipsum proident aliquip cupidatat voluptate. Fugiat non culpa amet culpa nisi ut. Ad laboris laboris occaecat in eiusmod mollit ipsum et. Eu non velit Lorem duis do ut aliqua quis. Adipisicing ad esse duis qui sunt reprehenderit incididunt sint sunt ullamco qui."
              />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 1,
            maxWidth: "900px",
          }}
        >
          <img
            src={flujoPrincipal}
            alt="Flujo principal de la aplicacion"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default HomePage;
