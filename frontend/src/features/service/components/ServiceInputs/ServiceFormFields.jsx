import Grid from "@mui/material/Unstable_Grid2";
import CustomTextField from "../../../../components/common/Input/CustomTextField";
import CustomSelect from "../../../../components/common/Input/CustomSelect";

const CustomerFormFields = ({ control, serviceType }) => {
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

export default CustomerFormFields;
