import Grid from "@mui/material/Unstable_Grid2";
import { CustomTextField } from "../../../../components/common";

const renderPasswordField = (name, label, maxLength, control) => (
  <Grid xs={12}>
    <CustomTextField
      name={name}
      label={label}
      maxLength={maxLength}
      isAutoComplete={false}
      control={control}
      type="password"
    />
  </Grid>
);

const UserFormPasswordField = ({ control }) => {
  return (
    <>
      {renderPasswordField("password", "Contraseña", 20, control)}
      {renderPasswordField(
        "password_confirmation",
        "Confirmar Contraseña",
        20,
        control
      )}
    </>
  );
};

export default UserFormPasswordField;
