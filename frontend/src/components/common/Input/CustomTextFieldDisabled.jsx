import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomTextFieldDisabled = ({ name, label, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          helperText={"Correcto"}
          FormHelperTextProps={{
            style: { color: "#0070ba" },
          }}
          disabled
        />
      )}
    />
  );
};


export default CustomTextFieldDisabled;
