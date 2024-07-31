import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ActionButton from "../common/Button/ActionButton";
import ModalLayout from "../layout/ModalLayout";

const ActionModal = ({
  open,
  onClose,
  title,
  children,
  onSubmit,
  isPending,
  submitLabel,
  acceptButtonIcon = <HowToRegIcon />,
}) => {
  return (
    <ModalLayout title={title} open={open} onClose={onClose}>
      <Box component="form" onSubmit={onSubmit} my={1} noValidate>
        <Grid container spacing={2}>
          {children}
          <Grid xs={12}>
            <ActionButton
              acceptButtonLabel={submitLabel}
              acceptButtonIcon={acceptButtonIcon}
              onCancel={onClose}
              isPending={isPending}
            />
          </Grid>
        </Grid>
      </Box>
    </ModalLayout>
  );
};

export default ActionModal;
