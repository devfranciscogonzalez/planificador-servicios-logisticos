import { RouterProvider } from "react-router-dom";
import CustomSnackbar from "./components/snackbar/CustomSnackbar";
import { useSnackbar } from "./hooks/useSnackbar";
import { router } from "./routes";

const MainApp = () => {
  const { open, message, severity, closeSnackbar } = useSnackbar();

  return (
    <>
      <CustomSnackbar
        open={open}
        message={message}
        severity={severity}
        setOpen={closeSnackbar}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default MainApp;
