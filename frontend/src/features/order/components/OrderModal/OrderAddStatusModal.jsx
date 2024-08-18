import { yupResolver } from "@hookform/resolvers/yup";
import RecommendIcon from "@mui/icons-material/Recommend";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";
import {
  CustomTextField,
  StatusButtonGroup,
} from "../../../../components/common";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";
import { validationSchemaStatus } from "../../utils/validationSchemasOrder";

const OrderAddStatusModal = ({ open, onClose, toAdd, onAdd }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_STATUS = {
    status: null,
    comment: "",
    container: "",
    supervisor_name: user?.name || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaStatus),
    defaultValues: DEFAULT_VALUES_STATUS,
  });

  const addMutation = useGenericMutation({
    mutationFn: (data) => orderService.updateStatus(toAdd, data),
    successMessage: ORDER_SNACKBAR.ORDER_EDIT_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_EDIT_ERROR.message,
    onSuccessCallback: () => {
      handleClose?.();
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
      title="Estado Orden de Servicio"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addMutation.isPending}
      submitLabel="Agregar"
      acceptButtonIcon={<RecommendIcon />}
    >
      <Grid xs={12}>
        <StatusButtonGroup
          name="status"
          labelOne="Confirmar"
          labelTwo="Rechazar"
          control={control}
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextField
          name="comment"
          label="Comentario (opcional)"
          maxLength={500}
          control={control}
          type="textarea"
          rows={3}
          multiline
        />
      </Grid>
      <Grid xs={12}>
        <CustomTextField
          name="container"
          label="Contenedor (opcional)"
          control={control}
          type="text"
          maxLength={8}
        />
      </Grid>
    </ActionModal>
  );
};

export default OrderAddStatusModal;
