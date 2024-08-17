import Grid from "@mui/material/Unstable_Grid2";
import { CustomSelect, CustomTextField } from "../../../../components/common";

const ServiceFormFields = ({ control, serviceType }) => {
  return (
    <>
      <Grid xs={12}>
        <CustomTextField
          name="name"
          label="Nombre"
          maxLength={50}
          type="text"
          control={control}
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextField
          name="description"
          label="Descripción"
          maxLength={500}
          type="textarea"
          control={control}
          rows={3}
          multiline
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
        />
      </Grid>
    </>
  );
};

export default ServiceFormFields;
