import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { PRODUCT_SNACKBAR } from "../../constants/productSnackbar";
import { productService } from "../../services/productService";

const ProductDeleteModal = ({ open, onClose, toDelete, onDelete }) => {
  const deleteMutation = useGenericMutation({
    mutationFn: (toDelete) => productService.deleteProduct(toDelete),
    successMessage: PRODUCT_SNACKBAR.PRODUCT_DELETE_SUCCESS.message,
    errorMessage: PRODUCT_SNACKBAR.PRODUCT_DELETE_ERROR.message,
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
      />
    </>
  );
};

export default ProductDeleteModal;
