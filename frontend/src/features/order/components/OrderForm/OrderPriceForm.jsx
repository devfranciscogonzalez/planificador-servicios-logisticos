import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomTextFieldPrice from "../../../../components/common/Input/CustomTextFieldPrice";
import CustomSelect from "../../../../components/common/Input/CustomSelect";
import { CURRENCIES_RATE } from "../../constants/rateCurrency";

const RatePriceForm = ({ control, watch }) => {
  return (
    <>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name={"currency"}
          label={"Moneda"}
          options={CURRENCIES_RATE}
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextFieldPrice
          control={control}
          name={"price"}
          label={"Precio"}
          currency={watch("currency")}
        />
      </Grid>
    </>
  );
};

export default RatePriceForm;
