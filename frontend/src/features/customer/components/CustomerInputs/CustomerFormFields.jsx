import Grid from "@mui/material/Unstable_Grid2";
import {
  CustomImageUpload,
  CustomSwitch,
  CustomTextField,
} from "../../../../components/common";

const CustomerFormFields = ({ control }) => {
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
    </>
  );
};

export default CustomerFormFields;
