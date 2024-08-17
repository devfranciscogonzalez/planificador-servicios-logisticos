import { yupResolver } from "@hookform/resolvers/yup";
import EditIcon from "@mui/icons-material/Edit";
import { Box, FormControlLabel, Paper, Switch } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActionButton } from "../../../../components/common";
import ModalLayout from "../../../../components/layout/ModalLayout";
import { useSnackbar } from "../../../../hooks/useSnackbar";
import UserFormField from "../../components/UserInput/UserFormField";
import UserFormPasswordField from "../../components/UserInput/UserFormPasswordField";
import { USER_SNACKBAR } from "../../constants/userSnackbar";
import useRoles from "../../hooks/useRoles";
import { userService } from "../../services/userService";
import { userValidationSchemaWithoutPassword } from "../../utils/validationSchemasUser";

const DEFAULT_VALUES_EDIT_USER = {
  name: "",
  email: "",
  status: false,
  role_id: "",
  changePassword: false,
  password: "",
  password_confirmation: "",
};
const UserEditModal = ({ open, onClose, toEdit, onEdit }) => {
  // formulario react-hook-form
  const { handleSubmit, reset, control, setValue } = useForm({
    resolver: yupResolver(userValidationSchemaWithoutPassword),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES_EDIT_USER,
  });
  const { showSnackbar } = useSnackbar();

  // switch para mostrar/ocultar campos de contraseña
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const switchLabel = showPasswordFields
    ? "Ocultar Cambio de Contraseña"
    : "Cambiar Contraseña";

  // cargar datos del usuario a editar
  useEffect(() => {
    if (toEdit) {
      reset({
        name: toEdit.name,
        email: toEdit.email,
        role_id: toEdit.roleId,
        status: Boolean(toEdit.status),
        changePassword: false,
        password: "",
        password_confirmation: "",
      });
    }
  }, [toEdit, reset]);

  // obtener roles
  const { roles } = useRoles();

  // enviar datos del formulario para editar usuario
  const updateMutation = useMutation({
    mutationFn: (data) => userService.updateUser(toEdit.id, data),
    onError: (error) => {
      const snackbar = USER_SNACKBAR.USER_EDIT_ERROR;
      showSnackbar(error?.errors || snackbar.message, snackbar.type);
    },
    onSuccess: (data) => {
      const snackbar = USER_SNACKBAR.USER_EDIT_SUCCESS;
      showSnackbar(data?.message || snackbar.message, snackbar.type);
      onClose?.();
      onEdit?.();
    },
  });

  // enviar datos del formulario para editar contraseña
  const updatePasswordMutation = useMutation({
    mutationFn: (data) => userService.updateUserPassword(toEdit.id, data),
    onError: (error) => {
      showSnackbar(
        error?.errors || "Error en actulización de contraseña",
        "error"
      );
    },
    onSuccess: () => {
      showSnackbar("Contraseña actualizada con éxito", "success");
      onClose?.();
      onEdit?.();
    },
  });

  // verificar si el usuario ha cambiado
  const hasUserChanged = (data) => {
    const roleChanged = parseInt(data.role_id) !== toEdit.roleId;

    return (
      data.name !== toEdit.name ||
      data.email !== toEdit.email ||
      data.status !== Boolean(toEdit.status) ||
      roleChanged
    );
  };

  // enviar datos del formulario para editar usuario
  const onSubmit = (data) => {
    const { password, password_confirmation, changePassword, ...userData } =
      data;
    const passwordChanged = changePassword && password && password_confirmation;

    const userChanged = hasUserChanged(userData);

    if (passwordChanged) {
      updatePasswordMutation.mutate({
        new_password: data.password,
        new_password_confirmation: data.password_confirmation,
      });
    }

    if (userChanged) {
      updateMutation.mutate(userData);
    }

    if (!passwordChanged && !userChanged) {
      showSnackbar("No se han detectado cambios", "info");
      onClose?.();
    }
  };

  // switch para mostrar/ocultar campos de contraseña
  const handleTogglePasswordFields = (event) => {
    setValue("changePassword", event.target.checked);
    setShowPasswordFields(event.target.checked);
  };

  // la mutación está pendiente de ejecución
  const isUpdating =
    updateMutation.isPending || updatePasswordMutation.isPending;

  return (
    <ModalLayout title="Editar Usuario" open={open} onClose={onClose}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} my={1} noValidate>
        <Grid container spacing={2}>
          <UserFormField control={control} roles={roles} />
          <Grid xs={12}>
            <Paper sx={{ p: "10px" }} elevation={0}>
              <FormControlLabel
                control={
                  <Switch
                    checked={showPasswordFields}
                    onChange={handleTogglePasswordFields}
                  />
                }
                label={switchLabel}
              />
            </Paper>
          </Grid>
          {showPasswordFields && <UserFormPasswordField control={control} />}
          <Grid xs={12}>
            <ActionButton
              onCancel={onClose}
              acceptButtonLabel="Editar"
              acceptButtonIcon={<EditIcon />}
              isPending={isUpdating}
            />
          </Grid>
        </Grid>
      </Box>
    </ModalLayout>
  );
};

export default UserEditModal;
