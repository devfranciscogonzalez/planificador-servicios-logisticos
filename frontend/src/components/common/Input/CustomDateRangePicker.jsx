import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Controller } from "react-hook-form";

// Configura dayjs con el plugin y la localización
dayjs.extend(customParseFormat);
dayjs.locale("es");

const CustomDateRangePicker = ({
  control,
  startDateName,
  endDateName,
  watch,
  verifiedRates,
  disabled,
}) => {
  // Ajusta 'verifiedRates' para definir rangos de fechas deshabilitados (inclusivos)
  const isDateDisabled = (date) => {
    if (!verifiedRates) {
      return false;
    }

    return verifiedRates.some((range) => {
      const start = dayjs(range.start_date);
      const end = dayjs(range.end_date);
      return (
        (date.isAfter(start) || date.isSame(start, "day")) &&
        (date.isBefore(end) || date.isSame(end, "day"))
      );
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Controller
            name={startDateName}
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Fecha de Inicio"
                shouldDisableDate={isDateDisabled}
                disabled={disabled}
              />
            )}
          />
        </Grid>
        <Grid xs={6}>
          <Controller
            name={endDateName}
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Fecha de Fin"
                minDate={
                  watch(startDateName) ? dayjs(watch(startDateName)) : null
                }
                shouldDisableDate={isDateDisabled}
                disabled={!watch(startDateName)}
              />
            )}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;
