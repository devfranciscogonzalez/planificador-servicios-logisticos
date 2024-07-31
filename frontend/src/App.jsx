import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import MainApp from "./MainApp";
import { DrawerProvider } from "./contexts/DrawerProvider";
import { SnackbarProvider } from "./contexts/SnackbarProvider";
import { AuthProvider } from "./features/auth/contexts/AuthProvider";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <DrawerProvider>
          <SnackbarProvider>
            <MainApp />
          </SnackbarProvider>
        </DrawerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
