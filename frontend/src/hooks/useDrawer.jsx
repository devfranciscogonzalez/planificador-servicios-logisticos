import { useContext } from "react";
import { DrawerContext } from "../contexts/DrawerProvider";

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer debe usarse dentro de un DrawerProvider");
  }
  return context;
};
