import { Box } from "@mui/material";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={2} p={2} overflow={"auto"}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default CustomTabPanel;
