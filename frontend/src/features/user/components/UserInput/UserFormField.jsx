import Grid from "@mui/material/Unstable_Grid2";
import CustomSelect from "../../../../components/common/Input/CustomSelect";
import CustomTextField from "../../../../components/common/Input/CustomTextField";
import CustomSwitch from "../../../../components/common/Input/CustomSwitch";

const UserFormField = ({ control, roles }) => {
  const renderTextField = (name, label, type) => (
    <Grid xs={12}>
      <CustomTextField
        name={name}
        label={label}
        type={type}
        control={control}
      />
    </Grid>
  );

  return (
    <>
      {renderTextField("name", "Nombre", "text")}
      {renderTextField("email", "Correo", "email")}
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="role_id"
          label="Rol"
          // autocomplete="username"
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
