import Grid from "@mui/material/Unstable_Grid2";
import {
  CustomSelect,
  CustomSwitch,
  CustomTextField,
} from "../../../../components/common";

const UserFormField = ({ control, roles }) => {
  const renderTextField = (name, label, type, maxLength) => (
    <Grid xs={12}>
      <CustomTextField
        name={name}
        label={label}
        type={type}
        maxLength={maxLength}
        control={control}
      />
    </Grid>
  );

  return (
    <>
      {renderTextField("name", "Nombre", "text", 50)}
      {renderTextField("email", "Correo", "email", 50)}
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="role_id"
          label="Rol"
          options={(roles ?? []).map((r) => ({
            value: r.id,
            label: r.name,
          }))}
        />
      </Grid>
      <CustomSwitch name="status" label="Habilitado" control={control} />
    </>
  );
};

export default UserFormField;
