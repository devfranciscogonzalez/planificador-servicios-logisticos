import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Container, Typography } from "@mui/material";
import DefaultLayout from "../../components/layout/DefaultLayout";
import CustomSnackbar from "../../components/snackbar/CustomSnackbar";
import LoginForm from "../../features/auth/components/LoginForm";
import useAuth from "../../features/auth/hooks/useAuth";
import { useSnackbar } from "../../hooks/useSnackbar";
import UserInfoAlert from "../../features/user/components/UserInfoAlert/UserInfoAlert";

const LoginPage = () => {
  const { login } = useAuth();
  const { open, message, severity, showSnackbar, closeSnackbar } =
    useSnackbar();

  const onSubmit = (data) => {
    login.mutate(data, {
      onError: (error) => {
        showSnackbar(error.message || "Error en el inicio de sesión", "error");
      },
    });
  };
  return (
    <DefaultLayout>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 4,
          marginBottom: 4,
          gap: 1,
        }}
      >
        <UserInfoAlert />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Acceder
          </Typography>
        </Box>
        <LoginForm onSubmit={onSubmit} isPending={login.isPending} />
        <CustomSnackbar
          open={open}
          setOpen={closeSnackbar}
          message={message}
          severity={severity}
        />
      </Container>
    </DefaultLayout>
  );
};

export default LoginPage;
