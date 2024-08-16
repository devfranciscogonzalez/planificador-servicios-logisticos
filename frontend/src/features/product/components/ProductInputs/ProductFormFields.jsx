import Grid from "@mui/material/Unstable_Grid2";
import {
  CustomSelect,
  CustomSwitch,
  CustomTextField,
  CustomImageUpload,
} from "../../../../components/common";

const ProductFormFields = ({ control, businessType }) => {
  const renderTextField = (name, label, type) => (
    <Grid xs={12}>
      <CustomTextField
        name={name}
        label={label}
        type={type}
        control={control}
        multiline
      />
    </Grid>
  );

  return (
    <>
      {renderTextField("name", "Nombre", "text")}
      {renderTextField("description", "Descripción", "textarea")}
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
