import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Controller } from "react-hook-form";
import useRate from "../../../rate/hooks/useRate";

const OrderCodeRate = ({ control }) => {
  const { rates } = useRate();
  const options =
    rates
      ?.filter((rate) => rate.status)
      .map((rate) => rate.code.toString()) || [];

  return (
    <Grid container spacing={2} p={1}>
      <Grid xs={12}>
        <Controller
          name="code"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              {...field}
              freeSolo
              options={options}
              getOptionLabel={(option) => option.toString()}
              onChange={(_, newValue) => field.onChange(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Código de Tarifa"
                  variant="outlined"
                  error={!!error}
                  helperText={error ? error.message : ""}
                />
              )}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default OrderCodeRate;
