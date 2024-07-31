import Grid from "@mui/material/Unstable_Grid2";
import CustomTextField from "../../../../components/common/Input/CustomTextField";
import CustomSelect from "../../../../components/common/Input/CustomSelect";
import CustomDropzoneArea from "../../../../components/common/Input/CustomDropzoneArea";
import CustomSwitch from "../../../../components/common/Input/CustomSwitch";

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
      <CustomDropzoneArea name="logo" control={control} />
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
