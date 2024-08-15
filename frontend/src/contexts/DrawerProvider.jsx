import { createContext, useState, useEffect } from "react";

export const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(() => {
    const savedState = window.localStorage.getItem("drawerOpen");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    window.localStorage.setItem("drawerOpen", JSON.stringify(drawerOpen));
  }, [drawerOpen]);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
