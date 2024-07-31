import { Chip } from "@mui/material";
import { CURRENCIES_RATE_SIMBOL } from "../../constants/rateCurrency";

const getCurrencySymbol = (currency) => {
  const currencyObj = CURRENCIES_RATE_SIMBOL.find((c) => c.value === currency);
  return currencyObj ? currencyObj.simbol : "";
};

const PriceChip = ({ price, currency }) => {
  const symbol = getCurrencySymbol(currency);

  let priceLabel;
  switch (currency) {
    case "CLP":
    case "USD":
      priceLabel = `${currency} ${price}${symbol}`;
      break;
    case "EUR":
      priceLabel = `${currency} ${price}${symbol}`;
      break;
    default:
      priceLabel = `${currency} ${price}${symbol}`;
  }

  return (
    <Chip
      label={priceLabel}
      size="small"
      sx={{
        backgroundColor: "yellow",
        borderRadius: 2,
        fontWeight: "bold",
      }}
    />
  );
};

export default PriceChip;
