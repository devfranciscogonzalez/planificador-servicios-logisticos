import { createContext, useState } from "react";

export const SnackbarContext = createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showSnackbar = (message, severity = "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider
      value={{ ...snackbar, showSnackbar, closeSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
