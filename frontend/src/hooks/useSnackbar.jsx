import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarProvider";

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      "SnackbarContext debe usarse dentro de un SnackbarProvider"
    );
  }
  return context;
};
