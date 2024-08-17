import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CustomSelect = ({ name, label, options, control, disabled, ...rest }) => {
  const renderHelperText = (isDirty, error) => {
    return error ? error.message : isDirty ? "Correcto" : "";
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, isDirty } }) => (
        <FormControl fullWidth error={!!error} disabled={disabled}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...field}
            labelId={`${name}-label`}
            id={`${name}-select`}
            label={label}
            autoComplete="off"
            sx={{
              "& .MuiSelect-icon": {
                color: error
                  ? "error.main"
                  : isDirty
                  ? "primary.main"
                  : "action.active",
              },
            }}
            {...rest}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText
            sx={{
              color: isDirty && !error ? "primary.main" : "error.main",
            }}
          >
            {renderHelperText(isDirty, error)}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default CustomSelect;
