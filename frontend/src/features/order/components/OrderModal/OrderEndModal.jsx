import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";

const OrderEndModal = ({ open, onClose, toMove, onMove }) => {
  const updateMutation = useGenericMutation({
    mutationFn: (toEdit) => orderService.updateStatusEnd(toEdit),
    successMessage: ORDER_SNACKBAR.ORDER_EDIT_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_EDIT_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onMove?.();
    },
  });
  
  return (
    <>
      <GenericConfirmModal
        open={open}
        onClose={onClose}
        onConfirm={() => updateMutation.mutate(toMove)}
        title="Mover Order de Servicio"
        message="¿Está seguro que desea mover esta orden a las finalizadas?"
        isPending={updateMutation.isPending}
      />
    </>
  );
};

export default OrderEndModal;
