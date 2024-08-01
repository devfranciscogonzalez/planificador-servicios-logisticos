import Grid from "@mui/material/Unstable_Grid2";
import CustomSwitch from "../../../../components/common/Input/CustomSwitch";
import CustomTextField from "../../../../components/common/Input/CustomTextField";
import CustonImageUpload from "../../../../components/common/Input/CustonImageUpload";

const CustomerFormFields = ({ control }) => {
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
      <CustonImageUpload name="logo" control={control} />
      <CustomSwitch name="status" label="Habilitado" control={control} />
    </>
  );
};

export default CustomerFormFields;
