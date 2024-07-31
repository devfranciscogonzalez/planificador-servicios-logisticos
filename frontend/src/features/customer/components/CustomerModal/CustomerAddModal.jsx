import { yupResolver } from "@hookform/resolvers/yup";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useForm } from "react-hook-form";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import { CUSTOMER_SNACKBAR } from "../../constants/customerSnackbar";
import { customerService } from "../../services/customerService";
import { validationSchemasCustomer } from "../../utils/validationSchemasCustomer";
import CustomerFormFields from "../CustomerInputs/CustomerFormFields";

const CustomerAddModal = ({ open, onClose, onAdded }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_CUSTOMER = {
    name: "",
    description: "",
    status: false,
    logo: "",
    user_id: user?.id || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemasCustomer),
    defaultValues: DEFAULT_VALUES_CUSTOMER,
  });

  const addMutation = useGenericMutation({
    mutationFn: customerService.addCustomer,
    successMessage: CUSTOMER_SNACKBAR.CUSTOMER_REGISTER_SUCCESS.message,
    errorMessage: CUSTOMER_SNACKBAR.CUSTOMER_REGISTER_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onAdded?.();
    },
  });

  const onSubmit = (data) => {
    addMutation.mutate(data);
  };

  // Reset campos del formulario al cerrar el modal
  const handleClose = () => {
    reset();
    onClose();
  };
  return (
    <ActionModal
      open={open}
      onClose={handleClose}
      title="Registrar Cliente"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addMutation.isPending}
      submitLabel="Registrar"
      acceptButtonIcon={<SupportAgentIcon />}
    >
      <CustomerFormFields control={control} />
    </ActionModal>
  );
};

export default CustomerAddModal;
