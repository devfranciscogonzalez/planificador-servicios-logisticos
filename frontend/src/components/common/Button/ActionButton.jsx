import { Box } from "@mui/material";
import AcceptButton from "./AcceptButton";
import CancelButtom from "./CancelButton";

const ActionButton = ({
  acceptButtonLabel,
  cancelButtonLabel,
  acceptButtonIcon,
  cancelButtonIcon,
  onAccept,
  onCancel,
  isPending = false,
}) => (
  <Box
    sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
  >
    <AcceptButton
      label={acceptButtonLabel}
      startIcon={acceptButtonIcon}
      onClick={onAccept}
      isPending={isPending}
      sx={{ mr: 1 }}
    />
    <CancelButtom
      label={cancelButtonLabel}
      startIcon={cancelButtonIcon}
      onClick={onCancel}
      isPending={isPending}
      sx={{ ml: 1 }}
    />
  </Box>
);

export default ActionButton;
