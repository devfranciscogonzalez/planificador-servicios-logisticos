import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import AcceptButton from "../../../components/common/Button/AcceptButton";
import CustomTextField from "../../../components/common/Input/CustomTextField";
import { loginValidationSchema } from "../utils/validationSchemasLogin";

const DEFAULT_VALUES_LOGIN = {
  email: "",
  password: "",
};

const LoginForm = ({ onSubmit, isPending }) => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: DEFAULT_VALUES_LOGIN,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <CustomTextField
        name="email"
        label="Correo"
        type="email"
        control={control}
        sx={{ mt: 2 }}
      />
      <CustomTextField
        name="password"
        label="Contraseña"
        type="password"
        autoComplete="current-password"
        control={control}
        sx={{ mt: 2 }}
      />
      <AcceptButton
        label="Ingresar"
        isPending={isPending}
        sx={{ mt: 3, mb: 2 }}
      >
        Ingresar
      </AcceptButton>
    </Box>
  );
};

export default LoginForm;
