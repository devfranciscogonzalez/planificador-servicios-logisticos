import { createContext, useState, useEffect } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";

export const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {

  const [drawerOpen, setDrawerOpen] = useState(
    getFromLocalStorage("drawerOpen", false)
  );

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setToLocalStorage("drawerOpen", drawerOpen);
  }, [drawerOpen]);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
