import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import { OverlayLoader } from "../../../../components/common";
import useService from "../../../service/hooks/useService";
import useUser from "../../../user/hooks/useUser";

const CheckRate = ({ watch, customers, serviceType, products, routes }) => {
  
  const { services, isLoading: isLoadingService } = useService();
  const { users, isLoading: isLoadingUsers } = useUser();
  
  const formData = watch(); // Obtiene todos los valores a la vez

  const findSelected = (items, id) =>
    items?.find((item) => item.id === id)?.name || "No seleccionado";

  const formatFecha = (fecha) =>
    fecha ? dayjs(fecha).format("DD/MM/YYYY") : "No seleccionado";

  const InfoLine = ({ label, value }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 1,
      }}
    >
      <Typography variant="body1">{label}:</Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );

  return (
    <Box position="relative" p={1}>
      <OverlayLoader isLoading={isLoadingService || isLoadingUsers} />
      <InfoLine
        label="Cliente"
        value={findSelected(customers, formData.customer_id)}
      />
      <InfoLine
        label="Tipo de Servicio"
        value={findSelected(serviceType, formData.service_type_id)}
      />
      <InfoLine
        label="Servicio"
        value={findSelected(services, formData.service_id)}
      />
      <InfoLine
        label="Producto"
        value={findSelected(products, formData.product_id)}
      />
      <InfoLine label="Ruta" value={findSelected(routes, formData.route_id)} />
      <InfoLine
        label="Fecha de Inicio"
        value={formatFecha(formData.start_date)}
      />
      <InfoLine label="Fecha de Fin" value={formatFecha(formData.end_date)} />
      <InfoLine
        label="Estado"
        value={formData.status ? "Activo" : "Inactivo"}
      />
      <InfoLine
        label="Precio"
        value={formData.price ? formData.price : "No seleccionado"}
      />
      <InfoLine label="Moneda" value={formData.currency} />

      <Divider />
      <Box sx={{ backgroundColor: "primary.main", color: "white", p: 1 }}>
        <InfoLine
          label="Usuario"
          value={findSelected(users, formData.user_id)}
        />
        <InfoLine
          label="Email"
          value={
            users?.find((u) => u.id === formData.user_id)?.email ||
            "No seleccionado"
          }
        />
        <InfoLine
          label="Rol"
          value={
            users?.find((u) => u.id === formData.user_id)?.roleName ||
            "No seleccionado"
          }
        />
      </Box>
    </Box>
  );
};

export default CheckRate;
