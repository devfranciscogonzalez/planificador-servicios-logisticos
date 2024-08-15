import { Box } from "@mui/material";

const CustomTabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            py: { xs: 1, sm: 2 },
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default CustomTabPanel;
