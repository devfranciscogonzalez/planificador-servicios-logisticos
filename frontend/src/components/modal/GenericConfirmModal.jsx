import { DialogActions, DialogContentText } from "@mui/material";
import ActionButtons from "../common/Button/ActionButton";
import ModalLayout from "../layout/ModalLayout";

const GenericConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = "Confirmar Acción",
  message = "¿Estás seguro de que quieres realizar esta acción?",
  confirmButtonText,
  cancelButtonText,
  isPending = false,
}) => (
  <ModalLayout title={title} open={open} onClose={onClose} >
    <DialogContentText>{message}</DialogContentText>
    <DialogActions sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <ActionButtons
        onAccept={onConfirm}
        onCancel={onClose}
        acceptButtonLabel={confirmButtonText}
        cancelButtonLabel={cancelButtonText}
        isPending={isPending}
      />
    </DialogActions>
  </ModalLayout>
);

export default GenericConfirmModal;
