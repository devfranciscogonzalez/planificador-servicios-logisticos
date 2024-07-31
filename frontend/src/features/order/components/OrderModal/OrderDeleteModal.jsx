import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import { orderService } from "../../services/orderService";

const OrderDeleteModal = ({ open, onClose, toDelete, onDelete }) => {

  const deleteMutation = useGenericMutation({
    mutationFn: (toDelete) => orderService.deleteOrder(toDelete),
    successMessage: ORDER_SNACKBAR.ORDER_DELETE_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_DELETE_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onDelete?.();
    },
  });

  return (
    <>
      <GenericConfirmModal
        open={open}
        onClose={onClose}
        onConfirm={() => deleteMutation.mutate(toDelete)}
        title="Confirmar Eliminación"
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
        isPending={deleteMutation.isPending}
        message="¿Está seguro que desea eliminar esta orden de servicio?"
      />
    </>
  );
};

export default OrderDeleteModal;
