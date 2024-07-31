import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";

const OrderOutputModal = ({ open, onClose, toEdit, onEdit }) => {
  const updateMutation = useGenericMutation({
    mutationFn: (toEdit) => orderService.updateExitDate(toEdit),
    successMessage: ORDER_SNACKBAR.ORDER_EDIT_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_EDIT_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onEdit?.();
    },
  });

  return (
    <>
      <GenericConfirmModal
        open={open}
        onClose={onClose}
        onConfirm={() => updateMutation.mutate(toEdit)}
        title="Confirmar Salida"
        message="¿Está seguro que desea confirmar la salida del camion?"
        isPending={updateMutation.isPending}
      />
    </>
  );
};

export default OrderOutputModal;
