import Grid from "@mui/material/Unstable_Grid2";
import { CustomDateRangePicker, CustomSelect, CustomTextFieldNumber } from "../../../../components/common";
import { CURRENCIES_RATE } from "../../constants/rateCurrency";

const RateFormFields = ({ control, watch, verifiedRates }) => {
  const routeId = watch("route_id");
  const endDate = watch("end_date");

  return (
    <>
      <Grid xs={12}>
        <CustomDateRangePicker
          control={control}
          startDateName="start_date"
          endDateName="end_date"
          watch={watch}
          label="Rango de fechas"
          verifiedRates={verifiedRates}
          disabled={!routeId}
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="currency"
          label="Moneda"
          options={CURRENCIES_RATE}
          disabled={!endDate}
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextFieldNumber
          control={control}
          name="price"
          label="Precio"
          currency={watch("currency")}
          disabled={!endDate}
        />
      </Grid>
    </>
  );
};

export default RateFormFields;
