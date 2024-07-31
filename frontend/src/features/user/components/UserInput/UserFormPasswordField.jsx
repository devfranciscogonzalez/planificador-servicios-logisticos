import Grid from "@mui/material/Unstable_Grid2";
import CustomTextField from "../../../../components/common/Input/CustomTextField";

const renderPasswordField = (name, label, control) => (
  <Grid xs={12}>
    <CustomTextField
      name={name}
      label={label}
      control={control}
      type="password"
      // autoComplete="new-password"
    />
  </Grid>
);

const UserFormPasswordField = ({ control }) => {
  return (
    <>
      {renderPasswordField("password", "Contraseña", control)}
      {renderPasswordField(
        "password_confirmation",
        "Confirmar Contraseña",
        control
      )}
    </>
  );
};

export default UserFormPasswordField;
