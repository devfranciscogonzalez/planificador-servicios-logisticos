import { Controller } from "react-hook-form";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const StatusButtonGroup = ({ name, labelOne, labelTwo, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field  }) => (
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="status buttons"
          fullWidth
        >
          <Button
            color={field.value === 1 ? "success" : "inherit"}
            onClick={() => field.onChange(1)}
            startIcon={<CheckCircleIcon />}
          >
            {labelOne}
          </Button>
          <Button
            color={field.value === 0 ? "error" : "inherit"}
            onClick={() => field.onChange(0)}
            startIcon={<CancelIcon />}
          >
            {labelTwo}
          </Button>
        </ButtonGroup>
      )}
    />
  );
};

export default StatusButtonGroup;
