import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Controller } from "react-hook-form";

dayjs.extend(customParseFormat);
dayjs.locale("es");

const today = dayjs();

const CustomDatePicker = ({ control, name, label, disabled }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <Controller
        name={name}
        control={control}
        fullWidth
        render={({ field }) => (
          <DatePicker
            {...field}
            label={label}
            minDate={today}
            disabled={disabled}
            sx={{ width: "100%" }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
