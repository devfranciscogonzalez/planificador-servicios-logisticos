import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { AcceptButton, CustomTextField } from "../../../components/common";
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
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mt: 2,
      }}
    >
      <CustomTextField
        name="email"
        label="Correo"
        type="email"
        control={control}
        maxLength={50}
      />
      <CustomTextField
        name="password"
        label="Contraseña"
        type="password"
        autoComplete="current-password"
        maxLength={20}
        control={control}
      />
      <AcceptButton label="Ingresar" isPending={isPending}>
        Ingresar
      </AcceptButton>
    </Box>
  );
};

export default LoginForm;
