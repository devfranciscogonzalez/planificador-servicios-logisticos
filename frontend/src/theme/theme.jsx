import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070ba",
    },
    secondary: {
      main: "#F5F5F5",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
        },
      },
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          padding: "0 !important",
        },
        actions: {
          gap: "10px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          justifyContent: "center !important",
          textAlign: "center !important",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          "& span": {
            justifyContent: "center !important",
          },
        },
      },
    },
  },
});

export default theme;
