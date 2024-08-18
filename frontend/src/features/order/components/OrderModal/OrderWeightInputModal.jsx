import { yupResolver } from "@hookform/resolvers/yup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";
import { CustomTextFieldNumber } from "../../../../components/common";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";
import { validationSchemaWeightEntry } from "../../utils/validationSchemasOrder";

const OrderWeightInputModal = ({ open, onClose, toAdd, onAdd }) => {
  const DEFAULT_VALUES_WEIGHT_ENTRY = {
    weight_entry: "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaWeightEntry),
    defaultValues: DEFAULT_VALUES_WEIGHT_ENTRY,
  });

  const addMutation = useGenericMutation({
    mutationFn: (data) => orderService.addWeightEntry(toAdd, data),
    successMessage: ORDER_SNACKBAR.ORDER_EDIT_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_EDIT_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onAdd?.();
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data) => {
    addMutation.mutate(data);
  };

  return (
    <ActionModal
      open={open}
      onClose={handleClose}
      title="Registrar Peso de Ingreso"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addMutation.isPending}
      submitLabel="Agregar"
      acceptButtonIcon={<CheckCircleIcon />}
    >
      <Grid xs={12}>
        <CustomTextFieldNumber
          name="weight_entry"
          label="Peso del Camión (kg)"
          currency="kg"
          control={control}
        />
      </Grid>
    </ActionModal>
  );
};

export default OrderWeightInputModal;
