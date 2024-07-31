import { yupResolver } from "@hookform/resolvers/yup";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useForm } from "react-hook-form";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import { SERVICE_SNACKBAR } from "../../constants/serviceSnackbar";
import useServiceType from "../../hooks/useServiceType";
import { serviceOfService } from "../../services/serviceOfService";
import { validationSchemasService } from "../../utils/validationSchemasService";
import ServiceFormFields from "../ServiceInputs/ServiceFormFields";

const ServiceAddModal = ({ open, onClose, onAdded }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_SERVICE = {
    name: "",
    description: "",
    service_type_id: "",
    user_id: user?.id || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemasService),
    defaultValues: DEFAULT_VALUES_SERVICE,
  });

  const { serviceType } = useServiceType();

  const addServiceMutation = useGenericMutation({
    mutationFn: serviceOfService.addService,
    successMessage: SERVICE_SNACKBAR.SERVICE_REGISTER_SUCCESS.message,
    errorMessage: SERVICE_SNACKBAR.SERVICE_REGISTER_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onAdded?.();
    },
  });

  const onSubmit = (data) => {
    addServiceMutation.mutate(data);
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
      title="Agregar Servicio"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addServiceMutation.isPending}
      submitLabel="Agregar"
      acceptButtonIcon={<PostAddIcon />}
    >
      <ServiceFormFields control={control} serviceType={serviceType} />
    </ActionModal>
  );
};

export default ServiceAddModal;
