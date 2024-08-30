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
import { PaperContainer, LoadingSkeleton } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import useAuth from "../../features/auth/hooks/useAuth";
import UserAvatar from "../../features/user/components/UserAvatar/UserAvatar";
import RoleChip from "../../features/user/components/UserUI/RoleChip";
import {
  ROLE_COLORS,
  ROLEFEATURES,
} from "../../features/user/constants/userRoles";
import useRoles from "../../features/user/hooks/useRoles";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const HomePage = () => {
  const { user } = useAuth();
  const { roles, isLoading } = useRoles();

  return (
    <AuthenticatedLayout>
      <PaperContainer>
        <Typography variant="h4" sx={{ color: "primary.main" }} gutterBottom>
          Bienvenido: {user?.name || "Usuario no disponible"}
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "lg",
            margin: "auto",
          }}
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <Typography variant="h6" sx={{ marginTop: 2 }} gutterBottom>
                Roles y funcionalidades
              </Typography>
              <Typography variant="body1" gutterBottom>
                ¿Alguna vez te has preguntado qué funciones realiza cada miembro
                del equipo? A continuación, se detallan las responsabilidades y
                funciones específicas asignadas a cada rol dentro de la
                organización.
              </Typography>

              {roles?.map((role) => (
                <Accordion key={role.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${role.id}a-content`}
                    id={`panel${role.id}a-header`}
                    sx={{
                      backgroundColor: alpha(ROLE_COLORS[role.id], 0.1),
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: ROLE_COLORS[role.id],
                      }}
                    >
                      <UserAvatar name={role.name} roleId={role.id} />
                      {role.name}
                      <RoleChip roleName={role.name} roleId={role.id} />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: alpha(ROLE_COLORS[role.id], 0.1),
                    }}
                  >
                    {ROLEFEATURES[role.name]?.map((feature, index) => (
                      <Alert
                        key={index}
                        icon={<CheckIcon fontSize="inherit" />}
                        severity="success"
                        sx={{ background: "none", padding: "0 16px" }}
                      >
                        <Typography variant="body1">{feature}</Typography>
                      </Alert>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}

              <Typography variant="h6" sx={{ marginTop: 2 }} gutterBottom>
                Flujo principal
              </Typography>
              <Typography variant="body1" gutterBottom>
                ¿Estás listo para descubrir el flujo principal de trabajo? A
                continuación, se detalla el flujo operativo principal,
                destacando los pasos clave que cada rol desempeña en el proceso.
              </Typography>
              <List>
                <FlujoItem
                  icon={<Filter1Icon sx={{ color: ROLE_COLORS[1] }} />}
                  primary="Creación Tarifa (Jefe Comercial)"
                  secondary="La creación de una nueva tarifa se realiza en el apartado Tarifas / Nueva Tarifa. Al completar el formulario de creación, se selecciona el cliente correspondiente. Luego, se agrega el tipo de servicio, lo que permite seleccionar los servicios vinculados al tipo de servicio elegido. Posteriormente, se indica el producto, el cual automáticamente muestra su tipo de negocio asociado. A continuación, se selecciona la ruta, escogiendo entre las ya registradas. Una vez completado el formulario, se verifica que todo esté correcto y se procede a la creación de la tarifa, especificando la fecha de inicio y fin, junto con el precio. Finalmente, se realiza una última revisión para asegurarse de que todo esté en orden."
                />
                <FlujoItem
                  icon={<Filter2Icon sx={{ color: ROLE_COLORS[2] }} />}
                  primary="Planificación de Servicios (Customer Service)"
                  secondary="Con una tarifa vigente, se puede acceder al apartado Orden de Servicio / Nueva Orden de Servicio. Allí se encuentra el formulario de creación de la OS. Se ingresa un código de tarifa válido, lo que permite acceder al formulario para crear la OS, indicando la fecha, planificación y horario. Los demás datos necesarios se extraen de la tarifa vigente asociada al código. Después de una revisión final, si todo es correcto, se acepta y se crea la OS."
                />
                <FlujoItem
                  icon={<Filter3Icon sx={{ color: ROLE_COLORS[2] }} />}
                  primary="Ingreso de Patente (Customer Service)"
                  secondary="Cuando se recibe la información del camión asignado para cumplir la OS, se ingresa la patente en el apartado Ingresar Patente. En este formulario, se completa el campo de la patente del camión en el formato XX-XX-XX."
                />
                <FlujoItem
                  icon={<Filter4Icon sx={{ color: ROLE_COLORS[3] }} />}
                  primary="Registrar Ingreso (Portero)"
                  secondary="En el apartado OS Ingreso, se registra el ingreso del camión a las instalaciones. Es importante destacar que solo se pueden registrar las OS del día y aquellas que tienen una patente de camión asignada. El portero deberá verificar que la información coincida con el camión."
                />
                <FlujoItem
                  icon={<Filter5Icon sx={{ color: ROLE_COLORS[4] }} />}
                  primary="Romaneo de Ingreso (Romana)"
                  secondary="El camión que ingresa a las instalaciones debe pasar por la romana, donde se registra el peso en el apartado OS Ingreso Peso. En este apartado, se pueden visualizar los camiones que han ingresado a las instalaciones."
                />
                <FlujoItem
                  icon={<Filter6Icon sx={{ color: ROLE_COLORS[5] }} />}
                  primary="Confirmar/Rechazar Orden de Servicio (Supervisor)"
                  secondary="Una vez que el camión ha ingresado y ha sido pesado, el supervisor confirma la OS en el apartado OS Confirmación. Si todo está correcto, se puede confirmar; de lo contrario, se rechaza. Opcionalmente, se pueden agregar un comentario y, si es necesario, se puede indicar el número de contenedor."
                />
                <FlujoItem
                  icon={<Filter7Icon sx={{ color: ROLE_COLORS[4] }} />}
                  primary="Romaneo de Salida (Romana)"
                  secondary="El camión que sale de las instalaciones debe pasar nuevamente por la romana, donde se registra el peso en el apartado OS Salida Peso. Aquí se pueden visualizar los camiones que están saliendo de las instalaciones, que ya ingresaron, fueron pesados y cuya OS fue aceptada o rechazada por el supervisor."
                />
                <FlujoItem
                  icon={<Filter8Icon sx={{ color: ROLE_COLORS[3] }} />}
                  primary="Salida de Transportista (Portero)"
                  secondary="En el apartado OS Salida, se registra la salida del camión de las instalaciones."
                />
              </List>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "md",
                    padding: 1,
                    margin: "auto",
                    border: 1,
                    borderColor: "primary.main",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      color: "primary.main",
                      textDecoration: "underline",
                    }}
                  >
                    Flujo principal
                  </Typography>
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "md",
                    width: "100%",
                    padding: 1,
                    margin: "auto",
                    border: 1,
                    borderColor: "red",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      color: "red",
                      textDecoration: "underline",
                    }}
                  >
                    Flujo principal - Video
                  </Typography>
                  <LiteYouTubeEmbed
                    id="yEZx7CkEmbE"
                    title="Demostración Completa del Sistema Web Planificador de Servicios Logísticos"
                  />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

const FlujoItem = ({ icon, primary, secondary }) => (
  <ListItem>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={primary} secondary={secondary} />
  </ListItem>
);

export default HomePage;
