import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import { CUSTOMER_SNACKBAR } from "../../constants/customerSnackbar";
import { customerService } from "../../services/customerService";
import useGenericMutation from "../../../../hooks/useGenericMutation";

const CustomerDeleteModal = ({
  open,
  onClose,
  toDelete,
  onDelete,
}) => {
  const deleteMutation = useGenericMutation({
    mutationFn: (customerToDelete) =>
      customerService.deleteCustomer(customerToDelete),
    successMessage: CUSTOMER_SNACKBAR.CUSTOMER_DELETE_SUCCESS.message,
    errorMessage: CUSTOMER_SNACKBAR.CUSTOMER_DELETE_ERROR.message,
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
        message="¿Está seguro que desea eliminar este cliente?"
      />
    </>
  );
};

export default CustomerDeleteModal;
