import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

const CustomTextField = ({
  name,
  label,
  type,
  control,
  maxLength = 255,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(0);

  const renderEndAdornment = (isDirty, error) => {
    return error ? (
      <ErrorOutlineIcon sx={{ color: "error.main" }} />
    ) : isDirty ? (
      <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
    ) : null;
  };

  const renderHelperText = (isDirty, error, charCount) => {
    const charCountText = `${charCount}/${maxLength} caracteres`;
    return error ? error.message : isDirty ? "Correcto - " + charCountText : "";
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, isDirty } }) => (
        <TextField
          {...field}
          onChange={(e) => {
            setCharCount(e.target.value.length);
            field.onChange(e);
          }}
          id={name}
          label={label}
          variant="outlined"
          type={type}
          fullWidth
          error={!!error}
          autoComplete={name}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {renderEndAdornment(isDirty, error)}
              </InputAdornment>
            ),
          }}
          helperText={renderHelperText(isDirty, error, charCount)}
          FormHelperTextProps={{
            sx: {
              color: isDirty && !error ? "primary.main" : "error.main",
            },
          }}
          {...rest}
        />
      )}
    />
  );
};

export default CustomTextField;
