import Grid from "@mui/material/Unstable_Grid2";
import {
  CustomSelect,
  CustomSwitch,
  CustomTextField,
  CustomImageUpload,
} from "../../../../components/common";

const ProductFormFields = ({ control, businessType }) => {
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
      <CustomImageUpload name="logo" control={control} />
      <CustomSwitch name="status" label="Habilitado" control={control} />
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="business_id"
          label="Tipo de negocio"
          options={(businessType ?? []).map((b) => ({
            value: b.id,
            label: b.name,
          }))}
        />
      </Grid>
    </>
  );
};

export default ProductFormFields;
