import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomDatePicker from "../../../../components/common/Input/CustomDatePicker";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";
import { validationSchemasOrder } from "../../utils/validationSchemasOrder";
import dayjs from "dayjs";
import ListAltIcon from "@mui/icons-material/ListAlt";

const OrderEditModal = ({ open, onClose, toEdit, onEdit }) => {
  const DEFAULT_VALUES_EDIT_ORDER = {
    date: null,
  };

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validationSchemasOrder),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES_EDIT_ORDER,
  });

  useEffect(() => {
    if (toEdit) {
      const formattedDate = toEdit.date
        ? dayjs(toEdit.date, "DD/MM/YYYY")
        : null;
      reset({ date: formattedDate });
    }
  }, [toEdit, reset]);

  const updateMutation = useGenericMutation({
    mutationFn: (data) => orderService.updateDate(toEdit.id, data),
    successMessage: ORDER_SNACKBAR.ORDER_EDIT_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_EDIT_ERROR_DATE.message,
    onSuccessCallback: () => {
      onClose?.();
      onEdit?.();
    },
  });

  // enviar datos del formulario para editar usuario
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      date: dayjs(data.date).format("YYYY-MM-DD HH:mm:ss"),
    };
    updateMutation.mutate(formattedData);
  };

  return (
    <ActionModal
      open={open}
      onClose={onClose}
      title="Reprogramar Orden de Servicio"
      onSubmit={handleSubmit(onSubmit)}
      isPending={updateMutation.isPending}
      submitLabel="Reprogramar"
      acceptButtonIcon={<ListAltIcon />}
    >
      <Grid xs={12}>
        <CustomDatePicker control={control} name="date" label="Fecha" />
      </Grid>
    </ActionModal>
  );
};

export default OrderEditModal;
