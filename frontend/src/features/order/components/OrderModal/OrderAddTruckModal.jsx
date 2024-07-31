import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";
import CustomTextField from "../../../../components/common/Input/CustomTextField";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";
import { validationSchemasOrderTruck } from "../../utils/validationSchemasOrder";
import CustomTextFieldDisabled from "../../../../components/common/Input/CustomTextFieldDisabled";
import useAuth from "../../../auth/hooks/useAuth";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const OrderAddTruckModal = ({ open, onClose, toAdd, onAdd }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_TRUCK = {
    truck_plate: "",
    customer_service_name: user?.name || "",
  };

  const { handleSubmit, reset, control, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemasOrderTruck),
    defaultValues: DEFAULT_VALUES_TRUCK,
  });

  const addMutation = useGenericMutation({
    mutationFn: (data) => orderService.addTruckPlate(toAdd, data),
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
  console.log(watch());
  return (
    <ActionModal
      open={open}
      onClose={handleClose}
      title="Registrar Patente"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addMutation.isPending}
      submitLabel="Agregar"
      acceptButtonIcon={<LocalShippingIcon />}
    >
      <Grid xs={12}>
        <CustomTextField
          name="truck_plate"
          label="Patente del Camión"
          control={control}
          maxLength="8"
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextFieldDisabled
          name="customer_service_name"
          label="Nombre del Customer Service"
          control={control}
        />
      </Grid>
    </ActionModal>
  );
};

export default OrderAddTruckModal;
