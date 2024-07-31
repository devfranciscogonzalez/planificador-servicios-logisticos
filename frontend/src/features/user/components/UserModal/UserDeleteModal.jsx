import { useMutation } from "@tanstack/react-query";
import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import { useSnackbar } from "../../../../hooks/useSnackbar";
import { USER_SNACKBAR } from "../../constants/userSnackbar";
import { userService } from "../../services/userService";

const UserDeleteModal = ({ open, onClose, toDelete, onDelete }) => {
  const { showSnackbar } = useSnackbar();

  const deleteMutation = useMutation({
    mutationFn: (toDelete) => userService.deleteUser(toDelete),
    onError: (error) => {
      const snackbar = USER_SNACKBAR.USER_DELETE_ERROR;
      showSnackbar(error?.errors || snackbar.message, snackbar.type);
    },
    onSuccess: (data) => {
      onClose?.();
      onDelete?.();
      const snackbar = USER_SNACKBAR.USER_DELETE_SUCCESS;
      showSnackbar(data?.message || snackbar.message, snackbar.type);
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
        message="¿Está seguro que desea eliminar este usuario?"
      />
    </>
  );
};

export default UserDeleteModal;
