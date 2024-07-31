import { useMutation } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ActionModal from "../../../../components/modal/ActionModal";
import { useSnackbar } from "../../../../hooks/useSnackbar";
import { USER_SNACKBAR } from "../../constants/userSnackbar";
import useRoles from "../../hooks/useRoles";
import { userValidationSchemaWithPassword } from "../../utils/validationSchemasUser";
import UserFormField from "../UserInput/UserFormField";
import UserFormPasswordField from "../UserInput/UserFormPasswordField";

const DEFAULT_VALUES_USER = {
  name: "",
  email: "",
  status: false,
  password: "",
  password_confirmation: "",
  role_id: "",
};

const UserAddModal = ({ open, onClose, onAdded }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(userValidationSchemaWithPassword),
    defaultValues: DEFAULT_VALUES_USER,
  });
  const { showSnackbar } = useSnackbar();

  const { roles } = useRoles();

  const addMutation = useMutation({
    mutationFn: userService.register,
    onError: (error) => {
      const snackbar = USER_SNACKBAR.USER_REGISTER_ERROR;
      showSnackbar(error?.errors || snackbar.message, snackbar.type);
    },
    onSuccess: (data) => {
      const snackbar = USER_SNACKBAR.USER_REGISTER_SUCCESS;
      showSnackbar(data?.message || snackbar.message, snackbar.type);
      handleClose?.();
      onAdded?.();
    },
  });

  const onSubmit = (data) => {
    addMutation.mutate(data);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <ActionModal
      open={open}
      onClose={handleClose}
      title="Registrar Usuario"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addMutation.isPending}
      submitLabel="Registrar"
    >
      <UserFormField control={control} roles={roles} />
      <UserFormPasswordField control={control} />
    </ActionModal>
  );
};

export default UserAddModal;
