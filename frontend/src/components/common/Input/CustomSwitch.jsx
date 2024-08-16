import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Switch,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Controller } from "react-hook-form";

const CustomSwitch = ({ name, label, control, ...rest }) => {
  return (
    <Grid xs={12}>
      <Paper variant="outlined" sx={{ p: "10px" }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">Estado</FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    id={name}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    color="success"
                    {...rest}
                  />
                }
                label={label}
              />
            </FormControl>
          )}
        />
      </Paper>
    </Grid>
  );
};

export default CustomSwitch;
