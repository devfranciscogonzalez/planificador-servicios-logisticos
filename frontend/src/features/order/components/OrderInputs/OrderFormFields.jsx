import Grid from "@mui/material/Unstable_Grid2";
import CustomDatePicker from "../../../../components/common/Input/CustomDatePicker";
import CustomSelect from "../../../../components/common/Input/CustomSelect";

const OrderFormFields = ({
  control,
  customers,
  serviceType,
  services,
  products,
  businessType,
  routes,
  planning,
  schedule,
}) => {
  return (
    <>
      <Grid xs={12}>
        <CustomDatePicker control={control} name={"date"} label={"Fecha"} />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="planning_id"
          label="Planificación"
          options={(planning ?? []).map((p) => ({
            value: p.id,
            label: p.name,
          }))}
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="schedule_id"
          label="Horario"
          options={(schedule ?? []).map((s) => ({
            value: s.id,
            label: s.name,
          }))}
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="customer_id"
          label="Cliente"
          options={(customers ?? []).map((c) => ({
            value: c.id,
            label: c.name,
          }))}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="service_type_id"
          label="Tipo de Servicio"
          options={(serviceType ?? []).map((s) => ({
            value: s.id,
            label: s.name,
          }))}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="service_id"
          label="Servicio"
          options={(services ?? []).map((s) => ({
            value: s.id,
            label: s.name,
          }))}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="product_id"
          label="Producto"
          options={(products ?? []).map((p) => ({
            value: p.id,
            label: p.name,
          }))}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="business_id"
          label="Tipo de Negocio"
          options={(businessType ?? []).map((b) => ({
            value: b.id,
            label: b.name,
          }))}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="route_id"
          label="Ruta"
          options={(routes ?? []).map((r) => ({
            value: r.id,
            label: r.name,
          }))}
          disabled
        />
      </Grid>
    </>
  );
};

export default OrderFormFields;
