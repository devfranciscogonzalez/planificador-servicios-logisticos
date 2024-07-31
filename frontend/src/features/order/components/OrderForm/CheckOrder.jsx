import { Box, Divider, Typography } from "@mui/material";
import useService from "../../../service/hooks/useService";
// import useUser from "../../../user/hooks/useUser";
import dayjs from "dayjs";
import useUser from "../../../user/hooks/useUser";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";

const CheckOrder = ({
  watch,
  customers,
  serviceType,
  products,
  businessType,
  routes,
}) => {
  const { services, isLoading: isLoadingService } = useService();
  const { users, isLoading: isLoadingUsers } = useUser();

  const formData = watch();

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
      <InfoLine label="Codigo Tarifa" value={formData.code} />
      <InfoLine label="Fecha" value={formatFecha(formData.date)} />
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
      <InfoLine
        label="Tipo de Negocio"
        value={findSelected(businessType, formData.business_id)}
      />

      <InfoLine label="Ruta" value={findSelected(routes, formData.route_id)} />

      <InfoLine
        label="Estado"
        value={formData.status ? "Activo" : "Inactivo"}
      />
      <InfoLine
        label="Comentario"
        value={formData.comment ? formData.comment : "No completado"}
      />

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

export default CheckOrder;
