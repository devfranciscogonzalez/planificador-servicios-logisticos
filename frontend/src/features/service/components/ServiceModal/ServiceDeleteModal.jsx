import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { SERVICE_SNACKBAR } from "../../constants/serviceSnackbar";
import { serviceOfService } from "../../services/serviceOfService";

const ServiceDeleteModal = ({ open, onClose, toDelete, onDelete }) => {
  const deleteMutation = useGenericMutation({
    mutationFn: (serviceToDelete) =>
      serviceOfService.deleteService(serviceToDelete),
    successMessage: SERVICE_SNACKBAR.SERVICE_DELETE_SUCCESS.message,
    errorMessage: SERVICE_SNACKBAR.SERVICE_DELETE_ERROR.message,
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
        message="¿Está seguro que desea eliminar este servicio?"
      />
    </>
  );
};

export default ServiceDeleteModal;
